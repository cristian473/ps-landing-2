import { motion } from 'framer-motion';

const steps = [
  {
    icon: 'search',
    title: 'Discovery',
    text: 'Entendemos tu operación y definimos alcance.',
  },
  {
    icon: 'design_services',
    title: 'Diseño',
    text: 'Prototipo y arquitectura técnica.',
  },
  {
    icon: 'build',
    title: 'Build',
    text: 'Sprints con demos periódicas.',
  },
  {
    icon: 'rocket_launch',
    title: 'Entrega',
    text: 'Producción, código y documentación a tu nombre.',
  },
  {
    icon: 'support_agent',
    title: 'Soporte',
    text: 'Mantenimiento y evolución mensual.',
  },
];

const metrics = [
  { value: '6+', label: 'clientes en producción' },
  { value: '2-3 meses', label: 'entrega típica de proyecto' },
  { value: 'EE.UU. + LATAM', label: 'clientes activos' },
];

export default function ProcessMetrics() {
  return (
    <section id="proceso" className="bg-black py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="text-primary font-bold tracking-[0.24em] uppercase text-xs mb-3 block">
            Cómo trabajamos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            De la idea a producción, sin sorpresas
          </h2>
        </motion.div>

        <div className="relative mt-14 md:mt-16">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 lg:hidden" aria-hidden="true" />
          <div className="absolute left-0 right-0 top-10 h-px bg-white/10 hidden lg:block" aria-hidden="true" />

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-4">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative pl-16 lg:pl-0 lg:flex-1"
              >
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_0_24px_rgba(56,182,255,0.12)] lg:left-1/2 lg:-translate-x-1/2">
                  <span className="material-icons text-[22px]">{step.icon}</span>
                </div>

                <div className="lg:pt-20">
                  <div className="mb-2 flex items-center gap-3 lg:justify-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                      0{index + 1}
                    </span>
                    {index < steps.length - 1 ? (
                      <span className="material-icons hidden text-[18px] text-white/20 lg:inline">arrow_forward</span>
                    ) : null}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 max-w-sm text-sm sm:text-base leading-relaxed text-gray-300 lg:mx-auto lg:text-center">
                    {step.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-14 md:mt-18 border-y border-white/10 bg-[linear-gradient(90deg,rgba(56,182,255,0.08),rgba(255,255,255,0.02),rgba(56,182,255,0.08))]"
        >
          <div className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-y-0 md:divide-x">
            {metrics.map((metric) => (
              <div key={metric.label} className="px-6 py-8 sm:px-8 md:px-10 md:py-10">
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">{metric.value}</div>
                <p className="mt-3 text-sm sm:text-base text-gray-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
