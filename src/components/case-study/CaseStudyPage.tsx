import { useState } from "react";
import type { CaseStudyData, CaseStudyImage } from "../../types/portfolio";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyContext from "./CaseStudyContext";
import CaseStudyProblem from "./CaseStudyProblem";
import CaseStudySolution from "./CaseStudySolution";
import CaseStudyResults from "./CaseStudyResults";
import CaseStudyQuote from "./CaseStudyQuote";
import CaseStudyGallery from "./CaseStudyGallery";
import CaseStudyCTA from "./CaseStudyCTA";
import CaseStudyImageModal from "./CaseStudyImageModal";

type Props = {
  caseStudy: CaseStudyData;
};

/**
 * Orquestador del case study. Renderea cada sección condicional según la
 * data del cliente. Mantiene el orden narrativo Hero → Context → Problem →
 * Solution → Results → Quote → Gallery → CTA. Las secciones opcionales
 * (Quote, Gallery) se omiten si no hay datos.
 *
 * Maneja también el estado del lightbox: cuando una imagen de cualquier
 * sección recibe click, se abre el `CaseStudyImageModal` con la imagen y
 * su caption ampliadas. Es útil sobre todo en mobile, donde las capturas
 * desktop se ven achicadas y conviene poder verlas completas.
 */
export default function CaseStudyPage({ caseStudy }: Props) {
  const [activeImage, setActiveImage] = useState<CaseStudyImage | null>(null);
  const openImage = (img: CaseStudyImage) => setActiveImage(img);
  const closeImage = () => setActiveImage(null);

  return (
    <article>
      <CaseStudyHero
        hero={caseStudy.hero}
        client={caseStudy.client}
        onImageClick={openImage}
      />
      <CaseStudyContext context={caseStudy.context} sector={caseStudy.sector} />
      <CaseStudyProblem problem={caseStudy.problem} />
      <CaseStudySolution solution={caseStudy.solution} onImageClick={openImage} />
      <CaseStudyResults results={caseStudy.results} />
      {caseStudy.quote && <CaseStudyQuote quote={caseStudy.quote} />}
      {caseStudy.gallery && (
        <CaseStudyGallery gallery={caseStudy.gallery} onImageClick={openImage} />
      )}
      <CaseStudyCTA cta={caseStudy.cta} externalLink={caseStudy.externalLink} />

      <CaseStudyImageModal
        image={activeImage}
        caseSlug={caseStudy.slug}
        onClose={closeImage}
      />
    </article>
  );
}
