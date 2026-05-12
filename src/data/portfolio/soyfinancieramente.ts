import type { CaseStudyData } from "../../types/portfolio";

export const caseStudy: CaseStudyData = {
  slug: "soyfinancieramente",
  client: "Soy Financieramente",
  sector: "Marca personal · Psicología y finanzas conductuales",
  hero: {
    tag: "Caso marca personal · Diseño narrativo",
    headline: "La voz online de una psicóloga referente en finanzas conductuales",
    subheadline:
      "Vanesa Distefano necesitaba una web que tradujera su historia personal en autoridad — sin perder calidez — y un blog que pudiera mantener sola sin depender de un desarrollador para publicar.",
    icon: "psychology",
    gradient: "from-rose-500/40 to-pink-700/40",
    heroImage: {
      src: "/portfolio/soyfinancieramente/01-landing-fold.jpeg",
      caption: "Landing narrativa que abre con la historia personal de Vanesa — Hero diseñado para conectar antes de proponer.",
    },
  },
  context: {
    intro:
      "Vanesa Distefano es psicóloga especialista en finanzas conductuales. Su misión: ayudar a reprogramar la relación con el dinero. El desafío era traducir su mensaje en una landing que transmita autoridad y calidez.",
  },
  problem: {
    intro: "Lo que pedía no era una web cualquiera — era una herramienta de comunicación profesional con autonomía editorial.",
    items: [
      {
        icon: "auto_stories",
        title: "Historia personal sin canal propio",
        description:
          "La narrativa de Vanesa estaba dispersa entre redes y conversaciones — no había un lugar único que la transmitiera con la profundidad que su mensaje requería.",
      },
      {
        icon: "edit_note",
        title: "Sin autonomía para publicar contenido",
        description:
          "Quería un blog para sostener su autoridad en el tiempo, pero no quería depender de un desarrollador para publicar cada artículo nuevo.",
      },
      {
        icon: "auto_awesome",
        title: "Calidez y autoridad a la vez",
        description:
          "El tono tenía que sentirse cercano (psicología y emociones) pero también serio (finanzas conductuales y empresas). Un balance que cualquier template genérico rompe.",
      },
      {
        icon: "phone_iphone",
        title: "Pensado para celular sin sacrificar la narrativa",
        description:
          "El 70% de su audiencia llega por celular — la experiencia narrativa tenía que funcionar en pantalla chica sin perder estructura.",
      },
    ],
  },
  solution: {
    intro:
      "Diseñamos una landing con narrativa progresiva: primero conectar emocionalmente, después mostrar la transformación, finalmente los servicios y la acción. Y un blog con panel propio para que Vanesa publique sin asistencia técnica.",
    implementations: [
      "Landing con estructura narrativa — bienvenida, filosofía, su historia, propuesta de transformación, servicios, blog, testimonios y preguntas frecuentes.",
      "Página extendida 'Mi historia' — versión completa de su narrativa personal para quienes quieren profundizar.",
      "Blog con panel de administración propio — Vanesa publica artículos directamente desde su panel, sin tocar código ni esperar al desarrollador.",
      "Páginas adicionales — libro/recurso descargable gratuito, smartlinks para redes, política de privacidad y términos.",
      "Diseño pensado primero para celular con carga progresiva — la narrativa funciona igual de fluida en pantalla chica que en pantalla grande.",
    ],
    image: {
      src: "/portfolio/soyfinancieramente/07-admin-editor-post.jpeg",
      caption: "Editor del blog basado en TipTap — Vanesa publica artículos directamente, sin asistencia técnica.",
    },
  },
  results: [
    {
      icon: "rocket_launch",
      value: "2025",
      label: "lanzamiento en producción",
      sublabel: "Entrega completa cerrada",
    },
    {
      icon: "edit",
      value: "Autónomo",
      label: "blog gestionado sola",
      sublabel: "Sin asistencia técnica para publicar",
    },
    {
      icon: "auto_stories",
      value: "Narrativa",
      label: "estructura progresiva",
      sublabel: "Bienvenida → Historia → Servicios",
    },
    {
      icon: "smartphone",
      value: "Para celular",
      label: "experiencia adaptada",
      sublabel: "70% del tráfico desde el móvil",
    },
  ],
  cta: {
    headline: "¿Querés una web que transmita tu voz, no un template genérico?",
    body: "Si tenés una marca personal o profesional y necesitás un sitio que sostenga tu autoridad — con panel propio para publicar — podemos diseñarlo a medida de tu narrativa.",
    interest: "proyecto_cerrado",
    trackingName: "portfolio_soyfin_cotizar",
  },
  externalLink: {
    label: "Ver soyfinancieramente.com",
    href: "https://www.soyfinancieramente.com",
  },
  gallery: {
    images: [
      {
        src: "/portfolio/soyfinancieramente/03-blog-publico.jpeg",
        caption: "Blog público con sus reflexiones sobre psicología y finanzas conductuales.",
      },
      {
        src: "/portfolio/soyfinancieramente/08-smartlinks.jpeg",
        caption: "Smartlinks — una sola página con todos sus enlaces a redes, libros y recursos descargables.",
      },
    ],
  },
  seo: {
    title: "Caso Soy Financieramente — Landing + blog para marca personal | Puro Software",
    description:
      "Cómo diseñamos la web de Vanesa Distefano, psicóloga especializada en finanzas conductuales: landing narrativa progresiva + blog con panel propio para publicar sin asistencia técnica.",
    keywords:
      "diseño web marca personal, landing narrativa, blog con panel admin, web profesional psicología, sitio web autoría profesional",
  },
};
