import { motion } from 'framer-motion';

type PlanFeature = string;

type Plan = {
  badge?: string;
  highlighted?: boolean;
  icon: string;
  title: string;
  description: string;
  features: PlanFeature[];
  ctaText: string;
  ctaTracking: string;
  ctaLocation: string;
  ctaInterest: string;
  footnote: string;
};

const PLANS: Plan[] = [
  {
    badge: 'Más elegido',
    highlighted: true,
    icon: 'assignment_turned_in',
    title: 'Proyecto cerrado',
    description:
      'Cotización por alcance, con fecha de entrega definida. Ideal para construir una pieza nueva — web app, integración, app móvil o un MVP — sabiendo desde el día uno qué incluye.',
    features: [
      'Descubrimiento técnico antes de cotizar',
      'Cotización clara: qué incluye, qué no, en cuánto tiempo',
      'Sprints con demos periódicas — sin sorpresas al final',
      'Mantenimiento y soporte post-entrega disponibles',
      'El código y la documentación quedan del cliente',
    ],
    ctaText: 'Cotizar mi proyecto',
    ctaTracking: 'pricing_proyecto_cerrado',
    ctaLocation: 'pricing_plan_1',
    ctaInterest: 'proyecto_cerrado',
    footnote: 'Te respondemos para coordinar una llamada de descubrimiento.',
  },
  {
    icon: 'schedule',
    title: 'Pack mensual de horas',
    description:
      'Para clientes que ya tienen su sistema y lo evolucionan mes a mes: features nuevos, integraciones, mantenimiento. Equipo dedicado con horas mínimas por mes.',
    features: [
      'Slack / WhatsApp directo con el equipo',
      'Reporte mensual de horas consumidas',
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
          className="mb-14 text-center"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Cómo trabajamos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dos modalidades, una sola promesa
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Cotización clara, cero abonos eternos. Trabajamos por proyecto cerrado o con un pack mensual de horas de desarrollo — según lo que tu negocio necesite.
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
              className={`relative rounded-3xl border p-6 sm:p-8 flex flex-col h-full transition-colors ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary/10 via-navy-surface to-navy-surface border-primary/40 shadow-[0_0_60px_rgba(56,182,255,0.12)]'
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

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    plan.highlighted ? 'bg-primary text-navy-dark' : 'bg-white/5 text-primary'
                  }`}
                >
                  <span className="material-icons text-2xl">{plan.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
              </div>

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
                href="#contacto"
                onClick={() => {
                  window.trackCTAClick?.(plan.ctaTracking, plan.ctaLocation);
                  window.dispatchEvent(
                    new CustomEvent('contact:prefill', {
                      detail: { interest: plan.ctaInterest },
                    }),
                  );
                }}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm sm:text-base font-bold transition-all ${
                  plan.highlighted
                    ? 'bg-primary text-navy-dark hover:bg-primary/90 shadow-[0_0_20px_rgba(56,182,255,0.3)] hover:shadow-[0_0_30px_rgba(56,182,255,0.5)]'
                    : 'border border-white/15 text-white hover:bg-white/5 hover:border-primary/40'
                }`}
              >
                {plan.ctaText}
                <span className="material-icons text-base">arrow_forward</span>
              </a>

              <p className="text-xs text-gray-400 mt-4 text-center leading-relaxed">
                {plan.footnote}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-10 max-w-2xl mx-auto">
          Facturamos en pesos argentinos (ARS), Factura A o B. NDA disponible si tu proyecto lo requiere.
        </p>
      </div>
    </section>
  );
}
