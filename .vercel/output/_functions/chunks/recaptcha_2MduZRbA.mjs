const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const SCORE_THRESHOLD = 0.5;
async function verifyRecaptcha(token, expectedAction) {
  const secretKey = "6Lc7qIssAAAAADnurOm8A3rt2kV7cNtUS8ZGp7M2";
  if (!token) {
    return { success: false, score: 0, error: "Token de reCAPTCHA faltante." };
  }
  try {
    const response = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: token
      })
    });
    const data = await response.json();
    if (!data.success) {
      console.warn("reCAPTCHA verification failed:", data["error-codes"]);
      return {
        success: false,
        score: 0,
        error: "Verificación de seguridad fallida. Recargá la página e intentá de nuevo."
      };
    }
    if (data.action !== expectedAction) {
      console.warn(
        `reCAPTCHA action mismatch: expected "${expectedAction}", got "${data.action}"`
      );
      return {
        success: false,
        score: data.score ?? 0,
        error: "Verificación de seguridad fallida."
      };
    }
    const score = data.score ?? 0;
    if (score < SCORE_THRESHOLD) {
      console.warn(
        `reCAPTCHA score too low: ${score} (threshold: ${SCORE_THRESHOLD})`
      );
      return {
        success: false,
        score,
        error: "Detectamos actividad sospechosa. Si sos humano, recargá la página e intentá de nuevo."
      };
    }
    return { success: true, score };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return {
      success: false,
      score: 0,
      error: "Error al verificar seguridad. Intentá de nuevo."
    };
  }
}

export { verifyRecaptcha as v };
