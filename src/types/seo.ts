export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalURL?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
}
