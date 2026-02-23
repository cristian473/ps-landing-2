import { motion } from 'framer-motion';

export default function CorralonCase() {
  return (
    <div className="bg-background-dark min-h-screen w-full overflow-x-hidden">
      {/* Simple Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-white font-bold text-lg hover:text-primary transition-colors">
            Puro Software
          </a>
          <a
            href="/#contacto"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* El Momento Section */}
      <MomentoSection />

      {/* Cómo Funciona Section */}
      <ComoFuncionaSection />

      {/* Qué lo hace diferente Section */}
      <DiferenciaSection />

      {/* Resultados Section */}
      <ResultadosSection />

      {/* Garantía Section */}
      <GarantiaSection />

      {/* CTA Section */}
      <CTASection />

      {/* Simple Footer */}
      <footer className="bg-black py-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Puro Software. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-background-dark" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary" />
          Herramienta para corralones
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight text-white"
        >
          Tu corralón responde presupuestos por WhatsApp al instante —{' '}
          <span className="text-primary">aunque estés en el mostrador</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 mb-10 leading-relaxed"
        >
          Una herramienta que detecta pedidos de precio, consulta tu lista actualizada y responde sola. Sin chatbots molestos. Sin reemplazar tu atención.
        </motion.p>

        {/* WhatsApp Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-xl border border-white/10 shadow-2xl max-w-md mx-auto overflow-hidden"
        >
          <div className="bg-[#075E54] p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="material-icons text-gray-600">person</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Cliente</p>
              <p className="text-green-200 text-xs">en línea</p>
            </div>
          </div>
          <div className="bg-[#ECE5DD] p-3 sm:p-4 space-y-3">
            {/* Cliente message */}
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-tl-none p-2 sm:p-3 max-w-[85%] shadow-sm">
                <p className="text-gray-800 text-xs sm:text-sm">Hola, necesito precio de 50 bolsas de cemento marca Avellaneda</p>
                <p className="text-gray-500 text-xs text-right mt-1">10:32</p>
              </div>
            </div>
            {/* Auto response */}
            <div className="flex justify-end">
              <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none p-2 sm:p-3 max-w-[85%] shadow-sm">
                <p className="text-gray-800 text-xs sm:text-sm font-medium">Presupuesto Corralón</p>
                <p className="text-gray-700 text-xs sm:text-sm mt-2">50 x Cemento Avellaneda 50kg</p>
                <p className="text-gray-700 text-xs sm:text-sm">Precio unit: $8.500</p>
                <p className="text-gray-800 text-xs sm:text-sm font-bold mt-2">Total: $425.000</p>
                <p className="text-gray-600 text-xs mt-2">Retiro en depósito o consultar envío</p>
                <p className="text-gray-500 text-xs text-right mt-1">10:32 <span className="text-blue-500">✓✓</span></p>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl -z-10 scale-105" />
        </motion.div>
      </div>
    </section>
  );
}

