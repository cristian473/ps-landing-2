import type { CaseStudyData } from "../../types/portfolio";

export const caseStudy: CaseStudyData = {
  slug: "cio-landings",
  client: "CIO Landings",
  sector: "Ciberseguridad para empresas — Chicago, Estados Unidos",
  hero: {
    tag: "Caso destacado · Agentes con IA · Chicago",
    headline: "Agentes con IA que encuentran clientes potenciales todos los días, solos",
    subheadline:
      "Construimos agentes con IA que descubren empresas, las califican y arman el caso comercial de cada una. El equipo de ventas pasa de investigar a mano a operar sobre una lista continua ya lista para vender, 24/7.",
    icon: "shield",
    gradient: "from-emerald-500/40 to-cyan-700/40",
    heroImage: {
      src: "/portfolio/ciolanding/03-plataforma-dashboard.jpeg",
      caption: "Tablero comercial diario — clientes potenciales calificados por el agente con IA, listos para que el equipo de ventas opere.",
    },
  },
  context: {
    intro:
      "CIO Landings es una consultora de ciberseguridad para empresas con sede en Chicago. Detectan y resuelven problemas de seguridad en empresas medianas estadounidenses. El cuello no era ejecutar el servicio — era encontrar al próximo cliente.",
    numbers: [
      { label: "Mercado objetivo", value: "Chicago" },
      { label: "Frecuencia", value: "24/7" },
      { label: "Sin sumar personal", value: "Sí" },
      { label: "Output por caso", value: "PDF listo para enviar" },
    ],
  },
  problem: {
    intro: "Antes: cada cliente potencial bien armado consumía horas de investigación manual, y la mayoría nunca llegaba a destino.",
    items: [
      {
        icon: "schedule",
        title: "Horas por cliente potencial",
        description:
          "Buscar empresas, validar si tenían un problema real, cruzar datos y redactar un caso comercial llevaba horas por cada uno — imposible de crecer con un equipo chico.",
      },
      {
        icon: "search_off",
        title: "Herramientas de búsqueda genéricas",
        description:
          "Las herramientas del mercado entregan ruido — listados sin contexto comercial, sin filtro por mercado o tamaño, sin propuesta lista para enviar.",
      },
      {
        icon: "tune",
        title: "Decisiones operativas y comerciales mezcladas",
        description:
          "Mezclar 'qué empresa vale la pena mirar' con 'qué propuesta le armo' bloqueaba el crecimiento — eran dos problemas distintos tratados como uno solo.",
      },
      {
        icon: "edit_note",
        title: "Reportes técnicos no vendibles",
        description:
          "Los reportes técnicos crudos requerían que un ingeniero experimentado los 'limpiara' antes de mandarlos al responsable del área — más demora, más esfuerzo.",
      },
    ],
  },
  solution: {
    intro:
      "Armamos un equipo de agentes con IA que trabajan 24/7 buscando, calificando y armando el caso comercial de cada empresa potencial. Separamos el problema en dos preguntas distintas y entrenamos cada agente con su lógica propia.",
    implementations: [
      "Plataforma web propia para el equipo comercial — tablero con métricas del día, listado de clientes potenciales con filtros por geografía, sector y tamaño, ficha completa por empresa.",
      "Agente con IA que corre 24/7 sobre servidor propio — descubre empresas en el mercado objetivo, las valida y filtra antes de presentarlas al equipo de ventas.",
      "Dos agentes en cascada — uno rápido y barato descarta el grueso, otro más profundo analiza solo los candidatos prometedores. Cada empresa procesada queda registrada para no repetir trabajo.",
      "Reportes PDF generados con IA en inglés con la marca del cliente — diseñados como pieza de venta, no como reporte técnico. Listos para enviar al responsable de tecnología o seguridad sin retoques.",
      "Seguimiento total — cada decisión de los agentes queda registrada para auditar y mejorar el proceso desde la plataforma.",
    ],
    image: {
      src: "/portfolio/ciolanding/06-plataforma-corridas.jpeg",
      caption: "Historial del agente con IA — cada corrida diaria descubre, valida y filtra empresas en piloto automático.",
    },
  },
  results: [
    {
      icon: "all_inclusive",
      value: "24/7",
      label: "flujo de clientes automático",
      sublabel: "Sin intervención manual",
    },
    {
      icon: "speed",
      value: "0 horas",
      label: "de investigación por cliente",
      sublabel: "El sistema deja el caso listo",
    },
    {
      icon: "picture_as_pdf",
      value: "100%",
      label: "reportes listos para enviar",
      sublabel: "Sin retoques de ingeniero",
    },
    {
      icon: "trending_up",
      value: "Sin sumar personal",
      label: "para crecer a nuevos mercados",
      sublabel: "Replicar la configuración, no contratar equipo",
    },
  ],
  cta: {
    headline: "¿Tu equipo de ventas pasa más tiempo investigando que vendiendo?",
    body: "Si tu proceso comercial se traba en la investigación previa, podemos construir un sistema propio que la haga por vos — con tu lógica, tu marca y tu propuesta comercial.",
    interest: "proyecto_cerrado",
    trackingName: "portfolio_cio_cotizar",
  },
  gallery: {
    images: [
      {
        src: "/portfolio/ciolanding/07-plataforma-reportes.jpeg",
        caption: "Biblioteca de reportes PDF generados con IA, listos para enviar al responsable del área del prospecto.",
      },
    ],
  },
  seo: {
    title: "Caso CIO Landings — Agentes con IA que encuentran clientes en Chicago | Puro Software",
    description:
      "Cómo armamos agentes con IA que descubren, califican y arman el caso comercial de empresas potenciales a diario para una consultora de ciberseguridad en Chicago. Reportes PDF listos para vender.",
    keywords:
      "agentes con IA, agentes IA búsqueda clientes, prospección con inteligencia artificial, plataforma comercial ciberseguridad, automatización ventas con IA, cliente internacional Estados Unidos",
  },
};
