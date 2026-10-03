/**
 * Burgo Food Chain - Centralized Configuration
 * Update these values to change site-wide settings
 */

const BURGO_CONFIG = {
  // Business Information
  business: {
    name: 'Burgo Food Chain PVT LTD',
    tagline: 'More Than a Meal. It\'s a Burgo Experience.',
    address: '380/1 Galle Road, Hettimulla, Beruwala',
    phone: '+94 71 174 6051',
    email: 'info@burgofc.com',
    website: 'https://burgofc.com'
  },

  // External Services
  services: {
    // MenuPilot ordering URL - Update when real URL is available
    menuPilotUrl: 'https://menu.burgofc.com/order',
    
    // WhatsApp configuration
    whatsapp: {
      number: '94711746051',
      defaultMessage: 'Hi! I would like to inquire about Burgo Food Chain.'
    },
    
    // Google Maps
    googleMaps: {
      locationUrl: 'https://maps.google.com/?q=Burgo+Food+Chain+Beruwala',
      embedUrl: ''  // Add embed URL when available
    },
    
    // Google Reviews
    googleReviews: {
      placeId: '',  // Add Google Place ID when available
      reviewsUrl: 'https://www.google.com/maps/search/Burgo+Food+Chain',
      averageRating: 4.8,
      totalReviews: 127
    },
    
    // Google Analytics
    analytics: {
      measurementId: 'G-XXXXXXXXXX'  // Replace with real GA4 ID
    }
  },

  // Social Media Links
  social: {
    facebook: 'https://facebook.com/burgofc',
    instagram: 'https://instagram.com/burgofc',
    youtube: 'https://youtube.com/@burgofc',
    tiktok: 'https://tiktok.com/@burgofc'
  },

  // Site Settings
  settings: {
    enableAnimations: true,
    lazyLoadImages: true,
    analyticsEnabled: false  // Set to true when Analytics ID is configured
  }
};

// Helper functions
const BurgoHelpers = {
  /**
   * Get WhatsApp link with optional custom message
   */
  getWhatsAppLink(message = null) {
    const msg = message || BURGO_CONFIG.services.whatsapp.defaultMessage;
    return `https://wa.me/${BURGO_CONFIG.services.whatsapp.number}?text=${encodeURIComponent(msg)}`;
  },

  /**
   * Get MenuPilot ordering URL
   */
  getOrderUrl() {
    return BURGO_CONFIG.services.menuPilotUrl;
  },

  /**
   * Get Google Maps directions URL
   */
  getDirectionsUrl() {
    return BURGO_CONFIG.services.googleMaps.locationUrl;
  },

  /**
   * Get Google Reviews URL
   */
  getReviewsUrl() {
    return BURGO_CONFIG.services.googleReviews.reviewsUrl;
  },

  /**
   * Format phone number for display
   */
  formatPhone(phone) {
    return phone || BURGO_CONFIG.business.phone;
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BURGO_CONFIG, BurgoHelpers };
}
