import { useEffect, useRef } from "react";
import type { CaseStudyImage } from "../../types/portfolio";

type Props = {
  image: CaseStudyImage | null;
  caseSlug: string;
  onClose: () => void;
};

/**
 * Lightbox para imágenes de un caso. Cuando `image` es no-null se abre,
 * cuando vuelve a null se cierra. Usa `<dialog>` HTML5 nativo para tener
 * focus trap, manejo de Esc y a11y por defecto.
 *
 * En mobile: la imagen ocupa el ancho y se centra verticalmente para que se
 * pueda leer una captura desktop sin tener que zoomear con dos dedos.
 * En desktop: max-w 95vw / max-h 80vh, object-contain, centrada.
 */
export default function CaseStudyImageModal({ image, caseSlug, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (image) {
      dialog.showModal();
      // Tracking: qué imagen del caso se abrió ampliada
      window.trackEvent?.("case_study_image_view", {
        case_slug: caseSlug,
        image_src: image.src,
      });
    } else if (dialog.open) {
      dialog.close();
    }
  }, [image, caseSlug]);

  const handleNativeClose = () => onClose();

  // Click en backdrop del dialog: el target es el propio dialog (no su contenido).
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleNativeClose}
      onClick={handleBackdropClick}
      aria-label={image?.caption ?? "Captura del proyecto"}
      className="
        bg-transparent p-0 m-auto max-w-[95vw] w-full max-h-[95vh]
        backdrop:bg-black/85 backdrop:backdrop-blur-sm
        text-white outline-none
      "
    >
      {image && (
        <div className="relative flex flex-col items-center gap-3 sm:gap-4 max-h-[95vh]">
          {/* Botón cerrar — visible en mobile y desktop */}
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Cerrar"
            className="absolute -top-2 right-0 sm:top-2 sm:right-2 z-10 h-10 w-10 inline-flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors backdrop-blur-sm"
          >
            <span className="material-icons">close</span>
          </button>

          {/* Imagen — object-contain para no recortar, max-h dinámico */}
          <img
            src={image.src}
            alt={image.caption ?? "Captura del proyecto"}
            className="block w-full max-w-[95vw] max-h-[80vh] object-contain rounded-xl shadow-2xl"
          />

          {/* Caption */}
          {image.caption && (
            <p className="text-center text-sm sm:text-base text-gray-200 italic max-w-3xl px-4 pb-4 sm:pb-0 leading-relaxed">
              {image.caption}
            </p>
          )}
        </div>
      )}
    </dialog>
  );
}
