import { motion } from 'framer-motion';

/**
 * Hero específico de la página /erp. Variante del Hero de la home, con copy
 * de producto (no de agencia). Mantiene el patrón visual (gradient navy→black,
 * AVIF abstract bg en desktop, animaciones framer-motion) para coherencia.
 * H1 sin gradient text — color sólido con una palabra en text-primary.
 */
export default function HeroErp() {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-44 lg:pb-28 overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-black" />

      <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none select-none">
        <picture>
          <source type="image/avif" srcSet="/hero/abstract-data.avif" />
          <source type="image/webp" srcSet="/hero/abstract-data.webp" />
          <img
            src="/hero/abstract-data.webp"
            alt=""
            aria-hidden="true"
            width={512}
            height={512}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover mix-blend-screen"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Sistema de gestión · Para negocios argentinos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight max-w-5xl mx-auto text-white"
        >
          Excel y WhatsApp <span className="text-primary">ya no alcanzan.</span>{' '}
          <br className="hidden sm:block" />
          Te damos el sistema que sí.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Ventas, stock, caja, compras y facturación AFIP en una sola plataforma. Listo para usar, sin esperar meses de desarrollo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
        >
          <a
            href="/?interest=erp_saas#contacto"
            onClick={() => {
              window.trackCTAClick?.('erp_hero_demo', 'erp_hero');
              window.dispatchEvent(
                new CustomEvent('contact:prefill', {
                  detail: { interest: 'erp_saas' },
                }),
              );
            }}
            className="bg-primary text-navy-dark px-6 sm:px-8 py-4 rounded font-bold text-base sm:text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(56,182,255,0.3)] hover:shadow-[0_0_30px_rgba(56,182,255,0.5)] transform hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            Agendar una llamada
            <span className="material-icons">arrow_forward</span>
          </a>
          <a
            href="#demo-plataforma"
            onClick={() => window.trackCTAClick?.('erp_hero_video', 'erp_hero_secondary')}
            className="border border-white/15 text-white px-6 sm:px-8 py-4 rounded font-semibold text-base sm:text-lg hover:bg-white/5 hover:border-primary/40 transition-all inline-flex items-center justify-center gap-2"
          >
            Ver demo
            <span className="material-icons text-base">play_circle</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
