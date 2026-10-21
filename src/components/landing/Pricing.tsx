import { motion } from 'framer-motion';

type PlanFeature = string;

type Plan = {
  badge?: string;
  highlighted?: boolean;
  title: string;
  description: string;
  features: PlanFeature[];
  ctaText: string;
  ctaTracking: string;
  ctaLocation: string;
  ctaInterest: string;
  footnote?: string;
};

const PLANS: Plan[] = [
  {
    highlighted: true,
    title: 'Proyecto cerrado',
    description:
      'Para construir algo nuevo (web app, integración, app móvil o MVP) sabiendo desde el día uno qué incluye. Cotización con fecha de entrega definida.',
    features: [
      'Análisis técnico antes de cotizar',
      'Cotización clara: qué incluye, qué no, en cuánto tiempo',
      'Sprints con demos periódicas',
      'Mantenimiento y soporte post-entrega disponibles',
      'El código y la documentación quedan del lado del cliente',
    ],
    ctaText: 'Cotizar mi proyecto',
    ctaTracking: 'pricing_proyecto_cerrado',
    ctaLocation: 'pricing_plan_1',
    ctaInterest: 'proyecto_cerrado',
  },
  {
    title: 'Pack mensual de horas',
    description:
      'Para clientes que ya tienen su sistema y lo evolucionan mes a mes: funcionalidades nuevas, integraciones, mantenimiento.',
    features: [
      'Slack / WhatsApp directo con el equipo',
      'Reporte mensual de horas',
      'Mismo equipo todos los meses',
      'Soporte de producción incluido en las horas',
      'Sin permanencia obligatoria',
    ],
    ctaText: 'Consultar pack',
    ctaTracking: 'pricing_pack_horas',
    ctaLocation: 'pricing_plan_2',
    ctaInterest: 'pack_horas',
    footnote: 'Pedinos una llamada y armamos un pack a la medida de tu operación.',
  },
];

export default function Pricing() {
  return (
    <section className="bg-black py-24 pb-16 relative" id="precios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-gray-300 max-w-2xl">
            Trabajamos por proyecto cerrado o con un pack mensual de horas de desarrollo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {PLANS.map((plan, idx) => (
            <motion.article
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col h-full transition-colors ${
                plan.highlighted
                  ? 'bg-navy-surface border-primary/50'
                  : 'bg-navy-surface border-white/10 hover:border-white/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-navy-dark shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={`material-icons text-base mt-0.5 shrink-0 ${
                        plan.highlighted ? 'text-primary' : 'text-primary/70'
                      }`}
                    >
                      check_circle
                    </span>
                    <span className="text-gray-200 text-sm sm:text-base leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`/?interest=${encodeURIComponent(plan.ctaInterest)}#contacto`}
                onClick={() => {
                  window.trackCTAClick?.(plan.ctaTracking, plan.ctaLocation);
                  window.dispatchEvent(
                    new CustomEvent('contact:prefill', {
                      detail: { interest: plan.ctaInterest },
                    }),
                  );
                }}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm sm:text-base font-bold transition-colors ${
                  plan.highlighted
                    ? 'bg-primary text-navy-dark hover:bg-primary/90'
                    : 'border border-white/15 text-white hover:bg-white/5 hover:border-primary/40'
                }`}
              >
                {plan.ctaText}
                <span className="material-icons text-base">arrow_forward</span>
              </a>

              {plan.footnote && (
                <p className="text-xs text-gray-400 mt-4 text-center leading-relaxed">
                  {plan.footnote}
                </p>
              )}
            </motion.article>
          ))}
        </div>

        <p className="text-center text-sm text-gray-300 mt-10 max-w-2xl mx-auto">
          Facturamos en pesos argentinos (ARS), Factura A o B. NDA disponible si tu proyecto lo requiere.
        </p>
      </div>
    </section>
  );
}
