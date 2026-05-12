import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type PortfolioCase = {
  slug: string;
  sector: string;
  client: string;
  title: string;
  body: string;
  chips: string[];
  icon: string;
  gradient: string;
  // Captura representativa del caso (landing pública o panel del cliente).
  // Si no hay, la card cae al placeholder con gradient + icono Material.
  image?: string;
};

const CASES: PortfolioCase[] = [
  {
    slug: 'raz-y-cia',
    client: 'Raz y Cía',
    sector: 'Logística y distribución mayorista · Capital Federal',
    title: 'Una de las distribuidoras más grandes de Capital, sin papeles',
    body: 'Una de las distribuidoras mayoristas más grandes de Capital. Cambiamos papel, planillas y WhatsApp suelto por una plataforma central + 6 apps móviles, una por cada rol de la operación.',
    chips: ['Plataforma web', 'Apps móviles', 'Portal mayorista', 'Geolocalización'],
    icon: 'local_shipping',
    gradient: 'from-amber-500/30 to-orange-700/30',
  },
  {
    slug: 'cio-landings',
    client: 'CIO Landings',
    sector: 'Ciberseguridad para empresas · Chicago, Estados Unidos',
    title: 'Agentes con IA que encuentran clientes potenciales todos los días, solos',
    body: 'Consultora de ciberseguridad en Chicago. Antes investigaban clientes potenciales a mano. Ahora un equipo de agentes con IA descubre empresas a diario, las califica y arma el reporte comercial listo para enviar.',
    chips: ['Agentes con IA', 'Plataforma web', 'Cliente internacional', 'Reportes automáticos'],
    icon: 'shield',
    gradient: 'from-emerald-500/30 to-cyan-700/30',
    image: '/portfolio/ciolanding/03-plataforma-dashboard.jpeg',
  },
  {
    slug: 'maklab',
    client: 'Maklab',
    sector: 'Distribuidora mayorista · Equipamiento de laboratorio',
    title: 'Catálogo digital con 256 productos y dominio propio',
    body: 'Distribuidora argentina de equipamiento de laboratorio. 256 productos en 20 categorías sobre maklab.com.ar, con cierre de venta directo por WhatsApp y sin pagar comisiones.',
    chips: ['Producto propio', 'Dominio del cliente', 'WhatsApp', 'Sin comisiones'],
    icon: 'biotech',
    gradient: 'from-purple-500/30 to-fuchsia-700/30',
    image: '/portfolio/maklab/02-landing-fold.jpeg',
  },
  {
    slug: 'dentalcenter',
    client: 'DentalCenter',
    sector: 'Salud · Red de consultorios odontológicos',
    title: 'Una cadena de odontología, ordenada y con cartilla online para sus afiliados',
    body: 'Red de consultorios dentales. Un panel para que el equipo coordine profesionales, afiliados y obras sociales, más un portal público con mapa para que los afiliados encuentren prestadores cerca.',
    chips: ['Plataforma web', 'Portal de afiliados', 'Cartilla con mapa'],
    icon: 'medical_services',
    gradient: 'from-sky-500/30 to-blue-700/30',
    image: '/portfolio/dentalcenter/02-landing-fold.jpeg',
  },
  {
    slug: 'pauldeco',
    client: 'Pauldeco',
    sector: 'Decoración del hogar · Tienda online',
    title: 'Una tienda online de decoración con identidad propia sobre Tienda Nube',
    body: 'Tienda argentina de decoración del hogar. Personalizamos su Tienda Nube para que el branding premium se respire en cada pantalla, con experiencia pensada para celular y panel propio para gestionar productos.',
    chips: ['Tienda Nube', 'Diseño a medida', 'Mobile-first', 'Marca propia'],
    icon: 'chair',
    gradient: 'from-rose-400/30 to-amber-600/30',
    image: '/portfolio/pauldeco/01-landing-fold.jpeg',
  },
  {
    slug: 'soyfinancieramente',
    client: 'Soy Financieramente',
    sector: 'Marca personal · Psicología y finanzas conductuales',
    title: 'La voz online de una psicóloga referente en finanzas conductuales',
    body: 'Psicóloga especialista en finanzas conductuales. Le construimos una web con narrativa progresiva y un blog con panel propio para que publique sin depender de un desarrollador.',
    chips: ['Landing institucional', 'Blog con panel propio', 'Marca personal'],
    icon: 'psychology',
    gradient: 'from-rose-500/30 to-pink-700/30',
    image: '/portfolio/soyfinancieramente/01-landing-fold.jpeg',
  },
];

export default function Portfolio() {
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  // IntersectionObserver — dispara case_study_view una sola vez por caso
  // cuando la card entra al viewport ≥50%. Reusa el helper global existente.
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const slug = entry.target.getAttribute('data-case-slug');
          if (!slug || seen.has(slug)) return;
          seen.add(slug);
          window.trackCaseStudyView?.(slug);
        });
      },
      { threshold: 0.5 },
    );
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (slug: string) => {
    window.trackEvent?.('portfolio_card_click', {
      case_slug: slug,
      cta_location: 'portfolio_card',
    });
  };

  return (
    <section className="bg-navy-dark py-20 md:py-28 relative" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Casos reales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Portfolio
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Cinco proyectos en producción. Logística, ciberseguridad, salud, plataformas online y marcas personales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {CASES.map((caseData, idx) => (
            <motion.a
              key={caseData.slug}
              href={`/portfolio/${caseData.slug}`}
              onClick={() => handleCardClick(caseData.slug)}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              data-case-slug={caseData.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-navy-surface border border-white/10 hover:border-primary/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(56,182,255,0.1)] flex flex-col cursor-pointer"
              aria-label={`Ver caso ${caseData.client}`}
            >
              {/* Visual de la card. Si el caso tiene una captura representativa,
                  se renderea con object-cover + overlay sutil para legibilidad.
                  Si no, cae al placeholder con gradient + icono Material. */}
              <div
                className={`relative h-44 md:h-52 bg-gradient-to-br ${caseData.gradient} flex items-center justify-center overflow-hidden`}
              >
                {caseData.image ? (
                  <>
                    <img
                      src={caseData.image}
                      alt={`Captura del proyecto de ${caseData.client}`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),transparent_50%)]" />
                    <span className="material-icons text-white/30 text-7xl md:text-8xl relative z-10 transition-transform duration-500 group-hover:scale-110">
                      {caseData.icon}
                    </span>
                  </>
                )}
              </div>

              <div className="p-5 md:p-7 flex flex-col flex-1">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                  {caseData.sector}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  <span className="text-primary/90">{caseData.client}</span>
                  <span className="text-white"> — {caseData.title}</span>
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 flex-1">
                  {caseData.body}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {caseData.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-gray-200"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-primary group-hover:text-white text-sm font-semibold transition-colors self-start">
                  Ver caso completo
                  <span className="material-icons text-base">arrow_forward</span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-300 text-base md:text-lg mb-4">
            Trabajamos con negocios en proyectos de un par de semanas hasta operaciones digitales completas.
          </p>
          <a
            href="#contacto"
            onClick={() =>
              window.trackCTAClick?.('portfolio_cotizar', 'portfolio_footer')
            }
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm md:text-base font-bold text-navy-dark hover:bg-primary/90 transition-colors"
          >
            Cotizar mi proyecto
            <span className="material-icons text-base">arrow_forward</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
