import { motion } from 'framer-motion';

export default function DistribuidoraB2BCase() {
  return (
    <div className="bg-background-dark min-h-screen w-full overflow-x-hidden">
      {/* Simple Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src="/purosoftware-logo.png" alt="Puro Software" className="h-8 w-auto" />
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

      {/* Context Section */}
      <ContextSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Results Section */}
      <ResultsSection />

      {/* Quote Section */}
      <QuoteSection />

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
          Caso de estudio — Distribución B2B
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight text-white"
        >
          De pedidos por WhatsApp y Excel a un portal propio que procesa{' '}
          <span className="text-primary">300 órdenes por semana</span> sin intervención manual
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 mb-10 leading-relaxed"
        >
          Cómo una distribuidora con 180 clientes empresariales dejó de perder pedidos, errores de precio y horas de administración — con un sistema hecho exactamente para su operación.
        </motion.p>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="browser-frame">
            <div className="browser-bar">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-url">app.puro-software.com</div>
            </div>
            <div className="browser-content">
              <img
                src="/casos/distribuidora-b2b/store-page.png"
                alt="Portal B2B - Vista del cliente"
              />
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl -z-10 scale-105 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

function ContextSection() {
  return (
    <section className="py-16 lg:py-24 bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">El Contexto</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">El punto de partida</h2>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-400 leading-relaxed mb-6">
              Una distribuidora que vende insumos a empresas. <span className="text-white font-semibold">180 clientes activos</span>. Cada uno con su precio acordado, su límite de crédito, sus condiciones de pago.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              <span className="text-primary font-bold">El negocio funcionaba. Pero operarlo era un trabajo en sí mismo.</span>
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Los pedidos llegaban por WhatsApp. Los precios vivían en un Excel que solo una persona sabía leer. Las cuentas corrientes se controlaban en otra planilla. Y cuando algo fallaba — un precio mal aplicado, un pedido que se perdió — nadie sabía bien dónde estaba el error.
            </p>

            <p className="text-gray-400 leading-relaxed">
              <span className="text-white font-semibold">Con ese volumen, era sostenible. Con el doble, imposible.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: 'find_in_page',
      title: 'Pedidos sin trazabilidad',
      description: 'Cada orden llegaba por WhatsApp o mail. Si se perdía, nadie lo sabía hasta que el cliente llamaba.',
    },
    {
      icon: 'price_change',
      title: 'Precios diferenciados imposibles de gestionar',
      description: '180 clientes, 180 listas de precios. El Excel tardaba días en actualizarse y generaba errores constantemente.',
    },
    {
      icon: 'account_balance',
      title: 'Cuentas corrientes manuales',
      description: 'El equipo administrativo pasaba horas por semana controlando pagos, saldos y vencimientos en planillas separadas.',
    },
    {
      icon: 'visibility_off',
      title: 'Sin visibilidad en tiempo real',
      description: 'No sabían cuántos pedidos tenían en curso, qué estaba pendiente de entrega, ni qué clientes estaban al límite de crédito.',
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
          className="mb-12"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">El Problema</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Lo que los frenaba</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/30 rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                <span className="material-icons text-red-400 text-2xl">{problem.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{problem.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const implementations = [
    {
      title: 'Portal de clientes con login propio',
      description: 'Cada empresa ve solo sus precios y condiciones',
    },
    {
      title: 'Gestión de precios por cliente',
      description: 'Listas de precio automáticas, sin Excel, sin errores',
    },
    {
      title: 'Cuenta corriente integrada',
      description: 'Saldo, historial de pagos y límite de crédito en tiempo real',
    },
    {
      title: 'Panel de operaciones interno',
      description: 'Todos los pedidos, estados de entrega y alertas en un solo lugar',
    },
    {
      title: 'Integración con su sistema contable',
      description: 'Sin doble carga, sin copiar datos entre herramientas',
    },
  ];

  const timeline = [
    { period: 'Semana 1-2', task: 'Relevamiento y arquitectura' },
    { period: 'Semana 3-4', task: 'Portal funcionando con los primeros 10 clientes en producción' },
    { period: 'Mes 2', task: 'Migración completa y cierre de las planillas' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">La Solución</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Lo que construimos</h2>
          <p className="text-xl text-primary font-medium">
            Un portal B2B propio. Cada cliente entra con su usuario, ve sus precios, hace su pedido y ve el estado en tiempo real. Sin intermediario.
          </p>
        </motion.div>

        {/* Implementations */}
        <div className="space-y-4 mb-12">
          {implementations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-navy-surface/50 border border-white/5"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="material-icons text-primary text-lg">check</span>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-navy-surface rounded-xl p-6 border border-white/10 mb-12"
        >
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="material-icons text-primary">schedule</span>
            Timeline del proyecto
          </h3>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={item.period} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-8 bg-primary/30" />
                  )}
                </div>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-primary font-semibold text-sm min-w-[100px]">{item.period}</span>
                  <span className="text-gray-400 text-sm">{item.task}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Backoffice Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="material-icons text-primary">admin_panel_settings</span>
            Panel de administración interno
          </h3>
          <div className="browser-frame">
            <div className="browser-bar">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-url">admin.puro-software.com</div>
            </div>
            <div className="browser-content">
              <img
                src="/casos/distribuidora-b2b/backoffice.png"
                alt="Panel de administración - Backoffice"
              />
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-3 text-center">
            Vista del backoffice donde el equipo interno gestiona pedidos, clientes y precios
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ResultsSection() {
  const results = [
    {
      icon: 'inventory_2',
      value: '300',
      label: 'pedidos/semana',
      sublabel: 'procesados sin intervención del equipo de ventas',
    },
    {
      icon: 'timer_off',
      value: '-15h',
      label: 'semanales',
      sublabel: 'de administración manual eliminadas',
    },
    {
      icon: 'verified',
      value: '0',
      label: 'errores de precio',
      sublabel: 'desde la implementación del portal',
    },
    {
      icon: 'dns',
      value: '1',
      label: 'servidor',
      sublabel: 'único costo de mantenimiento',
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
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Los Resultados</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Lo que cambió</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.value + result.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="material-icons text-primary text-2xl">{result.icon}</span>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-1">{result.value}</div>
              <div className="text-white font-semibold text-sm mb-1">{result.label}</div>
              <div className="text-gray-500 text-xs">{result.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="py-16 lg:py-24 bg-background-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Quote marks */}
          <div className="absolute -top-4 -left-4 text-8xl text-primary/20 font-serif leading-none">"</div>

          <blockquote className="relative z-10 bg-navy-surface rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-6 italic">
              Antes, tomar un pedido eran tres pasos y dos personas. Ahora el cliente lo hace solo y nosotros nos enteramos cuando ya está confirmado.
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-icons text-primary">person</span>
              </div>
              <div>
                <div className="font-bold text-white">Gerente Comercial</div>
                <div className="text-gray-500 text-sm">Distribuidora B2B</div>
              </div>
            </footer>
          </blockquote>
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
            ¿Tu operación creció más rápido que tu sistema?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Tomamos 2 proyectos por trimestre. Si esto resuena, tiene sentido hablarlo.
          </p>
          <a
            href="https://wa.me/5491164039597?text=Hola%2C%20vi%20el%20caso%20de%20la%20distribuidora%20B2B%20y%20me%20interesa%20un%20portal%20similar%20para%20mi%20negocio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-navy-dark px-8 py-4 rounded font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(56,182,255,0.3)] hover:shadow-[0_0_30px_rgba(56,182,255,0.5)] transform hover:scale-105"
          >
            Hablemos
            <span className="material-icons">arrow_forward</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
