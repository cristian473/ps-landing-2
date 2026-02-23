import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-black" />
      
      {/* Abstract Background Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none select-none">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmLzlp0LicHWFcenodYVElI8Ee6BgwjxGfX8bQUhPHLGSHiPDSwbkryk5aWRk-cSY2Zq23aYW5SRzsBtHYQzGYeekMlv5ucLS4NktU1asEWTju9S7Zx3wOKjV159yMq8HD12OBmuTDKETHpKJWjrMeiUDmCJT2Y1ChKLlV73qEAOwEWBFe1PTuZjLL58LXVkiNsRvcw8QrkAznhFZfd9oDsZRDaXtVjzsLEE2cJThn1ge8rJ1T0VWDCvtO0NAICxb3Wz7_qOFfYjSh" 
          alt="Abstract Data Pattern" 
          className="w-full h-full object-cover mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Software a medida para líderes
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight max-w-5xl mx-auto text-white"
        >
          Tu negocio tiene un límite. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
            Nuestro software lo elimina.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Automatización inteligente y desarrollo a medida. Elimina las costosas suscripciones mensuales y escala sin límites con una solución que es 100% de tu propiedad.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a 
            href="#contacto"
            className="bg-primary text-navy-dark px-8 py-4 rounded font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(56,182,255,0.3)] hover:shadow-[0_0_30px_rgba(56,182,255,0.5)] transform hover:scale-105"
          >
            Agendar mi consultoría gratuita
          </a>
          <a 
            href="#casos"
            className="px-8 py-4 rounded border border-white/20 hover:border-primary/50 text-white font-medium transition-all hover:bg-white/5"
          >
            Ver casos de éxito
          </a>
        </motion.div>
      </div>
    </section>
  );
}
