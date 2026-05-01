"use client";

import { useEffect, useState, type FocusEvent } from "react";
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

	const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
		if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
			setPaused(false);
		}
	};

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
			className="mx-auto mt-6 md:mt-8 max-w-xl w-full"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
			onTouchStart={() => setPaused(true)}
			onTouchEnd={() => setPaused(false)}
			onTouchCancel={() => setPaused(false)}
			onFocusCapture={() => setPaused(true)}
			onBlurCapture={handleBlur}
			aria-label="Testimonios de clientes"
		>
			<div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-surface p-5 sm:p-6 shadow-xl ring-1 ring-white/5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl">
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_60%)]" />
				<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
				<div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/10 via-white/0 to-white/10 opacity-50" />
				<div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-[40px]" />
				<AnimatePresence mode="wait">
					<motion.div
						key={current.id}
						initial={{ opacity: 0, y: 8, scale: 0.98 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -8, scale: 0.98 }}
						transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
						className="relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5 min-h-[13.5rem] sm:min-h-[11rem]"
					>
						{/* Encabezado Mobile: Avatar e Info */}
						<div className="flex items-center gap-3 sm:hidden">
							<div
								className={`shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${current.gradient} text-[13px] font-bold text-white shadow-lg ring-1 ring-white/20`}
								aria-hidden="true"
							>
								{current.initials}
							</div>
							<div className="flex flex-col">
								<span className="text-[14px] font-semibold text-gray-100 leading-tight">
									{current.client}
								</span>
								<div className="mt-1 flex items-center gap-1.5">
									<span className="inline-flex items-center rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-gray-300 ring-1 ring-inset ring-white/10">
										{current.industry}
									</span>
									<span className="text-[10px] text-gray-500">·</span>
									<span className="text-[10px] text-gray-400">Cliente</span>
								</div>
							</div>
						</div>

						{/* Avatar Desktop */}
						<div
							className={`hidden sm:flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${current.gradient} text-[15px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.8)] ring-1 ring-white/20`}
							aria-hidden="true"
						>
							{current.initials}
						</div>

						<div className="min-w-0 flex-1 flex flex-col justify-between h-full">
							<div className="hidden sm:flex mb-3 items-center gap-2">
								<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-gray-300">
									Testimonio real
								</span>
							</div>
							
							<div className="relative">
								<span className="absolute -left-2 -top-3 sm:-left-4 sm:-top-5 text-6xl sm:text-8xl leading-none text-white/[0.04] font-serif select-none pointer-events-none">
									"
								</span>
								<p className="relative z-10 text-[15px] sm:text-[16px] leading-relaxed text-gray-200 font-medium text-pretty">
									"{current.quote}"
								</p>
							</div>

							{/* Footer Desktop */}
							<div className="mt-4 hidden sm:flex items-center gap-2">
								<span className="text-sm font-semibold text-gray-100">{current.client}</span>
								<span className="inline-flex items-center rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-gray-300 ring-1 ring-inset ring-white/10">
									{current.industry}
								</span>
								<span className="text-gray-600">·</span>
								<span className="text-xs text-gray-400">Cliente</span>
							</div>

							{/* Badge Mobile */}
							<div className="mt-4 sm:hidden">
								<span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-medium uppercase tracking-widest text-gray-400">
									Testimonio real
								</span>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Dots para selección manual */}
			<div className="mt-4 flex items-center justify-center gap-2 sm:mt-5">
				{testimonials.map((t, i) => (
					<button
						key={t.id}
						type="button"
						onClick={() => setIndex(i)}
						aria-label={`Ver testimonio ${i + 1} de ${testimonials.length} (${t.client})`}
						aria-pressed={i === index}
						className="group inline-flex min-h-8 min-w-8 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
					>
						<span
							aria-hidden="true"
							className={`block rounded-full transition-all duration-300 ${
								i === index
									? "h-2 w-6 bg-primary shadow-[0_0_12px_rgba(34,211,238,0.5)]"
									: "h-1.5 w-1.5 bg-white/20 group-hover:bg-white/40 group-hover:scale-110"
							}`}
						/>
					</button>
				))}
			</div>
		</div>
	);
}
