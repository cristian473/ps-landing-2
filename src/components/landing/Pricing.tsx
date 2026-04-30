import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section className="bg-black py-24 pb-12 relative" id="inversion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Inversión esperada
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Cuánto cuesta tu propio sistema?
          </h2>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col p-6 sm:p-8 rounded-2xl border border-primary/40 bg-primary/5 shadow-[0_0_40px_rgba(56,182,255,0.15)] text-center"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 text-primary mx-auto">
              <span className="material-icons text-3xl">rocket_launch</span>
            </div>

            <p className="text-sm text-gray-400 mb-1">Desde</p>
            <p className="text-5xl md:text-6xl font-extrabold text-primary mb-4 tracking-tight">
              USD 1.000
            </p>
            <p className="text-gray-300 leading-relaxed">
              Pago único, no suscripción. 50% al inicio, 50% al entregar.
              El sistema queda 100% tuyo.
              {' '}<span className="text-white font-semibold">Luego servidor desde USD 10/mes.</span>{' '}
              Tu sistema vive en un servidor propio, nosotros te lo configuramos.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-md mt-10 max-w-2xl mx-auto"
        >
          <span className='font-bold' >Comparalo:</span> un SaaS de gestión cuesta entre USD 200 y 500 por mes para siempre.
          Tu sistema propio se paga una sola vez y no tiene limites.
        </motion.p>
      </div>
    </section>
  );
}
