import { motion } from 'framer-motion';

/**
 * Grid de módulos del SaaS Puro ERP. Se renderea solo en /erp (la home
 * ya no muestra módulos del producto). Cada item representa una capacidad
 * real del sistema multi-tenant; mantener sincronizado con el roadmap del
 * SaaS en puroerp-demos/puroerp-saas/docs/PRODUCT.md.
 */
type Module = {
  title: string;
  description: string;
  icon: string;
};

const MODULES: Module[] = [
  {
    title: 'Catálogo y productos',
    description:
      'Carga de productos con foto, descripción, precios, listas de precios por cliente y variantes.',
    icon: 'inventory_2',
  },
  {
    title: 'Ventas',
    description:
      'POS para mostrador, pedidos de venta, comprobantes internos, descuentos y promociones.',
    icon: 'point_of_sale',
  },
  {
    title: 'Stock multi-depósito',
    description:
      'Inventario por sucursal, ajustes manuales, movimientos entre depósitos y trazabilidad básica.',
    icon: 'warehouse',
  },
  {
    title: 'Caja y cobranzas',
    description:
      'Cobranzas con múltiples medios de pago, cuentas corrientes de clientes y tesorería diaria.',
    icon: 'payments',
  },
  {
    title: 'Compras y proveedores',
    description:
      'Órdenes de compra, recepciones contra factura, cuentas corrientes de proveedores.',
    icon: 'shopping_cart',
  },
  {
    title: 'Facturación AFIP',
    description:
      'Comprobantes electrónicos: Factura A y B, notas de crédito y débito, recibos. Integrado con AFIP/ARCA.',
    icon: 'receipt_long',
  },
  {
    title: 'Reportes y dashboard',
    description:
      'Ventas del día, productos más vendidos, clientes destacados, ranking de cobros — todo a un click.',
    icon: 'bar_chart',
  },
  {
    title: 'Equipo y permisos',
    description:
      'Sin límite de usuarios. Roles configurables: vendedor, cajero, administrador, sólo lectura.',
    icon: 'groups',
  },
  {
    title: 'Multi-sucursal',
    description:
      'Una sola cuenta administra varias sucursales con stock, ventas y caja independientes por punto.',
    icon: 'storefront',
  },
];

export default function PreBuiltERP() {
  return (
    <section className="bg-black py-20 md:py-28 relative overflow-hidden" id="modulos">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Lo que viene listo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Todos los módulos de gestión que tu negocio necesita
          </h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Sin esperar desarrollos a medida. Configuramos la plataforma a tu operación e importamos tus datos en la primera semana.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {MODULES.map((mod, idx) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-navy-surface border border-white/10 rounded-2xl p-5 md:p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <span className="material-icons text-2xl">{mod.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {mod.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{mod.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
