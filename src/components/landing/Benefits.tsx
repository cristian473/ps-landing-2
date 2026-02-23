import { motion } from 'framer-motion';

export default function Benefits() {
  const benefits = [
    {
      title: 'Ahorro Inteligente',
      description: 'Deja de pagar licencias mensuales por usuario. Tu software es tuyo para siempre; solo pagas el mantenimiento del servidor (ej. $20/mes).',
      icon: 'savings',
      delay: 0
    },
    {
      title: 'Escalabilidad Real',
      description: 'Infraestructura diseñada para crecer. Duplica tus usuarios o transacciones sin que tu sistema colapse ni tus costos se disparen.',
      icon: 'trending_up',
      delay: 0.1
    },
    {
      title: 'Control Total',
      description: 'Dashboards centralizados que eliminan los puntos ciegos. Toma decisiones basadas en datos en tiempo real.',
      icon: 'dashboard',
      delay: 0.2
    },
    {
      title: 'Cero Improvisación',
      description: 'Estandariza tus procesos. Reduce el error humano al mínimo con flujos de trabajo validados por código.',
      icon: 'verified',
      delay: 0.3
    }
  ];

  return (
    <section className="bg-black py-24 relative" id="beneficios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">¿Por qué invertir en software propio?</h2>
          <div className="h-1 w-20 bg-primary rounded" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <motion.div 
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: benefit.delay }}
              className="group bg-navy-surface p-8 rounded-lg border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-navy-dark transition-colors">
                <span className="material-icons text-3xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
