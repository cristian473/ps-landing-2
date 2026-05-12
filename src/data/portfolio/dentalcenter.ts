import type { CaseStudyData } from "../../types/portfolio";

export const caseStudy: CaseStudyData = {
  slug: "dentalcenter",
  client: "DentalCenter",
  sector: "Salud · Red de consultorios odontológicos",
  hero: {
    tag: "Caso salud · Cadena de consultorios",
    headline: "Una red de consultorios dentales, ordenada y con cartilla online para sus afiliados",
    subheadline:
      "Plataforma administrativa para el equipo + portal de afiliados con mapa interactivo de prestadores — DentalCenter pasó de coordinar profesionales y afiliados a mano a operar todo desde una sola fuente de verdad.",
    icon: "medical_services",
    gradient: "from-sky-500/40 to-blue-700/40",
    heroImage: {
      src: "/portfolio/dentalcenter/02-landing-fold.jpeg",
      caption: "Sitio institucional de DentalCenter — primer punto de contacto para profesionales y afiliados.",
    },
  },
  context: {
    intro:
      "DentalCenter coordina una red de consultorios dentales: profesionales, especialidades, horarios, obras sociales y un padrón de afiliados que necesitaba ordenarse. La administración por planillas no daba abasto, ni para el equipo ni para los afiliados.",
    numbers: [
      { label: "Portales activos", value: "2" },
      { label: "Panel administrativo", value: "Para el equipo interno" },
      { label: "Portal", value: "Afiliados" },
      { label: "Cartilla", value: "Interactiva con mapa" },
    ],
  },
  problem: {
    intro: "El crecimiento empezó a doler: cada nuevo profesional, afiliado o obra social agregaba complejidad a un sistema basado en planillas.",
    items: [
      {
        icon: "table_view",
        title: "Padrón de afiliados en planillas",
        description:
          "Altas, bajas, cambios de obra social y datos de contacto se mantenían a mano — sin búsqueda ni filtros, vulnerable a duplicados y errores.",
      },
      {
        icon: "person_add",
        title: "Alta de profesionales sin flujo",
        description:
          "Los profesionales no tenían cómo registrarse para sumarse a la red — todo dependía de mails sueltos y aprobaciones verbales.",
      },
      {
        icon: "location_off",
        title: "Afiliados sin dónde buscar prestador",
        description:
          "Los afiliados llamaban a la administración para preguntar qué profesional tenían cerca con su especialidad — un canal saturado por preguntas repetidas.",
      },
      {
        icon: "lock_open",
        title: "Privacidad del padrón en riesgo",
        description:
          "Sin permisos detallados por usuario, cualquiera con acceso al archivo veía toda la lista de afiliados — un riesgo creciente con el tamaño de la red.",
      },
    ],
  },
  solution: {
    intro:
      "Construimos dos portales distintos sobre la misma plataforma: uno administrativo para el equipo y otro público para los afiliados, con permisos detallados por sección.",
    implementations: [
      "Panel administrativo — gestión de afiliados, profesionales, consultorios y obras sociales. Importación masiva desde Excel y exportación filtrada por obra social.",
      "Flujo de alta de profesionales — registro público desde la web, aprobación del equipo administrativo desde el panel, gestión de zonas y especialidades.",
      "Portal de afiliados — perfil propio, descarga de cartilla en PDF de la obra social, novedades por categoría con marcado de leídas/no leídas.",
      "Cartilla interactiva con mapa — los afiliados ven los prestadores disponibles en Google Maps, filtrados por especialidad y localidad, con horarios y datos de contacto.",
      "Permisos detallados por sección — ver, crear, editar y eliminar configurables por rol. Los usuarios sin permiso de creación solo buscan por DNI, protegiendo el padrón.",
    ],
    image: {
      src: "/portfolio/dentalcenter/10-mobile-afiliado-cartilla.jpeg",
      caption: "Cartilla mobile del afiliado — mapa interactivo con prestadores cerca, filtros por especialidad y zona.",
    },
  },
  results: [
    {
      icon: "groups",
      value: "Centralizado",
      label: "padrón de afiliados",
      sublabel: "Búsqueda, filtros, importación masiva",
    },
    {
      icon: "verified",
      value: "Auto-servicio",
      label: "alta de profesionales",
      sublabel: "Con flujo de aprobación interno",
    },
    {
      icon: "map",
      value: "Mapa público",
      label: "cartilla con búsqueda",
      sublabel: "Filtros por especialidad y zona",
    },
    {
      icon: "lock",
      value: "Detallados",
      label: "permisos por sección",
      sublabel: "Privacidad del padrón asegurada",
    },
  ],
  quote: {
    text: "Confiando siempre en Cristian y su equipo de trabajo, atentos y siempre optimizando nuestra empresa. Gracias.",
    author: "Equipo DentalCenter",
    role: "Cliente",
    company: "DentalCenter",
  },
  cta: {
    headline: "¿Tu organización coordina profesionales, afiliados o clientes en planillas?",
    body: "Si tu operación cruza personas, prestaciones y zonas — podemos construirte una plataforma a medida con panel administrativo + portal público, con permisos detallados para proteger los datos sensibles.",
    interest: "proyecto_cerrado",
    trackingName: "portfolio_dental_cotizar",
  },
  externalLink: {
    label: "Visitar dentalcenter.com.ar",
    href: "https://dentalcenter.com.ar/",
  },
  gallery: {
    images: [
      {
        src: "/portfolio/dentalcenter/08-plataforma-notificacion-modal.jpeg",
        caption: "Notificaciones internas con modal de detalle que el equipo administrativo lee y archiva.",
      },
      {
        src: "/portfolio/dentalcenter/06-plataforma-obras-sociales.jpeg",
        caption: "Gestión de obras sociales con padrón de afiliados asociado a cada una.",
      },
    ],
  },
  seo: {
    title: "Caso DentalCenter — Plataforma para red de consultorios odontológicos | Puro Software",
    description:
      "Cómo construimos una plataforma a medida para una cadena de consultorios dentales: panel administrativo, portal de afiliados, cartilla interactiva con mapa y permisos detallados.",
    keywords:
      "software cadena consultorios, portal afiliados salud, cartilla online prestadores, plataforma administrativa odontología, software a medida salud",
  },
};
