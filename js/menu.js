/**
 * Burgo Food Chain — Menu showcase
 * Renders any [data-menu] block from data/menu-data.js as an accessible tab interface.
 *   data-limit="3"      max dishes per category
 *   data-include-all    adds an "All" tab
 */

(() => {
  if (typeof BURGO_MENU === 'undefined') return;
  const H = BurgoHelpers;

  const categories = BURGO_MENU.categories
    .map((cat) => ({ ...cat, items: cat.items.filter((item) => item.available !== false) }))
    .filter((cat) => cat.items.length);

  function dishHTML(item) {
    const price = item.price
      ? `<span class="dish__leader" aria-hidden="true"></span><span class="dish__price">${H.escapeHTML(item.price)}</span>`
      : '';
    const tags = (item.dietary || []).length
      ? `<div class="dish__tags">${item.dietary.map((t) => `<span class="chip">${H.escapeHTML(t)}</span>`).join('')}</div>`
      : '';

    return `
      <article class="dish">
        <div class="media dish__media">
          <img src="${H.escapeHTML(item.image)}" alt="${H.escapeHTML(item.imageAlt || item.name)}" width="800" height="800" loading="lazy" decoding="async">
        </div>
        <div class="dish__body">
          <div class="dish__top"><h3 class="dish__name">${H.escapeHTML(item.name)}</h3>${price}</div>
          ${item.description ? `<p class="dish__desc">${H.escapeHTML(item.description)}</p>` : ''}
          ${tags}
        </div>
      </article>`;
  }

  function setupMenu(root, index) {
    const tablist = root.querySelector('[data-menu-tabs]');
    const panel = root.querySelector('[data-menu-panel]');
    if (!tablist || !panel) return;

    const limit = Number(root.dataset.limit) || Infinity;
    const prefix = `menu-${index}`;
    const tabs = root.hasAttribute('data-include-all')
      ? [{ id: 'all', name: 'All', items: categories.flatMap((c) => c.items) }, ...categories]
      : categories;

    panel.id = panel.id || `${prefix}-panel`;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '0');

    tablist.setAttribute('role', 'tablist');
    tablist.innerHTML = tabs
      .map(
        (tab, i) => `
        <button class="tab" type="button" role="tab" id="${prefix}-tab-${tab.id}" data-id="${tab.id}"
          aria-controls="${panel.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">
          ${H.escapeHTML(tab.name)}<span class="tab__count">${Math.min(tab.items.length, limit)}</span>
        </button>`
      )
      .join('');

    const buttons = Array.from(tablist.querySelectorAll('[role="tab"]'));

    function render(tab) {
      panel.setAttribute('aria-labelledby', `${prefix}-tab-${tab.id}`);
      panel.innerHTML = tab.items.slice(0, limit).map(dishHTML).join('');
    }

    function select(button, { focus = false } = {}) {
      const tab = tabs.find((t) => t.id === button.dataset.id);
      if (!tab || button.getAttribute('aria-selected') === 'true') {
        if (focus) button.focus();
        return;
      }

      buttons.forEach((b) => {
        const active = b === button;
        b.setAttribute('aria-selected', String(active));
        b.tabIndex = active ? 0 : -1;
      });
      if (focus) button.focus();
      button.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });

      panel.classList.add('is-switching');
      window.setTimeout(() => {
        render(tab);
        panel.classList.remove('is-switching');
      }, 180);
    }

    tablist.addEventListener('click', (event) => {
      const button = event.target.closest('[role="tab"]');
      if (button) select(button);
    });

    tablist.addEventListener('keydown', (event) => {
      const current = buttons.indexOf(document.activeElement);
      if (current < 0) return;
      const keys = {
        ArrowRight: (current + 1) % buttons.length,
        ArrowLeft: (current - 1 + buttons.length) % buttons.length,
        Home: 0,
        End: buttons.length - 1
      };
      if (event.key in keys) {
        event.preventDefault();
        select(buttons[keys[event.key]], { focus: true });
      }
    });

    render(tabs[0]);
  }

  function init() {
    document.querySelectorAll('[data-menu]').forEach(setupMenu);
    document.querySelectorAll('[data-menu-sample-note]').forEach((note) => {
      note.hidden = !BURGO_MENU.isSample;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
