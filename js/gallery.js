/**
 * Burgo Food Chain — Gallery grid, filters and lightbox
 *
 * - [data-gallery-grid] is rendered from data/gallery-data.js (gallery page).
 * - Any [data-lightbox] button (rendered or static) opens the accessible lightbox.
 *   Buttons are grouped by their closest [data-lightbox-group].
 */

(() => {
  const H = BurgoHelpers;
  const expandIcon =
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';

  /* =========================================================
     Gallery page grid + filters
     ========================================================= */
  function itemHTML(item) {
    const layout = item.layout ? ` is-${item.layout}` : '';
    return `
      <button type="button" class="gallery-item${layout}" data-lightbox
        data-src="${H.escapeHTML(item.src)}" data-caption="${H.escapeHTML(item.caption)}" data-alt="${H.escapeHTML(item.alt)}"
        aria-label="View larger: ${H.escapeHTML(item.caption)}">
        <img src="${H.escapeHTML(item.src)}" alt="${H.escapeHTML(item.alt)}" width="${item.width || 800}" height="${item.height || 800}" loading="lazy" decoding="async">
        <span class="gallery-item__caption"><span>${H.escapeHTML(item.caption)}</span>${expandIcon}</span>
      </button>`;
  }

  function setupGalleryPage() {
    const grid = document.querySelector('[data-gallery-grid]');
    if (!grid || typeof BURGO_GALLERY === 'undefined') return;

    const filters = document.querySelector('[data-gallery-filters]');
    const status = document.querySelector('[data-gallery-status]');
    const items = BURGO_GALLERY.items;

    function render(category) {
      const visible = category === 'all' ? items : items.filter((i) => i.category === category);
      grid.innerHTML = visible.length
        ? visible.map(itemHTML).join('')
        : '<p class="gallery-empty">More photos coming soon.</p>';
      if (status) {
        status.textContent = `Showing ${visible.length} photo${visible.length === 1 ? '' : 's'}`;
      }
    }

    if (filters) {
      const used = new Set(items.map((i) => i.category));
      const cats = [{ id: 'all', label: 'All' }, ...BURGO_GALLERY.categories.filter((c) => used.has(c.id))];

      filters.innerHTML = cats
        .map(
          (c, i) =>
            `<button type="button" class="tab" data-filter="${c.id}" aria-pressed="${i === 0}">${H.escapeHTML(c.label)}</button>`
        )
        .join('');

      filters.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-filter]');
        if (!btn || btn.getAttribute('aria-pressed') === 'true') return;
        filters.querySelectorAll('[data-filter]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        grid.style.opacity = '0';
        window.setTimeout(() => {
          render(btn.dataset.filter);
          grid.style.opacity = '';
        }, 180);
      });
    }

    grid.style.transition = 'opacity 180ms ease';
    render('all');
  }

  /* =========================================================
     Lightbox
     ========================================================= */
  let dialog = null;
  let group = [];
  let index = 0;
  let opener = null;

  function buildDialog() {
    dialog = document.createElement('dialog');
    dialog.className = 'lightbox theme-dark';
    dialog.setAttribute('aria-label', 'Image viewer');
    dialog.innerHTML = `
      <div class="lightbox__bar">
        <span class="lightbox__counter" aria-live="polite"></span>
        <button type="button" class="icon-btn" data-lb-close aria-label="Close image viewer">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
      <div class="lightbox__stage">
        <img class="lightbox__img" alt="">
        <button type="button" class="icon-btn lightbox__nav lightbox__nav--prev" data-lb-prev aria-label="Previous image">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>
        </button>
        <button type="button" class="icon-btn lightbox__nav lightbox__nav--next" data-lb-next aria-label="Next image">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
      <p class="lightbox__caption"></p>`;
    document.body.appendChild(dialog);

    dialog.querySelector('[data-lb-close]').addEventListener('click', () => dialog.close());
    dialog.querySelector('[data-lb-prev]').addEventListener('click', () => show(index - 1));
    dialog.querySelector('[data-lb-next]').addEventListener('click', () => show(index + 1));

    dialog.addEventListener('click', (event) => {
      if (event.target === dialog || event.target.classList.contains('lightbox__stage')) dialog.close();
    });

    dialog.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') show(index + 1);
      if (event.key === 'ArrowLeft') show(index - 1);
    });

    let startX = null;
    dialog.addEventListener('pointerdown', (e) => { startX = e.clientX; });
    dialog.addEventListener('pointerup', (e) => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
      startX = null;
    });

    dialog.addEventListener('close', () => {
      document.body.classList.remove('is-locked');
      opener?.focus({ preventScroll: true });
    });
  }

  function show(i) {
    if (!group.length) return;
    index = (i + group.length) % group.length;
    const btn = group[index];
    const img = dialog.querySelector('.lightbox__img');
    img.style.animation = 'none';
    void img.offsetWidth;
    img.style.animation = '';
    img.src = btn.dataset.src;
    img.alt = btn.dataset.alt || btn.dataset.caption || '';
    dialog.querySelector('.lightbox__caption').textContent = btn.dataset.caption || '';
    dialog.querySelector('.lightbox__counter').textContent =
      `${String(index + 1).padStart(2, '0')} / ${String(group.length).padStart(2, '0')}`;
    const single = group.length < 2;
    dialog.querySelectorAll('.lightbox__nav').forEach((n) => { n.hidden = single; });
  }

  function open(button) {
    if (!dialog) buildDialog();
    const scope = button.closest('[data-lightbox-group]') || document;
    group = Array.from(scope.querySelectorAll('[data-lightbox]'));
    opener = button;
    show(group.indexOf(button));
    document.body.classList.add('is-locked');
    dialog.showModal();
    dialog.querySelector('[data-lb-close]').focus();
  }

  function init() {
    setupGalleryPage();
    document.addEventListener('click', (event) => {
      const button = event.target.closest('[data-lightbox]');
      if (button && typeof HTMLDialogElement === 'function') {
        event.preventDefault();
        open(button);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
