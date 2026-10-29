/**
 * Burgo Food Chain — Scroll reveal
 * Elements with [data-reveal] fade up once when they enter the viewport.
 * Children of [data-reveal-stagger] are revealed one after another.
 */

(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function prepareStagger(root = document) {
    root.querySelectorAll('[data-reveal-stagger]').forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        if (!child.hasAttribute('data-reveal')) child.setAttribute('data-reveal', '');
        child.style.setProperty('--reveal-delay', String(Math.min(index, 6) * 90));
      });
    });
  }

  let observer = null;

  function observe(root = document) {
    const targets = root.querySelectorAll('[data-reveal]:not(.is-visible)');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        // threshold 0: tall blocks (e.g. full menu) still reveal when any edge enters view
        { rootMargin: '0px 0px -4% 0px', threshold: 0 }
      );
    }

    targets.forEach((el) => observer.observe(el));
  }

  function init() {
    prepareStagger();
    observe();
  }

  // Lets scripts that render content later (menu, gallery) opt their new nodes into the reveal.
  window.BurgoReveal = {
    refresh(root) {
      prepareStagger(root);
      observe(root);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
