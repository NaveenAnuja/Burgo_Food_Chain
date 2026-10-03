/**
 * Burgo Food Chain - Gallery JavaScript
 * Handles gallery filtering and lightbox
 */

class BurgoGallery {
  constructor() {
    this.currentFilter = 'all';
    this.lightbox = null;
    this.currentImageIndex = 0;
    this.images = [];
    this.init();
  }

  init() {
    this.setupFilters();
    this.setupLightbox();
    this.loadGalleryImages();
  }

  /**
   * Setup filter buttons
   */
  setupFilters() {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        
        // Update active state
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter images
        this.filterImages(filter);
        this.currentFilter = filter;
      });
    });
  }

  /**
   * Filter gallery images
   */
  filterImages(filter) {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
        // Add fade-in animation
        item.style.opacity = '0';
        setTimeout(() => {
          item.style.transition = 'opacity 0.3s ease';
          item.style.opacity = '1';
        }, 50);
      } else {
        item.style.display = 'none';
      }
    });
  }

  /**
   * Load gallery images (placeholder data)
   */
  loadGalleryImages() {
    const container = document.getElementById('galleryContainer');
    if (!container) return;

    // Placeholder gallery data
    const galleryData = [
      { id: 1, category: 'food', src: 'assets/images/placeholders/gallery-food-1.jpg', caption: 'Signature Dish' },
      { id: 2, category: 'food', src: 'assets/images/placeholders/gallery-food-2.jpg', caption: 'Fresh Ingredients' },
      { id: 3, category: 'interior', src: 'assets/images/placeholders/gallery-interior-1.jpg', caption: 'Dining Area' },
      { id: 4, category: 'food', src: 'assets/images/placeholders/gallery-food-3.jpg', caption: 'Gourmet Selection' },
      { id: 5, category: 'bakery', src: 'assets/images/placeholders/gallery-bakery-1.jpg', caption: 'Fresh Bakery' },
      { id: 6, category: 'interior', src: 'assets/images/placeholders/gallery-interior-2.jpg', caption: 'Lounge Area' },
      { id: 7, category: 'food', src: 'assets/images/placeholders/gallery-food-4.jpg', caption: 'Chef Special' },
      { id: 8, category: 'bakery', src: 'assets/images/placeholders/gallery-bakery-2.jpg', caption: 'Artisan Breads' },
      { id: 9, category: 'atmosphere', src: 'assets/images/placeholders/gallery-atmosphere-1.jpg', caption: 'Dining Experience' },
      { id: 10, category: 'food', src: 'assets/images/placeholders/gallery-food-5.jpg', caption: 'Traditional Flavors' },
      { id: 11, category: 'interior', src: 'assets/images/placeholders/gallery-interior-3.jpg', caption: 'Modern Design' },
      { id: 12, category: 'atmosphere', src: 'assets/images/placeholders/gallery-atmosphere-2.jpg', caption: 'Evening Ambiance' }
    ];

    this.images = galleryData;

    container.innerHTML = galleryData.map((img, index) => `
      <div class="gallery-item" data-category="${img.category}" data-index="${index}">
        <img src="${img.src}" alt="${img.caption}" loading="lazy">
        <div class="gallery-item-overlay">
          <span class="gallery-item-caption">${img.caption}</span>
        </div>
      </div>
    `).join('');

    // Setup click handlers for lightbox
    const items = container.querySelectorAll('.gallery-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);
        this.openLightbox(index);
      });
    });
  }

  /**
   * Setup lightbox
   */
  setupLightbox() {
    this.lightbox = document.getElementById('lightbox');
    if (!this.lightbox) {
      // Create lightbox if it doesn't exist
      this.lightbox = document.createElement('div');
      this.lightbox.id = 'lightbox';
      this.lightbox.className = 'lightbox';
      this.lightbox.innerHTML = `
        <div class="lightbox-content">
          <img class="lightbox-image" src="" alt="">
          <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
        </div>
      `;
      document.body.appendChild(this.lightbox);
    }

    // Close button
    const closeBtn = this.lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => this.closeLightbox());

    // Close on backdrop click
    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) {
        this.closeLightbox();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.lightbox.classList.contains('active')) {
        this.closeLightbox();
      }
    });
  }

  /**
   * Open lightbox with image
   */
  openLightbox(index) {
    this.currentImageIndex = index;
    const image = this.images[index];
    
    if (!image) return;

    const lightboxImage = this.lightbox.querySelector('.lightbox-image');
    lightboxImage.src = image.src;
    lightboxImage.alt = image.caption;

    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Close lightbox
   */
  closeLightbox() {
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Initialize gallery when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new BurgoGallery();
  });
} else {
  new BurgoGallery();
}
