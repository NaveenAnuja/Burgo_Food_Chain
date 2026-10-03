/**
 * Burgo Food Chain - Menu JavaScript
 * Handles menu filtering and display
 */

class BurgoMenu {
  constructor() {
    this.currentCategory = 'all';
    this.menuData = BURGO_MENU || null;
    this.init();
  }

  init() {
    if (!this.menuData) {
      console.error('Menu data not loaded');
      return;
    }

    this.renderCategoryNav();
    this.renderMenuItems('all');
    this.setupCategoryFilters();
  }

  /**
   * Render category navigation
   */
  renderCategoryNav() {
    const nav = document.getElementById('menuCategoryNav');
    if (!nav) return;

    const categories = [
      { id: 'all', name: 'All', icon: '🍽️' },
      ...this.menuData.categories.map(cat => ({
        id: cat.id,
        name: cat.name,
        icon: cat.icon
      }))
    ];

    nav.innerHTML = categories.map(cat => `
      <button 
        class="menu-category-btn ${cat.id === 'all' ? 'active' : ''}" 
        data-category="${cat.id}"
      >
        <span>${cat.icon}</span>
        <span>${cat.name}</span>
      </button>
    `).join('');
  }

  /**
   * Setup category filter buttons
   */
  setupCategoryFilters() {
    const buttons = document.querySelectorAll('.menu-category-btn');
    
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        
        // Update active state
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter menu items
        this.renderMenuItems(category);
        this.currentCategory = category;
      });
    });
  }

  /**
   * Render menu items based on category
   */
  renderMenuItems(categoryId) {
    const container = document.getElementById('menuItemsContainer');
    if (!container) return;

    let itemsToRender = [];

    if (categoryId === 'all') {
      // Show all items from all categories
      this.menuData.categories.forEach(category => {
        itemsToRender.push(...category.items.map(item => ({
          ...item,
          categoryName: category.name
        })));
      });
    } else {
      // Show items from specific category
      const category = this.menuData.categories.find(cat => cat.id === categoryId);
      if (category) {
        itemsToRender = category.items.map(item => ({
          ...item,
          categoryName: category.name
        }));
      }
    }

    // Render items
    container.innerHTML = itemsToRender.map(item => this.createMenuCard(item)).join('');

    // Add fade-in animation
    const cards = container.querySelectorAll('.menu-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 50);
    });
  }

  /**
   * Create menu card HTML
   */
  createMenuCard(item) {
    const popularBadge = item.tags && item.tags.includes('popular') 
      ? '<span class="badge badge-primary">Popular</span>' 
      : '';
    
    const tags = item.tags 
      ? item.tags.filter(tag => tag !== 'popular').map(tag => 
          `<span class="badge">${tag}</span>`
        ).join('')
      : '';

    return `
      <div class="menu-card">
        <div class="menu-card-image">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="menu-card-body">
          <h3 class="menu-card-title">${item.name}</h3>
          <p class="menu-card-description">${item.description}</p>
          <div class="menu-card-footer">
            <span class="menu-card-price">${item.price}</span>
            ${popularBadge}
          </div>
          ${tags ? `<div class="menu-card-tags">${tags}</div>` : ''}
        </div>
      </div>
    `;
  }
}

// Initialize menu when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new BurgoMenu();
  });
} else {
  new BurgoMenu();
}
