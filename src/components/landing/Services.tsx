import { motion } from 'framer-motion';

type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    id: 'web_apps',
    icon: 'dashboard',
    title: 'Web apps a medida',
    description:
      'Sistemas internos, portales y plataformas a medida. Desde un backoffice que reemplaza Excel hasta una plataforma multi-tenant — adaptado a cómo trabajás, no al revés.',
    bullets: [
      'Plataformas de gestión y backoffices para reemplazar planillas',
      'Portales web para clientes, afiliados o proveedores',
      'Productos SaaS con dominio propio, multi-usuario y planes',
    ],
  },
  {
    id: 'ia',
    icon: 'auto_awesome',
    title: 'Automatización con IA',
    description:
      'Agentes de WhatsApp, asistentes que cargan datos por vos, automatizaciones que entienden audios y PDFs. Solo donde te ahorra tiempo y plata.',
    bullets: [
      'Agentes de WhatsApp que consultan tus datos y operan tu sistema',
      'Asistentes para cargar productos, redactar descripciones o responder consultas',
      'Procesamiento de mensajes, audios, imágenes y PDFs',
    ],
  },
  {
    id: 'integraciones',
    icon: 'hub',
    title: 'Integraciones',
    description:
      'Conectamos tu sistema con lo que ya usás: Mercado Libre, Tienda Nube, AFIP, pasarelas de pago, ERPs externos, WhatsApp. La plomería invisible que evita cargar dos veces lo mismo.',
    bullets: [
      'Mercado Libre, Tienda Nube y otros marketplaces',
      'Facturación electrónica con AFIP / ARCA',
      'Pasarelas de pago, ERPs externos y servicios de envío',
    ],
  },
  {
    id: 'apps_moviles',
    icon: 'phone_iphone',
    title: 'Apps móviles',
    description:
      'Apps iOS y Android para equipos que trabajan fuera de la oficina: vendedores, depósito, repartidores, técnicos. Funcionan sin internet y se actualizan sin pasar por la tienda.',
    bullets: [
      'Apps para vendedores, repartidores, picking y técnicos en campo',
      'Modo offline con sincronización automática',
      'Lectura de códigos de barras, GPS, foto de entrega y firma del cliente',
    ],
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
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Qué hacemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Software para todo lo que tu negocio necesita
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Cuatro áreas. Combinamos las que apliquen a tu caso, sin paquetes cerrados.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, idx) => (
            <motion.a
              key={service.id}
              href="#contacto"
              onClick={() => {
                trackCardClick(service.id);
                window.dispatchEvent(
                  new CustomEvent('contact:prefill', {
                    detail: { interest: 'consulta_general' },
                  }),
                );
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-navy-surface border border-white/10 hover:border-primary/40 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(56,182,255,0.1)] block"
              aria-label={`${service.title} — contactar`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-navy-dark transition-colors">
                  <span className="material-icons text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{service.title}</h3>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                {service.description}
              </p>

              <ul className="space-y-2.5">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm md:text-[15px]">
                    <span className="material-icons text-primary text-base mt-0.5 shrink-0">
                      check
                    </span>
                    <span className="text-gray-200 leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

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
