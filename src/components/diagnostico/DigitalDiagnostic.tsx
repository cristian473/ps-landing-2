import { useMemo, useState, useCallback, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Types ──────────────────────────────────────────────────────────────────────

type Screen = 'idle' | 'quiz' | 'leadGate' | 'result';

interface QuestionOption {
  emoji: string;
  label: string;
  score: number;
}

interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

interface Archetype {
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  tone: string;
  hoursEstimate: string;
}

// ── Data ───────────────────────────────────────────────────────────────────────

const questions: Question[] = [
  {
    id: 1,
    text: '¿Cómo toman pedidos tus vendedores?',
    options: [
      { emoji: '📱', label: 'WhatsApp, fotos o papel', score: 1 },
      { emoji: '📋', label: 'Planilla de Excel compartida', score: 2 },
      { emoji: '💻', label: 'Un sistema, pero con carga manual', score: 3 },
      { emoji: '🚀', label: 'Sistema integrado con stock en tiempo real', score: 4 },
    ],
  },
  {
    id: 2,
    text: '¿Cuántas horas por semana dedicás a tareas repetitivas? (planillas, copiar datos, corregir errores)',
    options: [
      { emoji: '😵', label: 'Más de 15 horas', score: 1 },
      { emoji: '😰', label: 'Entre 8 y 15 horas', score: 2 },
      { emoji: '😐', label: 'Entre 3 y 7 horas', score: 3 },
      { emoji: '😎', label: 'Casi nada, está automatizado', score: 4 },
    ],
  },
  {
    id: 3,
    text: '¿Sabés cuánto stock tenés en este momento?',
    options: [
      { emoji: '🤷', label: 'No tengo idea hasta que cuento', score: 1 },
      { emoji: '📊', label: 'Más o menos, con planillas', score: 2 },
      { emoji: '🔄', label: 'Lo veo en un sistema, pero se desactualiza', score: 3 },
      { emoji: '✅', label: 'Sí, en tiempo real desde cualquier dispositivo', score: 4 },
    ],
  },
  {
    id: 4,
    text: '¿Qué pasa cuando falta una persona clave en tu empresa?',
    options: [
      { emoji: '🔥', label: 'Se frena todo hasta que vuelva', score: 1 },
      { emoji: '⚠️', label: 'Se complica bastante', score: 2 },
      { emoji: '🔀', label: 'Otro puede cubrir, pero con limitaciones', score: 3 },
      { emoji: '💪', label: 'Los procesos siguen sin depender de nadie', score: 4 },
    ],
  },
  {
    id: 5,
    text: '¿Cómo hacés seguimiento de clientes y postventa?',
    options: [
      { emoji: '🧠', label: 'De memoria o anotaciones sueltas', score: 1 },
      { emoji: '📝', label: 'Planilla o notas en el celular', score: 2 },
      { emoji: '📧', label: 'CRM básico o email manual', score: 3 },
      { emoji: '⚡', label: 'CRM con alertas y seguimiento automático', score: 4 },
    ],
  },
  {
    id: 6,
    text: '¿Cuánto tardás en generar una factura o presupuesto?',
    options: [
      { emoji: '🐢', label: 'Más de 30 minutos cada uno', score: 1 },
      { emoji: '⏳', label: 'Entre 10 y 30 minutos', score: 2 },
      { emoji: '⏱️', label: 'Menos de 10 minutos', score: 3 },
      { emoji: '🤖', label: 'Se genera automáticamente desde el pedido', score: 4 },
    ],
  },
  {
    id: 7,
    text: '¿Cómo tomás decisiones sobre tu negocio?',
    options: [
      { emoji: '🎲', label: 'Intuición y experiencia', score: 1 },
      { emoji: '📈', label: 'Algunas métricas, pero dispersas', score: 2 },
      { emoji: '📊', label: 'Reportes que armo manualmente', score: 3 },
      { emoji: '🎯', label: 'Dashboards en tiempo real con datos integrados', score: 4 },
    ],
  },
];

const archetypes: Archetype[] = [
  {
    name: 'El Bombero',
    emoji: '🔴',
    tagline: 'Tu negocio sobrevive, pero vos te estás quemando.',
    description:
      'Cada día es una urgencia distinta. Apagás incendios en lugar de construir. Estás perdiendo tiempo, dinero y energía en tareas que un sistema debería resolver solo.',
    tone: 'text-red-300 border-red-400/30 bg-red-500/10',
    hoursEstimate: '20-30',
  },
  {
    name: 'El Artesano',
    emoji: '🟡',
    tagline: 'Tu negocio funciona, pero vos sos el sistema.',
    description:
      'Hacés las cosas bien, pero todo depende de vos o de pocas personas clave. Si alguien falta, se nota. Tenés potencial enorme para liberar tiempo con automatización.',
    tone: 'text-amber-200 border-amber-400/30 bg-amber-500/10',
    hoursEstimate: '12-20',
  },
  {
    name: 'El Gestor',
    emoji: '🔵',
    tagline: 'Tenés control, pero te falta velocidad.',
    description:
      'Ya digitalizaste parte del negocio. El siguiente salto es conectar las áreas y transformar datos dispersos en decisiones de crecimiento.',
    tone: 'text-blue-200 border-blue-400/30 bg-blue-500/10',
    hoursEstimate: '6-12',
  },
  {
    name: 'El Estratega',
    emoji: '🟢',
    tagline: 'Tu empresa funciona sin que estés en todo.',
    description:
      'Tenés base sólida para escalar. Los procesos están digitalizados y conectados. Tu foco ahora es optimizar métricas y detectar oportunidades antes que la competencia.',
    tone: 'text-emerald-200 border-emerald-400/30 bg-emerald-500/10',
    hoursEstimate: '2-6',
  },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── Component ──────────────────────────────────────────────────────────────────

export default function DigitalDiagnostic() {
  const [screen, setScreen] = useState<Screen>('idle');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { score: number; questionText: string; responseLabel: string }>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [contactValue, setContactValue] = useState('');
  const [contactError, setContactError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [ctaSent, setCtaSent] = useState(false);

  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent));
  }, []);

  const totalQuestions = questions.length;

  const totalScore = useMemo(
    () => Object.values(answers).reduce((sum, a) => sum + a.score, 0),
    [answers],
  );

  const archetype = useMemo(() => {
    if (totalScore <= 13) return archetypes[0];
    if (totalScore <= 19) return archetypes[1];
    if (totalScore <= 24) return archetypes[2];
    return archetypes[3];
  }, [totalScore]);

  const estimatedHours = archetype.hoursEstimate;

  const progress = ((current + 1) / totalQuestions) * 100;

  const onSelectOption = useCallback(
    (questionId: number, score: number, optionIndex: number) => {
      setSelectedOption(optionIndex);
      const question = questions[questionId - 1];
      const option = question.options[optionIndex];
      setAnswers((prev) => ({
        ...prev,
        [questionId]: { score, questionText: question.text, responseLabel: option.label },
      }));

      setTimeout(() => {
        setSelectedOption(null);
        if (current < totalQuestions - 1) {
          setCurrent((prev) => prev + 1);
        } else {
          setScreen('leadGate');
        }
      }, 400);
    },
    [current, totalQuestions],
  );

  const goBack = useCallback(() => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  }, [current]);

  const handleLeadSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const trimmed = contactValue.trim();
      if (!trimmed) {
        setContactError('Ingresá tu email para ver el resultado.');
        return;
      }
      if (!emailRegex.test(trimmed)) {
        setContactError('Ingresá un email válido.');
        return;
      }
      setContactError('');
      setIsSubmitting(true);

      // Build ordered array of answers for the API
      const orderedAnswers = Array.from({ length: 7 }, (_, i) => answers[i + 1]);

      // Fire-and-forget: save lead to DB, don't block UX
      fetch('/api/diagnostic-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, answers: orderedAnswers }),
      })
        .catch(() => {})
        .finally(() => setIsSubmitting(false));

      setScreen('result');
    },
    [contactValue, answers],
  );

  const resetDiagnostic = useCallback(() => {
    setScreen('idle');
    setCurrent(0);
    setAnswers({});
    setSelectedOption(null);
    setContactValue('');
    setContactError('');
    setIsSubmitting(false);
    setCtaSent(false);
  }, []);

  // ── Navbar (same style as case studies) ─────────────────────────────────────

  const navbar = (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-background-dark/80 backdrop-blur-md border-b border-white/5">
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
      </div>
      {screen === 'quiz' && (
        <div className="h-1 w-full bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </nav>
  );

  // ── Pantalla 1: Hero ─────────────────────────────────────────────────────────

  if (screen === 'idle') {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy-dark to-black">
        {navbar}
        {/* Decorative blur circles */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        <motion.div
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
              ¿Cuánto dinero pierde tu empresa
            </span>{' '}
            <span className="text-white">por procesos ineficientes?</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              type="button"
              onClick={() => setScreen('quiz')}
              className="mt-12 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-navy-dark transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(56,182,255,0.3)]"
            >
              Calcularlo gratis
              <span className="material-icons text-xl">arrow_forward</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // ── Pantalla 2: Quiz ──────────────────────────────────────────────────────────

  if (screen === 'quiz') {
    const question = questions[current];

    return (
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-navy-dark to-black">
        {navbar}

        <div className="mx-auto w-full max-w-3xl px-6 py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              {/* Question counter */}
              <p className="mb-4 text-sm text-gray-500">
                {current + 1} / {totalQuestions}
              </p>

              {/* Question text */}
              <h2 className="text-center text-2xl font-semibold text-white md:text-3xl max-w-3xl mx-auto">
                {question.text}
              </h2>

              {/* Option cards */}
              <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 max-w-2xl">
                {question.options.map((option, index) => {
                  const isSelected = selectedOption === index;
                  return (
                    <motion.button
                      key={index}
                      type="button"
                      onClick={() => onSelectOption(question.id, option.score, index)}
                      disabled={selectedOption !== null}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-4 rounded-xl border p-6 text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-primary bg-primary/10 scale-[1.02]'
                          : 'border-white/10 bg-navy-surface hover:border-primary/50 hover:-translate-y-1'
                      } ${selectedOption !== null && !isSelected ? 'opacity-50' : ''}`}
                    >
                      <span className="text-2xl flex-shrink-0">{option.emoji}</span>
                      <span className="text-base text-white">{option.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Back button */}
              {current > 0 && (
                <button
                  type="button"
                  onClick={goBack}
                  className="mt-8 text-sm text-gray-500 transition hover:text-white"
                >
                  ← Anterior
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // ── Pantalla 3: Lead Gate ─────────────────────────────────────────────────────

  if (screen === 'leadGate') {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-navy-dark to-black">
        {navbar}
        <div className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <motion.div
          className="relative z-10 mx-auto w-full max-w-md px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Tu diagnóstico está listo
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Dejanos tu contacto para ver el resultado
          </p>

          <form onSubmit={handleLeadSubmit} className="mt-8 space-y-4">
            <div>
              <input
                type="email"
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
                placeholder="nombre@empresa.com"
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-gray-600 focus:border-primary focus:outline-none transition"
              />
              {contactError && (
                <p className="mt-2 text-sm text-red-300">{contactError}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-primary px-6 py-4 text-base font-bold text-navy-dark transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(56,182,255,0.3)] disabled:opacity-70"
            >
              {isSubmitting ? 'Enviando...' : 'Ver mi resultado →'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // ── Pantalla 4: Resultado ─────────────────────────────────────────────────────

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-navy-dark to-black">
      {navbar}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-20 h-64 w-64 rounded-full bg-blue-700/10 blur-3xl" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-2xl px-4 pt-20 pb-6 sm:px-6 sm:py-16"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Archetype card */}
        <div className={`rounded-2xl border p-5 sm:p-8 ${archetype.tone}`}>
          <div className="flex items-center gap-3 sm:block">
            <p className="text-3xl sm:text-4xl">{archetype.emoji}</p>
            <h2 className="text-2xl sm:mt-3 sm:text-3xl font-bold text-white">{archetype.name}</h2>
          </div>
          <p className="mt-2 text-base sm:mt-3 sm:text-xl font-medium text-white/90">{archetype.tagline}</p>
          <p className="mt-2 text-sm sm:mt-4 sm:text-base text-white/70 leading-relaxed hidden sm:block">
            {archetype.description}
          </p>
        </div>

        {/* Hours stat — compact on mobile */}
        <div className="mt-3 sm:mt-6 rounded-xl border border-white/10 bg-navy-surface p-4 sm:p-6 flex items-center gap-4 sm:block sm:text-center">
          <p className="text-3xl sm:text-4xl font-bold text-primary sm:mt-2 whitespace-nowrap">{estimatedHours} hs</p>
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400">
              Horas que perdés por semana
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-2">
              En tareas manuales y procesos sin automatizar.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4 sm:mt-8 flex flex-col items-center gap-3 sm:gap-4">
          {ctaSent ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full rounded-xl border border-primary/30 bg-primary/10 p-4 sm:p-6 text-center"
            >
              <span className="material-icons text-2xl sm:text-3xl text-primary">check_circle</span>
              <p className="mt-1 sm:mt-2 text-base sm:text-lg font-semibold text-white">
                Nuestro equipo se va a comunicar con vos para coordinar una llamada.
              </p>
              <p className="mt-1 text-xs sm:text-sm text-gray-400">
                Revisá tu email o WhatsApp en las próximas horas.
              </p>
            </motion.div>
          ) : isMobile ? (
            <a
              href={`https://wa.me/5491164039597?text=${encodeURIComponent(`Hola, hice el diagnóstico digital y me dio "${archetype.name}". Me interesa saber cómo mejorar mis procesos.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-navy-dark transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(56,182,255,0.3)]"
            >
              Quiero resolver esto
              <span className="material-icons text-xl">arrow_forward</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={() => setCtaSent(true)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-navy-dark transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(56,182,255,0.3)]"
            >
              Quiero resolver esto
              <span className="material-icons text-xl">arrow_forward</span>
            </button>
          )}

          <button
            type="button"
            onClick={resetDiagnostic}
            className="text-sm text-gray-500 transition hover:text-white"
          >
            Repetir diagnóstico
          </button>
        </div>
      </motion.div>
    </div>
  );
}
