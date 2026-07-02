"use client";

import { motion } from "framer-motion";

/**
 * Testimoniales reales de los dos clientes con plataforma a medida en
 * producción: RAZ (logística) y DentalCenter (salud / consultorios).
 * Quotes y autorización fueron provistos por Cristian (dueño de Puro Software).
 *
 * Con solo dos quotes se muestran ambas a la vez: lado a lado en desktop,
 * apiladas en mobile. Sin carrusel ni estado.
 */
const testimonials = [
	{
		id: "raz",
		client: "Equipo RAZ",
		industry: "Logística",
		initials: "R",
		gradient: "from-amber-500 to-orange-600",
		quote:
			"En la industria logística, el seguimiento y la gestión eficientes son cruciales. Cristian y su equipo desarrollaron un sistema excepcional que mejoró significativamente nuestras operaciones.",
	},
	{
		id: "dentalcenter",
		client: "Equipo DentalCenter",
		industry: "Salud",
		initials: "DC",
		gradient: "from-cyan-500 to-sky-600",
		quote:
			"Confiamos plenamente en Cristian y su equipo, siempre atentos y optimizando nuestra empresa. Gracias.",
	},
] as const;

export default function HeroTestimonial() {
	return (
		<div className="mx-auto mt-6 md:mt-8 grid w-full gap-5 md:grid-cols-2 text-left">
			{testimonials.map((t, i) => (
				<motion.figure
					key={t.id}
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: i * 0.15 }}
					className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-navy-surface p-5 sm:p-6 shadow-xl ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl"
				>
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_60%)]" />
					<blockquote className="relative">
						<span className="absolute -left-2 -top-3 text-6xl leading-none text-white/[0.04] font-serif select-none pointer-events-none">
							"
						</span>
						<p className="relative z-10 text-[15px] sm:text-[16px] leading-relaxed text-gray-200 font-medium text-pretty">
							"{t.quote}"
						</p>
					</blockquote>
					<figcaption className="relative mt-5 flex items-center gap-3">
						<div
							className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-[13px] font-bold text-white shadow-lg ring-1 ring-white/20`}
							aria-hidden="true"
						>
							{t.initials}
						</div>
						<div className="flex flex-col">
							<span className="text-sm font-semibold text-gray-100 leading-tight">
								{t.client}
							</span>
							<span className="mt-1 inline-flex w-fit items-center rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-gray-300 ring-1 ring-inset ring-white/10">
								{t.industry}
							</span>
						</div>
					</figcaption>
				</motion.figure>
			))}
		</div>
	);
}
