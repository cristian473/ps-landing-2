import { motion } from 'framer-motion';

const blocks = [
  {
    title: 'Ya construido',
    subtitle: 'No lo pagás dos veces',
    icon: 'inventory_2',
    items: [
      'Gestión de pedidos y stock',
      'Clientes, proveedores y equipo',
      'Dashboards y reportes',
      'Autenticación y permisos',
    ],
  },
  {
    title: 'Personalizado',
    subtitle: 'Tu lógica, no la del SaaS',
    icon: 'tune',
    items: [
      'Tus reglas de negocio',
      'Tu UI y tu marca',
      'Tus flujos operativos',
      'Tus formatos y datos',
    ],
  },
  {
    title: 'Conectado',
    subtitle: 'Vive con lo que ya usás',
    icon: 'hub',
    items: [
      'WhatsApp y email',
      'MercadoPago y AFIP',
      'Tu contabilidad actual',
      'APIs externas a medida',
    ],
  },
];

export default function PreBuiltERP() {
  return (
    <section className="bg-navy-dark py-24 relative overflow-hidden border-y border-white/5">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Por qué entregamos rápido
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            No empezamos de cero. Por eso entregamos en semanas.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Tenemos una base de ERP probada que ya resuelve lo que el 80% de las empresas necesitan.
            La adaptamos a tu negocio en lugar de construirla desde el primer renglón.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((block, idx) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-navy-surface border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <span className="material-icons text-2xl">{block.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {block.title}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {block.subtitle}
                  </p>
                </div>
              </div>

              <ul className="space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
