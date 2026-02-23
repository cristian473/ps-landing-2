import { motion } from 'framer-motion';

const steps = [
  {
    period: 'Semana 1',
    title: 'Relevamiento',
    description: 'Entendemos cómo funciona tu operación hoy. Detectamos los cuellos de botella. Sin asumir nada.',
  },
  {
    period: 'Semana 2-3',
    title: 'Arquitectura y diseño',
    description: 'Definimos qué construir, en qué orden y cómo se integra con lo que ya tenés.',
  },
  {
    period: 'Semana 4',
    title: 'Primer módulo en producción',
    description: 'No una demo. Algo real que ya usás mientras terminamos el resto.',
  },
  {
    period: 'Mes 2-3',
    title: 'Implementación completa',
    description: 'Entrega total, capacitación al equipo y cierre de las herramientas que ya no necesitás.',
  },
  {
    period: 'Siempre',
    title: 'Soporte y evolución',
    description: 'El sistema es tuyo pero no estás solo. Acompañamos con soporte y mejoras cuando el negocio lo necesita.',
  },
];

export default function Experience() {
  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden border-y border-white/5" id="proceso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            El proceso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            De la primera llamada al sistema funcionando
          </h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:mb-16`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="bg-navy-surface p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                      {step.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center Circle - Desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-navy-dark border-4 border-primary items-center justify-center">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>

                {/* Mobile Number */}
                <div className="md:hidden absolute -left-2 top-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-navy-dark font-bold text-sm">{index + 1}</span>
                </div>

                {/* Empty space for other side - Desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
