import { motion } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { CONTACT_COUNTRY_OPTIONS } from "../../constants/contactCountries";

declare global {
	interface Window {
		grecaptcha: {
			ready: (cb: () => void) => void;
			execute: (
				siteKey: string,
				options: { action: string }
			) => Promise<string>;
		};
		generateEventId?: (prefix?: string) => string;
		trackMetaLead?: (eventId: string) => void;
		trackMetaCustomLead?: (eventId: string) => void;
		trackFormSubmit?: (formName: string, formData?: Record<string, string>) => void;
		trackCTAClick?: (ctaName: string, ctaLocation?: string) => void;
		trackCaseStudyView?: (caseStudyName: string) => void;
		trackFormStep?: (
			action: "view" | "complete" | "error" | "back",
			step: number,
			formName?: string,
			extra?: Record<string, unknown>
		) => void;
	}
	interface WindowEventMap {
		"contact:prefill": CustomEvent<{ interest?: string }>;
	}
}

const RECAPTCHA_SITE_KEY = "6Lc7qIssAAAAAPyUuyTGPS-WJ9DyCqkiJa5R4CXZ";

const TEAM_SIZE_OPTIONS = [
	{ value: "1-5", label: "1 a 5 personas" },
	{ value: "5-15", label: "5 a 15 personas" },
	{ value: "15-50", label: "15 a 50 personas" },
	{ value: "50+", label: "Más de 50 personas" },
] as const;

const INTEREST_OPTIONS = [
	{ value: "proyecto_cerrado", label: "Proyecto a medida (cotización cerrada)" },
	{ value: "pack_horas", label: "Pack mensual de horas de desarrollo" },
	{ value: "erp_saas", label: "Puro ERP (sistema SaaS)" },
	{ value: "consulta_general", label: "Consulta general" },
] as const;

