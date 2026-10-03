/**
 * Burgo Food Chain - Main JavaScript
 * Handles dynamic content loading and interactions
 */

class BurgoMain {
  constructor() {
    this.init();
  }

  init() {
    // Setup all CTA buttons
    this.setupCTAButtons();
    
    // Load dynamic content on home page
    if (document.getElementById('featuredMenuItems')) {
      this.loadFeaturedMenu();
    }
    
    if (document.getElementById('reviewsContainer')) {
      this.loadReviews();
    }

    // Setup lazy loading for images
    this.setupLazyLoading();
  }

  /**
   * Setup all CTA buttons with proper links
   */
  setupCTAButtons() {
    // Order Online buttons
    const orderButtons = [
      'orderOnlineBtn',
      'orderOnlineMobileBtn',
      'orderOnlineHeroBtn',
      'orderNowBtn',
      'orderMobileCTABtn',
      'footerOrderBtn'
    ];

    orderButtons.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.href = BurgoHelpers.getOrderUrl();
        btn.addEventListener('click', (e) => {
          this.trackEvent('Order Online', 'Click', btn.id);
        });
      }
    });

    // WhatsApp buttons
    const whatsappButtons = [
      'whatsappBtn',
      'footerWhatsappBtn'
    ];

    whatsappButtons.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.href = BurgoHelpers.getWhatsAppLink();
        btn.target = '_blank';
        btn.addEventListener('click', (e) => {
          this.trackEvent('WhatsApp', 'Click', btn.id);
        });
      }
    });

    // Directions buttons
    const directionsButtons = [
      'getDirectionsBtn',
      'footerDirectionsBtn'
    ];

    directionsButtons.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.href = BurgoHelpers.getDirectionsUrl();
        btn.target = '_blank';
        btn.addEventListener('click', (e) => {
          this.trackEvent('Get Directions', 'Click', btn.id);
        });
      }
    });

    // Google Reviews button
    const reviewsBtn = document.getElementById('viewGoogleReviewsBtn');
    if (reviewsBtn) {
      reviewsBtn.href = BurgoHelpers.getReviewsUrl();
      reviewsBtn.target = '_blank';
      reviewsBtn.addEventListener('click', (e) => {
        this.trackEvent('View Reviews', 'Click', 'Google Reviews');
      });
    }

    // Social media links
    const socialLinks = {
      facebookLink: BURGO_CONFIG.social.facebook,
      instagramLink: BURGO_CONFIG.social.instagram,
      youtubeLink: BURGO_CONFIG.social.youtube,
      tiktokLink: BURGO_CONFIG.social.tiktok
    };

    Object.keys(socialLinks).forEach(id => {
      const link = document.getElementById(id);
      if (link) {
        link.href = socialLinks[id];
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    });
  }

  /**
   * Load featured menu items on home page
   */
  loadFeaturedMenu() {
    const container = document.getElementById('featuredMenuItems');
    if (!container || !BURGO_MENU) return;

    const featuredIds = BURGO_MENU.featured || [];
    const featuredItems = [];

    // Find featured items from all categories
    BURGO_MENU.categories.forEach(category => {
      category.items.forEach(item => {
        if (featuredIds.includes(item.id)) {
          featuredItems.push({ ...item, category: category.name });
        }
      });
    });

    // Render featured items
    container.innerHTML = featuredItems.slice(0, 6).map(item => `
      <div class="menu-card">
        <div class="menu-card-image">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="menu-card-body">
          <h3 class="menu-card-title">${item.name}</h3>
          <p class="menu-card-description">${item.description}</p>
          <div class="menu-card-footer">
            <span class="menu-card-price">${item.price}</span>
            ${item.tags && item.tags.includes('popular') ? '<span class="badge badge-primary">Popular</span>' : ''}
          </div>
          ${item.tags ? `
            <div class="menu-card-tags">
              ${item.tags.filter(tag => tag !== 'popular').map(tag => 
                `<span class="badge">${tag}</span>`
              ).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `).join('');
  }

  /**
   * Load reviews on home page
   */
  loadReviews() {
    const container = document.getElementById('reviewsContainer');
    if (!container || !BURGO_REVIEWS) return;

    const reviews = BURGO_REVIEWS.featured || [];

    container.innerHTML = reviews.slice(0, 4).map(review => {
      const initials = review.author.split(' ').map(n => n[0]).join('').substring(0, 2);
      const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
      
      return `
        <div class="review-card">
          <div class="review-card-header">
            <div class="review-card-avatar">${initials}</div>
            <div class="review-card-author">
              <div class="review-card-name">${review.author}</div>
              <div class="review-card-stars">${stars}</div>
            </div>
          </div>
          <p class="review-card-text">${review.text}</p>
          <div class="review-card-date">${this.formatDate(review.date)}</div>
        </div>
      `;
    }).join('');
  }

  /**
   * Format date for display
   */
  formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  /**
   * Setup lazy loading for images
   */
  setupLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading is supported
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
      });
    } else {
      // Fallback for browsers that don't support lazy loading
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  /**
   * Track events (Google Analytics)
   */
  trackEvent(category, action, label) {
    if (BURGO_CONFIG.settings.analyticsEnabled && typeof gtag !== 'undefined') {
      gtag('event', action, {
        'event_category': category,
        'event_label': label
      });
    }
    
    // Also log to console for debugging
    console.log('Event:', category, action, label);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new BurgoMain();
  });
} else {
  new BurgoMain();
}
