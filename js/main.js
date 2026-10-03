/**
 * Burgo Food Chain — Site-wide behaviour
 * Wires every [data-link] to the values in js/config.js, renders hours, the map,
 * verified reviews and the footer year.
 */

(() => {
  const H = BurgoHelpers;

  const LINK_RESOLVERS = {
    order: () => H.getOrderUrl(),
    whatsapp: () => H.getWhatsAppLink(),
    'whatsapp-order': () => H.getWhatsAppLink(BURGO_CONFIG.links.whatsappOrderMessage),
    call: () => H.getCallLink(),
    email: () => H.getEmailLink(),
    directions: () => H.getDirectionsUrl(),
    reviews: () => H.getReviewsUrl(),
    'write-review': () => H.getWriteReviewUrl()
  };

  const isExternal = (url) => /^https?:\/\//i.test(url);

  function applyLink(el, url) {
    if (!url) {
      el.hidden = true;
      return;
    }
    el.href = url;
    if (isExternal(url)) {
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    }
  }

  function bindLinks() {
    document.querySelectorAll('[data-link]').forEach((el) => {
      const resolve = LINK_RESOLVERS[el.dataset.link];
      if (resolve) applyLink(el, resolve());
    });

    document.querySelectorAll('[data-social]').forEach((el) => {
      applyLink(el, BURGO_CONFIG.social[el.dataset.social] || '');
    });

    // Hide wrappers (e.g. social rows) when none of their links are configured.
    document.querySelectorAll('[data-hide-if-empty]').forEach((wrap) => {
      const links = wrap.querySelectorAll('[data-link], [data-social]');
      const anyVisible = Array.from(links).some((a) => !a.hidden);
      if (!anyVisible) wrap.hidden = true;
    });
  }

  function setOrderState() {
    const ready = H.isOrderConfigured();
    document.querySelectorAll('[data-order-ready]').forEach((el) => { el.hidden = !ready; });
    document.querySelectorAll('[data-order-pending]').forEach((el) => { el.hidden = ready; });
  }

  function trackClicks() {
    document.addEventListener('click', (event) => {
      const el = event.target.closest('[data-link], [data-social]');
      if (!el || !window.BurgoAnalytics) return;
      const action = el.dataset.link || `social_${el.dataset.social}`;
      window.BurgoAnalytics.track(action, { link_url: el.href, link_text: el.textContent.trim().slice(0, 60) });
    });
  }

  function renderHours() {
    const hours = BURGO_CONFIG.business.openingHours;
    if (!hours || !hours.length) return;
    document.querySelectorAll('[data-hours]').forEach((el) => {
      el.innerHTML = `<div class="hours">${hours
        .map((row) => `<div class="hours__row"><span>${H.escapeHTML(row.days)}</span><span>${H.escapeHTML(row.hours)}</span></div>`)
        .join('')}</div>`;
    });
  }

  function renderMaps() {
    document.querySelectorAll('[data-map]').forEach((frame) => {
      const iframe = document.createElement('iframe');
      iframe.title = `Map showing Burgo Food Chain at ${H.fullAddress()}`;
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.allowFullscreen = true;
      iframe.src = H.getMapEmbedUrl();
      iframe.addEventListener('load', () => {
        frame.querySelector('.map-frame__fallback')?.setAttribute('hidden', '');
      });
      frame.appendChild(iframe);
    });
  }

  function renderReviews() {
    const container = document.querySelector('[data-reviews]');
    const reviews = (typeof BURGO_REVIEWS !== 'undefined' && BURGO_REVIEWS.reviews) || [];
    if (!container || !reviews.length) return;

    const star = '<svg class="icon icon--fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.5L12 17.3l-5.9 3.2 1.3-6.5L2.5 9.4l6.6-.8z"/></svg>';

    container.innerHTML = reviews
      .map((r) => {
        const rating = Math.max(0, Math.min(5, Number(r.rating) || 0));
        return `
          <figure class="review-card">
            ${rating ? `<div class="review-card__stars" role="img" aria-label="${rating} out of 5 stars">${star.repeat(rating)}</div>` : ''}
            <blockquote class="review-card__text">“${H.escapeHTML(r.text)}”</blockquote>
            <figcaption class="review-card__meta">${H.escapeHTML(r.author)}${r.date ? ` · ${H.escapeHTML(r.date)}` : ''} · Google</figcaption>
          </figure>`;
      })
      .join('');
    container.hidden = false;
  }

  function setYear() {
    const year = String(new Date().getFullYear());
    document.querySelectorAll('[data-year]').forEach((el) => {
      el.textContent = year;
    });
  }

  function init() {
    bindLinks();
    setOrderState();
    trackClicks();
    renderHours();
    renderMaps();
    renderReviews();
    setYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
