import type { CaseStudyData } from "../../types/portfolio";

export const caseStudy: CaseStudyData = {
  slug: "pauldeco",
  client: "Pauldeco",
  sector: "Decoración del hogar · Tienda online",
  hero: {
    tag: "Caso e-commerce · Marca propia",
    headline: "Una tienda online de decoración con identidad propia sobre Tienda Nube",
    subheadline:
      "Venden muebles, textiles, fragancias y vajilla en toda Argentina. Personalizamos su tienda para que la marca se respire en cada pantalla — y para que el equipo cargue productos sin tocar código.",
    icon: "chair",
    gradient: "from-rose-400/30 to-amber-600/30",
    heroImage: {
      src: "/portfolio/pauldeco/01-landing-fold.jpeg",
      caption: "Tienda online de Pauldeco — decoración del hogar con identidad visual propia sobre Tienda Nube.",
    },
  },
  context: {
    intro:
      "Pauldeco es una tienda argentina de decoración del hogar — muebles, textiles, fragancias y vajilla, venta directa a consumidor final. Necesitaban una vidriera online seria sin entrar en un desarrollo a medida costoso.",
    numbers: [
      { label: "Plataforma", value: "Tienda Nube" },
      { label: "Cobertura", value: "Toda Argentina" },
      { label: "Cliente final", value: "Consumidor directo" },
      { label: "Catálogo", value: "Decoración + muebles" },
    ],
  },
  problem: {
    intro: "Tienda Nube viene con plantillas genéricas que sirven para arrancar — pero no transmiten una marca premium si no se trabajan a fondo.",
    items: [
      {
        icon: "style",
        title: "Plantillas genéricas que no transmiten marca",
        description:
          "Una tienda de decoración aspiracional necesita verse aspiracional. Las plantillas estándar de Tienda Nube son funcionales pero anónimas — no destacaban el estilo de Pauldeco.",
      },
      {
        icon: "shopping_bag",
        title: "Catálogo amplio sin estructura clara",
        description:
          "Decenas de productos entre muebles, textiles, fragancias y vajilla — sin categorización clara el comprador se pierde y se va sin comprar.",
      },
      {
        icon: "code_off",
        title: "Sin equipo técnico in-house",
        description:
          "El cliente quería poder cargar y editar productos solo, sin depender de un desarrollador cada vez que sumaba una colección nueva.",
      },
      {
        icon: "phone_iphone",
        title: "Compra mayoritaria por celular",
        description:
          "El tráfico real llega desde el celular. La experiencia mobile no podía sentirse como un parche — tenía que estar pensada desde el inicio.",
      },
    ],
  },
  solution: {
    intro:
      "Personalizamos el tema de Tienda Nube de punta a punta para que se sienta como un sitio a medida — sin perder la simplicidad de gestión que el cliente necesitaba.",
    implementations: [
      "Diseño visual completo — paleta, tipografía, espaciado y carruseles alineados con el branding de Pauldeco.",
      "Estructura de catálogo clara con categorías visibles y filtros amigables al comprador.",
      "Experiencia mobile-first — cada sección probada en pantalla chica antes que en escritorio.",
      "Integración con WhatsApp para consultas y newsletter para retención.",
      "Panel de Tienda Nube limpio y documentado para que el equipo cargue productos, precios y promociones solo, sin pedir ayuda técnica.",
    ],
    image: {
      src: "/portfolio/pauldeco/04-ficha-producto.jpeg",
      caption: "Ficha de producto con galería, precios financiables y carrito directo.",
    },
  },
  results: [
    {
      icon: "rocket_launch",
      value: "Activa",
      label: "tienda en producción",
      sublabel: "Entrega cerrada, sin mantenimiento mensual requerido",
    },
    {
      icon: "auto_awesome",
      value: "Premium",
      label: "identidad visual propia",
      sublabel: "Sin sentirse plantilla estándar",
    },
    {
      icon: "smartphone",
      value: "Mobile-first",
      label: "experiencia desde celular",
      sublabel: "Donde está el tráfico real",
    },
    {
      icon: "edit",
      value: "Autónomo",
      label: "carga y edición de productos",
      sublabel: "El equipo gestiona solo desde el admin",
    },
  ],
  cta: {
    headline: "¿Tenés una marca propia y querés que tu tienda online la transmita?",
    body: "Si vendés productos físicos con identidad fuerte y querés un sitio que se vea profesional sin entrar en un desarrollo de cero, podemos personalizar tu Tienda Nube o construirte un sitio a medida.",
    interest: "proyecto_cerrado",
    trackingName: "portfolio_pauldeco_cotizar",
  },
  externalLink: {
    label: "Visitar pauldeco.com",
    href: "https://pauldeco.com/",
  },
  gallery: {
    images: [
      {
        src: "/portfolio/pauldeco/03-productos.jpeg",
        caption: "Grilla de productos con filtros por categoría — muebles, textiles, vajilla y fragancias.",
      },
    ],
  },
  seo: {
    title: "Caso Pauldeco — Tienda online de decoración con marca propia | Puro Software",
    description:
      "Cómo personalizamos la tienda online de Pauldeco, decoración del hogar en Argentina: diseño a medida sobre Tienda Nube, catálogo ordenado, experiencia mobile-first.",
    keywords:
      "diseño tienda nube, personalización tienda online, ecommerce decoración Argentina, tienda online marca propia, branding tienda nube",
  },
};
