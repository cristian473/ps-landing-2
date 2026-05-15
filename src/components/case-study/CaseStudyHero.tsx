import { motion } from "framer-motion";
import type { CaseStudyData, CaseStudyImage } from "../../types/portfolio";
import { normalizeImage } from "../../types/portfolio";

type Props = {
  hero: CaseStudyData["hero"];
  client: string;
  onImageClick?: (img: CaseStudyImage) => void;
};

export default function CaseStudyHero({ hero, client, onImageClick }: Props) {
  const gradient = hero.gradient ?? "from-primary/20 to-navy-surface";
  const heroImg = hero.heroImage ? normalizeImage(hero.heroImage) : null;
  const clickable = heroImg && onImageClick;

  return (
    <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-black" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6"
        >
          {hero.tag}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-5"
        >
          <span className="block text-primary text-sm md:text-base font-bold uppercase tracking-widest mb-3">
            {client}
          </span>
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl"
        >
          {hero.subheadline}
        </motion.p>

        {/* Visual del hero. Si hay imagen, es clickeable y abre el lightbox.
            Si no, gradient + icono Material. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 md:mt-14"
        >
          {clickable ? (
            <button
              type="button"
              onClick={() => onImageClick(heroImg)}
              aria-label="Ampliar captura"
              className={`group block w-full relative h-56 md:h-80 rounded-3xl border border-white/10 bg-gradient-to-br ${gradient} overflow-hidden cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary/70`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_55%)]" />
              <img
                src={heroImg.src}
                alt={heroImg.caption ?? `${client} — captura principal`}
                className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
              />
              <span className="absolute top-3 right-3 z-20 inline-flex items-center justify-center h-9 w-9 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <span className="material-icons text-lg">zoom_in</span>
              </span>
            </button>
          ) : (
            <div
              className={`relative h-56 md:h-80 rounded-3xl border border-white/10 bg-gradient-to-br ${gradient} overflow-hidden flex items-center justify-center`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_55%)]" />
              <span className="material-icons text-white/30 text-8xl md:text-9xl relative z-10">
                {hero.icon ?? "insert_chart"}
              </span>
            </div>
          )}
        </motion.div>

        {heroImg?.caption && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-xs md:text-sm text-gray-400 italic mt-3"
          >
            {heroImg.caption}
          </motion.p>
        )}
      </div>
    </section>
  );
}
