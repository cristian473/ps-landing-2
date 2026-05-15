import { motion } from "framer-motion";
import VideoShowcase from "../landing/VideoShowcase";
import type { CaseStudyData, CaseStudyImage } from "../../types/portfolio";
import { normalizeImage } from "../../types/portfolio";

type Props = {
  gallery: NonNullable<CaseStudyData["gallery"]>;
  onImageClick?: (img: CaseStudyImage) => void;
};

export default function CaseStudyGallery({ gallery, onImageClick }: Props) {
  const images = (gallery.images ?? []).map(normalizeImage);
  const hasImages = images.length > 0;
  const hasVideos = (gallery.videos?.length ?? 0) > 0;
  if (!hasImages && !hasVideos) return null;

  return (
    <section className="bg-black py-16 md:py-20" id="galeria">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            En vivo
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Capturas y demos</h2>
        </motion.div>

        {hasImages && (
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-10">
            {images.map((img, idx) => (
              <motion.figure
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                {onImageClick ? (
                  <button
                    type="button"
                    onClick={() => onImageClick(img)}
                    aria-label="Ampliar captura"
                    className="group relative w-full rounded-2xl overflow-hidden border border-white/10 bg-navy-surface flex items-center justify-center max-h-[320px] cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary/70"
                  >
                    <img
                      src={img.src}
                      alt={img.caption ?? "Captura del proyecto"}
                      loading="lazy"
                      className="max-h-[320px] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="absolute top-3 right-3 z-10 inline-flex items-center justify-center h-9 w-9 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                      <span className="material-icons text-lg">zoom_in</span>
                    </span>
                  </button>
                ) : (
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-navy-surface flex items-center justify-center max-h-[320px]">
                    <img
                      src={img.src}
                      alt={img.caption ?? "Captura del proyecto"}
                      loading="lazy"
                      className="max-h-[320px] w-auto max-w-full object-contain"
                    />
                  </div>
                )}
                {img.caption && (
                  <figcaption className="text-center text-xs md:text-sm text-gray-400 italic mt-3">
                    {img.caption}
                  </figcaption>
                )}
              </motion.figure>
            ))}
          </div>
        )}

        {hasVideos &&
          gallery.videos!.map((v) => (
            <div key={v.youtubeId} className="mt-6">
              <VideoShowcase
                youtubeId={v.youtubeId}
                eyebrow="Video"
                title={v.title}
                description={v.description ?? ""}
                align="left"
                bg="black"
              />
            </div>
          ))}
      </div>
    </section>
  );
}
