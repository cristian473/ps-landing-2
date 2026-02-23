"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    title: "Distribuidora B2B",
    subtitle: "300 pedidos/semana sin intervención manual",
    tag: "Distribución",
    href: "/casos/distribuidora-b2b",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: 2,
    title: "Inmobiliaria",
    subtitle: "400 propiedades sin duplicados",
    tag: "Real Estate",
    href: "/casos/inmobiliaria",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    id: 3,
    title: "Clínica Odontológica",
    subtitle: "3 sedes unificadas en un solo sistema",
    tag: "Salud",
    href: "/casos/odontologia",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
  },
  {
    id: 4,
    title: "Mayorista",
    subtitle: "200 clientes hacen sus pedidos solos",
    tag: "Comercio",
    href: "/casos/mayorista",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
  },
  {
    id: 5,
    title: "Academia",
    subtitle: "1.200 alumnos, pagos y cursadas automatizados",
    tag: "Educación",
    href: "/casos/academia",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  },
  {
    id: 6,
    title: "Corralón",
    subtitle: "Presupuestos al instante desde el mostrador",
    tag: "Materiales",
    href: "/casos/corralon",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
];

export default function CaseStudiesCards() {
  const [expandedCard, setExpandedCard] = useState(3);

  return (
    <section className="bg-navy-dark py-24" id="casos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Resultados Reales
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Casos de Éxito
          </h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto" />
        </motion.div>

        {/* Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Desktop View */}
          <div className="hidden lg:flex w-full items-center justify-center gap-1.5 h-[28rem] overflow-hidden">
            {caseStudies.map((caseStudy, idx) => (
              <a
                key={caseStudy.id}
                href={caseStudy.href}
                className="relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out group flex-shrink-0"
                style={{
                  width: idx + 1 === expandedCard ? "35%" : "60px",
                  height: "100%",
                  flexGrow: idx + 1 === expandedCard ? 1 : 0,
                }}
                onMouseEnter={() => setExpandedCard(idx + 1)}
              >
                {/* Background Image */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={caseStudy.image}
                  alt={caseStudy.title}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Tag - Only visible when expanded */}
                <div
                  className={`absolute top-4 left-4 z-10 transition-opacity duration-300 ${
                    idx + 1 === expandedCard ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                    {caseStudy.tag}
                  </span>
                </div>

                {/* Content - Expanded */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                    idx + 1 === expandedCard ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {caseStudy.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Ver caso completo
                    <span className="material-icons text-lg">arrow_forward</span>
                  </span>
                </div>

                {/* Content - Collapsed (vertical text) */}
                <div
                  className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 ${
                    idx + 1 === expandedCard ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span
                    className="text-white font-bold text-base whitespace-nowrap tracking-wide"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    {caseStudy.title}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile View */}
          <div className="lg:hidden flex flex-col gap-4">
            {caseStudies.map((caseStudy) => (
              <a
                key={caseStudy.id}
                href={caseStudy.href}
                className="relative cursor-pointer overflow-hidden rounded-2xl group w-full h-64"
              >
                {/* Background Image */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={caseStudy.image}
                  alt={caseStudy.title}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                    {caseStudy.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {caseStudy.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    Ver caso completo
                    <span className="material-icons text-lg">arrow_forward</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
