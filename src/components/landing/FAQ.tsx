import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: '¿Cómo entregan rápido si es a medida?',
    a: 'Porque no empezamos de cero. Tenemos una base de ERP probada que ya cubre el 80% de la operación común: pedidos, stock, clientes, facturación, reportes, integraciones. Las 4 semanas las usamos para adaptarla a tu lógica de negocio, no para construir lo que ya está hecho.',
  },
  {
    q: '¿Qué incluye el mantenimiento mensual?',
    a: 'Según el plan, puede incluir hosting, soporte técnico, actualizaciones y evolución continua. Lo definimos desde el arranque para que sepas qué está cubierto y qué implicaría sumar nuevos módulos o integraciones.',
  },
  {
    q: '¿Qué pasa después de la implementación?',
    a: 'No te soltamos después de entregar. Podés seguir con mantenimiento y soporte mensual para operar, corregir, mejorar y seguir evolucionando el sistema sin tener que empezar otro proyecto cada vez.',
  },
  {
    q: '¿Cuándo conviene arrancar con sistema de gestión y cuándo con sistema a medida?',
    a: 'Si tu operación entra bastante bien en una base estándar, conviene arrancar por ahí y acelerar la salida. Si necesitás lógica propia, integraciones o módulos específicos de tu rubro, conviene ir directo al desarrollo a medida. En la primera llamada te decimos qué camino te conviene.',
  },
  {
    q: '¿Para qué tipo de empresa NO es?',
    a: 'Si tenés menos de 5 personas operando o todavía estás validando el modelo de negocio, probablemente no necesitás un sistema propio. Te lo decimos en la primera llamada sin venderte nada.',
  },
];

export default function FAQ() {
  // En desktop arrancamos con la primera pregunta abierta como demo. En mobile
  // (≤768px) arrancamos todas cerradas para no empujar contenido fuera del fold.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (isDesktop) setOpenIndex(0);
  }, []);

  return (
    <section className="bg-black py-24 relative" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo que querés saber antes de la llamada
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`bg-navy-surface border rounded-xl overflow-hidden transition-colors ${
                  isOpen ? 'border-primary/40' : 'border-white/10'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.q}
                  </span>
                  <span
                    className={`material-icons text-primary transition-transform shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-400 text-sm sm:text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
