/**
 * Burgo Food Chain - Navigation
 * Handles navbar scroll behavior and mobile menu
 */

class BurgoNavigation {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.navbarToggle = document.querySelector('.navbar-toggle');
    this.mobileMenu = document.querySelector('.navbar-mobile-menu');
    this.mobileLinks = document.querySelectorAll('.navbar-mobile-link');
    this.navLinks = document.querySelectorAll('.navbar-link');
    this.scrollThreshold = 100;
    this.isMenuOpen = false;

    this.init();
  }

  init() {
    if (!this.navbar) return;

    // Handle scroll behavior
    this.handleScroll();
    window.addEventListener('scroll', () => this.handleScroll());

    // Handle mobile menu toggle
    if (this.navbarToggle && this.mobileMenu) {
      this.navbarToggle.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Close mobile menu when clicking links
    this.mobileLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isMenuOpen && 
          !this.mobileMenu.contains(e.target) && 
          !this.navbarToggle.contains(e.target)) {
        this.closeMobileMenu();
      }
    });

    // Highlight active page
    this.highlightActivePage();

    // Smooth scroll for anchor links
    this.setupSmoothScroll();
  }

  handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > this.scrollThreshold) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }
  }

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.openMobileMenu();
    } else {
      this.closeMobileMenu();
    }
  }

  openMobileMenu() {
    this.mobileMenu.classList.add('active');
    this.navbarToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.isMenuOpen = true;
  }

  closeMobileMenu() {
    this.mobileMenu.classList.remove('active');
    this.navbarToggle.classList.remove('active');
    document.body.style.overflow = '';
    this.isMenuOpen = false;
  }

  highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Desktop nav
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (href === 'index.html' && currentPage === '')) {
        link.classList.add('active');
      }
    });

    // Mobile nav
    this.mobileLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (href === 'index.html' && currentPage === '')) {
        link.classList.add('active');
      }
    });
  }

  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
          const targetPosition = target.offsetTop - navbarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Initialize navigation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new BurgoNavigation();
  });
} else {
  new BurgoNavigation();
}
