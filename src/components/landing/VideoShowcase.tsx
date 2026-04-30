import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

declare global {
	interface Window {
		trackVideoEvent?: (
			action: 'visible' | 'autoplay' | 'manual_play' | 'unmute' | 'ended',
			videoId: string,
			videoTitle?: string
		) => void;
	}
}

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
	// autoplay=true cuando el iframe se montó por scroll; false cuando fue por click.
	// Lo usamos para incluir mute=1 sólo en autoplay (los browsers exigen muted),
	// pero respetar el sonido cuando el usuario tocó play manualmente.
	const [autoplay, setAutoplay] = useState(false);
	// muted refleja el estado actual del audio. true mientras el video está
	// en autoplay sin que el usuario haya tocado el botón de sonido.
	const [muted, setMuted] = useState(true);
	const sectionRef = useRef<HTMLElement>(null);
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const thumbnailUrl = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

	const sectionBg = bg === 'black' ? 'bg-black' : 'bg-navy-dark';

	// Envía comandos al iframe de YT vía postMessage. Requiere que el embed
	// tenga ?enablejsapi=1. No necesitamos cargar la API completa de YT —
	// alcanza con el contrato de mensajes documentado.
	const sendYTCommand = (func: string, args: number[] = []) => {
		iframeRef.current?.contentWindow?.postMessage(
			JSON.stringify({ event: 'command', func, args }),
			'https://www.youtube.com'
		);
	};

	// Carga el iframe al 60% de visibilidad la primera vez. Después, pausa
	// cuando la sección sale del viewport (<10%) y reanuda al volver (>=60%).
	// Esto evita que dos videos suenen/se reproduzcan a la vez en la landing.
	useEffect(() => {
		if (typeof window === 'undefined') return;
		if (!('IntersectionObserver' in window)) return;
		const el = sectionRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.intersectionRatio >= 0.6) {
						if (!loaded) {
							setAutoplay(true);
							setLoaded(true);
							window.trackVideoEvent?.('autoplay', youtubeId, title);
						} else {
							sendYTCommand('playVideo');
						}
					} else if (entry.intersectionRatio < 0.1 && loaded) {
						sendYTCommand('pauseVideo');
					}
				}
			},
			{ threshold: [0.1, 0.6] }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [loaded, youtubeId, title]);

	const handleUnmute = () => {
		sendYTCommand('unMute');
		sendYTCommand('setVolume', [100]);
		setMuted(false);
		window.trackVideoEvent?.('unmute', youtubeId, title);
	};

	// En mobile el título va arriba del video (orden invertido al JSX).
	// En desktop respetamos el `align` que decide de qué lado va el video.
	const videoOrderClass = align === 'right' ? 'order-2 md:order-2' : 'order-2 md:order-1';
	const textOrderClass = align === 'right' ? 'order-1 md:order-1' : 'order-1 md:order-2';

	return (
		<section
			ref={sectionRef}
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
						className={videoOrderClass}
					>
						<div className="relative mx-auto max-w-[280px] md:max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(56,182,255,0.15)] bg-black">
							{loaded ? (
								<>
									<iframe
										ref={iframeRef}
										src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&autoplay=1&rel=0&modestbranding=1&playsinline=1${autoplay ? '&mute=1' : ''}`}
										title={title}
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										className="absolute inset-0 w-full h-full"
									/>
									{/* Unmute prompt — sólo cuando el video arrancó por autoplay
									    (que obliga a empezar muted). Desaparece al primer click. */}
									{autoplay && muted && (
										<button
											type="button"
											onClick={handleUnmute}
											aria-label="Activar sonido"
											className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-2 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold hover:bg-black/85 active:scale-95 transition-all shadow-lg"
										>
											<span className="material-icons text-base">volume_off</span>
											<span>Tocá para sonido</span>
										</button>
									)}
								</>
							) : (
								<button
									type="button"
									onClick={() => {
										setLoaded(true);
										window.trackVideoEvent?.('manual_play', youtubeId, title);
									}}
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
						className={textOrderClass}
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
