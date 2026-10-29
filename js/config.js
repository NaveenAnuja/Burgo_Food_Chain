/**
 * Burgo Food Chain — Site configuration
 *
 * This is the ONE place to update links and business details.
 * Leave a value as '' until the official value is confirmed; the site hides or
 * gracefully falls back for anything that is not configured.
 */

const BURGO_CONFIG = {
  business: {
    name: 'Burgo Food Chain PVT LTD',
    address: {
      street: '380/1 Galle Road',
      locality: 'Hettimulla',
      city: 'Beruwala',
      country: 'Sri Lanka',
      countryCode: 'LK'
    },
    phone: {
      display: '+94 70 743 1098',
      dial: '+94707431098'
    },
    email: '', // TODO: official email address (hidden until set)

    // Only add hours once verified, e.g. [{ days: 'Monday – Sunday', hours: '8:00 AM – 10:00 PM' }]
    openingHours: []
  },

  links: {
    // Public online-ordering URL. "Order Online" opens this link in a new tab.
    orderUrl: 'https://menupilot.lk/shop/burgo-food-chain-pvt-ltd?entry=qr',

    // TODO: confirm WhatsApp is active on this number (digits only, country code first).
    whatsappNumber: '94707431098',
    whatsappMessage: 'Hello Burgo! I have a question.',
    whatsappOrderMessage: 'Hello Burgo! I would like to place an order.',

    // TODO: official Google Maps place link (Share → Copy link). Until set, directions use the street address.
    googleMapsUrl: '',
    // TODO: official Google Maps embed URL (Share → Embed a map → src). Until set, the map searches the street address.
    googleMapsEmbedUrl: '',

    // TODO: official Google Business Profile reviews link. Until set, links to a Google Maps search for Burgo.
    googleReviewsUrl: '',
    // TODO: "Ask for reviews" link from Google Business Profile (https://g.page/r/.../review). Hidden until set.
    googleWriteReviewUrl: ''
  },

  analytics: {
    // TODO: Google Analytics 4 measurement ID, e.g. 'G-ABC123XYZ'. Analytics stays off until set.
    measurementId: ''
  },

  // TODO: verified social profile URLs. Icons only appear for profiles that are set.
  social: {
    instagram: '',
    facebook: '',
    tiktok: '',
    youtube: ''
  }
};

const BurgoHelpers = {
  fullAddress() {
    const a = BURGO_CONFIG.business.address;
    return `${a.street}, ${a.locality}, ${a.city}`;
  },

  isOrderConfigured() {
    return Boolean(BURGO_CONFIG.links.orderUrl);
  },

  getOrderUrl() {
    return BURGO_CONFIG.links.orderUrl || 'menu.html#order';
  },

  getWhatsAppLink(message) {
    const { whatsappNumber, whatsappMessage } = BURGO_CONFIG.links;
    if (!whatsappNumber) return '';
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message || whatsappMessage)}`;
  },

  getCallLink() {
    return `tel:${BURGO_CONFIG.business.phone.dial}`;
  },

  getEmailLink() {
    return BURGO_CONFIG.business.email ? `mailto:${BURGO_CONFIG.business.email}` : '';
  },

  getDirectionsUrl() {
    return (
      BURGO_CONFIG.links.googleMapsUrl ||
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(this.fullAddress() + ', Sri Lanka')}`
    );
  },

  getMapEmbedUrl() {
    return (
      BURGO_CONFIG.links.googleMapsEmbedUrl ||
      `https://maps.google.com/maps?q=${encodeURIComponent(this.fullAddress() + ', Sri Lanka')}&z=16&output=embed`
    );
  },

  getReviewsUrl() {
    return (
      BURGO_CONFIG.links.googleReviewsUrl ||
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Burgo Food Chain, ' + this.fullAddress())}`
    );
  },

  getWriteReviewUrl() {
    return BURGO_CONFIG.links.googleWriteReviewUrl;
  },

  escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[ch]);
  }
};
