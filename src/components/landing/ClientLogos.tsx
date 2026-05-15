import { motion, useReducedMotion } from 'framer-motion';

type ClientLogo = {
  id: string;
  name: string;
  trackId: string;
  // Si tiene URL pública del cliente, se renderea como <a> externo.
  // Si no, queda como elemento estático que solo trackea.
  href?: string;
  // Path al asset en /public/clients/. Si el archivo no existe, el alt
  // (texto del nombre) actúa como fallback visual aceptable.
  src: string;
  // Override del max-height para logos con ratio más cuadrado/vertical
  // que con el default se verían visualmente más chicos que los horizontales.
  // Default: 'max-h-12 sm:max-h-14 md:max-h-16 max-w-[86%]'.
  sizeClass?: string;
  imageClass?: string;
};

const DEFAULT_SIZE = 'max-h-12 sm:max-h-14 md:max-h-16 max-w-[86%]';
const LARGER_SIZE = 'max-h-14 sm:max-h-16 md:max-h-20 max-w-[86%]';
const XLARGE_SIZE = 'max-h-20 sm:max-h-24 md:max-h-28 max-w-[82%]';

const CLIENTS: ClientLogo[] = [
  {
    id: 'raz',
    name: 'Raz y Cía',
    trackId: 'raz',
    href: 'http://razycia.com/',
    src: '/clients/raz.png',
  },
  {
    id: 'cio_landings',
    name: 'CIO Landings',
    trackId: 'cio_landings',
    src: '/clients/ciolanding.png',
  },
  {
    id: 'maklab',
    name: 'Maklab',
    trackId: 'maklab',
    href: 'https://maklab.com.ar',
    src: '/clients/maklab.png',
    sizeClass: LARGER_SIZE,
  },
  {
    id: 'dentalcenter',
    name: 'DentalCenter',
    trackId: 'dentalcenter',
    href: 'https://dentalcenter.com.ar/',
    src: '/clients/DentalCenter.png',
  },
  {
    id: 'pauldeco',
    name: 'Paul Deco',
    trackId: 'pauldeco',
    href: 'https://pauldeco.com/',
    src: '/clients/pauldeco.png',
    sizeClass: XLARGE_SIZE,
  },
  {
    id: 'soyfinancieramente',
    name: 'Soy Financieramente',
    trackId: 'soyfinancieramente',
    href: 'https://www.soyfinancieramente.com',
    src: '/clients/soyfinancieramente.png',
    sizeClass: XLARGE_SIZE,
    imageClass: 'scale-[1.7] sm:scale-[1.9]',
  },
];

const MARQUEE_COPIES = [0, 1];

function trackClick(trackId: string) {
  window.trackEvent?.('client_logo_click', { client_name: trackId });
}

function ClientLogoItem({ client, decorative = false }: { client: ClientLogo; decorative?: boolean }) {
  const Inner = (
    <img
      src={client.src}
      alt={decorative ? '' : client.name}
      loading="eager"
      decoding="async"
      className={`${client.sizeClass ?? DEFAULT_SIZE} ${client.imageClass ?? ''} h-auto w-auto object-contain grayscale brightness-150 opacity-80 drop-shadow-[0_14px_28px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover/logo:opacity-95`}
    />
  );

  return (
    <div className="flex h-28 w-44 shrink-0 items-center justify-center overflow-hidden px-4 sm:h-32 sm:w-52 md:h-36 md:w-60">
      {decorative ? (
        <div className="flex h-full w-full items-center justify-center">{Inner}</div>
      ) : client.href ? (
        <a
          href={client.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick(client.trackId)}
          aria-label={`Visitar sitio de ${client.name}`}
          className="group/logo flex h-full w-full items-center justify-center"
        >
          {Inner}
        </a>
      ) : (
        <button
          type="button"
          onClick={() => trackClick(client.trackId)}
          aria-label={client.name}
          className="group/logo flex h-full w-full cursor-default items-center justify-center"
        >
          {Inner}
        </button>
      )}
    </div>
  );
}

export default function ClientLogos() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-black py-16 md:py-20 relative" id="clientes">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Ellos confían en nosotros
          </span>
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto">
            Construimos software para negocios que mueven operaciones reales.
          </p>
        </motion.div>

        <div
          className="relative mx-auto max-w-4xl"
          role="region"
          aria-label="Clientes destacados"
          aria-roledescription="carrusel"
        >
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <motion.div
              animate={shouldReduceMotion ? { x: 0 } : { x: ['0%', '-50%'] }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 26,
                      ease: 'linear',
                      repeat: Infinity,
                    }
              }
              className="flex w-max items-center"
            >
              {MARQUEE_COPIES.map((copyIndex) => (
                <ul
                  key={copyIndex}
                  aria-hidden={copyIndex > 0}
                  className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8 md:gap-10 md:pr-10"
                >
                  {CLIENTS.map((client) => (
                    <li key={`${client.id}-${copyIndex}`} className="flex shrink-0 items-center justify-center">
                      <ClientLogoItem client={client} decorative={copyIndex > 0} />
                    </li>
                  ))}
                </ul>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
