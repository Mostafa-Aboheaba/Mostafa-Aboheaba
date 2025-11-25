/**
 * Google Analytics event tracking utility
 */

// Enable debug mode in development
const DEBUG = process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_GA_DEBUG === "true";

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
  if (typeof window === "undefined") {
    if (DEBUG) {
      console.warn("[GA Debug] trackEvent called on server side:", eventName, eventParams);
    }
    return;
  }

  if (!window.gtag) {
    if (DEBUG) {
      console.warn("[GA Debug] gtag not initialized. Event not tracked:", eventName, eventParams);
    }
    return;
  }

  if (DEBUG) {
    console.log("[GA Debug] Event tracked:", eventName, eventParams);
  }

  try {
    window.gtag("event", eventName, eventParams);
    
    if (DEBUG) {
      console.log("[GA Debug] Event sent to Google Analytics successfully");
    }
  } catch (error) {
    if (DEBUG) {
      console.error("[GA Debug] Error tracking event:", error);
    }
  }
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

