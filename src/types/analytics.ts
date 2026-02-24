// Google Analytics 4 Types

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

// Extend Window interface for global analytics functions
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    trackEvent: (eventName: string, eventParams?: Record<string, unknown>) => void;
    trackCTAClick: (ctaName: string, ctaLocation?: string) => void;
    trackCaseStudyView: (caseStudyName: string) => void;
    trackFormSubmit: (formName: string, formData?: Record<string, string>) => void;
    trackExternalLink: (url: string) => void;
    trackScrollDepth: (percentage: number) => void;
  }
}

export {};
