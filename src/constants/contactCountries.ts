export const CONTACT_COUNTRY_OPTIONS = [
	{ code: "AR", label: "Argentina" },
	{ code: "BO", label: "Bolivia" },
	{ code: "BR", label: "Brasil" },
	{ code: "CL", label: "Chile" },
	{ code: "CO", label: "Colombia" },
	{ code: "CR", label: "Costa Rica" },
	{ code: "CU", label: "Cuba" },
	{ code: "DO", label: "República Dominicana" },
	{ code: "EC", label: "Ecuador" },
	{ code: "SV", label: "El Salvador" },
	{ code: "ES", label: "España" },
	{ code: "GT", label: "Guatemala" },
	{ code: "HN", label: "Honduras" },
	{ code: "MX", label: "México" },
	{ code: "NI", label: "Nicaragua" },
	{ code: "PA", label: "Panamá" },
	{ code: "PY", label: "Paraguay" },
	{ code: "PE", label: "Perú" },
	{ code: "UY", label: "Uruguay" },
	{ code: "VE", label: "Venezuela" },
] as const;

export const CONTACT_COUNTRY_CODE_SET = new Set(
	CONTACT_COUNTRY_OPTIONS.map((country) => country.code)
);
