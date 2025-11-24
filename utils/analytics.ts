/**
 * Google Analytics event tracking utility
 */

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Track a custom Google Analytics event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: {
    [key: string]: any;
  }
) => {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", eventName, eventParams);
};

/**
 * Track CV download
 */
export const trackCVDownload = () => {
  trackEvent("user_downloaded_cv", {
    event_category: "engagement",
    event_label: "CV Download",
  });
};

/**
 * Track social media link clicks
 */
export const trackSocialClick = (platform: string, url: string) => {
  trackEvent(`visit_${platform.toLowerCase()}`, {
    event_category: "social",
    event_label: platform,
    link_url: url,
  });
};

/**
 * Track project demo clicks
 */
export const trackProjectClick = (projectName: string, url: string) => {
  trackEvent("project_demo_click", {
    event_category: "engagement",
    event_label: projectName,
    link_url: url,
  });
};

/**
 * Track navigation clicks
 */
export const trackNavigation = (section: string) => {
  trackEvent("navigation_click", {
    event_category: "navigation",
    event_label: section,
  });
};

/**
 * Track email click
 */
export const trackEmailClick = () => {
  trackEvent("contact_email_click", {
    event_category: "contact",
    event_label: "Email",
  });
};

/**
 * Track section views (when section comes into viewport)
 */
export const trackSectionView = (sectionName: string) => {
  trackEvent("section_view", {
    event_category: "engagement",
    event_label: sectionName,
  });
};

