"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Testimoniales reales de los dos clientes con plataforma a medida en
 * producción: RAZ (logística) y DentalCenter (salud / consultorios).
 * Quotes y autorización fueron provistos por Cristian (dueño de Puro Software).
 *
 * Renderiza una sola card que rota automáticamente cada 7s. En mobile
 * stackea debajo del CTA primario; en desktop puede usarse inline o al
 * costado del bloque de CTAs según donde se monte.
 */
const testimonials = [
	{
		id: "raz",
		client: "Equipo RAZ",
		industry: "Logística",
		initials: "R",
		gradient: "from-amber-500 to-orange-600",
		quote:
			"En la industria logística, el seguimiento y la gestión eficientes son cruciales. Cris y su equipo desarrolló un sistema excepcional que mejoró significativamente nuestras operaciones.",
	},
	{
		id: "dentalcenter",
		client: "Equipo DentalCenter",
		industry: "Salud",
		initials: "DC",
		gradient: "from-cyan-500 to-sky-600",
		quote:
			"Confiando siempre en Cristian y su equipo de trabajo, atentos y siempre optimizando nuestra empresa. Gracias.",
	},
] as const;

const ROTATION_MS = 7000;

export default function HeroTestimonial() {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		if (paused) return;
		const t = window.setInterval(() => {
			setIndex((i) => (i + 1) % testimonials.length);
		}, ROTATION_MS);
		return () => window.clearInterval(t);
	}, [paused]);

	const current = testimonials[index];

	return (
		<div
			className="mx-auto mt-6 md:mt-8 max-w-xl"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
			onTouchStart={() => setPaused(true)}
			onTouchEnd={() => setPaused(false)}
			onTouchCancel={() => setPaused(false)}
			aria-label="Testimonios de clientes"
		>
			<div className="relative rounded-xl border border-white/10 bg-navy-surface/60 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-4 text-left">
				<AnimatePresence mode="wait">
					<motion.div
						key={current.id}
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -6 }}
						transition={{ duration: 0.35 }}
						className="flex items-start gap-3"
					>
						<div
							className={`shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${current.gradient} text-white text-xs sm:text-sm font-bold flex items-center justify-center shadow-md`}
							aria-hidden="true"
						>
							{current.initials}
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-gray-200 text-sm sm:text-[15px] leading-relaxed">
								<span className="text-primary mr-1">“</span>
								{current.quote}
								<span className="text-primary ml-1">”</span>
							</p>
							<p className="mt-2 text-xs text-gray-500">
								<span className="font-semibold text-gray-300">{current.client}</span>
								<span className="mx-1.5 text-gray-600">·</span>
								{current.industry}
								<span className="mx-1.5 text-gray-600">·</span>
								<span className="text-gray-500">Cliente</span>
							</p>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Dots para selección manual */}
			<div className="flex items-center justify-center gap-2 mt-3">
				{testimonials.map((t, i) => (
					<button
						key={t.id}
						type="button"
						onClick={() => setIndex(i)}
						aria-label={`Ver testimonio ${i + 1} de ${testimonials.length} (${t.client})`}
						aria-current={i === index ? "true" : "false"}
						className={`h-1.5 rounded-full transition-all ${
							i === index
								? "w-6 bg-primary"
								: "w-1.5 bg-white/25 hover:bg-white/40"
						}`}
					/>
				))}
			</div>
		</div>
	);
}
