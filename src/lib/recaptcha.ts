const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const SCORE_THRESHOLD = 0.5;

interface RecaptchaVerifyResponse {
	success: boolean;
	score?: number;
	action?: string;
	challenge_ts?: string;
	hostname?: string;
	"error-codes"?: string[];
}

interface RecaptchaResult {
	success: boolean;
	score: number;
	error?: string;
}

/**
 * Verifies a reCAPTCHA v3 token server-side.
 * @param token - The token received from the client-side grecaptcha.execute()
 * @param expectedAction - The expected action name (e.g., "contact", "diagnostic_lead")
 * @returns Result with success status and score
 */
export async function verifyRecaptcha(
	token: string,
	expectedAction: string
): Promise<RecaptchaResult> {
	const secretKey = import.meta.env.RECAPTCHA_SECRET_KEY;

	if (!secretKey) {
		console.error("RECAPTCHA_SECRET_KEY not configured");
		return { success: false, score: 0, error: "reCAPTCHA no configurado." };
	}

	if (!token) {
		return { success: false, score: 0, error: "Token de reCAPTCHA faltante." };
	}

	try {
		const response = await fetch(RECAPTCHA_VERIFY_URL, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams({
				secret: secretKey,
				response: token,
			}),
		});

		const data: RecaptchaVerifyResponse = await response.json();

		if (!data.success) {
			console.warn("reCAPTCHA verification failed:", data["error-codes"]);
			return {
				success: false,
				score: 0,
				error:
					"Verificación de seguridad fallida. Recargá la página e intentá de nuevo.",
			};
		}

		// Verify action matches
		if (data.action !== expectedAction) {
			console.warn(
				`reCAPTCHA action mismatch: expected "${expectedAction}", got "${data.action}"`
			);
			return {
				success: false,
				score: data.score ?? 0,
				error: "Verificación de seguridad fallida.",
			};
		}

		// Check score threshold
		const score = data.score ?? 0;
		if (score < SCORE_THRESHOLD) {
			console.warn(
				`reCAPTCHA score too low: ${score} (threshold: ${SCORE_THRESHOLD})`
			);
			return {
				success: false,
				score,
				error:
					"Detectamos actividad sospechosa. Si sos humano, recargá la página e intentá de nuevo.",
			};
		}

		return { success: true, score };
	} catch (error) {
		console.error("reCAPTCHA verification error:", error);
		return {
			success: false,
			score: 0,
			error: "Error al verificar seguridad. Intentá de nuevo.",
		};
	}
}
