/**
 * Burgo Food Chain — Header and mobile menu
 */

(() => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  const desktopQuery = window.matchMedia('(min-width: 1024px)');

  /* ---------- Header scroll state ---------- */
  let lastY = window.scrollY;
  let ticking = false;

  function updateHeader() {
    const y = window.scrollY;
    const menuOpen = menu?.classList.contains('is-open');
    header.classList.toggle('is-scrolled', y > 24);

    const goingDown = y > lastY + 4;
    const goingUp = y < lastY - 4;
    const focusInside = header.contains(document.activeElement);

    if (goingDown && y > 480 && !menuOpen && !focusInside) {
      header.classList.add('is-hidden');
    } else if (goingUp || y <= 480) {
      header.classList.remove('is-hidden');
    }

    lastY = y;
    ticking = false;
  }

  if (header) {
    updateHeader();
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateHeader);
          ticking = true;
        }
      },
      { passive: true }
    );
    header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
  }

  /* ---------- Mobile menu ---------- */
  if (!toggle || !menu) return;

  const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  const label = toggle.querySelector('.visually-hidden');

  function setOpen(open, { restoreFocus = true } = {}) {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (label) label.textContent = open ? 'Close menu' : 'Open menu';
    document.body.classList.toggle('is-locked', open);

    if (open) {
      menu.removeAttribute('inert');
      header.classList.remove('is-hidden');
      const first = menu.querySelector(focusableSelector);
      window.setTimeout(() => first?.focus({ preventScroll: true }), 60);
    } else {
      menu.setAttribute('inert', '');
      if (restoreFocus) toggle.focus({ preventScroll: true });
    }
  }

  const isOpen = () => menu.classList.contains('is-open');

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  menu.addEventListener('click', (event) => {
    if (event.target.closest('[data-menu-close]')) setOpen(false);
    else if (event.target.closest('a')) setOpen(false, { restoreFocus: false });
  });

  document.addEventListener('keydown', (event) => {
    if (!isOpen()) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      return;
    }

    if (event.key === 'Tab') {
      const items = [...menu.querySelectorAll(focusableSelector)].filter(
        (el) => !el.hidden && el.offsetParent !== null
      );
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  desktopQuery.addEventListener('change', (event) => {
    if (event.matches && isOpen()) setOpen(false, { restoreFocus: false });
  });
})();
