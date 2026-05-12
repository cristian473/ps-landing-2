import { motion } from "framer-motion";
import type { CaseStudyData, CaseStudyImage } from "../../types/portfolio";
import { normalizeImage } from "../../types/portfolio";

type Props = {
  solution: CaseStudyData["solution"];
  onImageClick?: (img: CaseStudyImage) => void;
};

export default function CaseStudySolution({ solution, onImageClick }: Props) {
  const img = solution.image ? normalizeImage(solution.image) : null;
  return (
    <section className="bg-navy-dark py-16 md:py-24" id="solucion">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Qué construimos
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            La solución
          </h2>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-3xl">
            {solution.intro}
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3 md:space-y-4 mb-12"
        >
          {solution.implementations.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 bg-navy-surface border border-white/10 rounded-xl p-4 md:p-5"
            >
              <span className="material-icons text-primary text-xl mt-0.5 shrink-0">
                check_circle
              </span>
              <span className="text-gray-100 text-sm md:text-base leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </motion.ul>

        {solution.timeline && solution.timeline.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 md:mt-16"
          >
            <h3 className="text-lg md:text-xl font-bold text-white mb-6">
              Cómo lo abordamos por etapas
            </h3>
            <ol className="relative border-l-2 border-primary/30 ml-3 space-y-6">
              {solution.timeline.map((phase) => (
                <li key={phase.phase} className="pl-6 relative">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary text-navy-dark text-[11px] font-bold flex items-center justify-center">
                    {phase.phase}
                  </div>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    {phase.label}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>
        )}

        {img && (
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            {onImageClick ? (
              <button
                type="button"
                onClick={() => onImageClick(img)}
                aria-label="Ampliar captura"
                className="group relative w-full rounded-2xl overflow-hidden border border-white/10 bg-navy-surface flex items-center justify-center max-h-[440px] cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary/70"
              >
                <img
                  src={img.src}
                  alt={img.caption ?? "Captura de la solución implementada"}
                  className="max-h-[440px] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 z-10 inline-flex items-center justify-center h-9 w-9 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <span className="material-icons text-lg">zoom_in</span>
                </span>
              </button>
            ) : (
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-navy-surface flex items-center justify-center max-h-[440px]">
                <img
                  src={img.src}
                  alt={img.caption ?? "Captura de la solución implementada"}
                  className="max-h-[440px] w-auto max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            )}
            {img.caption && (
              <figcaption className="text-center text-xs md:text-sm text-gray-400 italic mt-3">
                {img.caption}
              </figcaption>
            )}
          </motion.figure>
        )}
      </div>
    </section>
  );
}
