import { motion } from "framer-motion";
import type { CaseStudyData } from "../../types/portfolio";

type Props = {
  problem: CaseStudyData["problem"];
};

export default function CaseStudyProblem({ problem }: Props) {
  return (
    <section className="bg-black py-16 md:py-24" id="problema">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            El problema
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Qué frenaba la operación
          </h2>
          {problem.intro && (
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
              {problem.intro}
            </p>
          )}
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {problem.items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-navy-surface border border-white/10 rounded-2xl p-5 md:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 mb-4">
                <span className="material-icons text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
