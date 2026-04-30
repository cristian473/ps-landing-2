"use client";

import { motion } from "framer-motion";

/**
 * Casos en curso. Estos no son clientes implementados todavía — son
 * cotizaciones reales (David, Jorgelina, Walter, Facundo, Jorge) que
 * arrancaron en las últimas semanas. La sección dice eso explícitamente
 * y los cards llevan badge "En cotización" o "En diseño" para no
 * pretender lo que no es. Cuando alguno entre a producción, se mueve a
 * una banda separada de "Clientes operando" con quote autorizado.
 */
const projectsInProgress = [
	{
		id: 1,
		shortName: "David",
		industry: "Imprenta",
		location: "Mendoza",
		problem:
			"Antes: pedidos en planillas, sin trazabilidad de proveedores ni cuentas corrientes.",
		building:
			"Construyendo: gestión multi-sucursal con catálogo, tesorería e IA por WhatsApp.",
		statusLabel: "Cotización aceptada",
		icon: "print",
		gradient: "from-amber-500/30 via-orange-700/20 to-navy-dark",
	},
	{
		id: 2,
		shortName: "Jorgelina",
		industry: "Estudio Contable",
		location: "Buenos Aires",
		problem:
			"Antes: caja, honorarios mensuales y dinero en tránsito mezclados en planillas.",
		building:
			"Construyendo: balance unificado con remitos no fiscales y separación de fondos del estudio.",
		statusLabel: "Cotización aceptada",
		icon: "calculate",
		gradient: "from-cyan-500/30 via-sky-700/20 to-navy-dark",
	},
	{
		id: 3,
		shortName: "Walter",
		industry: "Distribuidora",
		location: "Corrientes",
		problem:
			"Antes: pedidos por WhatsApp dispersos, sin portal B2B ni control de stock.",
		building:
			"Construyendo: portal B2B con catálogo, autoservicio de pedidos y stock en tiempo real.",
		statusLabel: "En diseño",
		icon: "local_shipping",
		gradient: "from-sky-500/30 via-blue-700/20 to-navy-dark",
	},
	{
		id: 4,
		shortName: "Facundo",
		industry: "ERP a medida",
		location: "Buenos Aires",
		problem:
			"Antes: operación distribuida en herramientas que no se hablan entre sí.",
		building:
			"Construyendo: ERP completo a medida con módulos integrados y dashboards ejecutivos.",
		statusLabel: "En cotización",
		icon: "workspaces",
		gradient: "from-fuchsia-500/30 via-purple-700/20 to-navy-dark",
	},
	{
		id: 5,
		shortName: "Jorge",
		industry: "Librería",
		location: "Misiones",
		problem:
			"Antes: ~20.000 artículos en un sistema gratuito que no soporta facturación con AFIP.",
		building:
			"Construyendo: POS con integración AFIP, scanner, alertas de stock bajo y exportación contable.",
		statusLabel: "En cotización",
		icon: "menu_book",
		gradient: "from-emerald-500/30 via-teal-700/20 to-navy-dark",
	},
] as const;

export default function CaseStudiesCards() {
	return (
		<section className="bg-navy-dark py-24" id="casos">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-10 text-center"
				>
					<span className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
						Proyectos en curso
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Lo que estamos construyendo ahora
					</h2>
					<p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
						Estos son proyectos reales que arrancamos en las últimas semanas.
						Compartimos qué problema vinieron a resolver — los resultados los
						verás cuando estén en producción.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
				>
					{projectsInProgress.map((project) => (
						<a
							key={project.id}
							href="#contacto"
							onClick={() =>
								window.trackCaseStudyView?.(`${project.shortName}-${project.industry}`)
							}
							className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-primary/40 transition-colors"
						>
							{/* Gradient + grid pattern */}
							<div
								className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
							/>
							<div
								className="absolute inset-0 opacity-[0.06]"
								style={{
									backgroundImage:
										"linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
									backgroundSize: "28px 28px",
								}}
							/>
							<div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

							{/* Content */}
							<div className="relative p-5 sm:p-6 flex flex-col h-full min-h-[18rem]">
								{/* Status badge */}
								<div className="flex items-center justify-between mb-4">
									<span className="px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm">
										{project.statusLabel}
									</span>
									<span
										className="material-icons text-white/30 text-2xl"
										aria-hidden="true"
									>
										{project.icon}
									</span>
								</div>

								<h3 className="text-lg sm:text-xl font-bold text-white mb-1">
									{project.shortName} — {project.industry}
								</h3>
								<p className="text-gray-400 text-xs sm:text-sm mb-4">
									{project.location}
								</p>

								<div className="space-y-2 text-sm text-gray-300 leading-relaxed mt-auto">
									<p>{project.problem}</p>
									<p className="text-white/90">{project.building}</p>
								</div>
							</div>
						</a>
					))}
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-center text-gray-500 text-xs sm:text-sm mt-8 max-w-xl mx-auto"
				>
					¿Tu situación se parece a alguno de estos? La consultoría inicial es
					gratuita.
				</motion.p>
			</div>
		</section>
	);
}
