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
		quote:
			"En la industria logística, el seguimiento y la gestión eficientes son cruciales. Cristian y su equipo desarrollaron un sistema excepcional que mejoró significativamente nuestras operaciones.",
	},
	{
		id: "dentalcenter",
		client: "Equipo DentalCenter",
		industry: "Salud",
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
					className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-navy-surface p-5 sm:p-6"
				>
					<blockquote className="relative">
						<p className="relative z-10 text-base leading-relaxed text-gray-200 text-pretty">
							"{t.quote}"
						</p>
					</blockquote>
					<figcaption className="relative mt-5 flex items-center gap-3">
						<div className="flex flex-col">
							<span className="text-sm font-semibold text-gray-100 leading-tight">
								{t.client}
							</span>
							<span className="mt-0.5 text-sm text-gray-400">{t.industry}</span>
						</div>
					</figcaption>
				</motion.figure>
			))}
		</div>
	);
}
