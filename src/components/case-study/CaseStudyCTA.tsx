import { motion } from "framer-motion";
import type { CaseStudyData } from "../../types/portfolio";

type Props = {
  cta: CaseStudyData["cta"];
  externalLink?: CaseStudyData["externalLink"];
};

export default function CaseStudyCTA({ cta, externalLink }: Props) {
  const handleCotizar = () => {
    window.trackCTAClick?.(cta.trackingName, "case_study_cta");
    window.dispatchEvent(
      new CustomEvent("contact:prefill", {
        detail: { interest: cta.interest },
      }),
    );
  };

  return (
    <section className="bg-navy-dark py-20 md:py-24" id="cotizar">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/15 via-navy-surface to-navy-surface shadow-[0_0_80px_rgba(56,182,255,0.15)] p-8 md:p-12 text-center"
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(56,182,255,0.18),transparent_45%)]" />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {cta.headline}
            </h2>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              {cta.body}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/#contacto"
                onClick={handleCotizar}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-bold text-navy-dark hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(56,182,255,0.3)] hover:shadow-[0_0_30px_rgba(56,182,255,0.5)]"
              >
                Cotizar un proyecto similar
                <span className="material-icons text-base">arrow_forward</span>
              </a>
              {externalLink && (
                <a
                  href={externalLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/5 transition-colors"
                >
                  {externalLink.label}
                  <span className="material-icons text-base">open_in_new</span>
                </a>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-sm text-gray-300">
              <a
                href="/#portfolio"
                className="inline-flex items-center gap-1.5 text-gray-300 hover:text-primary transition-colors"
              >
                <span className="material-icons text-base">arrow_back</span>
                Ver más casos del portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
