import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="relative bg-black pt-24 pb-12" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">¿Listo para escalar?</h2>
          <p className="text-xl text-gray-400 mb-8">
            La consultoría inicial es 100% gratuita. Analizamos tu situación actual y te proponemos una hoja de ruta técnica para automatizar tu negocio.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-navy-surface flex items-center justify-center border border-white/10">
                <span className="material-icons text-primary">check</span>
              </div>
              <div>
                <h4 className="font-bold text-white">Análisis de viabilidad</h4>
                <p className="text-sm text-gray-500">Te diremos honestamente si el software es la solución.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-navy-surface flex items-center justify-center border border-white/10">
                <span className="material-icons text-primary">check</span>
              </div>
              <div>
                <h4 className="font-bold text-white">Presupuesto Transparente</h4>
                <p className="text-sm text-gray-500">Sin costos ocultos ni letras pequeñas.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-navy-surface p-8 rounded-2xl border border-white/10 shadow-2xl relative"
        >
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 blur-2xl rounded-full pointer-events-none" />
          
          <form className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-white">Hablemos de tu proyecto</h3>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre Completo</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Ej. Juan Pérez"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Correo Electrónico Corporativo</label>
              <input 
                type="email" 
                id="email" 
                placeholder="juan@empresa.com"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="process" className="block text-sm font-medium text-gray-400 mb-2">¿Qué proceso necesitas automatizar?</label>
              <textarea 
                id="process" 
                rows={4}
                placeholder="Ej. Necesito un sistema para gestionar inventario y conectar con mi tienda online..."
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            
            <button 
              type="button" 
              className="w-full bg-primary text-navy-dark font-bold text-lg py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 transform active:scale-95"
            >
              Solicitar Consultoría
            </button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              Tus datos están protegidos. No hacemos spam.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
