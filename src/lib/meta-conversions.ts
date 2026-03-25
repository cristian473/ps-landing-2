import { createHash } from "node:crypto";

interface MetaLeadEventInput {
	request: Request;
	eventId?: string;
	eventSourceUrl?: string;
	email?: string;
	phone?: string;
	fullName?: string;
	city?: string;
	country?: string;
}

interface MetaUserData {
	em?: string;
	ph?: string;
	fn?: string;
	ln?: string;
	ct?: string;
	country?: string;
	client_ip_address?: string;
	client_user_agent?: string;
	fbc?: string;
	fbp?: string;
}

function hashSha256(value: string): string {
	return createHash("sha256").update(value).digest("hex");
}

function normalizePlain(value: string): string {
	return value
		.trim()
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/\s+/g, " ");
}

function normalizeEmail(value: string): string {
	return normalizePlain(value);
}

function normalizePhone(value: string): string {
	return value.replace(/[^\d]/g, "");
}

function splitName(fullName?: string): { firstName?: string; lastName?: string } {
	if (!fullName) return {};
	const normalized = normalizePlain(fullName);
	if (!normalized) return {};

	const parts = normalized.split(" ").filter(Boolean);
	if (parts.length === 0) return {};
	if (parts.length === 1) return { firstName: parts[0] };

	return {
		firstName: parts[0],
		lastName: parts.slice(1).join(" "),
	};
}

function getClientIpAddress(request: Request): string | undefined {
	const forwardedFor = request.headers.get("x-forwarded-for");
	if (forwardedFor) {
		const firstIp = forwardedFor.split(",")[0]?.trim();
		if (firstIp) return firstIp;
	}

	return (
		request.headers.get("cf-connecting-ip") ||
		request.headers.get("x-real-ip") ||
		undefined
	);
}

function getCookieValue(request: Request, cookieName: string): string | undefined {
	const cookieHeader = request.headers.get("cookie");
	if (!cookieHeader) return undefined;

	const cookies = cookieHeader.split(";");
	for (const cookie of cookies) {
		const [name, ...valueParts] = cookie.trim().split("=");
		if (name === cookieName) {
			const value = valueParts.join("=");
			return value ? decodeURIComponent(value) : undefined;
		}
	}

	return undefined;
}

function sanitizeEventId(eventId?: string): string {
	if (eventId && eventId.trim()) return eventId.trim().slice(0, 128);
	return `lead-${Date.now()}`;
}

function resolveEventSourceUrl(input: MetaLeadEventInput): string {
	if (input.eventSourceUrl && input.eventSourceUrl.trim()) {
		return input.eventSourceUrl.trim();
	}

	const referer = input.request.headers.get("referer");
	if (referer && referer.trim()) return referer.trim();

	return "https://puro.software/";
}

function buildMetaUserData(input: MetaLeadEventInput): MetaUserData {
	const userData: MetaUserData = {};

	if (input.email) {
		const normalizedEmail = normalizeEmail(input.email);
		if (normalizedEmail) {
			userData.em = hashSha256(normalizedEmail);
		}
	}

	if (input.phone) {
		const normalizedPhone = normalizePhone(input.phone);
		if (normalizedPhone) {
			userData.ph = hashSha256(normalizedPhone);
		}
	}

	const { firstName, lastName } = splitName(input.fullName);
	if (firstName) userData.fn = hashSha256(firstName);
	if (lastName) userData.ln = hashSha256(lastName);

	if (input.city) {
		const normalizedCity = normalizePlain(input.city);
		if (normalizedCity) {
			userData.ct = hashSha256(normalizedCity);
		}
	}

	if (input.country) {
		const normalizedCountry = input.country.trim().toLowerCase();
		if (normalizedCountry) {
			userData.country = hashSha256(normalizedCountry);
		}
	}

	const ipAddress = getClientIpAddress(input.request);
	const userAgent = input.request.headers.get("user-agent") || undefined;
	const fbc = getCookieValue(input.request, "_fbc");
	const fbp = getCookieValue(input.request, "_fbp");

	if (ipAddress) userData.client_ip_address = ipAddress;
	if (userAgent) userData.client_user_agent = userAgent;
	if (fbc) userData.fbc = fbc;
	if (fbp) userData.fbp = fbp;

	return userData;
}

export async function sendMetaLeadEvent(
	input: MetaLeadEventInput
): Promise<{ ok: boolean; skipped?: boolean }> {
	const pixelId = import.meta.env.META_PIXEL_ID;
	const accessToken = import.meta.env.META_ACCESS_TOKEN;
	const apiVersion = import.meta.env.META_GRAPH_API_VERSION || "v18.0";
	const testEventCode = import.meta.env.META_TEST_EVENT_CODE;

	if (!pixelId || !accessToken) {
		return { ok: false, skipped: true };
	}

	const payload: Record<string, unknown> = {
		data: [
			{
				event_name: "Lead",
				event_time: Math.floor(Date.now() / 1000),
				action_source: "website",
				event_source_url: resolveEventSourceUrl(input),
				event_id: sanitizeEventId(input.eventId),
				user_data: buildMetaUserData(input),
			},
		],
	};

	if (testEventCode?.trim()) {
		payload.test_event_code = testEventCode.trim();
	}

	const endpoint = new URL(
		`https://graph.facebook.com/${apiVersion}/${pixelId}/events`
	);
	endpoint.searchParams.set("access_token", accessToken);

	try {
		const response = await fetch(endpoint, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		if (!response.ok) {
			const responseText = await response.text();
			console.warn("Meta CAPI lead event rejected", {
				status: response.status,
				body: responseText.slice(0, 500),
			});
			return { ok: false };
		}

		return { ok: true };
	} catch (error) {
		console.warn("Meta CAPI lead event failed", { error });
		return { ok: false };
	}
}
