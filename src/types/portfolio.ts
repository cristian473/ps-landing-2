/**
 * Tipo compartido para los casos de portfolio.
 *
 * Cada cliente del portfolio (Raz, CIO Landings, Maklab, DentalCenter, Soy
 * Financieramente) exporta una const `caseStudy: CaseStudyData` desde
 * `src/data/portfolio/<slug>.ts`. La página `.astro` la importa y la pasa
 * al componente `CaseStudyPage` que renderea las secciones condicionalmente
 * según qué campos vengan poblados.
 */

export type CaseStudyNumber = {
  label: string;
  value: string;
};

export type CaseStudyProblemItem = {
  icon: string;
  title: string;
  description: string;
};

export type CaseStudyTimelinePhase = {
  phase: string;
  label: string;
};

export type CaseStudyResult = {
  icon?: string;
  value: string;
  label: string;
  sublabel?: string;
};

export type CaseStudyQuote = {
  text: string;
  author: string;
  role?: string;
  company?: string;
};

export type CaseStudyGalleryVideo = {
  youtubeId: string;
  title: string;
  description?: string;
};

/**
 * Referencia a una imagen del caso con su leyenda opcional. Las leyendas
 * explican brevemente qué se ve en la captura (ej: "Panel del admin donde
 * se cargan productos"). Se renderean debajo de cada imagen en gris claro.
 * Acepta string puro para retro-compat — se interpreta como `{ src, caption: '' }`.
 */
export type CaseStudyImage = {
  src: string;
  caption?: string;
};

export type CaseStudyImageRef = string | CaseStudyImage;

/**
 * Normaliza una referencia a imagen al objeto `{ src, caption }`.
 * Si viene como string puro (legacy), devuelve `{ src, caption: undefined }`.
 */
export function normalizeImage(ref: CaseStudyImageRef): CaseStudyImage {
  return typeof ref === "string" ? { src: ref } : ref;
}

export type CaseStudyGallery = {
  images?: CaseStudyImageRef[];
  videos?: CaseStudyGalleryVideo[];
};

export type CaseStudyExternalLink = {
  label: string;
  href: string;
};

export type CaseStudyData = {
  slug: string;
  client: string;
  sector: string;
  hero: {
    tag: string;
    headline: string;
    subheadline: string;
    heroImage?: CaseStudyImageRef;
    gradient?: string; // Tailwind gradient classes for placeholder bg if no heroImage
    icon?: string; // Material icon name for placeholder
  };
  context: {
    intro: string;
    numbers?: CaseStudyNumber[];
  };
  problem: {
    intro?: string;
    items: CaseStudyProblemItem[];
  };
  solution: {
    intro: string;
    implementations: string[];
    timeline?: CaseStudyTimelinePhase[];
    image?: CaseStudyImageRef;
  };
  results: CaseStudyResult[];
  quote?: CaseStudyQuote;
  cta: {
    headline: string;
    body: string;
    interest: string;
    trackingName: string;
  };
  gallery?: CaseStudyGallery;
  externalLink?: CaseStudyExternalLink;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
};
