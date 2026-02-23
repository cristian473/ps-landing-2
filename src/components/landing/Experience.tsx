import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden border-y border-white/5" id="experiencia">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 relative z-10 text-center"
      >
        <span className="material-icons text-6xl text-primary/30 mb-6">format_quote</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
          <span className="text-primary">6+ Años</span> transformando procesos manuales en ventajas competitivas digitales.
        </h2>
        <p className="text-lg text-gray-400 font-light">
          No somos una agencia que "hace de todo". Somos especialistas en ingeniería de software para empresas que exigen robustez.
        </p>
      </motion.div>
    </section>
  );
}
