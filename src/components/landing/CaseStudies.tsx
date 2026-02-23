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
    <section className="bg-navy-dark py-16 md:py-24 relative" id="casos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Resultados Reales</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Casos de Éxito</h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((item) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="bg-navy-surface rounded-2xl p-6 lg:p-8 border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-xl relative overflow-hidden group flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:translate-x-2">
                <span className="material-icons text-8xl text-white">{item.icon}</span>
              </div>
              
              <div className="relative z-10 flex flex-col flex-grow">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 pr-8 leading-tight">{item.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>
                
                <div className="border-t border-white/10 pt-6 mt-auto">
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">{item.impactLabel}</p>
                  <p className="text-3xl lg:text-4xl font-bold text-primary tracking-tight">{item.impactValue}</p>
                  {item.impactSub && (
                    <p className="text-sm text-primary/80 font-medium mt-1">{item.impactSub}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
