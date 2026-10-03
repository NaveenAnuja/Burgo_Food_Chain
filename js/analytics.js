/**
 * Burgo Food Chain — Google Analytics 4 (optional)
 * Loads only when BURGO_CONFIG.analytics.measurementId is set in js/config.js.
 */

(() => {
  const id = BURGO_CONFIG.analytics.measurementId;
  if (!/^G-[A-Z0-9]+$/i.test(id || '')) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id);

  window.BurgoAnalytics = {
    track(action, params = {}) {
      window.gtag('event', action.replace(/-/g, '_'), params);
    }
  };
})();
