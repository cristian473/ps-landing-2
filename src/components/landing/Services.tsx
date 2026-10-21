import { motion } from 'framer-motion';

type Service = {
  id: string;
  title: string;
  description: string;
  ctaInterest: string;
};

const SERVICES: Service[] = [
  {
    id: 'web_apps',
    title: 'Sistemas de gestión a medida',
    description:
      'Dejás las planillas y tenés todo en un solo lugar: pedidos, clientes, stock y proveedores.',
    ctaInterest: 'proyecto_cerrado',
  },
  {
    id: 'ia',
    title: 'Automatización de tareas',
    description:
      'Un asistente que responde por WhatsApp, carga datos y lee audios y PDFs por vos.',
    ctaInterest: 'proyecto_cerrado',
  },
  {
    id: 'integraciones',
    title: 'Integraciones',
    description:
      'Mercado Libre, Tienda Nube, AFIP, cobros y envíos conectados con tu sistema, sin cargar todo dos veces.',
    ctaInterest: 'proyecto_cerrado',
  },
  {
    id: 'apps_moviles',
    title: 'Apps móviles para tu equipo',
    description:
      'Vendedores, repartidores y técnicos cargan pedidos, entregas y fotos desde la calle, aunque no haya señal.',
    ctaInterest: 'proyecto_cerrado',
  },
];

function trackCardClick(serviceId: string) {
  window.trackEvent?.('service_card_click', { service_id: serviceId });
}

export default function Services() {
  return (
    <section className="bg-navy-dark py-20 md:py-28 relative" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Qué hacemos
          </h2>
          <p className="text-gray-300 max-w-2xl text-base md:text-lg leading-relaxed">
            Cuatro formas de ordenar tu negocio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, idx) => (
            <motion.a
              key={service.id}
              href={`/?interest=${encodeURIComponent(service.ctaInterest)}#contacto`}
              onClick={() => {
                trackCardClick(service.id);
                window.dispatchEvent(
                  new CustomEvent('contact:prefill', {
                    detail: { interest: service.ctaInterest },
                  }),
                );
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-navy-surface border border-white/10 hover:border-primary/40 rounded-2xl p-6 md:p-8 transition-all duration-300 block"
              aria-label={`${service.title}: contactar`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 pr-8">{service.title}</h3>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>

              <span className="absolute top-6 right-6 text-gray-500 group-hover:text-primary transition-colors">
                <span className="material-icons">arrow_forward</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
