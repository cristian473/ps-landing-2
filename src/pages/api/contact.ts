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

export const POST: APIRoute = async ({ request }) => {
	try {
		const body = await request.json();

		// Verify reCAPTCHA token
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
		const message = sanitizeInput(body.message || "");
		const eventId = sanitizeInput(
			typeof body.eventId === "string" ? body.eventId : ""
		);
		const eventSourceUrl =
			typeof body.eventSourceUrl === "string" ? body.eventSourceUrl.trim() : "";

		// Validate all fields
		const nameResult = validateName(name);
		if (!nameResult.isValid) {
			return jsonResponse(400, { success: false, error: nameResult.error });
		}

		const emailResult = validateEmail(email);
		if (!emailResult.isValid) {
			return jsonResponse(400, { success: false, error: emailResult.error });
		}

		const phoneResult = validatePhone(phone);
		if (!phoneResult.isValid) {
			return jsonResponse(400, { success: false, error: phoneResult.error });
		}

		const cityResult = validateCity(city);
		if (!cityResult.isValid) {
			return jsonResponse(400, { success: false, error: cityResult.error });
		}

		const countryResult = validateCountryCode(country, CONTACT_COUNTRY_CODE_SET);
		if (!countryResult.isValid) {
			return jsonResponse(400, { success: false, error: countryResult.error });
		}

		const messageResult = validateMessage(message);
		if (!messageResult.isValid) {
			return jsonResponse(400, { success: false, error: messageResult.error });
		}

		// Send emails via Resend
		const resendKey = import.meta.env.RESEND_API_KEY;
		if (!resendKey) {
			console.error("RESEND_API_KEY not configured");
			return jsonResponse(500, {
				success: false,
				error: "Error de configuración del servidor.",
			});
		}

		const resend = new Resend(resendKey);

		// 1. Notification email to cristian@puro.software
		await resend.emails.send({
			from: "Puro Software <cristian@contacto.puro.software>",
			to: "cristian@puro.software",
			subject: `Nueva consulta de ${name} — ${email}`,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a2e; border-bottom: 2px solid #00d4ff; padding-bottom: 12px;">
            Nueva consulta desde el sitio web
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; width: 120px; background: #f9f9f9;">Nombre</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f9f9;">Email</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">
                <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f9f9;">Teléfono</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">
                <a href="tel:${phone}" style="color: #0066cc;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f9f9;">Ciudad</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${city}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f9f9;">País</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${country}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f9f9; vertical-align: top;">Mensaje</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>

          <p style="margin-top: 20px; color: #666; font-size: 13px;">
            Enviado desde el formulario de contacto del sitio web.
          </p>
        </div>
      `,
		});

		// 2. Confirmation email to the user
		await resend.emails.send({
			from: "Puro Software <cristian@contacto.puro.software>",
			to: email,
			subject: "Recibimos tu consulta — Puro Software",
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a2e;">¡Hola ${name}!</h2>

          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Recibimos tu consulta y la estamos revisando. Nos vamos a comunicar con vos
            en menos de <strong>24 horas hábiles</strong>.
          </p>

          <div style="background: #f4f8fb; border-left: 4px solid #00d4ff; padding: 16px; margin: 24px 0; border-radius: 0 8px 8px 0;">
            <p style="margin: 0 0 8px; font-weight: bold; color: #1a1a2e;">Tu mensaje:</p>
            <p style="margin: 0; color: #555; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Si necesitás agregar algo, podés responder directamente a este email.
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
      `,
		});

		await sendMetaLeadEvent({
			request,
			eventId,
			eventSourceUrl,
			email,
			phone,
			fullName: name,
			city,
			country,
		}).catch((error) =>
			console.warn("Meta CAPI contact lead event failed", { error })
		);

		return jsonResponse(200, {
			success: true,
			message: "¡Mensaje enviado! Revisá tu email para la confirmación.",
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
