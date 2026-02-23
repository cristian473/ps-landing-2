import { motion } from 'framer-motion';

export default function InmobiliariaCase() {
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
          Caso de estudio — Real Estate
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight text-white"
        >
          De WhatsApp y fichas en papel a un sistema que gestiona{' '}
          <span className="text-primary">400 propiedades, visitas y contratos</span> — sin que nada se pierda
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 mb-10 leading-relaxed"
        >
          Cómo una inmobiliaria con 15 asesores dejó de operar con herramientas genéricas y armó su propio sistema de gestión: propiedades, clientes, visitas, contratos y comisiones en un solo lugar.
        </motion.p>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-xl border border-white/10 shadow-2xl overflow-hidden"
        >
          <img
            src="/casos/inmobiliaria/panel-administrativo.png"
            alt="Panel administrativo - Gestión de propiedades y contratos"
            className="w-full h-auto"
          />
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
              Una inmobiliaria mediana. <span className="text-white font-semibold">15 asesores</span>,{' '}
              <span className="text-white font-semibold">400 propiedades activas</span>, operaciones de venta y alquiler en simultáneo.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Cada asesor trabajaba a su manera. Uno llevaba sus contactos en el celular. Otro en una planilla. El CRM que probaron duró tres meses antes de que nadie lo usara más. Los contratos se guardaban en carpetas de Drive sin criterio. Y las comisiones se calculaban a fin de mes con una calculadora y discusiones incluidas.
            </p>

            <p className="text-gray-400 leading-relaxed">
              <span className="text-primary font-bold">No era desorden por falta de ganas. Era desorden porque ninguna herramienta encajaba con cómo trabajaban.</span>
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
      icon: 'visibility_off',
      title: 'Sin visibilidad del pipeline',
      description: 'Cada asesor sabía lo suyo. El dueño de la inmobiliaria no sabía cuántas visitas había en la semana ni qué propiedades estaban calientes.',
    },
    {
      icon: 'content_copy',
      title: 'Propiedades duplicadas o desactualizadas',
      description: 'La misma propiedad cargada dos veces, con precios distintos, por dos asesores diferentes.',
    },
    {
      icon: 'folder_off',
      title: 'Contratos sin trazabilidad',
      description: 'Alquiler que vence, renovación que nadie avisó, depósito que no se registró. Todo en carpetas de Drive que nadie organizaba igual.',
    },
    {
      icon: 'calculate',
      title: 'Comisiones calculadas a mano',
      description: 'Fin de mes, planilla, discusión. Cada vez.',
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
      title: 'Cartera de propiedades centralizada',
      description: 'Una sola fuente de verdad: precio, estado, fotos, documentos, historial',
    },
    {
      title: 'Pipeline de clientes por asesor',
      description: 'Cada uno ve sus contactos, sus visitas agendadas y el estado de cada operación',
    },
    {
      title: 'Gestión de contratos de alquiler',
      description: 'Vencimientos, depósitos y ajustes por índice con alertas automáticas',
    },
    {
      title: 'Calculadora de comisiones automática',
      description: 'Cada cierre registrado genera el cálculo automático según las reglas de la inmobiliaria',
    },
    {
      title: 'Panel gerencial',
      description: 'Visibilidad total: cuántas operaciones hay en curso, qué asesores están activos, qué propiedades no se movieron en 60 días',
    },
  ];

  const timeline = [
    { period: 'Semana 1-2', task: 'Relevamiento y arquitectura' },
    { period: 'Semana 3-4', task: 'Cartera de propiedades y pipeline de clientes' },
    { period: 'Mes 2', task: 'Gestión de contratos y comisiones' },
    { period: 'Mes 3', task: 'Panel gerencial y migración completa' },
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
            Un sistema hecho para cómo trabaja una inmobiliaria real. No un CRM genérico que hay que forzar para que encaje.
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
      icon: 'home',
      value: '400',
      label: 'propiedades',
      sublabel: 'gestionadas sin duplicados',
    },
    {
      icon: 'notifications_active',
      value: '0',
      label: 'contratos vencidos',
      sublabel: 'sin aviso previo',
    },
    {
      icon: 'payments',
      value: '0',
      label: 'discusiones',
      sublabel: 'comisiones automáticas',
    },
    {
      icon: 'timer_off',
      value: '-10h',
      label: 'semanales',
      sublabel: 'del equipo administrativo',
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
              Antes no sabía qué estaban haciendo mis asesores hasta que me contaban. Ahora abro el panel y en dos minutos tengo todo.
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-icons text-primary">person</span>
              </div>
              <div>
                <div className="font-bold text-white">Dueño de la Inmobiliaria</div>
                <div className="text-gray-500 text-sm">Real Estate</div>
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
            ¿Tu inmobiliaria creció pero el sistema se quedó atrás?
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
