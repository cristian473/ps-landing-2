"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const caseStudies = [
	{
		id: 1,
		title: "Distribuidora B2B",
		subtitle: "300 pedidos/semana procesados sin tocar Excel",
		metric: "300/sem",
		tag: "Distribución",
		href: "/casos/distribuidora-b2b",
		icon: "local_shipping",
		gradient: "from-sky-500/30 via-blue-700/20 to-navy-dark",
	},
	{
		id: 2,
		title: "Inmobiliaria",
		subtitle: "400 propiedades centralizadas que antes vivían en 3 sistemas",
		metric: "400",
		tag: "Real Estate",
		href: "/casos/inmobiliaria",
		icon: "apartment",
		gradient: "from-emerald-500/30 via-teal-700/20 to-navy-dark",
	},
	{
		id: 3,
		title: "Clínica Odontológica",
		subtitle: "3 sedes que ahora ven los mismos turnos en tiempo real",
		metric: "3 sedes",
		tag: "Salud",
		href: "/casos/odontologia",
		icon: "medical_services",
		gradient: "from-cyan-500/30 via-sky-700/20 to-navy-dark",
	},
	{
		id: 4,
		title: "Mayorista",
		subtitle: "200 clientes hacen sus pedidos solos, sin pasar por ventas",
		metric: "200",
		tag: "Comercio",
		href: "/casos/mayorista",
		icon: "shopping_cart",
		gradient: "from-amber-500/30 via-orange-700/20 to-navy-dark",
	},
	{
		id: 5,
		title: "Academia",
		subtitle: "1.200 alumnos con pagos y cursadas en piloto automático",
		metric: "1.2K",
		tag: "Educación",
		href: "/casos/academia",
		icon: "school",
		gradient: "from-fuchsia-500/30 via-purple-700/20 to-navy-dark",
	},
	{
		id: 6,
		title: "Corralón",
		subtitle: "Presupuestos al instante desde el mostrador, sin volver a la PC",
		metric: "0 espera",
		tag: "Materiales",
		href: "/casos/corralon",
		icon: "construction",
		gradient: "from-rose-500/30 via-red-700/20 to-navy-dark",
	},
];

export default function CaseStudiesCards() {
	const [expandedCard, setExpandedCard] = useState(3);

	return (
		<section className="bg-navy-dark py-24" id="casos">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center"
				>
					<span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
						Resultados reales
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Lo que lograron empresas como la tuya
					</h2>
					<div className="h-1 w-20 bg-primary rounded mx-auto" />
				</motion.div>

				{/* Cards Container */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="relative"
				>
					{/* Desktop View */}
					<div className="hidden lg:flex w-full items-center justify-center gap-1.5 h-[28rem] overflow-hidden">
						{caseStudies.map((caseStudy, idx) => (
							<a
								key={caseStudy.id}
								href={caseStudy.href}
								className="relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out group flex-shrink-0 border border-white/10"
								style={{
									width: idx + 1 === expandedCard ? "35%" : "60px",
									height: "100%",
									flexGrow: idx + 1 === expandedCard ? 1 : 0,
								}}
								onMouseEnter={() => setExpandedCard(idx + 1)}
								onClick={() => window.trackCaseStudyView?.(caseStudy.title)}
							>
								{/* Gradient Background */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient}`}
								/>

								{/* Decorative grid pattern */}
								<div
									className="absolute inset-0 opacity-[0.07]"
									style={{
										backgroundImage:
											"linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
										backgroundSize: "32px 32px",
									}}
								/>

								{/* Glow accent */}
								<div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

								{/* Big metric (only visible when expanded) */}
								<div
									className={`absolute top-12 right-6 transition-all duration-500 ${
										idx + 1 === expandedCard
											? "opacity-100 scale-100"
											: "opacity-0 scale-90"
									}`}
								>
									<span className="text-6xl xl:text-7xl font-black text-white/10 tabular-nums tracking-tight">
										{caseStudy.metric}
									</span>
								</div>

								{/* Industry icon */}
								<div
									className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
										idx + 1 === expandedCard
											? "opacity-30 scale-150"
											: "opacity-60 scale-100"
									}`}
								>
									<span className="material-icons text-white" style={{ fontSize: "5rem" }}>
										{caseStudy.icon}
									</span>
								</div>

								{/* Bottom gradient overlay for legibility */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

								{/* Tag - Only visible when expanded */}
								<div
									className={`absolute top-4 left-4 z-10 transition-opacity duration-300 ${
										idx + 1 === expandedCard ? "opacity-100" : "opacity-0"
									}`}
								>
									<span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
										{caseStudy.tag}
									</span>
								</div>

								{/* Content - Expanded */}
								<div
									className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
										idx + 1 === expandedCard ? "opacity-100" : "opacity-0"
									}`}
								>
									<h3 className="text-2xl font-bold text-white mb-2">
										{caseStudy.title}
									</h3>
									<p className="text-gray-300 text-sm mb-4">
										{caseStudy.subtitle}
									</p>
									<span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
										Ver caso completo
										<span className="material-icons text-lg">
											arrow_forward
										</span>
									</span>
								</div>

								{/* Content - Collapsed (vertical text) */}
								<div
									className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 ${
										idx + 1 === expandedCard ? "opacity-0" : "opacity-100"
									}`}
								>
									<span
										className="text-white font-bold text-base whitespace-nowrap tracking-wide"
										style={{
											writingMode: "vertical-rl",
											textOrientation: "mixed",
										}}
									>
										{caseStudy.title}
									</span>
								</div>
							</a>
						))}
					</div>

					{/* Mobile View */}
					<div className="lg:hidden flex flex-col gap-4">
						{caseStudies.map((caseStudy) => (
							<a
								key={caseStudy.id}
								href={caseStudy.href}
								onClick={() => window.trackCaseStudyView?.(caseStudy.title)}
								className="relative cursor-pointer overflow-hidden rounded-2xl group w-full h-64 border border-white/10"
							>
								{/* Gradient Background */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient}`}
								/>

								{/* Decorative grid pattern */}
								<div
									className="absolute inset-0 opacity-[0.07]"
									style={{
										backgroundImage:
											"linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
										backgroundSize: "28px 28px",
									}}
								/>

								{/* Glow accent */}
								<div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

								{/* Big metric */}
								<span className="absolute top-6 right-5 text-5xl font-black text-white/10 tabular-nums tracking-tight">
									{caseStudy.metric}
								</span>

								{/* Industry icon */}
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
									<span className="material-icons text-white" style={{ fontSize: "4rem" }}>
										{caseStudy.icon}
									</span>
								</div>

								{/* Bottom gradient overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

								{/* Tag */}
								<div className="absolute top-4 left-4 z-10">
									<span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
										{caseStudy.tag}
									</span>
								</div>

								{/* Content */}
								<div className="absolute bottom-0 left-0 right-0 p-6">
									<h3 className="text-xl font-bold text-white mb-1">
										{caseStudy.title}
									</h3>
									<p className="text-gray-300 text-sm mb-3">
										{caseStudy.subtitle}
									</p>
									<span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
										Ver caso completo
										<span className="material-icons text-lg">
											arrow_forward
										</span>
									</span>
								</div>
							</a>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
