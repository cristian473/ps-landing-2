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
          className="mb-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Conocé nuestro producto propio
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/12 via-white/[0.04] to-white/[0.02] shadow-[0_0_60px_rgba(56,182,255,0.14)] p-6 sm:p-8 md:p-10"
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(56,182,255,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_32%)]" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-navy-dark shadow-lg shadow-primary/20">
              <span className="material-icons text-3xl">storefront</span>
            </div>

            <div className="flex-1">
              <span className="text-primary font-bold tracking-wider uppercase text-xs mb-1.5 block">
                Producto propio
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                ¿Buscás un ERP que ya esté funcionando?
              </h3>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl">
                Sistema de gestión para negocios argentinos: ventas, stock, caja, facturación AFIP.
              </p>
            </div>

            <a
              href="/erp"
              onClick={() =>
                window.trackCTAClick?.('erp_banner_click', 'home_erp_banner')
              }
              className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm md:text-base font-bold text-navy-dark hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(56,182,255,0.25)] hover:shadow-[0_0_30px_rgba(56,182,255,0.45)] shrink-0"
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
