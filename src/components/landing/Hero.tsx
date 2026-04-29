import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-black" />

      {/* Abstract Background Image — desktop-only (en mobile no aporta y suma carga),
          servida localmente como AVIF/WebP en vez del CDN externo de Google.
          AVIF 18K vs PNG remoto 394K, sin pegada al LCP. Decorativa: aria-hidden. */}
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
        {/* Badge — desktop only. En mobile el copy estorba above-fold. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Para equipos de 5+ personas con operación de volumen real
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight max-w-5xl mx-auto text-white"
        >
          Tu negocio tiene un límite. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
            Nuestro software lo elimina.
          </span>
        </motion.h1>

        {/* Subtitle — más corto en mobile (sin sacrificar el desktop) para que el CTA quede above-fold */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          <span className="md:hidden">
            Pago único. Construido en 4 semanas. 100% tuyo, sin suscripción.
          </span>
          <span className="hidden md:inline">
            Dejás de pagar suscripciones que no se adaptan. Construimos el sistema exacto que necesitás — y queda tuyo para siempre.
          </span>
        </motion.p>

        {/* CTA Buttons — primario full-width en mobile, secundario degradado a link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
        >
          <a
            href="#contacto"
            onClick={() => window.trackCTAClick?.('hero_consultoria_gratuita', 'hero')}
            className="bg-primary text-navy-dark px-6 sm:px-8 py-4 rounded font-bold text-base sm:text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(56,182,255,0.3)] hover:shadow-[0_0_30px_rgba(56,182,255,0.5)] transform hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            Quiero una consultoría gratuita
            <span className="material-icons">arrow_forward</span>
          </a>
          {/* Secundario: en mobile va text-only debajo, en desktop botón al lado */}
          <a
            href="/auditoria-express"
            onClick={() => window.trackCTAClick?.('hero_diagnostico_gratuito', 'hero')}
            className="hidden sm:inline-flex px-8 py-4 rounded border border-white/20 hover:border-primary/50 text-white font-medium transition-all hover:bg-white/5 items-center justify-center gap-2"
          >
            <span className="material-icons text-base">quiz</span>
            Hacé el diagnóstico gratuito (2 min)
          </a>
        </motion.div>

        {/* Mobile-only secondary link — más liviano que un botón */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="sm:hidden mt-3"
        >
          <a
            href="/auditoria-express"
            onClick={() => window.trackCTAClick?.('hero_diagnostico_gratuito', 'hero_mobile_link')}
            className="text-gray-300 hover:text-primary text-sm transition-colors inline-flex items-center gap-1"
          >
            ¿Querés evaluar primero? Diagnóstico de 2 min
            <span className="material-icons text-sm">arrow_forward</span>
          </a>
        </motion.div>

        {/* "Ver casos" — desktop only. En mobile el scroll natural cubre eso. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden md:block mt-4"
        >
          <a
            href="#casos"
            onClick={() => window.trackCTAClick?.('hero_ver_casos', 'hero_secondary')}
            className="text-gray-400 hover:text-primary text-sm transition-colors inline-flex items-center gap-1"
          >
            Ver casos de éxito
            <span className="material-icons text-sm">arrow_downward</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
