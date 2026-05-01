import { motion } from 'framer-motion';

export default function Benefits() {
  const benefits = [
    {
      title: 'Implementación inicial incluida',
      icon: 'savings',
      delay: 0
    },
    {
      title: 'Preparado para integrar otros sistemas e inteligencia artificial en tu operación',
      icon: 'hub',
      delay: 0.1
    },
    {
      title: 'Sin límites de usuarios',
      icon: 'trending_up',
      delay: 0.2
    },
    {
      title: 'Pedidos, stock, caja, clientes y equipo en un mismo lugar',
      icon: 'dashboard',
      delay: 0.3
    },
    {
      title: 'Soporte, mejoras y evolución para que el sistema acompañe tu operación',
      icon: 'verified',
      delay: 0.4
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">¿Por qué elegir nuestro sistema?</h2>
          <div className="h-1 w-20 bg-primary rounded" />
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl">
          {benefits.map((benefit) => (
            <motion.li
              key={benefit.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: benefit.delay }}
              className="flex items-start gap-3"
            >
              <span className="material-icons text-primary text-xl mt-0.5 shrink-0">check_circle</span>
              <span className="text-md md:text-lg text-gray-200 leading-relaxed">
                {benefit.title}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
