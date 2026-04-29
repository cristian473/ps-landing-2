import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: '¿En cuánto tiempo lo tengo funcionando?',
    a: 'El primer módulo en producción a las 4 semanas. El sistema completo entre 2 y 3 meses según el alcance. Si no cumplimos con la entrega del primer módulo, esa fase no se cobra.',
  },
  {
    q: '¿Qué pasa si no funciona o no me gusta?',
    a: 'Tenés garantía sobre el primer módulo: si en 4 semanas no está en producción, no lo pagás. Después acompañamos con soporte e iteración continua hasta que el sistema haga lo que necesitás.',
  },
  {
    q: '¿Quién mantiene el sistema después?',
    a: 'Tenés dos opciones: contratás soporte mensual con nosotros (desde USD 200/mes) o pasás el código a tu equipo interno. El sistema es 100% tuyo, sin lock-in.',
  },
  {
    q: '¿Por qué no usar un SaaS existente?',
    a: 'Si encontrás un SaaS que se adapta a tu operación al 100%, usalo. La gente nos llama cuando ya pagaron 2 o 3 SaaS distintos y ninguno hace exactamente lo que necesitan, o cuando el costo mensual ya supera lo que cuesta tener un sistema propio.',
  },
  {
    q: '¿Para qué tipo de empresa NO es?',
    a: 'Si tenés menos de 5 personas operando o todavía estás validando el modelo de negocio, probablemente no necesitás un sistema propio. Te lo decimos en la primera llamada sin venderte nada.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
