import { motion } from 'framer-motion';

const tiers = [
  {
    title: 'PyME operativa',
    range: 'USD 4.000 – 8.000',
    description: 'Equipos de 5 a 15 personas. Módulo central + 1 o 2 integraciones (WhatsApp, MercadoPago, AFIP, etc).',
    features: [
      'Primer módulo en producción en 4 semanas',
      'Entrega completa en 2 meses',
      '1 mes de soporte incluido',
    ],
    icon: 'rocket_launch',
    popular: false,
    delay: 0,
    // En mobile bajamos al puesto 2 — el "popular" sube primero para que el ojo lo vea
    mobileOrder: 'order-2',
  },
  {
    title: 'Mid-market',
    range: 'USD 8.000 – 20.000',
    description: 'Equipos de 15 a 50 personas. ERP completo, multi-área, con automatizaciones y dashboards ejecutivos.',
    features: [
      'Múltiples módulos integrados (ventas, stock, clientes, equipo)',
      'Entrega entre 2 y 3 meses',
      '3 meses de soporte incluidos',
    ],
    icon: 'workspaces',
    popular: true,
    delay: 0.1,
    mobileOrder: 'order-1',
  },
  {
    title: 'Enterprise',
    range: 'A medida',
    description: 'Más de 50 personas, multi-sede o integraciones complejas. Cotizamos según alcance después de la consultoría.',
    features: [
      'Arquitectura adaptada a tu volumen',
      'Soporte y SLA dedicados',
      'Integraciones con sistemas existentes',
    ],
    icon: 'corporate_fare',
    popular: false,
    delay: 0.2,
    mobileOrder: 'order-3',
  },
];

export default function Pricing() {
  return (
    <section className="bg-black py-24 relative" id="inversion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Inversión esperada
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Cuánto cuesta tu propio sistema?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Pago único, no suscripción. 50% al inicio, 50% al entregar.
            Servidor desde USD 20/mes — el sistema queda 100% tuyo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tier.delay }}
              className={`relative flex flex-col p-6 sm:p-8 rounded-2xl border transition-all ${tier.mobileOrder} md:order-none ${
                tier.popular
                  ? 'border-primary/40 bg-primary/5 hover:bg-primary/10 shadow-[0_0_40px_rgba(56,182,255,0.15)]'
                  : 'border-white/10 bg-navy-surface hover:border-primary/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-navy-dark text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}

              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 text-primary">
                <span className="material-icons text-3xl">{tier.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{tier.title}</h3>
              <p className="text-2xl md:text-3xl font-extrabold text-primary mb-4 tracking-tight">
                {tier.range}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {tier.description}
              </p>

              <ul className="space-y-2 mt-auto">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="material-icons text-primary text-base mt-0.5">check</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-10 max-w-2xl mx-auto"
        >
          Comparalo: un SaaS de gestión cuesta entre USD 200 y 500 por mes para siempre.
          Tu sistema propio se paga una sola vez y deja de cobrarte por crecer.
        </motion.p>
      </div>
    </section>
  );
}
