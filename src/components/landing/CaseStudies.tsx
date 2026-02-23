import { motion } from 'framer-motion';

export default function CaseStudies() {
  const cases = [
    {
      title: 'Fintech Scalability',
      description: 'El desafío era migrar una infraestructura legacy que no soportaba picos de transacciones a un sistema robusto en la nube.',
      icon: 'analytics',
      impactLabel: 'Impacto',
      impactValue: '300% ROI',
      impactSub: '',
      delay: 0
    },
    {
      title: 'Logística Automatizada',
      description: 'Implementación de algoritmos de optimización de rutas y gestión de flotas para una empresa de transporte nacional.',
      icon: 'timer',
      impactLabel: 'Impacto',
      impactValue: 'Reducción 50%',
      impactSub: 'en tiempo de gestión',
      delay: 0.1
    },
    {
      title: 'Plataforma SaaS B2B',
      description: 'Desarrollo de una plataforma crítica para gestión de recursos humanos con requisitos de alta disponibilidad 24/7.',
      icon: 'cloud_done',
      impactLabel: 'Impacto',
      impactValue: '99.9% Uptime',
      impactSub: '',
      delay: 0.2
    }
  ];

  return (
    <section className="bg-navy-dark py-24 relative" id="casos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Resultados Reales</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Casos de Éxito</h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="bg-navy-surface rounded-xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-icons text-6xl text-white">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-6 h-20 overflow-hidden">
                {item.description}
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="text-gray-500 text-xs uppercase tracking-wide font-semibold mb-1">{item.impactLabel}</p>
                <p className="text-4xl font-bold text-primary">{item.impactValue}</p>
                {item.impactSub && (
                  <p className="text-sm text-primary/80 font-medium">{item.impactSub}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
