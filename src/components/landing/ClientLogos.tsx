import { motion } from 'framer-motion';

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
  // Default: 'max-h-12 sm:max-h-14 md:max-h-16'.
  sizeClass?: string;
};

const DEFAULT_SIZE = 'max-h-12 sm:max-h-14 md:max-h-16';
const LARGER_SIZE = 'max-h-16 sm:max-h-20 md:max-h-24';
const XLARGE_SIZE = 'max-h-20 sm:max-h-24 md:max-h-32';

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
  },
];

function trackClick(trackId: string) {
  window.trackEvent?.('client_logo_click', { client_name: trackId });
}

export default function ClientLogos() {
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
            Confían en nosotros
          </span>
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto">
            Construimos software para negocios que mueven operaciones reales.
          </p>
        </motion.div>

        <ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center"
          aria-label="Clientes destacados"
        >
          {CLIENTS.map((client, idx) => {
            const Inner = (
              <img
                src={client.src}
                alt={client.name}
                loading="lazy"
                decoding="async"
                className={`${client.sizeClass ?? DEFAULT_SIZE} w-auto object-contain filter grayscale brightness-150 opacity-60 hover:grayscale-0 hover:opacity-100 hover:brightness-100 transition-all duration-300`}
              />
            );

            return (
              <motion.li
                key={client.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center justify-center"
              >
                {client.href ? (
                  <a
                    href={client.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClick(client.trackId)}
                    aria-label={`Visitar sitio de ${client.name}`}
                    className="block"
                  >
                    {Inner}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => trackClick(client.trackId)}
                    aria-label={client.name}
                    className="block cursor-default"
                  >
                    {Inner}
                  </button>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
