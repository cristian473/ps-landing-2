import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type FAQItem = {
  q: string;
  a: string;
};

const DEFAULT_FAQS: FAQItem[] = [
  {
    q: '¿Cómo cobran? ¿Es proyecto fijo o por horas?',
    a: 'Las dos. Si tu proyecto tiene alcance definido, cotizamos cerrado: precio fijo, fecha de entrega y qué incluye. Si necesitás evolucionar tu sistema mes a mes, armamos un pack de horas con equipo dedicado. En la primera llamada vemos cuál te conviene.',
  },
  {
    q: '¿Cuánto tarda un proyecto típico?',
    a: 'Un proyecto típico tarda entre 2 y 3 meses, desde el descubrimiento hasta la entrega en producción. Proyectos más chicos — integraciones puntuales, módulos específicos, automatizaciones — pueden cerrarse antes.',
  },
  {
    q: '¿Quién es dueño del código al final?',
    a: 'El cliente. Código fuente, documentación y accesos quedan a tu nombre al cierre del proyecto. Sin licencias raras ni candados.',
  },
  {
    q: '¿Tienen NDA / pueden firmar confidencialidad?',
    a: 'Sí, firmamos acuerdo de confidencialidad antes de empezar si lo necesitás. Trabajamos con datos sensibles de clientes desde 2020.',
  },
  {
    q: '¿Dónde se hostea? ¿Quién paga el servidor?',
    a: 'Recomendamos servidor propio en AWS (opcional). Lo pagás vos directo al proveedor — mantenés control total de tu infraestructura y datos. Te ayudamos con el setup inicial.',
  },
  {
    q: '¿Hacen mantenimiento post-entrega?',
    a: 'Sí. Después de la entrega podés contratar mantenimiento y soporte como pack mensual de horas. Es la modalidad que usan los clientes que evolucionan su plataforma todos los meses.',
  },
  {
    q: '¿Trabajan con clientes fuera de Argentina?',
    a: 'Sí. Trabajamos con clientes en toda la región y en Estados Unidos. Operamos remoto desde Argentina con reuniones en español o inglés.',
  },
  {
    q: '¿Facturan A o B? ¿En USD o ARS?',
    a: 'Facturamos Factura A y B en pesos argentinos (ARS).',
  },
];

type FAQProps = {
  items?: FAQItem[];
  eyebrow?: string;
  title?: string;
};

export default function FAQ({
  items = DEFAULT_FAQS,
  eyebrow = 'Preguntas frecuentes',
  title = 'Lo que querés saber antes de la llamada',
}: FAQProps) {
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
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {items.map((faq, idx) => {
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
                      <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-300 text-sm sm:text-base leading-relaxed">
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
