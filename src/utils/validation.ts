/**
 * Validation utilities for form inputs
 */

export interface ValidationResult {
	isValid: boolean;
	error?: string;
}

/**
 * Validates an email address
 */
export function validateEmail(email: string): ValidationResult {
	if (!email || email.trim() === "") {
		return { isValid: false, error: "Email is required" };
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return { isValid: false, error: "Please enter a valid email address" };
	}

	return { isValid: true };
}

/**
 * Validates a name field
 */
export function validateName(name: string): ValidationResult {
	if (!name || name.trim() === "") {
		return { isValid: false, error: "Name is required" };
	}

	if (name.trim().length < 2) {
		return { isValid: false, error: "Name must be at least 2 characters" };
	}

	if (name.trim().length > 100) {
		return { isValid: false, error: "Name must be less than 100 characters" };
	}

	return { isValid: true };
}

/**
 * Validates a message field. Optional — string vacío es válido. Si trae contenido,
 * exige longitud mínima útil para que no sea spam de un caracter.
 */
export function validateMessage(message: string): ValidationResult {
	const trimmed = (message ?? "").trim();
	if (trimmed === "") return { isValid: true };

	if (trimmed.length < 10) {
		return { isValid: false, error: "Si dejás un mensaje, escribí al menos 10 caracteres" };
	}

	if (trimmed.length > 5000) {
		return {
			isValid: false,
			error: "El mensaje debe tener menos de 5000 caracteres",
		};
	}

	return { isValid: true };
}

/**
 * Validates the lead's expected investment range (allowlist).
 */
export function validateInterest(
	interest: string,
	allowedValues: ReadonlySet<string>
): ValidationResult {
	if (!interest || interest.trim() === "") {
		return { isValid: false, error: "Seleccioná qué te interesa" };
	}
	if (!allowedValues.has(interest.trim())) {
		return { isValid: false, error: "La opción seleccionada no es válida" };
	}
	return { isValid: true };
}

/**
 * Validates a phone number
 */
export function validatePhone(phone: string): ValidationResult {
	if (!phone || phone.trim() === "") {
		return { isValid: false, error: "El teléfono es obligatorio" };
	}

	// Allow digits, spaces, dashes, parentheses, and leading +
	const phoneRegex = /^\+?[\d\s\-()]{7,20}$/;
	if (!phoneRegex.test(phone.trim())) {
		return { isValid: false, error: "Ingresá un número de teléfono válido" };
	}

	return { isValid: true };
}

/**
 * Validates a city field
 */
export function validateCity(city: string): ValidationResult {
	if (!city || city.trim() === "") {
		return { isValid: false, error: "La ciudad es obligatoria" };
	}

	if (city.trim().length < 2) {
		return { isValid: false, error: "La ciudad debe tener al menos 2 caracteres" };
	}

	if (city.trim().length > 100) {
		return { isValid: false, error: "La ciudad debe tener menos de 100 caracteres" };
	}

	return { isValid: true };
}

/**
 * Validates a country code against an allowlist
 */
export function validateCountryCode(
	countryCode: string,
	allowedCountryCodes: ReadonlySet<string>
): ValidationResult {
	if (!countryCode || countryCode.trim() === "") {
		return { isValid: false, error: "El país es obligatorio" };
	}

	if (!allowedCountryCodes.has(countryCode.trim().toUpperCase())) {
		return { isValid: false, error: "El país seleccionado no es válido" };
	}

	return { isValid: true };
}

/**
 * Sanitizes input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
	return input
		.trim()
		.replace(/[<>]/g, "") // Remove potential HTML tags
		.slice(0, 5000); // Limit length
}
