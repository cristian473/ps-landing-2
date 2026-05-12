import { motion } from 'framer-motion';

/**
 * Sección de cierre / llamada a la acción para /erp.
 * Sin pricing público todavía — todos los CTAs van al formulario de contacto
 * pidiendo una llamada/demo.
 */
export default function ErpCTA() {
  return (
    <section className="bg-navy-dark py-20 md:py-24 relative" id="probar-erp">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/15 via-navy-surface to-navy-surface shadow-[0_0_80px_rgba(56,182,255,0.15)] p-8 md:p-12 text-center"
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(56,182,255,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_40%)]" />

          <div className="relative z-10">
            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">
              Probalo en una demo
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              ¿Querés ver si Puro ERP es para tu negocio?
            </h2>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Coordinamos una llamada de 30 minutos, te mostramos la plataforma en vivo y vemos juntos si encaja con tu operación. Sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/#contacto?interest=erp_saas"
                onClick={() => {
                  window.trackCTAClick?.('erp_cta_demo', 'erp_cta');
                  window.dispatchEvent(
                    new CustomEvent('contact:prefill', {
                      detail: { interest: 'erp_saas' },
                    }),
                  );
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-bold text-navy-dark hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(56,182,255,0.3)] hover:shadow-[0_0_30px_rgba(56,182,255,0.5)]"
              >
                Agendar una llamada
                <span className="material-icons text-base">arrow_forward</span>
              </a>
              <a
                href="#demo-plataforma"
                onClick={() =>
                  window.trackCTAClick?.('erp_cta_video', 'erp_cta_secondary')
                }
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/5 transition-colors"
              >
                Ver el tour de la plataforma
                <span className="material-icons text-base">play_circle</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
