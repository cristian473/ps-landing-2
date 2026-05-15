import { motion } from "framer-motion";
import type { CaseStudyData } from "../../types/portfolio";

type Props = {
  quote: NonNullable<CaseStudyData["quote"]>;
};

export default function CaseStudyQuote({ quote }: Props) {
  return (
    <section className="bg-navy-dark py-16 md:py-24" id="testimonio">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-navy-surface border border-white/10 rounded-3xl p-6 md:p-10 overflow-hidden"
        >
          <span
            aria-hidden="true"
            className="absolute -top-6 -left-2 text-7xl md:text-9xl text-primary/15 font-serif select-none pointer-events-none"
          >
            "
          </span>

          <blockquote className="relative z-10 text-gray-100 text-lg md:text-xl leading-relaxed font-medium">
            "{quote.text}"
          </blockquote>

          <figcaption className="relative z-10 mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary border border-primary/30">
              <span className="material-icons text-lg">person</span>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-white">{quote.author}</div>
              {(quote.role || quote.company) && (
                <div className="text-gray-300 text-xs">
                  {[quote.role, quote.company].filter(Boolean).join(" · ")}
                </div>
              )}
            </div>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
