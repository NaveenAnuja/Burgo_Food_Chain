/**
 * Burgo Food Chain - Animations
 * Scroll-triggered animations using Intersection Observer
 */

class BurgoAnimations {
  constructor() {
    this.animatedElements = document.querySelectorAll('[data-animate]');
    this.staggerElements = document.querySelectorAll('[data-animate-stagger]');
    this.init();
  }

  init() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animations for users who prefer reduced motion
      this.animatedElements.forEach(el => el.classList.add('in-view'));
      this.staggerElements.forEach(el => el.classList.add('in-view'));
      return;
    }

    // Setup Intersection Observer
    this.setupObserver();
  }

  setupObserver() {
    const options = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          // Optionally unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all animated elements
    this.animatedElements.forEach(el => observer.observe(el));
    this.staggerElements.forEach(el => observer.observe(el));
  }
}

// Initialize animations when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new BurgoAnimations();
  });
} else {
  new BurgoAnimations();
}
