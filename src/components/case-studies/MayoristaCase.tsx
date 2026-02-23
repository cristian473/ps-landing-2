import { motion } from 'framer-motion';

export default function MayoristaCase() {
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
          Caso de estudio — Comercio B2B
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight text-white"
        >
          De listas de precio en Excel y pedidos por WhatsApp a un portal propio donde{' '}
          <span className="text-primary">200 clientes hacen sus pedidos solos</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 mb-10 leading-relaxed"
        >
          Cómo una importadora con 2.000 productos y 200 clientes activos dejó de perder pedidos, liberó a su equipo de ventas y aumentó el ticket promedio un 30%.
        </motion.p>

        {/* Screenshot Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-xl border border-white/10 shadow-2xl overflow-hidden"
        >
          <div className="aspect-video bg-navy-surface flex items-center justify-center">
            <div className="text-center p-4 sm:p-8">
              <span className="material-icons text-5xl sm:text-6xl text-primary/40 mb-4 block">inventory</span>
              <p className="text-gray-500 text-xs sm:text-sm">Portal B2B - Catálogo, precios y pedidos por cliente</p>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl -z-10 scale-105" />
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
              Una importadora con <span className="text-white font-semibold">2.000 productos en catálogo</span> y <span className="text-white font-semibold">200 clientes activos</span> — kioscos, negocios, revendedores. Cada cliente con su precio acordado, su límite de crédito y sus condiciones de pago.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              <span className="text-primary font-bold">Los pedidos llegaban por WhatsApp al vendedor de turno.</span> El vendedor los pasaba a una planilla. La planilla iba al depósito.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              En algún punto del camino, siempre había algo mal: un precio desactualizado, un producto sin stock que nadie avisó, un pedido que se perdió.
            </p>

            <p className="text-gray-400 leading-relaxed">
              <span className="text-white font-semibold">El equipo de ventas pasaba más tiempo cargando pedidos que vendiendo.</span>
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
      icon: 'chat_bubble',
      title: 'Pedidos por WhatsApp perdidos',
      description: 'Los pedidos llegaban por WhatsApp y se perdían o llegaban tarde al depósito. Nadie sabía cuántos pedidos estaban pendientes.',
    },
    {
      icon: 'price_change',
      title: 'Listas de precio desactualizadas',
      description: '200 clientes, cada uno con su precio. Las listas en Excel estaban llenas de errores y desactualizaciones constantes.',
    },
    {
      icon: 'inventory_2',
      title: 'Sin visibilidad de stock',
      description: 'Se vendía sin saber si había stock. El cliente se enteraba después que su pedido no se podía completar.',
    },
    {
      icon: 'support_agent',
      title: 'Vendedores de intermediarios',
      description: 'El equipo de ventas actuaba de intermediario en lugar de vender. Pasaban el día cargando pedidos a la planilla.',
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
      title: 'Portal B2B con login por cliente',
      description: 'Cada cliente ve su catálogo, sus precios y hace su pedido sin intermediarios',
    },
    {
      title: 'Stock en tiempo real integrado',
      description: 'Sin vender lo que no hay. El cliente ve disponibilidad al momento de pedir',
    },
    {
      title: 'Gestión de cuenta corriente por cliente',
      description: 'Saldo, límite de crédito y vencimientos visibles para cliente y vendedor',
    },
    {
      title: 'Panel de operaciones',
      description: 'Pedidos del día, alertas de stock bajo y seguimiento de clientes inactivos',
    },
  ];

  const timeline = [
    { period: 'Semana 1-2', task: 'Relevamiento de catálogo, precios y reglas de negocio' },
    { period: 'Semana 3-4', task: 'Portal funcionando con los primeros 20 clientes piloto' },
    { period: 'Mes 2', task: 'Migración completa de los 200 clientes y cierre del Excel' },
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
            Un portal B2B propio. Cada cliente entra, ve su catálogo con sus precios, arma su pedido y lo confirma. Sin WhatsApp, sin planillas, sin intermediarios.
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
          className="bg-navy-surface rounded-xl p-6 border border-white/10"
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
      </div>
    </section>
  );
}

function ResultsSection() {
  const results = [
    {
      icon: 'groups',
      value: '200',
      label: 'clientes',
      sublabel: 'haciendo pedidos solos sin intervención',
    },
    {
      icon: 'cancel',
      value: '0',
      label: 'pedidos perdidos',
      sublabel: 'desde que dejaron el WhatsApp',
    },
    {
      icon: 'trending_up',
      value: '+30%',
      label: 'ticket promedio',
      sublabel: 'los clientes compran más viendo el catálogo completo',
    },
    {
      icon: 'timer_off',
      value: '-15h',
      label: 'semanales',
      sublabel: 'liberadas de carga administrativa',
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
              Nuestros vendedores ahora venden. Antes pasaban el día pasando pedidos a la planilla.
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-icons text-primary">person</span>
              </div>
              <div>
                <div className="font-bold text-white">Gerente Comercial</div>
                <div className="text-gray-500 text-sm">Importadora / Mayorista</div>
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
            ¿Tus vendedores pasan más tiempo cargando pedidos que vendiendo?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Tomamos 2 proyectos por trimestre. Si esto resuena, tiene sentido hablarlo.
          </p>
          <a
            href="/#contacto"
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
