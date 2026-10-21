import { motion } from 'framer-motion';

export default function ErpCTABanner() {
  return (
    <section className="bg-black py-12 md:py-16 relative" id="erp-banner">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Nuestro producto propio
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-surface p-6 sm:p-8 md:p-10"
        >
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Puro ERP: sistema de gestión listo para usar
              </h3>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl">
                Ventas, stock, caja y facturación AFIP para negocios argentinos, con asistente de IA.
              </p>
            </div>

            <a
              href="/erp"
              onClick={() =>
                window.trackCTAClick?.('erp_banner_click', 'home_erp_banner')
              }
              className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm md:text-base font-bold text-navy-dark hover:bg-primary/90 transition-colors shrink-0"
            >
              Conocer Puro ERP
              <span className="material-icons text-base">arrow_forward</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
