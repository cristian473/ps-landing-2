"use client";

import { useEffect, useState } from "react";

/**
 * Sticky CTA mobile-only. Aparece después de scrollear past Hero (umbral
 * basado en el viewport) y se oculta al llegar al form de contacto para
 * no taparlo. 90% del tráfico es móvil — este patrón sirve para mantener
 * el CTA primario siempre a un tap de distancia.
 */
export default function StickyCTA() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		// Mostrar cuando el usuario scrolleó más allá de una pantalla
		const onScroll = () => {
			const threshold = window.innerHeight * 0.7;
			const scrolled = window.scrollY > threshold;

			// Ocultar si el form de contacto está visible (no tapar el submit)
			const contact = document.getElementById("contacto");
			let contactVisible = false;
			if (contact) {
				const rect = contact.getBoundingClientRect();
				contactVisible = rect.top < window.innerHeight && rect.bottom > 0;
			}

			setVisible(scrolled && !contactVisible);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);

	const handleClick = () => {
		window.trackCTAClick?.("sticky_cta_cotizar", "sticky_mobile");
	};

	return (
		<div
			className={`md:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${
				visible ? "translate-y-0" : "translate-y-full"
			}`}
			aria-hidden={!visible}
		>
			<div className="bg-gradient-to-t from-navy-dark via-navy-dark/95 to-transparent pt-6 pb-4 px-4">
				<a
					href="#contacto"
					onClick={handleClick}
					className="block w-full bg-primary text-navy-dark text-center font-bold py-3.5 rounded-lg shadow-[0_0_20px_rgba(56,182,255,0.35)] active:scale-95 transition-transform"
				>
					Cotizar mi proyecto
				</a>
			</div>
		</div>
	);
}
