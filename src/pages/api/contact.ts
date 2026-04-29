import type { APIRoute } from "astro";
import { Resend } from "resend";
import {
	validateEmail,
	validateName,
	validatePhone,
	validateCity,
	validateCountryCode,
	validateMessage,
	sanitizeInput,
} from "../../utils/validation";
import { verifyRecaptcha } from "../../lib/recaptcha";
import { CONTACT_COUNTRY_CODE_SET } from "../../constants/contactCountries";
import { sendMetaLeadEvent } from "../../lib/meta-conversions";
import { submitLeadToPanel } from "../../lib/panel-api";

const TEAM_SIZE_VALUES = new Set(["1-5", "5-15", "15-50", "50+"]);
const TIMELINE_VALUES = new Set(["1-3m", "3-6m", "6m+", "exploring"]);

const TEAM_SIZE_LABELS: Record<string, string> = {
	"1-5": "1 a 5 personas",
	"5-15": "5 a 15 personas",
	"15-50": "15 a 50 personas",
	"50+": "Más de 50 personas",
};

const TIMELINE_LABELS: Record<string, string> = {
	"1-3m": "Ya, en los próximos 1-3 meses",
	"3-6m": "En 3 a 6 meses",
	"6m+": "Más de 6 meses",
	exploring: "Solo está explorando",
};

export const POST: APIRoute = async ({ request }) => {
	try {
		const body = await request.json();

		const recaptchaResult = await verifyRecaptcha(
			body.recaptchaToken || "",
			"contact"
		);
		if (!recaptchaResult.success) {
			return jsonResponse(403, {
				success: false,
				error: recaptchaResult.error,
			});
		}

		const name = sanitizeInput(body.name || "");
		const email = sanitizeInput(body.email || "");
		const phone = sanitizeInput(body.phone || "");
		const city = sanitizeInput(typeof body.city === "string" ? body.city : "");
		const country = sanitizeInput(
			typeof body.country === "string" ? body.country : ""
		).toUpperCase();
		const teamSize = sanitizeInput(
			typeof body.teamSize === "string" ? body.teamSize : ""
		);
		const timeline = sanitizeInput(
			typeof body.timeline === "string" ? body.timeline : ""
		);
		const message = sanitizeInput(body.message || "");
		const eventId = sanitizeInput(
			typeof body.eventId === "string" ? body.eventId : ""
		);
		const eventSourceUrl =
			typeof body.eventSourceUrl === "string" ? body.eventSourceUrl.trim() : "";

		const nameResult = validateName(name);
		if (!nameResult.isValid) return jsonResponse(400, { success: false, error: nameResult.error });

		const emailResult = validateEmail(email);
		if (!emailResult.isValid) return jsonResponse(400, { success: false, error: emailResult.error });

		const phoneResult = validatePhone(phone);
		if (!phoneResult.isValid) return jsonResponse(400, { success: false, error: phoneResult.error });

		const cityResult = validateCity(city);
		if (!cityResult.isValid) return jsonResponse(400, { success: false, error: cityResult.error });

		const countryResult = validateCountryCode(country, CONTACT_COUNTRY_CODE_SET);
		if (!countryResult.isValid) return jsonResponse(400, { success: false, error: countryResult.error });

		const messageResult = validateMessage(message);
		if (!messageResult.isValid) return jsonResponse(400, { success: false, error: messageResult.error });

		if (!TEAM_SIZE_VALUES.has(teamSize)) {
			return jsonResponse(400, {
				success: false,
				error: "Seleccioná el tamaño de tu equipo.",
			});
		}

		if (!TIMELINE_VALUES.has(timeline)) {
			return jsonResponse(400, {
				success: false,
				error: "Seleccioná cuándo necesitás resolver esto.",
			});
		}

		// 1) Registrar el lead en panel-api. Si esto falla, no mandamos confirmación
		//    ni notificación — el lead no quedó persistido y el flujo de WhatsApp
		//    no arrancó, así que mentir con "listo!" sería peor que fallar claro.
		let panelResponse;
		try {
			panelResponse = await submitLeadToPanel({
				name,
				phone,
				email,
				city,
				country,
				teamSize,
				timeline,
				message,
				eventSourceUrl,
				eventId,
			});
		} catch (err) {
			console.error("panel-api lead submission failed", err);
			return jsonResponse(502, {
				success: false,
				error: "No pudimos registrar tu consulta en este momento. Intentá de nuevo en unos minutos.",
			});
		}

		if (!panelResponse.ok) {
			return jsonResponse(400, {
				success: false,
				error: panelResponse.message ?? "No pudimos registrar tu consulta.",
			});
		}

		// 2) Emails de notificación + confirmación. Best-effort, el lead ya está
		//    persistido así que no abortamos si Resend falla.
		const resendKey = import.meta.env.RESEND_API_KEY;
		if (resendKey) {
			const resend = new Resend(resendKey);

			await resend.emails
				.send({
					from: "Puro Software <cristian@contacto.puro.software>",
					to: "cristian@puro.software",
					subject: `Nueva consulta de ${name} — ${email}`,
					html: renderOwnerEmail({
						name,
						email,
						phone,
						city,
						country,
						teamSize,
						timeline,
						message,
					}),
				})
				.catch((error) => console.warn("Owner email failed", { error }));

			await resend.emails
				.send({
					from: "Puro Software <cristian@contacto.puro.software>",
					to: email,
					subject: "Recibimos tu consulta — Puro Software",
					html: renderLeadEmail({ name, message }),
				})
				.catch((error) => console.warn("Lead email failed", { error }));
		} else {
			console.warn("RESEND_API_KEY not configured — skipping notification emails");
		}

		if(process.env.NODE_ENV === "production") {
			// 3) Meta CAPI (best-effort)
			await sendMetaLeadEvent({
				request,
				eventId,
				eventSourceUrl,
				email,
				phone,
				fullName: name,
				city,
				country,
			}).catch((error) => console.warn("Meta CAPI contact lead event failed", { error }));
		}


		return jsonResponse(200, {
			success: true,
			message:
				"¡Listo! Ya te estamos escribiendo por WhatsApp para avanzar con tu consulta. También te mandamos un email de confirmación.",
		});
	} catch (error) {
		console.error("Contact form error:", error);
		return jsonResponse(500, {
			success: false,
			error: "Hubo un error al enviar el mensaje. Por favor intentá de nuevo.",
		});
	}
};

