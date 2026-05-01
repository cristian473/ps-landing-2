import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

export default function Pricing() {
  return (
    <section className="bg-black py-24 pb-16 relative" id="precios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Planes y precios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Elegí cómo arrancar
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sin abonos eternos, sin paquetes de horas raros, sin sorpresas. Implementación incluida.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {/* Plan 1 — Sistema de gestión */}
          <PricingCard
            highlighted
            badge="Recomendado"
            icon="rocket_launch"
            title="Sistema de gestión"
            description="Plataforma estándar de gestión + IA, con módulos básicos listos para usar. Configuración inicial adaptada a tu negocio, sin desarrollos a medida."
            features={[
              {
                title: 'Módulos incluidos',
                items: [
                  'Clientes, contactos y cuentas corrientes',
                  'Productos, catálogo y listas de precios',
                  'Stock e inventario multi-depósito',
                  'Ventas, pedidos y comprobantes internos',
                  'Caja, cobranzas y pagos',
                  'Compras y proveedores',
                  'Reportes y dashboard de gestión',
                  'Usuarios, roles y permisos',
                  'Multi-sucursal',
                  'Agente IA por WhatsApp para consultar datos',
                  'Facturación electrónica con AFIP / ARCA',
                ],
              },
              {
                title: 'Lo que incluye el servicio',
                items: [
                  'Configuración inicial adaptada a tu negocio',
                  'Importación de tus datos desde Excel',
                  'Capacitación del equipo',
                  'Hosting y servidor administrado',
                  'Actualizaciones permanentes',
                  'Soporte técnico continuo',
                  'Sin límite de usuarios',
                ],
              },
            ]}
            closingNote="Sin desarrollos a medida ni integraciones externas. ¿Necesitás más? Mirá el Plan 2."
            modalitiesLabel="Precios:"
            modalities={[
              {
                label: 'Anual',
                price: 'USD 89/mes',
                arsReference: '≈ AR$ 120.000',
                commitment: 'Pago único anual: USD 1.068',
                highlighted: true,
              },
              {
                label: 'Mes a mes',
                price: 'USD 129/mes',
                arsReference: '≈ AR$ 175.000',
                commitment: 'Sin compromiso',
              },
            ]}
            footnote="+ IVA · Facturado en pesos al cambio del día"
            guarantee="30 días de garantía en el plan anual. Si no te funciona el primer mes, te devolvemos todo."
            ctaText="Solicitar implementación"
            ctaHref="#contacto"
            ctaInterestValue="sistema_gestion"
            ctaTrackingName="pricing_sistema_gestion"
            ctaTrackingLocation="pricing_plan_1"
            ctaVariant="primary"
          />

          {/* Plan 2 — Sistema a medida */}
          <PricingCard
            icon="settings_suggest"
            title="Sistema a medida"
            description="Todo lo del Plan 1 + módulos custom, integraciones y apps propias. Adaptación completa a tu negocio. Cotización personalizada según alcance."
            features={[
              {
                title: 'Desarrollos personalizados como por ejemplo:',
                listStyle: 'bullet',
                items: [
                  'Trazabilidad avanzada por lote o número de serie',
                  'POS retail con scanner / lector de códigos',
                  'Conciliación bancaria automática',
                  'Integraciones: Tienda Nube, Shopify, MercadoLibre, WhatsApp, pasarelas de pago',
                  'App nativa de vendedores en ruta',
                  'Apps de picking, reparto y portal de repartidores',
                  'Módulo de producción con trazabilidad por lote',
                  'Reclamos, garantías y postventa',
                  'Módulos custom según tu rubro',
                  'Funcionalidades y aplicaciones extras a pedido',
                ],
              },
            ]}
            setupLabel="Implementación desde"
            priceValue="USD 1.000"
            priceSubtext="+ mantenimiento desde USD 169/mes (≈ AR$ 230.000)"
            footnote="+ IVA · Cotización personalizada según alcance"
            ctaText="Cotizar mi proyecto"
            ctaHref="#contacto"
            ctaInterestValue="sistema_medida"
            ctaTrackingName="pricing_sistema_medida"
            ctaTrackingLocation="pricing_plan_2"
            ctaVariant="primary"
            delay={0.1}
          />
        </div>

        {/* Modalidad para sistemas propios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-10 p-6 sm:p-8 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/12 via-white/[0.04] to-white/[0.02] shadow-[0_0_60px_rgba(56,182,255,0.14)] flex flex-col md:flex-row md:items-center gap-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(56,182,255,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_32%)]" />
          <div className="relative z-10 w-14 h-14 bg-primary text-black rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
            <span className="material-icons text-3xl">schedule</span>
          </div>
          <div className="relative z-10 flex-1">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Pack mensual de horas
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">¿Tenés tu propio sistema?</h3>
            <p className="text-gray-300 text-sm md:text-base mt-2 leading-relaxed max-w-2xl">
              Podés contratar un pack mensual de horas, con mínimo 10 hs, ideal para equipos que evolucionan la plataforma todos los meses.
            </p>
          </div>
          <div className="relative z-10 flex w-full md:w-auto flex-col items-stretch md:items-end gap-3 shrink-0">
            <div className="hidden md:block text-left md:text-right">
              <p className="text-xs uppercase tracking-wider text-gray-400">Desde</p>
              <p className="text-2xl font-extrabold text-white">10 hs/mes</p>
            </div>
            <a
              href="#contacto"
              onClick={() => {
                window.trackCTAClick?.('pricing_pack_horas', 'pricing_consultiva');
                window.dispatchEvent(
                  new CustomEvent('contact:prefill', {
                    detail: { interest: 'pack_horas' },
                  }),
                );
              }}
              className="inline-flex w-full md:w-auto items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-bold text-black hover:bg-primary/90 transition"
            >
              Consultar →
            </a>
          </div>
        </motion.div>

        <p className="text-center text-xs text-gray-500 mt-8 max-w-2xl mx-auto">
          Precios en USD facturados en pesos al cambio del día. IVA no incluido. Sin permanencia obligatoria en el pack mensual de horas.
        </p>
      </div>
    </section>
  );
}
