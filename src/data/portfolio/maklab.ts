import type { CaseStudyData } from "../../types/portfolio";

export const caseStudy: CaseStudyData = {
  slug: "maklab",
  client: "Maklab",
  sector: "Distribuidora mayorista · Insumos y equipamiento de laboratorio",
  hero: {
    tag: "Caso destacado · Equipamiento técnico",
    headline: "De PDFs y planillas a una vidriera online con 256 productos y dominio propio",
    subheadline:
      "Una distribuidora argentina de equipamiento de laboratorio — autoclaves, centrífugas, microscopios — opera todo su catálogo en maklab.com.ar con cierre de venta por WhatsApp y sin comisiones por venta.",
    icon: "biotech",
    gradient: "from-purple-500/40 to-fuchsia-700/40",
    heroImage: {
      src: "/portfolio/maklab/02-landing-fold.jpeg",
      caption: "Catálogo público de Maklab — 256 productos de laboratorio con foto, especificaciones y botón de WhatsApp en cada uno.",
    },
  },
  context: {
    intro:
      "Maklab vende equipamiento de laboratorio — autoclaves, centrífugas, microscopios, balanzas y vidrios. Su comprador (laboratorios, universidades, hospitales) quiere ver fotos y especificaciones antes de cotizar, y los PDFs no alcanzan.",
    numbers: [
      { label: "Productos activos", value: "256" },
      { label: "Categorías", value: "20" },
      { label: "Dominio propio", value: "maklab.com.ar" },
      { label: "Activo desde", value: "Agosto 2025" },
    ],
  },
  problem: {
    intro: "Antes de Maklab.com.ar: el catálogo vivía en archivos sueltos y la cotización dependía de mensajes uno a uno.",
    items: [
      {
        icon: "picture_as_pdf",
        title: "Catálogos en PDF desactualizados",
        description:
          "Las fichas técnicas circulaban en PDFs que envejecían rápido — precios viejos, modelos discontinuados, sin búsqueda ni filtros.",
      },
      {
        icon: "storefront",
        title: "Sin vidriera online seria",
        description:
          "El comprador técnico quiere comparar modelos y especificaciones antes de cotizar — una conversación de WhatsApp en frío no alcanza para una venta de monto alto a una empresa.",
      },
      {
        icon: "edit",
        title: "Cargar productos era trabajo manual",
        description:
          "Cualquier alta o cambio de precio requería editar archivos y mandarlos a quien tenga la web — sin autonomía para el equipo comercial.",
      },
      {
        icon: "percent",
        title: "Comisiones de marketplaces grandes",
        description:
          "Vender en marketplaces grandes implicaba pagar comisión por venta — inviable con ventas grandes a empresas donde los márgenes ya son ajustados.",
      },
    ],
  },
  solution: {
    intro:
      "Maklab opera su catálogo sobre PuroCatálogo, nuestra plataforma online compartida — pero con dominio propio, imagen de marca propia y configuración llave en mano que armamos puerta por puerta para su caso.",
    implementations: [
      "Catálogo completo con 256 productos en 20 categorías de laboratorio (microscopios, balanzas, autoclaves, material de vidrio y plástico, espectrofotómetros, cabinas de bioseguridad y más).",
      "Dominio propio maklab.com.ar conectado con seguridad incluida — credibilidad sin pelearse con la parte técnica.",
      "Botón de WhatsApp por producto — el comprador hace click, arranca el chat con el vendedor y el producto va pre-cargado en el mensaje.",
      "Sin comisiones por venta — el pedido va directo entre cliente y proveedor, clave para ventas de monto alto.",
      "Carga simple desde el admin — agregar un nuevo modelo es subir foto, datos y precio, sin tocar código.",
      "Configuración llave en mano de banner, logo, dominio y alta inicial de productos — Maklab arrancó operativo, no en un panel vacío.",
    ],
    image: {
      src: "/portfolio/maklab/06-admin-productos.jpeg",
      caption: "Panel donde el equipo de Maklab carga productos, ajusta precios y publica promociones, sin tocar código.",
    },
  },
  results: [
    {
      icon: "inventory_2",
      value: "256",
      label: "productos activos",
      sublabel: "En 20 categorías de laboratorio",
    },
    {
      icon: "language",
      value: "maklab.com.ar",
      label: "dominio propio",
      sublabel: "Imagen de marca y posicionamiento propios",
    },
    {
      icon: "chat",
      value: "WhatsApp",
      label: "cierre directo de venta",
      sublabel: "Sin comisiones, sin intermediarios",
    },
    {
      icon: "update",
      value: "Continuo",
      label: "mantenimiento del catálogo",
      sublabel: "Activo desde agosto 2025",
    },
  ],
  cta: {
    headline: "¿Necesitás una vidriera online seria para tu negocio?",
    body: "Si vendés productos con catálogo profundo y querés tu propio dominio, sin comisiones por venta, con cierre por WhatsApp — podemos armar tu catálogo sobre PuroCatálogo o desarrollar uno a medida.",
    interest: "proyecto_cerrado",
    trackingName: "portfolio_maklab_cotizar",
  },
  externalLink: {
    label: "Ver maklab.com.ar",
    href: "https://maklab.com.ar",
  },
  gallery: {
    images: [
      {
        src: "/portfolio/maklab/03-landing-producto-detalle.jpeg",
        caption: "Ficha de producto con especificaciones técnicas y cierre de venta por WhatsApp.",
      },
      {
        src: "/portfolio/maklab/04-admin-dashboard.jpeg",
        caption: "Dashboard del catálogo — la vista general que ve el cliente al iniciar sesión.",
      },
    ],
  },
  seo: {
    title: "Caso Maklab — Catálogo digital con 256 productos | Puro Software",
    description:
      "Cómo armamos el catálogo online de Maklab, distribuidora argentina de equipamiento de laboratorio: dominio propio, 256 productos en 20 categorías, cierre de venta por WhatsApp sin comisiones.",
    keywords:
      "catálogo digital mayorista, ventas online sin comisiones, distribuidora laboratorio Argentina, plataforma catálogos online, dominio propio cliente",
  },
};
