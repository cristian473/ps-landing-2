const clientLogos = [
	{
		name: "Dental Center",
		src: "/clients/DentalCenter.png",
		url: "https://dentalcenter.com.ar/",
	},
	{ name: "Maklab", src: "/clients/maklab.png", url: "https://maklab.com.ar/" },
	{
		name: "Paul Deco",
		src: "/clients/pauldeco.png",
		url: "https://pauldeco.com/",
	},
	{ name: "RAZ", src: "/clients/raz.png", url: "https://razycia.ar/" },
];

/**
 * Carrusel infinito de logos. Implementación CSS pura: dos pistas con la
 * misma lista de 4 logos cada una corriendo en paralelo. Cada pista anima
 * `transform: translateX(-100%)` y arranca con un offset distinto, lo que
 * mantiene el loop seamless con sólo 8 imágenes en el DOM (la versión
 * anterior renderizaba 12). La segunda pista es decorativa: aria-hidden,
 * tabindex -1 y pointer-events none para no duplicar links interactivos.
 */
export default function LogoTicker() {
	return (
		<section className="bg-navy-dark py-12 border-b border-white/5 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
				<p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
					Empresas que confían en nosotros
				</p>
			</div>

			<div className="relative w-full">
				{/* Fog Fade Effect */}
				<div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-navy-dark to-transparent pointer-events-none" />
				<div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-navy-dark to-transparent pointer-events-none" />

				<div className="ticker">
					{/* Track interactiva (links reales) */}
					<div className="ticker__track">
						{clientLogos.map((logo) => (
							<a
								key={logo.name}
								href={logo.url}
								target="_blank"
								rel="noopener noreferrer"
								className="ticker__item shrink-0 w-28 h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex items-center justify-center"
							>
								<img
									src={logo.src}
									alt={logo.name}
									width={112}
									height={48}
									className="w-full h-full object-contain"
									loading="lazy"
									decoding="async"
								/>
							</a>
						))}
					</div>

					{/* Track decorativa (clones para el loop) */}
					<div
						className="ticker__track ticker__track--clone"
						aria-hidden="true"
					>
						{clientLogos.map((logo) => (
							<div
								key={`clone-${logo.name}`}
								className="ticker__item shrink-0 w-28 h-12 opacity-60 grayscale flex items-center justify-center pointer-events-none"
								tabIndex={-1}
							>
								<img
									src={logo.src}
									alt=""
									width={112}
									height={48}
									className="w-full h-full object-contain"
									loading="lazy"
									decoding="async"
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			<style>{`
				.ticker {
					display: flex;
					width: 100%;
					overflow: hidden;
					user-select: none;
				}
				.ticker__track {
					display: flex;
					flex: 0 0 auto;
					min-width: 100%;
					gap: 4rem;
					padding-left: 4rem;
					align-items: center;
					animation: ticker-scroll 30s linear infinite;
					will-change: transform;
				}
				.ticker__track--clone {
					/* Empieza desplazada para encadenar después de la primera */
					/* Sin gap visible porque ambas comparten el mismo timing */
				}
				@keyframes ticker-scroll {
					from { transform: translateX(0); }
					to   { transform: translateX(-100%); }
				}
				@media (prefers-reduced-motion: reduce) {
					.ticker__track { animation: none; }
				}
			`}</style>
		</section>
	);
}
