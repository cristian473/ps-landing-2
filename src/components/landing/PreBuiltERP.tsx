import { motion } from 'framer-motion';

/**
 * Sección de features de /erp en dos niveles: primero los diferenciadores
 * (módulos a medida, asistente IA con confirmación, demo por rubro,
 * profundidad operativa) como filas editoriales, después el checklist
 * compacto de módulos base. Mantener sincronizado con el estado real del
 * SaaS en puroerp-demos/puroerp-saas (docs/PRODUCT.md y docs/demos/).
 */

type Differentiator = {
  kicker: string;
  title: string;
  body: string;
  cta?: { label: string; href: string; event: string };
};

const DIFFERENTIATORS: Differentiator[] = [
  {
    kicker: 'A tu medida',
    title: '¿Necesitás algo que ningún sistema tiene? Lo armamos.',
    body:
      'Módulos propios para tu rubro, hechos por el mismo equipo que desarrolla el producto.',
  },
  {
    kicker: 'IA con control',
    title: 'Un asistente que trabaja adentro del sistema',
    body:
      'Preguntale qué se vendió o pedile que arme un pedido, desde el sistema o por WhatsApp. Nada se ejecuta sin tu confirmación.',
  },
  {
    kicker: 'Demo en 2 pasos',
    title: 'Probalo con un negocio como el tuyo',
    body:
      'Decinos tu rubro y la IA te arma una cuenta de prueba con productos, clientes y ventas ya cargados.',
    cta: {
      label: 'Quiero probar la demo',
      href: '/#contacto?interest=erp_saas',
      event: 'erp_modules_demo',
    },
  },
  {
    kicker: 'Operación real',
    title: 'Aguanta el día a día de verdad',
    body:
      'Reparto con hojas de ruta, picking, cheques, retenciones, conciliación bancaria. Nada de Excel al costado.',
  },
  {
    kicker: 'Arranque rápido',
    title: 'Operando en tu primera semana',
    body:
      'Importamos tus datos desde Excel, configuramos todo con vos y capacitamos a tu equipo.',
  },
  {
    kicker: 'Sin intermediarios',
    title: 'Hablás con quienes lo hacen',
    body:
      'Soporte directo del equipo que desarrolla el sistema. Sin call center, sin revendedores.',
  },
];

const BASE_MODULES = [
  'Ventas y POS de mostrador',
  'Pedidos y presupuestos',
  'Stock por depósito y sucursal',
  'Caja y cobranzas',
  'Cuentas corrientes de clientes',
  'Compras y proveedores',
  'Facturación electrónica AFIP / ARCA',
  'Notas de crédito y débito',
  'Listas de precios y promociones',
  'Cheques y tesorería',
  'Reparto y logística',
  'Reportes y dashboard',
  'Usuarios sin límite, con permisos',
  'Multi-sucursal',
  'Mercado Libre y Tienda Nube',
  'Exportás todo a Excel cuando quieras',
];

export default function PreBuiltERP() {
  return (
    <section className="bg-black py-20 md:py-28 relative overflow-hidden" id="modulos">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Por qué Puro ERP
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            El sistema se adapta a tu negocio. No al revés.
          </h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Viene completo desde el día uno. Y si a tu operación le falta algo,
            lo armamos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 md:gap-y-14">
          {DIFFERENTIATORS.map((d, idx) => (
            <motion.div
              key={d.kicker}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
              className="border-t border-white/10 pt-6"
            >
              <span className="text-primary font-bold tracking-wider uppercase text-xs block mb-2">
                {d.kicker}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                {d.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {d.body}
              </p>
              {d.cta && (
                <a
                  href={d.cta.href}
                  onClick={() => {
                    window.trackCTAClick?.(d.cta!.event, 'erp_modules');
                    window.dispatchEvent(
                      new CustomEvent('contact:prefill', {
                        detail: { interest: 'erp_saas' },
                      }),
                    );
                  }}
                  className="mt-4 inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                >
                  {d.cta.label}
                  <span className="material-icons text-base">arrow_forward</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 md:mt-20 rounded-2xl border border-white/10 bg-navy-surface p-6 sm:p-8 md:p-10"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
            Y todo lo que un sistema de gestión tiene que tener
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
            {BASE_MODULES.map((m) => (
              <li key={m} className="flex items-start gap-2.5">
                <span className="material-icons text-primary text-lg mt-0.5">check</span>
                <span className="text-gray-200 text-sm leading-relaxed">{m}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-gray-300 text-sm md:text-base leading-relaxed border-t border-white/10 pt-6">
            ¿Falta algo que tu negocio necesita? De eso nos ocupamos nosotros.{' '}
            <a
              href="/#contacto?interest=erp_saas"
              onClick={() => {
                window.trackCTAClick?.('erp_modules_missing', 'erp_modules');
                window.dispatchEvent(
                  new CustomEvent('contact:prefill', {
                    detail: { interest: 'erp_saas' },
                  }),
                );
              }}
              className="text-primary font-semibold hover:underline"
            >
              Contanos qué te falta
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
