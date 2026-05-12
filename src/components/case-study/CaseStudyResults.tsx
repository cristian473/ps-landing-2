import { motion } from "framer-motion";
import type { CaseStudyData } from "../../types/portfolio";

type Props = {
  results: CaseStudyData["results"];
};

export default function CaseStudyResults({ results }: Props) {
  return (
    <section className="bg-black py-16 md:py-24" id="resultados">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Resultados
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Qué cambió en la operación
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {results.map((r, idx) => (
            <motion.div
              key={r.label + idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="bg-navy-surface border border-white/10 rounded-2xl p-5 md:p-6 text-center"
            >
              {r.icon && (
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3 border border-primary/20">
                  <span className="material-icons text-2xl">{r.icon}</span>
                </div>
              )}
              <div className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-1">
                {r.value}
              </div>
              <div className="text-xs md:text-sm text-gray-200 font-semibold leading-snug">
                {r.label}
              </div>
              {r.sublabel && (
                <div className="text-[11px] md:text-xs text-gray-400 mt-1.5 leading-snug">
                  {r.sublabel}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
