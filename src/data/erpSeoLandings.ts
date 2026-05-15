export type ErpSeoLanding = {
  slug: string;
  keyword: string;
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  intro: string;
  painTitle: string;
  painPoints: string[];
  organizeTitle: string;
  organizeIntro: string;
  modules: string[];
  benefitsTitle: string;
  benefits: string[];
  aiTitle: string;
  aiDescription: string;
  faqs: { q: string; a: string }[];
};

const commonModules = [
  "Ventas y presupuestos",
  "Pedidos y seguimiento",
  "Stock y movimientos",
  "Clientes y cuentas corrientes",
  "Compras y proveedores",
  "Facturación y reportes",
];

export const erpSeoLandings: ErpSeoLanding[] = [
  {
    slug: "software-para-distribuidoras",
    keyword: "software para distribuidoras",
    title: "Software para distribuidoras | Puro ERP",
    h1: "Software para distribuidoras que necesitan ordenar ventas, stock y cuentas corrientes",
    description:
      "Puro ERP ayuda a distribuidoras a ordenar pedidos, stock, clientes, cobranzas y facturación en un solo sistema claro y fácil de usar.",
    keywords: [
      "software para distribuidoras",
      "software para distribuidoras mayoristas",
      "sistema para distribuidoras",
      "erp para distribuidoras",
    ],
    eyebrow: "Puro ERP para distribuidoras",
    intro:
      "Cuando una distribuidora crece, los pedidos llegan por varios canales, el stock cambia todo el día y las cuentas corrientes se vuelven difíciles de seguir. Puro ERP centraliza la operación para que el equipo venda, entregue y cobre con más orden.",
    painTitle: "El problema: vender mucho no siempre significa tener control",
    painPoints: [
      "Pedidos anotados en WhatsApp, planillas o cuadernos que después hay que pasar a mano.",
      "Diferencias entre el stock real y lo que figura en una planilla.",
      "Cobranzas pendientes que dependen de la memoria de cada vendedor.",
      "Clientes que preguntan por pedidos y nadie sabe rápido en qué estado están.",
    ],
    organizeTitle: "Qué ordena Puro ERP en una distribuidora",
    organizeIntro:
      "El sistema conecta las áreas que más se pisan en el día a día: ventas, depósito, administración y dirección. Todos trabajan con la misma información.",
    modules: commonModules,
    benefitsTitle: "Beneficios para operar con menos fricción",
    benefits: [
      "Menos errores al cargar pedidos y actualizar stock.",
      "Mejor seguimiento de clientes, saldos y cobranzas.",
      "Información centralizada para decidir compras y reposición.",
      "Más claridad para saber qué se vendió, qué falta entregar y qué queda por cobrar.",
    ],
    aiTitle: "IA para consultar y cargar información más rápido",
    aiDescription:
      "La IA puede ayudar al equipo a buscar datos, resumir información o iniciar cargas desde mensajes. No reemplaza el control del negocio: lo vuelve más ágil cuando hay muchas tareas repetidas.",
    faqs: [
      {
        q: "¿Sirve para distribuidoras mayoristas?",
        a: "Sí. Está pensado para operaciones con muchos productos, clientes frecuentes, pedidos repetidos, cuentas corrientes y necesidad de control de stock.",
      },
      {
        q: "¿Puedo ver pedidos pendientes y entregados?",
        a: "Sí. Podés ordenar el seguimiento de pedidos para saber qué se tomó, qué está preparado, qué se entregó y qué falta cobrar.",
      },
      {
        q: "¿Se puede adaptar a mi forma de vender?",
        a: "Sí. Partimos de una base lista para usar y la ajustamos a tu circuito comercial, administrativo y operativo.",
      },
    ],
  },
  {
    slug: "software-para-distribuidoras-de-alimentos",
    keyword: "software para distribuidoras de alimentos",
    title: "Software para distribuidoras de alimentos | Puro ERP",
    h1: "Software para distribuidoras de alimentos con control de stock, pedidos y clientes",
    description:
      "Sistema de gestión para distribuidoras de alimentos: pedidos, stock, clientes, compras, cobranzas y reportes en un solo lugar.",
    keywords: [
      "software para distribuidoras de alimentos",
      "software para distribuidoras de bebidas",
      "sistema para distribuidoras de alimentos",
      "control de stock alimentos",
    ],
    eyebrow: "Distribución de alimentos y bebidas",
    intro:
      "En alimentos y bebidas, el movimiento es constante: muchos productos, reposición frecuente, clientes que piden rápido y entregas que no pueden desordenarse. Puro ERP ayuda a que ventas, stock y administración trabajen alineados.",
    painTitle: "El problema: cada error afecta entrega, margen o confianza",
    painPoints: [
      "Productos con alta rotación que se venden antes de actualizar la planilla.",
      "Pedidos repetidos de clientes que se cargan de forma manual una y otra vez.",
      "Compras y reposición decididas con información incompleta.",
      "Cuentas corrientes difíciles de revisar cuando hay muchas entregas chicas.",
    ],
    organizeTitle: "Qué ordena Puro ERP en una distribuidora de alimentos",
    organizeIntro:
      "Puro ERP permite centralizar pedidos, stock disponible, clientes, compras y cobranzas para reducir pasos manuales y tener información más confiable.",
    modules: commonModules,
    benefitsTitle: "Beneficios para vender y entregar con más orden",
    benefits: [
      "Menos diferencias entre lo vendido y lo disponible.",
      "Mejor control de clientes frecuentes y condiciones comerciales.",
      "Reposición más clara según ventas y movimiento real.",
      "Seguimiento de saldos para no perder cobranzas en el camino.",
    ],
    aiTitle: "IA para equipos con mucho movimiento diario",
    aiDescription:
      "La IA puede ayudar a consultar clientes, pedidos o saldos sin navegar pantallas de más. También puede transformar mensajes largos en información más ordenada para el equipo.",
    faqs: [
      {
        q: "¿Sirve si vendo alimentos y bebidas juntos?",
        a: "Sí. Podés trabajar con distintos rubros de productos, clientes y condiciones comerciales dentro del mismo sistema.",
      },
      {
        q: "¿Ayuda a evitar faltantes de stock?",
        a: "Ayuda a tener mejor visibilidad de stock y movimiento. No elimina todos los problemas, pero reduce decisiones tomadas a ciegas.",
      },
      {
        q: "¿Puedo arrancar importando productos desde Excel?",
        a: "Sí. Se puede comenzar cargando productos, clientes y proveedores desde planillas para no empezar de cero.",
      },
    ],
  },
  {
    slug: "software-para-mayoristas",
    keyword: "software para mayoristas",
    title: "Software para mayoristas | Puro ERP",
    h1: "Software para mayoristas que quieren vender más sin perder el control",
    description:
      "Puro ERP para mayoristas: ventas, pedidos, stock, cuentas corrientes, compras y reportes claros para ordenar la operación diaria.",
    keywords: ["software para mayoristas", "sistema para mayoristas", "erp mayorista", "control de ventas mayoristas"],
    eyebrow: "Gestión para mayoristas",
    intro:
      "Un mayorista necesita velocidad para vender, pero también control para no cometer errores. Puro ERP reúne pedidos, stock, clientes y cuentas corrientes para que crecer no dependa de más planillas.",
    painTitle: "El problema: muchas ventas, muchos precios y poca visibilidad",
    painPoints: [
      "Listas de precios y condiciones que cambian según cliente o volumen.",
      "Pedidos cargados desde mensajes que pueden quedar incompletos.",
      "Stock comprometido que no siempre se refleja a tiempo.",
      "Saldos y pagos que se revisan tarde o con información dispersa.",
    ],
    organizeTitle: "Qué ordena Puro ERP en un mayorista",
    organizeIntro:
      "La operación mayorista necesita una misma base de información para ventas, administración y depósito. Puro ERP ordena ese circuito para trabajar con más claridad.",
    modules: commonModules,
    benefitsTitle: "Beneficios para mayoristas que están creciendo",
    benefits: [
      "Pedidos más ordenados desde el primer contacto.",
      "Mejor control de stock disponible y stock comprometido.",
      "Cuentas corrientes más claras por cliente.",
      "Reportes simples para entender ventas, margen y productos con más movimiento.",
    ],
    aiTitle: "IA para consultar información comercial sin perder tiempo",
    aiDescription:
      "La IA puede responder consultas internas sobre clientes, productos o pedidos usando la información del sistema. Sirve para ahorrar tiempo en búsquedas repetitivas.",
    faqs: [
      {
        q: "¿Puedo manejar distintos tipos de clientes?",
        a: "Sí. Se puede adaptar la gestión a clientes frecuentes, cuentas corrientes, condiciones comerciales y distintos circuitos de venta.",
      },
      {
        q: "¿Sirve si hoy trabajo con Excel?",
        a: "Sí. La idea es reemplazar planillas dispersas por un sistema centralizado, empezando por lo más importante para tu operación.",
      },
      {
        q: "¿Incluye reportes?",
        a: "Sí. Podés tener reportes de ventas, clientes, stock y cobranzas para revisar el negocio con datos más claros.",
      },
    ],
  },
  {
    slug: "sistema-control-stock",
    keyword: "sistema control de stock",
    title: "Sistema control de stock | Puro ERP",
    h1: "Sistema para control de stock conectado con ventas, compras y facturación",
    description:
      "Sistema de control de stock para empresas que necesitan conectar productos, ventas, compras, pedidos y facturación sin depender de planillas aisladas.",
    keywords: [
      "sistema control de stock",
      "sistema para control de stock",
      "sistema control de stock y ventas",
      "sistema de control de stock y facturacion",
    ],
    eyebrow: "Stock conectado con la operación",
    intro:
      "Controlar stock no es solo contar productos. Es saber qué entra, qué sale, qué se vendió, qué está reservado y qué conviene reponer. Puro ERP conecta el stock con ventas, compras y facturación.",
    painTitle: "El problema: el stock aislado se desactualiza rápido",
    painPoints: [
      "La planilla dice una cosa y el depósito muestra otra.",
      "Se vende un producto que ya estaba comprometido para otro pedido.",
      "Las compras se hacen tarde porque nadie vio el faltante a tiempo.",
      "Cuesta saber qué productos rotan, cuáles sobran y cuáles frenan ventas.",
    ],
    organizeTitle: "Qué ordena Puro ERP para controlar stock",
    organizeIntro:
      "El sistema registra movimientos y los conecta con las operaciones comerciales para que el stock sea parte del flujo real del negocio.",
    modules: [
      "Productos y categorías",
      "Movimientos de entrada y salida",
      "Ventas y pedidos",
      "Compras y proveedores",
      "Facturación relacionada",
      "Reportes de movimiento",
    ],
    benefitsTitle: "Beneficios de un stock más confiable",
    benefits: [
      "Menos ventas perdidas por información desactualizada.",
      "Menos sobrestock de productos que no se mueven.",
      "Reposición más clara según el movimiento real.",
      "Mejor coordinación entre venta, administración y depósito.",
    ],
    aiTitle: "IA para consultar stock de forma simple",
    aiDescription:
      "La IA puede ayudar a buscar productos, revisar disponibilidad o resumir información de movimiento sin que el equipo tenga que recorrer varias pantallas.",
    faqs: [
      {
        q: "¿Es solo un sistema de stock?",
        a: "No. El stock está conectado con ventas, pedidos, compras, clientes y facturación para que la información tenga sentido operativo.",
      },
      {
        q: "¿Puedo importar mis productos actuales?",
        a: "Sí. Podés comenzar importando productos desde Excel y luego ajustar la información durante la puesta en marcha.",
      },
      {
        q: "¿Sirve para varias personas cargando movimientos?",
        a: "Sí. Cada usuario puede trabajar con su acceso y permisos, evitando depender de una sola planilla compartida.",
      },
    ],
  },
  {
    slug: "sistema-gestion-pedidos",
    keyword: "sistema gestión pedidos",
    title: "Sistema de gestión de pedidos | Puro ERP",
    h1: "Sistema de gestión de pedidos para ordenar ventas desde el primer contacto hasta la entrega",
    description:
      "Ordená pedidos, clientes, stock, entregas, cobranzas y facturación con Puro ERP, un sistema de gestión pensado para empresas argentinas.",
    keywords: ["sistema gestion pedidos", "sistema de gestion de pedidos", "gestión de pedidos", "control de pedidos"],
    eyebrow: "Pedidos de punta a punta",
    intro:
      "Un pedido no termina cuando el cliente lo manda. Hay que cargarlo, confirmarlo, revisar stock, prepararlo, entregarlo, facturarlo y cobrarlo. Puro ERP ayuda a que ese recorrido sea visible.",
    painTitle: "El problema: los pedidos se pierden cuando viven en mensajes",
    painPoints: [
      "Pedidos que llegan por WhatsApp y quedan mezclados con conversaciones.",
      "Cambios de último momento que no todos ven.",
      "Entregas preparadas con información incompleta.",
      "Facturación o cobranza que se demora porque falta seguimiento.",
    ],
    organizeTitle: "Qué ordena Puro ERP en la gestión de pedidos",
    organizeIntro:
      "Puro ERP convierte el pedido en una operación visible para el equipo, desde la carga hasta la entrega y el cobro.",
    modules: [
      "Carga de pedidos",
      "Clientes y condiciones",
      "Stock disponible",
      "Preparación y seguimiento",
      "Facturación",
      "Cobranzas y reportes",
    ],
    benefitsTitle: "Beneficios para vender con más seguimiento",
    benefits: [
      "Menos pedidos duplicados, incompletos o perdidos.",
      "Mejor coordinación entre vendedor, depósito y administración.",
      "Información clara para responderle al cliente.",
      "Menos pasos manuales entre pedido, entrega, factura y cobro.",
    ],
    aiTitle: "IA para transformar mensajes en trabajo más ordenado",
    aiDescription:
      "La IA puede ayudar a interpretar mensajes, resumir pedidos o buscar información del cliente. Siempre con revisión del equipo cuando haga falta.",
    faqs: [
      {
        q: "¿Puedo usarlo aunque los pedidos sigan entrando por WhatsApp?",
        a: "Sí. La idea no es negar cómo trabaja tu cliente, sino ordenar internamente lo que hoy llega por distintos canales.",
      },
      {
        q: "¿Ayuda a ver el estado de cada pedido?",
        a: "Sí. Podés ordenar estados para saber qué está pendiente, preparado, entregado, facturado o cobrado.",
      },
      {
        q: "¿Se conecta con stock?",
        a: "Sí. La gestión de pedidos se apoya en stock para reducir errores al vender productos no disponibles.",
      },
    ],
  },
  {
    slug: "software-para-vendedores-en-ruta",
    keyword: "software para vendedores en ruta",
    title: "Software para vendedores en ruta | Puro ERP",
    h1: "Software para vendedores en ruta conectado con pedidos, clientes y stock",
    description:
      "Puro ERP ayuda a ordenar vendedores en ruta con clientes, pedidos, stock, cuentas corrientes y seguimiento comercial centralizado.",
    keywords: [
      "software para vendedores en ruta",
      "software para control de vendedores",
      "sistema para vendedores en ruta",
      "control de vendedores",
    ],
    eyebrow: "Ventas en ruta con más control",
    intro:
      "Cuando los vendedores están en la calle, la empresa necesita visibilidad sin frenar la venta. Puro ERP permite ordenar clientes, pedidos, stock y cobranzas para que la información vuelva al sistema.",
    painTitle: "El problema: cada vendedor maneja información por separado",
    painPoints: [
      "Pedidos enviados por mensaje que después alguien debe cargar de nuevo.",
      "Clientes visitados sin registro claro de seguimiento.",
      "Consultas de stock que dependen de llamar a administración.",
      "Cobranzas o saldos que no se revisan hasta el final del día.",
    ],
    organizeTitle: "Qué ordena Puro ERP para vendedores en ruta",
    organizeIntro:
      "El sistema ayuda a que la actividad comercial de la calle quede conectada con administración, stock y dirección.",
    modules: [
      "Clientes y contactos",
      "Pedidos por vendedor",
      "Stock para consulta",
      "Cuentas corrientes",
      "Seguimiento comercial",
      "Reportes de ventas",
    ],
    benefitsTitle: "Beneficios para equipos comerciales en movimiento",
    benefits: [
      "Menos recarga manual de pedidos.",
      "Mejor seguimiento de clientes visitados y pendientes.",
      "Más claridad sobre saldos antes de vender o entregar.",
      "Información centralizada aunque el equipo trabaje fuera de la oficina.",
    ],
    aiTitle: "IA como apoyo para consultas rápidas",
    aiDescription:
      "La IA puede ayudar a consultar información de clientes, pedidos o productos con lenguaje simple. Es útil cuando el equipo necesita respuestas rápidas sin abrir varias pantallas.",
    faqs: [
      {
        q: "¿Funciona desde celular?",
        a: "La plataforma web está optimizada para celular. Si tu operación necesita una app dedicada para vendedores, también se puede desarrollar sobre la misma base.",
      },
      {
        q: "¿Puedo ver qué vendió cada vendedor?",
        a: "Sí. Podés ordenar pedidos, clientes y resultados por vendedor para tener mejor seguimiento comercial.",
      },
      {
        q: "¿Sirve para controlar cobranzas?",
        a: "Sí. Podés centralizar saldos y cuentas corrientes para que ventas y administración trabajen con la misma información.",
      },
    ],
  },
  {
    slug: "software-para-fabricas",
    keyword: "software para fábricas",
    title: "Software para fábricas | Puro ERP",
    h1: "Software para fábricas que necesitan controlar stock, producción y ventas",
    description:
      "Sistema para fábricas que necesitan ordenar insumos, stock, producción, pedidos, ventas, compras y reportes sin depender de planillas dispersas.",
    keywords: ["software para fabricas", "software para fábrica de alimentos", "sistema para fábricas", "control de producción y stock"],
    eyebrow: "Gestión para fábricas",
    intro:
      "En una fábrica, el desorden no aparece solo en ventas: también aparece en insumos, producción, compras y entregas. Puro ERP ayuda a conectar lo que se produce con lo que se vende y se compra.",
    painTitle: "El problema: producir sin datos claros genera costos ocultos",
    painPoints: [
      "Insumos que faltan cuando ya hay pedidos comprometidos.",
      "Stock de productos terminados que no coincide con lo disponible para vender.",
      "Compras decididas tarde o con poca información.",
      "Ventas, producción y administración trabajando con datos distintos.",
    ],
    organizeTitle: "Qué ordena Puro ERP en una fábrica",
    organizeIntro:
      "Puro ERP permite ordenar stock, compras, pedidos, ventas y reportes para que la operación tenga una base común de información.",
    modules: [
      "Productos e insumos",
      "Stock de entrada y salida",
      "Pedidos de clientes",
      "Compras a proveedores",
      "Ventas y facturación",
      "Reportes de operación",
    ],
    benefitsTitle: "Beneficios para controlar mejor la operación",
    benefits: [
      "Mejor visibilidad de insumos y productos terminados.",
      "Menos urgencias por faltantes no detectados.",
      "Ventas más alineadas con disponibilidad real.",
      "Reportes simples para revisar movimiento, compras y resultados.",
    ],
    aiTitle: "IA para consultar datos de operación",
    aiDescription:
      "La IA puede ayudar a buscar información sobre productos, pedidos, compras o clientes. Sirve como apoyo para equipos que necesitan respuestas rápidas durante el día.",
    faqs: [
      {
        q: "¿Sirve para fábricas de alimentos?",
        a: "Sí. Se puede adaptar a fábricas de alimentos y otros rubros donde el control de insumos, stock y pedidos sea central.",
      },
      {
        q: "¿Incluye producción?",
        a: "La base ordena stock, ventas, compras y pedidos. Si necesitás un circuito de producción específico, se puede adaptar a tu forma de trabajar.",
      },
      {
        q: "¿Puedo empezar solo con stock y ventas?",
        a: "Sí. Conviene arrancar por los procesos más urgentes y luego sumar módulos cuando el equipo ya los necesita.",
      },
    ],
  },
  {
    slug: "software-para-logistica",
    keyword: "software para logística",
    title: "Software para logística | Puro ERP",
    h1: "Software para logística y operaciones con entregas, pedidos y seguimiento",
    description:
      "Puro ERP ayuda a empresas con operación logística a ordenar pedidos, entregas, clientes, stock, seguimiento y reportes comerciales.",
    keywords: [
      "software para logistica",
      "software para logistica de transporte",
      "software para empresas logisticas",
      "sistema para logística",
    ],
    eyebrow: "Operación y logística",
    intro:
      "La logística necesita información clara: qué pedido sale, a qué cliente, con qué productos, en qué estado y qué falta resolver. Puro ERP ayuda a ordenar el circuito operativo detrás de cada entrega.",
    painTitle: "El problema: sin seguimiento, cada entrega depende de mensajes",
    painPoints: [
      "Pedidos preparados con datos que cambiaron y no llegaron a tiempo.",
      "Clientes preguntando por entregas sin una respuesta clara.",
      "Administración, depósito y reparto usando información distinta.",
      "Dificultad para revisar pendientes, entregados y cobranzas asociadas.",
    ],
    organizeTitle: "Qué ordena Puro ERP en logística y operaciones",
    organizeIntro:
      "Puro ERP organiza la información que necesitan ventas, depósito, administración y operación para tener mejor seguimiento de cada pedido.",
    modules: [
      "Pedidos y clientes",
      "Estados de seguimiento",
      "Stock y preparación",
      "Entregas pendientes",
      "Facturación y cobranzas",
      "Reportes operativos",
    ],
    benefitsTitle: "Beneficios para equipos con entregas diarias",
    benefits: [
      "Menos consultas internas para saber en qué estado está un pedido.",
      "Mejor coordinación entre quienes venden, preparan y entregan.",
      "Más claridad sobre pendientes y entregas realizadas.",
      "Información centralizada para revisar cumplimiento y problemas repetidos.",
    ],
    aiTitle: "IA para responder consultas operativas",
    aiDescription:
      "La IA puede ayudar a buscar pedidos, clientes o estados de seguimiento usando lenguaje simple. Es una forma de ahorrar tiempo en consultas repetitivas.",
    faqs: [
      {
        q: "¿Es un sistema de transporte puro?",
        a: "Puro ERP no es solo ruteo de transporte. Está pensado para ordenar la operación completa alrededor de pedidos, stock, entregas, clientes y cobranzas.",
      },
      {
        q: "¿Puedo ver pedidos pendientes de entrega?",
        a: "Sí. Se pueden ordenar estados para dar seguimiento a pedidos pendientes, preparados, entregados o con problemas.",
      },
      {
        q: "¿Sirve para empresas con depósito?",
        a: "Sí. Es especialmente útil cuando depósito, ventas y administración necesitan trabajar con la misma información.",
      },
    ],
  },
  {
    slug: "software-gestion-pymes-argentina",
    keyword: "software para pymes Argentina",
    title: "Software de gestión para pymes argentinas | Puro ERP",
    h1: "Software de gestión para pymes argentinas que quieren ordenar su operación",
    description:
      "Puro ERP es un software de gestión para pymes argentinas: ventas, stock, clientes, compras, facturación, cobranzas y reportes claros.",
    keywords: [
      "software para pymes argentina",
      "software de gestion para pymes argentina",
      "sistema de gestión para pymes",
      "erp para pymes argentina",
    ],
    eyebrow: "Gestión para pymes argentinas",
    intro:
      "Muchas pymes crecen resolviendo todo con planillas, WhatsApp y esfuerzo del equipo. Eso funciona hasta que la información se dispersa. Puro ERP ayuda a ordenar la operación sin volverla más complicada.",
    painTitle: "El problema: la pyme crece, pero el control queda atrás",
    painPoints: [
      "Ventas, stock y cobranzas repartidas entre varias planillas.",
      "Datos que dependen de una o dos personas clave.",
      "Facturación y seguimiento que se hacen tarde por falta de orden.",
      "Decisiones tomadas sin reportes simples y confiables.",
    ],
    organizeTitle: "Qué ordena Puro ERP en una pyme",
    organizeIntro:
      "El sistema reúne las tareas principales del negocio para que el equipo pueda vender, comprar, facturar y revisar resultados con más claridad.",
    modules: commonModules,
    benefitsTitle: "Beneficios para una pyme que quiere profesionalizarse",
    benefits: [
      "Menos dependencia de planillas y mensajes sueltos.",
      "Más claridad sobre ventas, stock, saldos y resultados.",
      "Procesos más simples para el equipo administrativo y comercial.",
      "Base ordenada para crecer sin perder información en el camino.",
    ],
    aiTitle: "IA para trabajar más rápido sin complicar al equipo",
    aiDescription:
      "La IA puede ayudar con consultas, resúmenes y tareas repetidas dentro del sistema. La idea es sumar velocidad sin exigir conocimientos técnicos.",
    faqs: [
      {
        q: "¿Está pensado para empresas argentinas?",
        a: "Sí. El enfoque contempla necesidades típicas de pymes argentinas, incluyendo facturación local y operación en pesos.",
      },
      {
        q: "¿Necesito cambiar todo mi proceso de golpe?",
        a: "No. Se puede implementar por etapas, empezando por las áreas donde hoy más se pierde tiempo o control.",
      },
      {
        q: "¿Es difícil para el equipo?",
        a: "Buscamos que sea claro y usable. Además, el onboarding incluye acompañamiento para configurar y capacitar al equipo.",
      },
    ],
  },
  {
    slug: "alternativa-excel-whatsapp-empresas",
    keyword: "alternativa a Excel para empresas",
    title: "Alternativa a Excel y WhatsApp para empresas | Puro ERP",
    h1: "Una alternativa a Excel y WhatsApp para empresas que ya necesitan más orden",
    description:
      "Puro ERP reemplaza planillas y mensajes dispersos por un sistema de gestión para ventas, pedidos, stock, clientes, cobranzas y reportes.",
    keywords: [
      "alternativa a Excel para empresas",
      "alternativa a WhatsApp para pedidos",
      "sistema para reemplazar planillas",
      "software de gestión para empresas",
    ],
    eyebrow: "De planillas a sistema",
    intro:
      "Excel y WhatsApp son útiles para arrancar. El problema aparece cuando el negocio ya depende de demasiados archivos, chats y recordatorios. Puro ERP ayuda a pasar de información dispersa a una operación centralizada.",
    painTitle: "El problema: las planillas no avisan cuando algo se pierde",
    painPoints: [
      "Versiones distintas del mismo archivo circulando entre personas.",
      "Pedidos mezclados con conversaciones y audios.",
      "Stock actualizado tarde o con errores de carga.",
      "Cobranzas y tareas pendientes que dependen de seguimiento manual.",
    ],
    organizeTitle: "Qué ordena Puro ERP al dejar planillas dispersas",
    organizeIntro:
      "El sistema reúne ventas, pedidos, stock, clientes y cobranzas para que el equipo trabaje con una sola fuente de información.",
    modules: commonModules,
    benefitsTitle: "Beneficios de pasar a un sistema de gestión",
    benefits: [
      "Menos errores por copiar y pegar información.",
      "Más claridad sobre qué está pendiente y quién debe resolverlo.",
      "Información disponible para todo el equipo autorizado.",
      "Reportes simples sin armar planillas desde cero cada semana.",
    ],
    aiTitle: "IA para aprovechar mejor la información centralizada",
    aiDescription:
      "Cuando la información está ordenada, la IA puede ayudar a buscar, resumir y responder consultas internas. Primero ordenamos la base; después la IA suma velocidad.",
    faqs: [
      {
        q: "¿Tengo que dejar de usar WhatsApp?",
        a: "No necesariamente. Muchos clientes pueden seguir escribiendo por WhatsApp; lo importante es que la operación interna quede registrada y ordenada en el sistema.",
      },
      {
        q: "¿Qué pasa con mis planillas actuales?",
        a: "Podemos usarlas como punto de partida para importar productos, clientes y otros datos necesarios al comenzar.",
      },
      {
        q: "¿Cuándo conviene pasar de Excel a un sistema?",
        a: "Cuando los errores, demoras o dudas de información empiezan a costar ventas, tiempo o control. Ahí un sistema deja de ser lujo y pasa a ser orden operativo.",
      },
    ],
  },
];

export const erpSeoLandingSlugs = erpSeoLandings.map((landing) => landing.slug);

export function getErpSeoLandingBySlug(slug: string) {
  return erpSeoLandings.find((landing) => landing.slug === slug);
}
