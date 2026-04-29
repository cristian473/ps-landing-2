import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
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
		trackFormSubmit?: (formName: string, formData?: Record<string, string>) => void;
		trackCTAClick?: (ctaName: string, ctaLocation?: string) => void;
		trackCaseStudyView?: (caseStudyName: string) => void;
	}
}

const RECAPTCHA_SITE_KEY = "6Lc7qIssAAAAAPyUuyTGPS-WJ9DyCqkiJa5R4CXZ";

const TEAM_SIZE_OPTIONS = [
	{ value: "1-5", label: "1 a 5 personas" },
	{ value: "5-15", label: "5 a 15 personas" },
	{ value: "15-50", label: "15 a 50 personas" },
	{ value: "50+", label: "Más de 50 personas" },
] as const;

const TIMELINE_OPTIONS = [
	{ value: "1-3m", label: "Ya, en los próximos 1-3 meses" },
	{ value: "3-6m", label: "En 3 a 6 meses" },
	{ value: "6m+", label: "Más de 6 meses" },
	{ value: "exploring", label: "Solo estoy explorando" },
] as const;

const BUDGET_OPTIONS = [
	{ value: "<3k", label: "Menos de USD 3.000" },
	{ value: "4-8k", label: "USD 4.000 – 8.000" },
	{ value: "8-20k", label: "USD 8.000 – 20.000" },
	{ value: "20k+", label: "Más de USD 20.000" },
	{ value: "not_sure", label: "Todavía no tengo claro" },
] as const;

const PAIN_OPTIONS = [
	{ value: "sistema_no_se_adapta", label: "Mi sistema actual no se adapta más" },
	{ value: "planillas", label: "Estoy con planillas y necesito profesionalizar" },
	{ value: "multiple_saas", label: "Pago varios SaaS y no se hablan entre sí" },
	{ value: "desde_cero", label: "Quiero un sistema único de cero" },
	{ value: "otro", label: "Otro" },
] as const;

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [teamSize, setTeamSize] = useState("");
	const [timeline, setTimeline] = useState("");
	const [budget, setBudget] = useState("");
	const [pain, setPain] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState<FormStatus>("idle");
	const [errorMsg, setErrorMsg] = useState("");

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("submitting");
		setErrorMsg("");

		try {
			// Get reCAPTCHA v3 token
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
					teamSize: teamSize.trim(),
					timeline: timeline.trim(),
					budget: budget.trim(),
					pain: pain.trim(),
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
			setTeamSize("");
			setTimeline("");
			setBudget("");
			setPain("");
			setMessage("");
			window.trackMetaLead?.(eventId);
			window.trackFormSubmit?.("contact", {
				country: country.trim(),
				city: city.trim(),
				team_size: teamSize.trim(),
				timeline: timeline.trim(),
				budget: budget.trim(),
				pain: pain.trim(),
			});
			window.history.pushState(null, "", "/?contact=true");
		} catch {
			setStatus("error");
			setErrorMsg("Error de conexión. Por favor intentá de nuevo.");
		}
	};

	return (
		<section className="relative bg-black pt-24 pb-12" id="contacto">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
				{/* Contact Info */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-xl"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
						¿Tu operación creció más rápido que el sistema que la gestiona?
					</h2>
					<p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed">
						La primera consultoría es gratuita. Analizamos tu situación y te
						decimos honestamente si el software es la solución — y qué
						implicaría construirlo.
					</p>

					<div className="flex flex-col gap-4">
						<div className="flex items-start gap-3">
							<div className="w-10 h-10 rounded-full bg-navy-surface flex items-center justify-center border border-white/10 shrink-0 mt-0.5">
								<span className="material-icons text-primary">check</span>
							</div>
							<div>
								<h4 className="font-semibold text-white text-base">
									Diagnóstico honesto
								</h4>
								<p className="text-sm text-gray-500 leading-relaxed">
									Si no es el momento o no es el problema correcto, te lo
									decimos. Sin vender por vender.
								</p>
							</div>
						</div>

						<div className="flex items-start gap-3">
							<div className="w-10 h-10 rounded-full bg-navy-surface flex items-center justify-center border border-white/10 shrink-0 mt-0.5">
								<span className="material-icons text-primary">check</span>
							</div>
							<div>
								<h4 className="font-semibold text-white text-base">
									Presupuesto claro
								</h4>
								<p className="text-sm text-gray-500 leading-relaxed">
									Sin costos ocultos, sin letra chica, sin sorpresas al final.
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
								Hablemos de tu proyecto
							</h3>

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
										htmlFor="timeline"
										className="block text-sm font-medium text-gray-400 mb-1.5"
									>
										¿Cuándo necesitás resolver esto?
									</label>
									<select
										id="timeline"
										name="timeline"
										required
										value={timeline}
										onChange={(e) => setTimeline(e.target.value)}
										className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
									>
										<option value="" disabled>
											Seleccioná un plazo
										</option>
										{TIMELINE_OPTIONS.map((option) => (
											<option key={option.value} value={option.value}>
												{option.label}
											</option>
										))}
									</select>
								</div>
							</div>

							<div>
								<label
									htmlFor="budget"
									className="block text-sm font-medium text-gray-400 mb-1.5"
								>
									Inversión que estás considerando
								</label>
								<select
									id="budget"
									name="budget"
									required
									value={budget}
									onChange={(e) => setBudget(e.target.value)}
									className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
								>
									<option value="" disabled>
										Seleccioná un rango
									</option>
									{BUDGET_OPTIONS.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							</div>

							<div>
								<label
									htmlFor="pain"
									className="block text-sm font-medium text-gray-400 mb-1.5"
								>
									¿Qué problema te urge resolver?
								</label>
								<select
									id="pain"
									name="pain"
									required
									value={pain}
									onChange={(e) => setPain(e.target.value)}
									className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
								>
									<option value="" disabled>
										Seleccioná el principal
									</option>
									{PAIN_OPTIONS.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							</div>

							<div>
								<label
									htmlFor="process"
									className="block text-sm font-medium text-gray-400 mb-1.5"
								>
									Detalles del proyecto{" "}
									<span className="text-gray-600 font-normal">(opcional)</span>
								</label>
								<textarea
									id="process"
									name="message"
									rows={3}
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									placeholder="Opcional. Contanos qué planillas o sistemas usás hoy o qué te traba puntualmente."
									className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
								/>
							</div>

							{status === "error" && (
								<div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm">
									{errorMsg}
								</div>
							)}

							<button
								type="submit"
								disabled={status === "submitting"}
								className="w-full bg-primary text-navy-dark font-bold text-base sm:text-lg py-3 rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 transform active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
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
									"Solicitar consultoría gratuita"
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