function jsonResponse(status: number, body: Record<string, unknown>) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { "Content-Type": "application/json" },
	});
}

function renderOwnerEmail(v: {
	name: string;
	email: string;
	phone: string;
	city: string;
	country: string;
	teamSize: string;
	timeline: string;
	message: string;
}): string {
	const teamSizeLabel = TEAM_SIZE_LABELS[v.teamSize] ?? v.teamSize;
	const timelineLabel = TIMELINE_LABELS[v.timeline] ?? v.timeline;
	return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a1a2e; border-bottom: 2px solid #00d4ff; padding-bottom: 12px;">
        Nueva consulta desde el sitio web
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; width: 120px; background: #f9f9f9;">Nombre</td><td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${v.name}</td></tr>
        <tr><td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f9f9;">Email</td><td style="padding: 10px 12px; border: 1px solid #e0e0e0;"><a href="mailto:${v.email}" style="color: #0066cc;">${v.email}</a></td></tr>
        <tr><td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f9f9;">Teléfono</td><td style="padding: 10px 12px; border: 1px solid #e0e0e0;"><a href="tel:${v.phone}" style="color: #0066cc;">${v.phone}</a></td></tr>
        <tr><td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f9f9;">Ciudad</td><td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${v.city}</td></tr>
        <tr><td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f9f9;">País</td><td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${v.country}</td></tr>
        <tr><td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f9f9;">Equipo</td><td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${teamSizeLabel}</td></tr>
        <tr><td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f9f9;">Plazo</td><td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${timelineLabel}</td></tr>
        <tr><td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f9f9; vertical-align: top;">Mensaje</td><td style="padding: 10px 12px; border: 1px solid #e0e0e0; white-space: pre-wrap;">${v.message}</td></tr>
      </table>
      <p style="margin-top: 20px; color: #666; font-size: 13px;">
        El lead ya quedó registrado en el panel y la calificación por WhatsApp arrancó automáticamente.
      </p>
    </div>
  `;
}

function renderLeadEmail(v: { name: string; message: string }): string {
	return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a1a2e;">¡Hola ${v.name}!</h2>
      <p style="font-size: 16px; color: #333; line-height: 1.6;">
        Recibimos tu consulta. En los próximos minutos te vamos a escribir por
        <strong>WhatsApp</strong> para hacerte algunas preguntas rápidas y conectarte
        con un asesor humano.
      </p>
      <div style="background: #f4f8fb; border-left: 4px solid #00d4ff; padding: 16px; margin: 24px 0; border-radius: 0 8px 8px 0;">
        <p style="margin: 0 0 8px; font-weight: bold; color: #1a1a2e;">Tu mensaje:</p>
        <p style="margin: 0; color: #555; white-space: pre-wrap;">${v.message}</p>
      </div>
      <p style="font-size: 16px; color: #333; line-height: 1.6;">
        Si necesitás agregar algo antes, podés responder a este email.
      </p>
      <p style="font-size: 16px; color: #333; line-height: 1.6;">
        Saludos,<br />
        <strong>Cristian — Puro Software</strong>
      </p>
      <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 32px 0 16px;" />
      <p style="font-size: 12px; color: #999;">
        Este email fue enviado porque completaste el formulario de contacto en puro.software.
      </p>
    </div>
  `;
}
