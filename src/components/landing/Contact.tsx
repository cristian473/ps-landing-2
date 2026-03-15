import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

declare global {
	interface Window {
		grecaptcha: {
			ready: (cb: () => void) => void;
			execute: (
				siteKey: string,
				options: { action: string }
			) => Promise<string>;
		};
	}
}

const RECAPTCHA_SITE_KEY = "6Lc7qIssAAAAAPyUuyTGPS-WJ9DyCqkiJa5R4CXZ";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
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

			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: name.trim(),
					email: email.trim(),
					phone: phone.trim(),
					message: message.trim(),
					recaptchaToken,
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
			setMessage("");
		} catch {
			setStatus("error");
			setErrorMsg("Error de conexión. Por favor intentá de nuevo.");
		}
	};

	return (
		<section className="relative bg-black pt-24 pb-12" id="contacto">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				{/* Contact Info */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
						¿Tu operación creció más rápido que el sistema que la gestiona?
					</h2>
					<p className="text-xl text-gray-400 mb-8">
						La primera consultoría es gratuita. Analizamos tu situación y te
						decimos honestamente si el software es la solución — y qué
						implicaría construirlo.
					</p>

					<div className="flex flex-col gap-6">
						<div className="flex items-center gap-4">
							<div className="w-12 h-12 rounded-full bg-navy-surface flex items-center justify-center border border-white/10">
								<span className="material-icons text-primary">check</span>
							</div>
							<div>
								<h4 className="font-bold text-white">Diagnóstico honesto</h4>
								<p className="text-sm text-gray-500">
									Si no es el momento o no es el problema correcto, te lo
									decimos. Sin vender por vender.
								</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="w-12 h-12 rounded-full bg-navy-surface flex items-center justify-center border border-white/10">
								<span className="material-icons text-primary">check</span>
							</div>
							<div>
								<h4 className="font-bold text-white">Presupuesto claro</h4>
								<p className="text-sm text-gray-500">
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
					className="bg-navy-surface p-8 rounded-2xl border border-white/10 shadow-2xl relative"
				>
					<div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 blur-2xl rounded-full pointer-events-none" />

					{status === "success" ? (
						<div className="text-center py-12">
							<div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
								<span className="material-icons text-green-400 text-3xl">
									check_circle
								</span>
							</div>
							<h3 className="text-2xl font-bold text-white mb-3">
								¡Mensaje enviado!
							</h3>
							<p className="text-gray-400 mb-2">
								Te enviamos un email de confirmación a{" "}
								<strong className="text-white">{email || "tu correo"}</strong>.
							</p>
							<p className="text-gray-400 mb-8">
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
						<form className="space-y-6" onSubmit={handleSubmit}>
							<h3 className="text-2xl font-bold mb-6 text-white">
								Hablemos de tu proyecto
							</h3>

							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-400 mb-2"
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
									className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-400 mb-2"
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
									className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
								/>
							</div>

							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium text-gray-400 mb-2"
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
									className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
								/>
							</div>

							<div>
								<label
									htmlFor="process"
									className="block text-sm font-medium text-gray-400 mb-2"
								>
									¿Qué proceso necesitás automatizar o mejorar?
								</label>
								<textarea
									id="process"
									name="message"
									rows={4}
									required
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									placeholder="Ej. Necesito un sistema para gestionar inventario y conectar con mi tienda online..."
									className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
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
								className="w-full bg-primary text-navy-dark font-bold text-lg py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 transform active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
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

							<p className="text-xs text-center text-gray-500 mt-4">
								Sin compromisos. Respondemos en menos de 24hs.
							</p>
							<p className="text-[10px] text-center text-gray-600 mt-2">
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
