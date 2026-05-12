// Google Analytics 4 Types
//
// Catálogo de tipos de eventos custom + Window interface global de las
// funciones de tracking expuestas por src/components/Analytics.astro.
// Si agregás un nuevo evento, declarar acá la interfaz primero y
// referenciarla en el componente que lo dispara.

export interface GTagEvent {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface CTAClickEvent {
  cta_name: string;
  cta_location?: string;
}

export interface CaseStudyViewEvent {
  case_study_name: string;
  page_path: string;
}

export interface FormSubmitEvent {
  form_name: string;
  [key: string]: string;
}

export interface ScrollEvent {
  percent_scrolled: number;
}

export interface ExternalLinkEvent {
  event_category: 'outbound';
  event_label: string;
  transport_type: 'beacon';
}

// Eventos nuevos del rebrand-agencia 2026-05.
// Estos se disparan vía window.trackEvent(name, params) — son genéricos
// pero las interfaces sirven como documentación de qué params se envían.

export interface ClientLogoClickEvent {
  client_name: 'raz' | 'cio_landings' | 'maklab' | 'dentalcenter' | 'soyfinancieramente';
}

export interface ServiceCardClickEvent {
  service_id: 'web_apps' | 'ia' | 'integraciones' | 'apps_moviles';
}

export interface PortfolioCardClickEvent {
  case_slug: string;
  cta_location: 'portfolio';
}

export interface PortfolioModalEvent {
  case_slug: string;
  method?: 'esc' | 'backdrop' | 'button';
}

export type FormStepAction = 'view' | 'complete' | 'error' | 'back';

export type VideoEventAction =
  | 'visible'
  | 'autoplay'
  | 'manual_play'
  | 'unmute'
  | 'ended';

// Window interface — funciones globales expuestas por Analytics.astro.
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;

    // Helpers genéricos
    trackEvent?: (eventName: string, eventParams?: Record<string, unknown>) => void;
    generateEventId?: (prefix?: string) => string;

    // CTAs y navegación
    trackCTAClick?: (ctaName: string, ctaLocation?: string) => void;
    trackExternalLink?: (url: string) => void;
    trackScrollDepth?: (percentage: number) => void;

    // Forms
    trackFormSubmit?: (formName: string, formData?: Record<string, string>) => void;
    trackFormStep?: (
      action: FormStepAction,
      step: number,
      formName?: string,
      extra?: Record<string, unknown>,
    ) => void;

    // Portfolio / casos
    trackCaseStudyView?: (caseStudyName: string) => void;

    // Section visibility (auto-tracker)
    trackSectionView?: (sectionId: string, sectionIndex?: number) => void;

    // Video lifecycle
    trackVideoEvent?: (
      action: VideoEventAction,
      videoId: string,
      videoTitle?: string,
    ) => void;

    // Meta Pixel
    trackMetaLead?: (eventId: string) => void;
    trackMetaCustomLead?: (eventId: string) => void;
  }
}

export {};
