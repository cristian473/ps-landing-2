const clientLogos = [
  { name: 'Dental Center', src: '/clients/DentalCenter.png', url: 'https://dentalcenter.com.ar/' },
  { name: 'Maklab', src: '/clients/maklab.png', url: 'https://maklab.com.ar/' },
  { name: 'Paul Deco', src: '/clients/pauldeco.png', url: 'https://pauldeco.com/' },
  { name: 'RAZ', src: '/clients/raz.png', url: 'https://razycia.ar/' },
];

export default function LogoTicker() {
  return (
    <section className="bg-navy-dark py-12 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
          Empresas que ya operan con su propio sistema
        </p>
      </div>

      <div className="relative w-full">
        {/* Fog Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-navy-dark to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-navy-dark to-transparent" />

        <div className="flex w-full overflow-hidden select-none">
          <div className="flex animate-scroll gap-16 min-w-full items-center pl-16">
            {/* Original Set */}
            {clientLogos.map((logo, index) => (
              <a
                key={`${logo.name}-${index}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-28 h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                />
              </a>
            ))}

            {/* Duplicated Set for Seamless Loop */}
            {clientLogos.map((logo, index) => (
              <a
                key={`${logo.name}-duplicate-${index}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-28 h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                />
              </a>
            ))}

            {/* Triplicated Set for Seamless Loop on large screens */}
            {clientLogos.map((logo, index) => (
              <a
                key={`${logo.name}-triplicate-${index}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-28 h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
