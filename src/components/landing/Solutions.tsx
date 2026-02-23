import { motion } from 'framer-motion';

export default function Solutions() {
  const solutions = [
    {
      title: 'Tu plataforma propia en la nube',
      description: 'Construimos plataformas digitales que escalan. Desde el primer usuario hasta miles, sin que el sistema se caiga ni los costos exploten.',
      icon: 'cloud_queue',
      features: [
        'Tu plataforma aguanta el crecimiento sin romperse',
        'Infraestructura en AWS o Azure con alta disponibilidad',
        'Pagos, accesos y multi-empresa incluidos si los necesitás',
      ],
      popular: false,
      delay: 0
    },
    {
      title: 'Automatizá lo que hoy hacen personas a mano',
      description: 'Integramos inteligencia artificial donde realmente suma: atención al cliente, procesamiento de documentos, análisis de datos. Sin hype, con resultados.',
      icon: 'smart_toy',
      features: [
        'Agentes que responden, procesan y deciden sin intervención humana',
        'Automatización de flujos repetitivos que hoy consumen tiempo de tu equipo',
        'Decisiones basadas en tus propios datos, no en intuición',
      ],
      popular: true,
      delay: 0.1
    },
    {
      title: 'El sistema nervioso central de tu operación',
      description: 'Los CRMs genéricos te obligan a adaptarte a ellos. El tuyo se adapta a vos: tu lógica de negocio, tus reglas, tus flujos.',
      icon: 'dataset',
      features: [
        'Panel unificado con todo lo que necesitás ver, nada que no uses',
        'Se conecta con las herramientas que ya tenés',
        'Tus procesos quedan en el sistema, no en la cabeza de nadie',
      ],
      popular: false,
      delay: 0.2
    }
  ];

  return (
    <section className="bg-background-dark py-24" id="soluciones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Nuestras Soluciones</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Tecnología al servicio de tu rentabilidad</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className={`flex flex-col items-start p-6 rounded-xl transition-colors relative ${
                item.popular 
                  ? 'border border-primary/20 bg-primary/5 hover:bg-white/5' 
                  : 'hover:bg-white/5'
              }`}
            >
              {item.popular && (
                <div className="absolute top-0 right-0 bg-primary text-navy-dark text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
              
              <div className="p-3 bg-navy-surface rounded-lg border border-white/10 mb-6">
                <span className="material-icons text-primary text-3xl">{item.icon}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {item.description}
              </p>
              
              <ul className="space-y-2 mb-6 text-sm text-gray-500 w-full">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
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