type FormStatus = "idle" | "submitting" | "success" | "error";
type Step = 1 | 2;
const TOTAL_STEPS = 2;
const STEP_TITLES: Record<Step, string> = {
	1: "Tu contacto",
	2: "Tu operación",
};

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [teamSize, setTeamSize] = useState("");
	const [interest, setInterest] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState<FormStatus>("idle");
	const [errorMsg, setErrorMsg] = useState("");
	const submittingRef = useRef(false);
	const lastStepAdvanceAtRef = useRef(0);
	const nameInputRef = useRef<HTMLInputElement | null>(null);
	// Wizard state — sólo se usa en mobile (md:hidden), en desktop el form
	// se renderiza completo (md:block sobre cada grupo). En mobile el submit del
	// paso 2 dispara el fetch.
	const [step, setStep] = useState<Step>(1);

	// Valida los campos del paso actual antes de avanzar. Devuelve mensaje
	// de error o null si todo OK.
	function validateStep(s: Step): string | null {
		if (s === 1) {
			if (!name.trim()) return "Ingresá tu nombre";
			if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
				return "Ingresá un email válido";
			if (!phone.trim()) return "Ingresá tu teléfono";
			if (!city.trim()) return "Ingresá tu ciudad";
			if (!country) return "Seleccioná tu país";
			return null;
		}
		if (s === 2) {
			if (!teamSize) return "Seleccioná el tamaño de tu equipo";
			if (!interest) return "Seleccioná qué te interesa";
			return null;
		}
		return null;
	}

	// Cada vez que cambia el step en mobile, registramos form_step_view así
	// vemos en GA hasta qué paso llega cada visitante. En desktop el wizard
	// no aplica (todos los grupos son visibles).
	useEffect(() => {
		if (typeof window === "undefined") return;
		const isMobile = window.matchMedia("(max-width: 767px)").matches;
		if (!isMobile) return;
		window.trackFormStep?.("view", step);
	}, [step]);

	useEffect(() => {
		const handlePrefill = (event: WindowEventMap["contact:prefill"]) => {
			if (event.detail?.interest) {
				setInterest(event.detail.interest);
			}

			setTimeout(() => {
				nameInputRef.current?.focus({ preventScroll: true });
			}, 50);
		};

		window.addEventListener("contact:prefill", handlePrefill);
		return () => window.removeEventListener("contact:prefill", handlePrefill);
	}, []);

	function goNext() {
		const err = validateStep(step);
		if (err) {
			setErrorMsg(err);
			setStatus("error");
			window.trackFormStep?.("error", step, "contact", { error: err });
			return;
		}
		setErrorMsg("");
		setStatus("idle");
		window.trackFormStep?.("complete", step);
		lastStepAdvanceAtRef.current = Date.now();
		setStep((step + 1) as Step);
	}

	function goBack() {
		setErrorMsg("");
		setStatus("idle");
		window.trackFormStep?.("back", step);
		setStep(Math.max(1, step - 1) as Step);
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (submittingRef.current || status === "submitting") return;

		// En mobile el submit del form sólo cuenta cuando estamos en el último
		// paso. En desktop step queda en 1 pero todos los grupos están visibles
		// y el HTML5 `required` cubre la validación.
		const isMobile =
			typeof window !== "undefined" &&
			window.matchMedia("(max-width: 767px)").matches;
		if (isMobile && step < TOTAL_STEPS) {
			goNext();
			return;
		}

		if (isMobile && Date.now() - lastStepAdvanceAtRef.current < 400) {
			return;
		}

		// Validamos manualmente toda la cadena de pasos en desktop también, así
		// los mensajes son consistentes con los del wizard mobile.
		for (const s of [1, 2] as Step[]) {
			const err = validateStep(s);
			if (err) {
				setErrorMsg(err);
				setStatus("error");
				return;
			}
		}

		submittingRef.current = true;
		setStatus("submitting");
		setErrorMsg("");

		try {
			let recaptchaToken = "";
			try {
				recaptchaToken = await new Promise<string>((resolve, reject) => {
					if (!window.grecaptcha) {
						reject(new Error("reCAPTCHA not loaded"));
						return;
					}
					window.grecaptcha.ready(() => {
						window.grecaptcha
							.execute(RECAPTCHA_SITE_KEY, { action: "contact" })
							.then(resolve)
							.catch(reject);
					});
				});
			} catch {
				setStatus("error");
				setErrorMsg(
					"Error de verificación de seguridad. Recargá la página e intentá de nuevo."
				);
				return;
			}

			const eventId =
				window.generateEventId?.("contact-lead") ||
				`contact-lead-${Date.now()}`;

			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: name.trim(),
					email: email.trim(),
					phone: phone.trim(),
					city: city.trim(),
					country: country.trim(),
					interest: interest.trim(),
					teamSize: teamSize.trim(),
					message: message.trim(),
					recaptchaToken,
					eventId,
					eventSourceUrl: window.location.href,
				}),
			});

			const data = await res.json();

			if (!res.ok || !data.success) {
				setStatus("error");
				setErrorMsg(data.error || "Hubo un error al enviar el mensaje.");
				return;
			}

			setStatus("success");
			setName("");
			setEmail("");
			setPhone("");
			setCity("");
			setCountry("");
			setInterest("");
			setTeamSize("");
			setMessage("");
			setStep(1);
			window.trackMetaLead?.(eventId);
			// Custom event para Estructura 3 (Ventas + custom event en lugar de
			// Lead estándar). Mismo eventId — Meta deduplica por (event_name, id).
			window.trackMetaCustomLead?.(eventId);
			window.trackFormSubmit?.("contact", {
				country: country.trim(),
				city: city.trim(),
				interest: interest.trim(),
				team_size: teamSize.trim(),
			});
			window.history.pushState(null, "", "/?contact=true");
		} catch {
			setStatus("error");
			setErrorMsg("Error de conexión. Por favor intentá de nuevo.");
		} finally {
			submittingRef.current = false;
		}
	};

	// En mobile sólo el grupo del step activo es visible. En md+ siempre.
	const stepClass = (s: Step) =>
		step === s ? "block" : "hidden md:block";

	return (
		<section className="relative bg-black pt-24 pb-12" id="contacto">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
				{/* Contact Info */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="hidden lg:block max-w-xl"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
						¿Tu negocio creció más rápido que el software que lo sostiene?
					</h2>
					<p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed">
						La primera llamada es gratuita. Vemos qué te conviene: un proyecto cerrado, pack mensual de horas o nuestro ERP listo.
					</p>

					<div className="flex flex-col gap-4">
						<div className="flex items-start gap-3">
							<div className="w-10 h-10 rounded-full bg-navy-surface flex items-center justify-center border border-white/10 shrink-0 mt-0.5">
								<span className="material-icons text-primary">check</span>
							</div>
							<div>
								<h4 className="font-semibold text-white text-base">
									Camino recomendado
								</h4>
								<p className="text-sm text-gray-500 leading-relaxed">
									Te decimos si conviene sistema de gestión, desarrollo a medida o
									simplemente seguir con mejoras mensuales.
								</p>
							</div>
						</div>

						<div className="flex items-start gap-3">
							<div className="w-10 h-10 rounded-full bg-navy-surface flex items-center justify-center border border-white/10 shrink-0 mt-0.5">
								<span className="material-icons text-primary">check</span>
							</div>
							<div>
								<h4 className="font-semibold text-white text-base">
									Implementación clara
								</h4>
								<p className="text-sm text-gray-500 leading-relaxed">
									Alcance, mantenimiento y próximos pasos definidos desde el
									principio.
								</p>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Contact Form */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="bg-navy-surface p-5 sm:p-6 rounded-2xl border border-white/10 shadow-2xl relative"
				>
					<div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 blur-2xl rounded-full pointer-events-none" />

					{status === "success" ? (
						<div className="text-center py-8">
							<div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
								<span className="material-icons text-green-400 text-3xl">
									check_circle
								</span>
							</div>
							<h3 className="text-2xl font-bold text-white mb-2">
								¡Mensaje enviado!
							</h3>
							<p className="text-gray-400 mb-2">
								Te enviamos un email de confirmación a{" "}
								<strong className="text-white">{email || "tu correo"}</strong>.
							</p>
							<p className="text-gray-400 mb-6">
								Nos comunicamos en menos de 24hs.
							</p>
							<button
								type="button"
								onClick={() => setStatus("idle")}
								className="text-primary hover:text-primary/80 font-medium transition-colors"
							>
								Enviar otra consulta
							</button>
						</div>
					) : (
						<form className="space-y-4" onSubmit={handleSubmit}>
							<h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
								Contanos qué necesitás
							</h3>
							<p className="text-sm text-gray-400 -mt-1 mb-2">
								Dejanos tus datos, elegí qué te interesa y explicanos brevemente
								tu operación o el problema que querés resolver.
							</p>

							{/* Wizard progress — mobile only */}
							<div className="md:hidden">
								<div className="flex items-center justify-between mb-2">
									<span className="text-xs font-semibold uppercase tracking-wider text-primary">
										Paso {step} de {TOTAL_STEPS}
									</span>
									<span className="text-xs text-gray-500">
										{STEP_TITLES[step]}
									</span>
								</div>
								<div
									role="progressbar"
									aria-valuemin={1}
									aria-valuemax={TOTAL_STEPS}
									aria-valuenow={step}
									className="h-1 w-full bg-white/10 rounded-full overflow-hidden"
								>
									<div
										className="h-full bg-primary transition-all duration-300"
										style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
									/>
								</div>
							</div>

							<div className={`relative transition-all duration-300 md:min-h-0 ${step === 1 ? "min-h-[26rem] sm:min-h-[20rem]" : "min-h-[18rem] sm:min-h-[14rem]"}`}>
								{/* Paso 1 — contacto */}
								<div className={`${stepClass(1)} space-y-4`}>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-400 mb-1.5"
										>
											Tu nombre
										</label>
										<input
											type="text"
											id="name"
											name="name"
											ref={nameInputRef}
											autoComplete="name"
											required
											value={name}
											onChange={(e) => setName(e.target.value)}
											placeholder="Ej. Juan Pérez"
											className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-400 mb-1.5"
										>
											Tu email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											autoComplete="email"
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="juan@empresa.com"
											className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
										/>
									</div>

									<div>
										<label
											htmlFor="phone"
											className="block text-sm font-medium text-gray-400 mb-1.5"
										>
											Tu teléfono
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											autoComplete="tel"
											required
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
											placeholder="Ej. +54 11 1234-5678"
											className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
										/>
									</div>

									<div>
										<label
											htmlFor="city"
											className="block text-sm font-medium text-gray-400 mb-1.5"
										>
											Tu ciudad
										</label>
										<input
											type="text"
											id="city"
											name="city"
											autoComplete="address-level2"
											required
											value={city}
											onChange={(e) => setCity(e.target.value)}
											placeholder="Ej. Buenos Aires"
											className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="country"
										className="block text-sm font-medium text-gray-400 mb-1.5"
									>
										Tu país
									</label>
									<select
										id="country"
										name="country"
										autoComplete="country"
										required
										value={country}
										onChange={(e) => setCountry(e.target.value)}
										className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
									>
										<option value="" disabled>
											Seleccioná tu país
										</option>
										{CONTACT_COUNTRY_OPTIONS.map((option) => (
											<option key={option.code} value={option.code}>
												{option.label}
											</option>
										))}
									</select>
								</div>
								</div>

								{/* Paso 2 — operación */}
								<div className={`${stepClass(2)} space-y-4`}>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
									<div>
										<label
											htmlFor="teamSize"
											className="block text-sm font-medium text-gray-400 mb-1.5"
										>
											Tamaño de tu equipo
										</label>
										<select
											id="teamSize"
											name="teamSize"
											required
											value={teamSize}
											onChange={(e) => setTeamSize(e.target.value)}
											className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
										>
											<option value="" disabled>
												Seleccioná un rango
											</option>
											{TEAM_SIZE_OPTIONS.map((option) => (
												<option key={option.value} value={option.value}>
													{option.label}
												</option>
											))}
										</select>
									</div>

									<div>
										<label
											htmlFor="interest"
											className="block text-sm font-medium text-gray-400 mb-1.5"
										>
											¿Qué te interesa?
										</label>
										<select
											id="interest"
											name="interest"
											required
											value={interest}
											onChange={(e) => setInterest(e.target.value)}
											className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
										>
											<option value="" disabled>
												Seleccioná una opción
											</option>
											{INTEREST_OPTIONS.map((option) => (
												<option key={option.value} value={option.value}>
													{option.label}
												</option>
											))}
										</select>
									</div>
								</div>

								<div>
									<label
										htmlFor="process"
										className="block text-sm font-medium text-gray-400 mb-1.5"
									>
										Contanos tu negocio o el problema que querés resolver{" "}
										<span className="text-gray-600 font-normal">(opcional)</span>
									</label>
									<textarea
										id="process"
										name="message"
										rows={4}
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										placeholder="Ej. Vendemos por WhatsApp y Excel, tenemos stock en dos depósitos y necesitamos ordenar pedidos, caja y seguimiento comercial."
										className="min-h-[120px] w-full resize-y bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all sm:min-h-[104px]"
									/>
								</div>
								</div>
							</div>

							{status === "error" && errorMsg && (
								<div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm">
									{errorMsg}
								</div>
							)}

							{/* Mobile wizard nav */}
							<div className="md:hidden flex items-center gap-3">
								{step > 1 && (
									<button
										type="button"
										onClick={goBack}
										className="px-4 py-3 rounded-lg border border-white/15 text-white/80 font-medium hover:bg-white/5 transition-colors"
									>
										<span className="material-icons text-base align-middle mr-1">
											arrow_back
										</span>
										Atrás
									</button>
								)}
								{step < TOTAL_STEPS ? (
									<button
										type="button"
										onClick={(e) => {
											e.preventDefault();
											goNext();
										}}
										className="flex-1 bg-primary text-navy-dark font-bold py-3 rounded-lg active:scale-95 transition-transform"
									>
										Siguiente
										<span className="material-icons text-base align-middle ml-1">
											arrow_forward
										</span>
									</button>
								) : (
									<button
										type="submit"
										disabled={status === "submitting"}
										className="flex-1 bg-primary text-navy-dark font-bold py-3 rounded-lg active:scale-95 transition-transform shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed"
									>
										{status === "submitting" ? "Enviando…" : "Enviar consulta"}
									</button>
								)}
							</div>

							{/* Desktop submit (single page) */}
							<button
								type="submit"
								disabled={status === "submitting"}
								className="hidden md:block w-full bg-primary text-navy-dark font-bold text-base sm:text-lg py-3 rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 transform active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
							>
								{status === "submitting" ? (
									<span className="flex items-center justify-center gap-2">
										<svg
											className="animate-spin h-5 w-5"
											viewBox="0 0 24 24"
											fill="none"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											/>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
											/>
										</svg>
										Enviando...
									</span>
								) : (
									"Enviar consulta"
								)}
							</button>

							<p className="text-[11px] text-center text-gray-500 mt-2">
								Sin compromisos. Respondemos en menos de 24hs.
							</p>
							<p className="text-[10px] text-center text-gray-600 leading-relaxed">
								Protegido por reCAPTCHA de Google.{" "}
								<a
									href="https://policies.google.com/privacy"
									target="_blank"
									rel="noopener noreferrer"
									className="underline hover:text-gray-400"
								>
									Privacidad
								</a>
								{" y "}
								<a
									href="https://policies.google.com/terms"
									target="_blank"
									rel="noopener noreferrer"
									className="underline hover:text-gray-400"
								>
									Términos
								</a>
								.
							</p>
						</form>
					)}
				</motion.div>
			</div>
		</section>
	);
}
