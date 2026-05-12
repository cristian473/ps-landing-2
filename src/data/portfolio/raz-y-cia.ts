import type { CaseStudyData } from "../../types/portfolio";

export const caseStudy: CaseStudyData = {
  slug: "raz-y-cia",
  client: "Raz y Cía",
  sector: "Logística y distribución mayorista — Capital Federal",
  hero: {
    tag: "Caso destacado · Logística mayorista",
    headline: "De papel y planillas a un ecosistema digital con 9 sistemas en producción",
    subheadline:
      "Una de las distribuidoras mayoristas más grandes de Capital Federal opera todos los días sobre una plataforma central + apps móviles propias para cada rol — vendedores, depósito, repartidores y clientes mayoristas.",
    icon: "local_shipping",
    gradient: "from-amber-500/40 to-orange-700/40",
  },
  context: {
    intro:
      "Raz y Cía mueve miles de pedidos al día entre vendedores, depósito y reparto. Llegaron apoyando todo en papel, planillas y mensajes verbales, con problemas apareciendo uno a uno.",
    numbers: [
      { label: "Sistemas en producción", value: "9" },
      { label: "Apps móviles activas", value: "6" },
      { label: "Pedidos por día", value: "Miles" },
      { label: "Roles digitalizados", value: "Vendedores · Depósito · Reparto · Clientes mayoristas" },
    ],
  },
  problem: {
    intro: "El punto de partida: cada rol con su propio Excel, su propio papel y su propio WhatsApp.",
    items: [
      {
        icon: "description",
        title: "Pedidos en papel y planillas",
        description:
          "Los vendedores anotaban en papel y los pasaban a planilla cuando volvían — pedidos perdidos, errores de transcripción y demoras de horas para llegar al depósito.",
      },
      {
        icon: "visibility_off",
        title: "Sin visibilidad de la operación",
        description:
          "La administración no veía qué había recibido el depósito, qué estaba en reparto o qué entregó cada repartidor. Todo dependía de llamadas y mensajes verbales.",
      },
      {
        icon: "report_problem",
        title: "Reclamos por errores de recepción",
        description:
          "Diferencias entre lo facturado y lo recibido sin control sistemático — discusiones con proveedores, mercadería rota o vencida que no se registraba.",
      },
      {
        icon: "phone_in_talk",
        title: "Clientes mayoristas llamando por teléfono",
        description:
          "Los clientes mayoristas dependían de llamar al vendedor para hacer cada pedido — sin catálogo online, sin historial, sin precios visibles.",
      },
    ],
  },
  solution: {
    intro:
      "Construimos un conjunto integrado de aplicaciones conectado al sistema central de la empresa. Cada rol tiene su propia aplicación y todas comparten la misma información en tiempo real.",
    implementations: [
      "Plataforma web central (RazNet) — gestión de pedidos, stock, comprobantes, usuarios, alertas y reportes administrativos.",
      "App para vendedores en la calle — catálogo con precios por cliente, carga de pedidos offline, sincronización automática al volver con internet.",
      "Portal web para clientes mayoristas — acceso con usuario propio, precios diferenciados, historial de pedidos y reimpresión de comprobantes.",
      "App de recepción en depósito — lectura de código de barras, control automático entre lo facturado y lo recibido, manejo de diferencias.",
      "App para repartidores — hoja de ruta del día con mapa, foto de entrega, confirmación con código de barras.",
      "App de asistencia técnica — captura de firma del cliente, generación de PDF y screenshots para el back-office.",
      "Seguimiento en tiempo real de la fuerza de venta — visibilidad de visitas a clientes desde la administración.",
    ],
    timeline: [
      { phase: "1", label: "App de repartidores (primer rol digitalizado)" },
      { phase: "2", label: "RazNet — plataforma central administrativa" },
      { phase: "3", label: "App de vendedores + portal web para clientes mayoristas" },
      { phase: "4", label: "App de recepción en depósito" },
      { phase: "5", label: "Seguimiento en tiempo real + apps complementarias" },
    ],
  },
  results: [
    {
      icon: "apps",
      value: "9",
      label: "sistemas en producción",
      sublabel: "Plataforma + apps + servicios auxiliares",
    },
    {
      icon: "description",
      value: "0",
      label: "papeles por pedido",
      sublabel: "Operación digital de punta a punta",
    },
    {
      icon: "visibility",
      value: "100%",
      label: "visibilidad",
      sublabel: "Desde el pedido hasta la entrega",
    },
    {
      icon: "update",
      value: "Mensual",
      label: "nuevas funcionalidades",
      sublabel: "Mantenimiento y desarrollo continuo",
    },
  ],
  quote: {
    text: "En la industria logística, el seguimiento y la gestión eficientes son cruciales. Cris y su equipo desarrolló un sistema excepcional que mejoró significativamente nuestras operaciones.",
    author: "Equipo Raz y Cía",
    role: "Cliente",
    company: "Raz y Cía",
  },
  cta: {
    headline: "¿Tu operación se parece a esta?",
    body: "Si tu negocio mueve pedidos, mercadería, vendedores o repartidores con papel, planillas o WhatsApp suelto — podemos armarte un conjunto de aplicaciones adaptado a tu rubro, paso a paso.",
    interest: "proyecto_cerrado",
    trackingName: "portfolio_raz_cotizar",
  },
  externalLink: {
    label: "Visitar razycia.com",
    href: "http://razycia.com/",
  },
  seo: {
    title: "Caso Raz y Cía — Plataforma digital para distribuidora mayorista | Puro Software",
    description:
      "Cómo construimos 9 sistemas en producción para una distribuidora mayorista grande de Capital Federal: plataforma central, apps móviles por rol y portal para clientes mayoristas.",
    keywords:
      "software distribuidora mayorista, app vendedores calle, portal clientes mayoristas, app repartidores, sistema logística, app recepción depósito",
  },
};
