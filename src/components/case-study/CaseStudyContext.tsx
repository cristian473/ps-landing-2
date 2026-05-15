import { motion } from "framer-motion";
import type { CaseStudyData } from "../../types/portfolio";

type Props = {
  context: CaseStudyData["context"];
  sector: string;
};

export default function CaseStudyContext({ context, sector }: Props) {
  return (
    <section className="bg-navy-dark py-16 md:py-24" id="contexto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            El cliente · {sector}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            El punto de partida
          </h2>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            {context.intro}
          </p>
        </motion.div>

        {context.numbers && context.numbers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8"
          >
            {context.numbers.map((n) => (
              <div
                key={n.label}
                className="bg-navy-surface border border-white/10 rounded-xl p-4 md:p-5 text-center"
              >
                <div className="text-xl md:text-2xl font-bold text-primary mb-1 leading-tight">
                  {n.value}
                </div>
                <div className="text-xs md:text-sm text-gray-300 leading-snug">
                  {n.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