function MomentoSection() {
  return (
    <section className="py-16 lg:py-24 bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">El momento que todos conocen</span>

          <div className="bg-navy-surface rounded-2xl p-8 md:p-12 border border-white/10 mt-8">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Estás atendiendo en el mostrador. Suena el WhatsApp.{' '}
              <span className="text-white font-medium">"Hola, ¿precio de 100 bloques?"</span>
            </p>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mt-4">
              Tenés las manos ocupadas. El cliente de adelante espera. El mensaje queda ahí.
            </p>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mt-4">
              Cuando llegás a responder,{' '}
              <span className="text-red-400 font-medium">el cliente ya le compró a otro</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ComoFuncionaSection() {
  const pasos = [
    {
      icon: 'mail',
      numero: '1',
      titulo: 'El cliente pide un presupuesto por WhatsApp',
      descripcion: 'Escribe lo que necesita como siempre: "precio de 20 varillas del 10" o "cuánto sale arena gruesa x metro"',
    },
    {
      icon: 'bolt',
      numero: '2',
      titulo: 'El sistema lo detecta y consulta tu lista de precios',
      descripcion: 'Identifica automáticamente que es un pedido de precio y busca en tu lista actualizada',
    },
    {
      icon: 'check_circle',
      numero: '3',
      titulo: 'Responde al instante con el cálculo exacto',
      descripcion: 'El cliente recibe el presupuesto en segundos — sin que toques nada',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-navy-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Cómo funciona</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Tres pasos. Cero intervención.</h2>
        </motion.div>

        <div className="space-y-6">
          {pasos.map((paso, index) => (
            <motion.div
              key={paso.numero}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex items-start gap-6 bg-black/30 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{paso.numero}</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{paso.titulo}</h3>
                <p className="text-gray-400">{paso.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiferenciaSection() {
  const comparaciones = [
    {
      chatbot: 'Responde a todo y confunde al cliente',
      herramienta: 'Solo actúa en pedidos de presupuesto',
    },
    {
      chatbot: 'Respuestas confusas o genéricas',
      herramienta: 'Precios exactos de tu lista real',
    },
    {
      chatbot: 'Complica la atención humana',
      herramienta: 'No interfiere en nada más',
    },
    {
      chatbot: 'Difícil de actualizar',
      herramienta: 'Actualizás la lista y listo',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Qué lo hace diferente</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">No es un chatbot genérico</h2>
        </motion.div>

        <div className="bg-navy-surface rounded-2xl border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 bg-black/40">
            <div className="p-4 text-center border-r border-white/10">
              <span className="text-red-400 font-bold text-sm uppercase tracking-wider">Chatbot genérico</span>
            </div>
            <div className="p-4 text-center">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Esta herramienta</span>
            </div>
          </div>

          {/* Rows */}
          {comparaciones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="grid grid-cols-2 border-t border-white/5"
            >
              <div className="p-4 flex items-center gap-3 border-r border-white/10">
                <span className="material-icons text-red-400 text-lg">close</span>
                <span className="text-gray-400 text-sm">{item.chatbot}</span>
              </div>
              <div className="p-4 flex items-center gap-3">
                <span className="material-icons text-primary text-lg">check</span>
                <span className="text-white text-sm">{item.herramienta}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultadosSection() {
  const resultados = [
    {
      icon: 'bolt',
      texto: 'Respuesta en segundos, no en horas',
    },
    {
      icon: 'description',
      texto: 'Presupuestos con tu formato y tus precios reales',
    },
    {
      icon: 'handshake',
      texto: 'Tu atención humana intacta',
    },
    {
      icon: 'attach_money',
      texto: 'Ventas que antes se perdían por demora',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-navy-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Resultados</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Lo que cambia en tu día a día</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resultados.map((resultado, index) => (
            <motion.div
              key={resultado.texto}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-black/30 rounded-xl p-5 border border-white/5"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-icons text-primary text-xl">{resultado.icon}</span>
              </div>
              <p className="text-white font-medium">{resultado.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GarantiaSection() {
  return (
    <section className="py-16 lg:py-24 bg-background-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/30">
            {/* Shield icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="material-icons text-navy-dark text-2xl">verified_user</span>
              </div>
            </div>

            <div className="text-center pt-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Garantía de funcionamiento</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Si en <span className="text-primary font-bold">30 días</span> no responde correctamente el{' '}
                <span className="text-primary font-bold">95% de los presupuestos</span> con tus precios,{' '}
                <span className="text-white font-bold">te devolvemos el dinero</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background-dark to-navy-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            ¿Cuántos presupuestos perdés por día por no llegar a responder a tiempo?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Tomamos 2 proyectos por trimestre. Si esto resuena, tiene sentido hablarlo.
          </p>
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-primary text-navy-dark px-8 py-4 rounded font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(56,182,255,0.3)] hover:shadow-[0_0_30px_rgba(56,182,255,0.5)] transform hover:scale-105"
          >
            Quiero verlo en acción
            <span className="material-icons">arrow_forward</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
