# A/B Tests pendientes — copy del landing

Las variantes acá no fueron testeadas todavía. Se documentan para correr cuando
el volumen de tráfico permita una corrida estadísticamente significativa
(estimado: ≥500 visitantes/mes con tracking estable). Recomendado: usar la skill
`ab-test-setup` o Vercel Edge Config + cookie flag para asignar variante.

## Hero — H1

- **A (control)**: "Tu negocio tiene un límite. Nuestro software lo elimina."
- **B**: "El SaaS no escala con tu PyME. Tu propio software, sí."
- **C**: "Tu sistema, tu lógica, tu propiedad. Listo en 4 semanas."

Métrica primaria: scroll past Hero (depth 25%). Secundaria: click en CTA primario.

## Hero — CTA primario

- **A (control)**: "Quiero una consultoría gratuita"
- **B**: "Hablar con un especialista"
- **C**: "Pedí tu consultoría · 30 min"

Métrica primaria: click rate. Secundaria: form submit downstream.

## Form — Submit button

- **A (control)**: "Solicitar consultoría gratuita"
- **B**: "Quiero hablar con un especialista"
- **C**: "Agendar mi consultoría · gratis"

Métrica primaria: form submit rate. Secundaria: lead quality (budget≥USD 4k).

## Benefits — Headline

- **A (control)**: "¿Por qué invertir en software propio?"
- **B**: "Lo que cambia cuando el sistema es tuyo"

Métrica primaria: tiempo en sección (Microsoft Clarity).

## Hero subtitle (mobile)

Ya implementado en mobile-only el copy más corto:
"Pago único. Construido en 4 semanas. 100% tuyo, sin suscripción."

Si funciona en mobile (medible vs versión actual con compactness post-launch),
considerar bajarlo también a desktop como variante.
