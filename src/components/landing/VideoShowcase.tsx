import { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcaseProps {
	youtubeId: string;
	eyebrow: string;
	title: string;
	description: string;
	// Posición del video en desktop. En mobile siempre va arriba.
	align?: 'left' | 'right';
	bg?: 'navy' | 'black';
	id?: string;
}

/**
 * Mostrador de video vertical (9:16) con facade pattern: el iframe de YouTube
 * sólo se monta al click. Antes muestra el thumbnail del video — un <img>
 * lazy de ~30KB, vs el iframe completo que arrastra ~600KB-1MB de JS de YT.
 * Esto preserva las optimizaciones de Fase 3 (LCP/INP).
 *
 * Funciona también con YouTube Shorts: el endpoint /embed/{id} resuelve
 * tanto videos normales como Shorts.
 */
export default function VideoShowcase({
	youtubeId,
	eyebrow,
	title,
	description,
	align = 'left',
	bg = 'navy',
	id,
}: VideoShowcaseProps) {
	const [loaded, setLoaded] = useState(false);
	const thumbnailUrl = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

	const sectionBg = bg === 'black' ? 'bg-black' : 'bg-navy-dark';

	return (
		<section
			className={`${sectionBg} py-16 md:py-24 border-y border-white/5 relative overflow-hidden`}
			id={id}
		>
			{/* Soft accent — coherente con el resto de las secciones */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
					{/* Video container */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className={align === 'right' ? 'md:order-2' : ''}
					>
						<div className="relative mx-auto max-w-[280px] md:max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(56,182,255,0.15)] bg-black">
							{loaded ? (
								<iframe
									src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
									title={title}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="absolute inset-0 w-full h-full"
								/>
							) : (
								<button
									type="button"
									onClick={() => setLoaded(true)}
									className="absolute inset-0 w-full h-full group"
									aria-label={`Reproducir: ${title}`}
								>
									<img
										src={thumbnailUrl}
										alt={title}
										width={480}
										height={360}
										loading="lazy"
										decoding="async"
										className="absolute inset-0 w-full h-full object-cover"
									/>
									{/* Overlay + play button */}
									<div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/25 transition-colors">
										<div className="w-20 h-20 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
											<span className="material-icons text-navy-dark text-5xl translate-x-0.5">
												play_arrow
											</span>
										</div>
									</div>
								</button>
							)}
						</div>
					</motion.div>

					{/* Texto */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.15 }}
					>
						<span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
							{eyebrow}
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
							{title}
						</h2>
						<p className="text-gray-400 leading-relaxed text-base md:text-lg">
							{description}
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
