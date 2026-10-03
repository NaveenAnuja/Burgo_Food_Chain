/**
 * Burgo Food Chain - Analytics
 * Google Analytics integration (optional)
 */

// Google Analytics Setup
if (BURGO_CONFIG.settings.analyticsEnabled && BURGO_CONFIG.services.analytics.measurementId !== 'G-XXXXXXXXXX') {
  // Load Google Analytics
  (function() {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${BURGO_CONFIG.services.analytics.measurementId}`;
    document.head.appendChild(script);

    script.onload = function() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', BURGO_CONFIG.services.analytics.measurementId);
      
      console.log('Google Analytics initialized');
    };
  })();
} else {
  console.log('Analytics disabled or not configured');
}

/**
 * Track custom events
 * Usage: trackEvent('Button', 'Click', 'Order Online')
 */
function trackEvent(category, action, label) {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      'event_category': category,
      'event_label': label
    });
  }
}

/**
 * Track page views (for SPA navigation if implemented)
 */
function trackPageView(path) {
  if (typeof gtag !== 'undefined') {
    gtag('config', BURGO_CONFIG.services.analytics.measurementId, {
      'page_path': path
    });
  }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { trackEvent, trackPageView };
}
