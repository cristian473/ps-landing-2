/**
 * Cliente HTTP server-side para el panel-api.
 *
 * Se usa desde las rutas /api de Astro (`/api/contact`) para registrar el lead
 * en la base del panel y disparar el flujo de WAHA + Hermes. El landing no
 * toca la base directamente — va siempre por este canal (el ecosistema es
 * API-first; ver feedback_api_first.md).
 */

export interface PanelLeadPayload {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  country?: string;
  teamSize?: string;
  timeline?: string;
  budget?: string;
  pain?: string;
  message?: string;
  eventSourceUrl?: string;
  eventId?: string;
}

export interface PanelLeadResponse {
  ok: boolean;
  leadId?: string;
  phoneE164?: string;
  message?: string;
}

const DEFAULT_TIMEOUT_MS = 15_000;

async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  timeoutMs: number,
): Promise<Response> {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(t);
  }
}

/**
 * Registra un lead en panel-api. Reintenta una vez si la primera llamada falla
 * por razones transitorias (network, 5xx, timeout). No reintenta si el API
 * devolvió 4xx — eso sería culpa del payload y reintentar no cambia nada.
 */
export async function submitLeadToPanel(
  input: PanelLeadPayload,
): Promise<PanelLeadResponse> {
  const base = import.meta.env.PANEL_API_URL;
  if (!base) {
    throw new Error("PANEL_API_URL no está configurado");
  }
  const url = `${base.replace(/\/+$/, "")}/lead-from-web`;

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const token = import.meta.env.LANDING_API_TOKEN;
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const body = JSON.stringify(input);

  let lastErr: unknown = null;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetchWithTimeout(
        url,
        { method: "POST", headers, body },
        DEFAULT_TIMEOUT_MS,
      );
      const text = await res.text();
      const json = text ? safeParseJson(text) : {};
      if (res.ok) {
        return {
          ok: true,
          leadId: (json as { leadId?: string }).leadId,
          phoneE164: (json as { phoneE164?: string }).phoneE164,
          message: (json as { message?: string }).message,
        };
      }
      // 4xx — no reintentamos
      if (res.status >= 400 && res.status < 500) {
        return {
          ok: false,
          message:
            ((json as { error?: string }).error ?? (json as { message?: string }).message) ||
            `panel-api respondió ${res.status}`,
        };
      }
      lastErr = new Error(`panel-api ${res.status}`);
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr ?? new Error("panel-api: error desconocido");
}

function safeParseJson(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}
