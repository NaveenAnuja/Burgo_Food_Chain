/**
 * Burgo Food Chain — Menu showcase
 * Renders any [data-menu] block from data/menu-data.js.
 *
 *   data-limit="3"       max dishes per category (home teaser)
 *   data-include-all     adds an "All" category tab
 *   data-menu-groups     shows cuisine/group filter chips (INDIAN, Chinese, …)
 */

(() => {
  if (typeof BURGO_MENU === 'undefined') return;
  const H = BurgoHelpers;

  const CHEVRON_LEFT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>';
  const CHEVRON_RIGHT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';

  const allCategories = BURGO_MENU.categories
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
          <img src="${H.escapeHTML(item.image)}" alt="${H.escapeHTML(item.imageAlt || item.name)}" width="800" height="800" loading="lazy" decoding="async" referrerpolicy="no-referrer">
        </div>
        <div class="dish__body">
          <div class="dish__top"><h3 class="dish__name">${H.escapeHTML(item.name)}</h3>${price}</div>
          ${item.description ? `<p class="dish__desc">${H.escapeHTML(item.description)}</p>` : ''}
          ${tags}
        </div>
      </article>`;
  }

  function uniqueGroups(cats) {
    const seen = new Set();
    const groups = [];
    cats.forEach((cat) => {
      const g = cat.group;
      if (!g || seen.has(g)) return;
      seen.add(g);
      groups.push(g);
    });
    return groups;
  }

  /** Wrap a tab strip in a smooth scroller with fade + arrow controls. */
  function enhanceTabScroller(track) {
    if (!track || track.closest('.tabs-rail')) return track;

    const rail = document.createElement('div');
    rail.className = 'tabs-rail';
    track.parentNode.insertBefore(rail, track);
    rail.appendChild(track);
    track.classList.add('tabs-rail__track');

    const prev = document.createElement('button');
    prev.type = 'button';
    prev.className = 'tabs-rail__btn tabs-rail__btn--prev';
    prev.setAttribute('aria-label', 'Scroll categories left');
    prev.innerHTML = CHEVRON_LEFT;

    const next = document.createElement('button');
    next.type = 'button';
    next.className = 'tabs-rail__btn tabs-rail__btn--next';
    next.setAttribute('aria-label', 'Scroll categories right');
    next.innerHTML = CHEVRON_RIGHT;

    rail.append(prev, next);

    function sync() {
      const max = track.scrollWidth - track.clientWidth;
      const scrollable = max > 4;
      const atStart = track.scrollLeft <= 4;
      const atEnd = track.scrollLeft >= max - 4;

      rail.classList.toggle('is-scrollable', scrollable);
      prev.classList.toggle('is-active', scrollable && !atStart);
      next.classList.toggle('is-active', scrollable && !atEnd);

      rail.style.setProperty('--fade-left-size', scrollable && !atStart ? '2.5rem' : '0px');
      rail.style.setProperty('--fade-right-size', scrollable && !atEnd ? '2.5rem' : '0px');
      // Track inherits fade vars for the mask
      track.style.setProperty('--fade-left-size', scrollable && !atStart ? '2.5rem' : '0px');
      track.style.setProperty('--fade-right-size', scrollable && !atEnd ? '2.5rem' : '0px');
    }

    function scrollByPage(direction) {
      const amount = Math.max(180, Math.round(track.clientWidth * 0.72)) * direction;
      track.scrollBy({ left: amount, behavior: 'smooth' });
    }

    prev.addEventListener('click', () => scrollByPage(-1));
    next.addEventListener('click', () => scrollByPage(1));
    track.addEventListener('scroll', () => {
      window.requestAnimationFrame(sync);
    }, { passive: true });
    window.addEventListener('resize', sync);

    // Drag / swipe feel on pointer devices
    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    track.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      dragging = true;
      moved = false;
      startX = event.clientX;
      startScroll = track.scrollLeft;
      track.setPointerCapture?.(event.pointerId);
    });

    track.addEventListener('pointermove', (event) => {
      if (!dragging) return;
      const dx = event.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      track.scrollLeft = startScroll - dx;
    });

    const endDrag = () => {
      dragging = false;
    };
    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);

    // Avoid accidental tab clicks after a drag
    track.addEventListener('click', (event) => {
      if (moved) {
        event.preventDefault();
        event.stopPropagation();
        moved = false;
      }
    }, true);

    sync();
    window.setTimeout(sync, 80);
    track._tabsRailSync = sync;
    return track;
  }

  function setupMenu(root, index) {
    const tablist = root.querySelector('[data-menu-tabs]');
    const panel = root.querySelector('[data-menu-panel]');
    if (!tablist || !panel) return;

    const limit = Number(root.dataset.limit) || Infinity;
    const prefix = `menu-${index}`;
    const useGroups = root.hasAttribute('data-menu-groups');
    const includeAll = root.hasAttribute('data-include-all');
    const groups = useGroups ? uniqueGroups(allCategories) : [];

    let activeGroup = 'all';
    let categoryTabs = [];
    let tabButtons = [];

    panel.id = panel.id || `${prefix}-panel`;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '0');
    tablist.setAttribute('role', 'tablist');
    tablist.classList.add('tabs', 'menu-showcase__tabs');

    let grouplist = root.querySelector('[data-menu-group-tabs]');
    if (useGroups && groups.length) {
      if (!grouplist) {
        grouplist = document.createElement('div');
        grouplist.className = 'tabs menu-showcase__groups';
        grouplist.setAttribute('data-menu-group-tabs', '');
        grouplist.setAttribute('role', 'tablist');
        grouplist.setAttribute('aria-label', 'Menu sections');
        root.insertBefore(grouplist, tablist);
      }
      grouplist.innerHTML = [
        `<button class="tab" type="button" role="tab" data-group="all" aria-selected="true">All Menus<span class="tab__count">${allCategories.reduce((n, c) => n + c.items.length, 0)}</span></button>`,
        ...groups.map((g) => {
          const count = allCategories.filter((c) => c.group === g).reduce((n, c) => n + c.items.length, 0);
          return `<button class="tab" type="button" role="tab" data-group="${H.escapeHTML(g)}" aria-selected="false">${H.escapeHTML(g)}<span class="tab__count">${count}</span></button>`;
        })
      ].join('');
      enhanceTabScroller(grouplist);
    }

    enhanceTabScroller(tablist);

    function categoriesForGroup(group) {
      if (group === 'all') return allCategories;
      return allCategories.filter((c) => c.group === group);
    }

    function buildCategoryTabs() {
      const cats = categoriesForGroup(activeGroup);
      categoryTabs = includeAll
        ? [...cats, { id: `${prefix}-all-items`, name: 'All', items: cats.flatMap((c) => c.items) }]
        : cats;

      tablist.innerHTML = categoryTabs
        .map(
          (tab, i) => `
        <button class="tab" type="button" role="tab" id="${prefix}-tab-${tab.id}" data-id="${tab.id}"
          aria-controls="${panel.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">
          ${H.escapeHTML(tab.name)}<span class="tab__count">${Math.min(tab.items.length, limit)}</span>
        </button>`
        )
        .join('');

      tabButtons = Array.from(tablist.querySelectorAll('[role="tab"]'));
      if (tabButtons[0]) render(categoryTabs[0]);
      else panel.innerHTML = '<p class="notice">No dishes in this section yet.</p>';

      tablist.scrollTo({ left: 0, behavior: 'smooth' });
      tablist._tabsRailSync?.();
    }

    function render(tab) {
      panel.setAttribute('aria-labelledby', `${prefix}-tab-${tab.id}`);
      panel.innerHTML = tab.items.slice(0, limit).map(dishHTML).join('');
    }

    function selectCategory(button, { focus = false } = {}) {
      const tab = categoryTabs.find((t) => t.id === button.dataset.id);
      if (!tab) return;
      if (button.getAttribute('aria-selected') === 'true') {
        if (focus) button.focus();
        return;
      }

      tabButtons.forEach((b) => {
        const active = b === button;
        b.setAttribute('aria-selected', String(active));
        b.tabIndex = active ? 0 : -1;
      });
      if (focus) button.focus();
      button.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });

      panel.classList.add('is-switching');
      window.setTimeout(() => {
        render(tab);
        panel.classList.remove('is-switching');
      }, 180);
    }

    tablist.addEventListener('click', (event) => {
      const button = event.target.closest('[role="tab"]');
      if (button) selectCategory(button);
    });

    tablist.addEventListener('keydown', (event) => {
      const current = tabButtons.indexOf(document.activeElement);
      if (current < 0) return;
      const keys = {
        ArrowRight: (current + 1) % tabButtons.length,
        ArrowLeft: (current - 1 + tabButtons.length) % tabButtons.length,
        Home: 0,
        End: tabButtons.length - 1
      };
      if (event.key in keys) {
        event.preventDefault();
        selectCategory(tabButtons[keys[event.key]], { focus: true });
      }
    });

    if (grouplist) {
      grouplist.addEventListener('click', (event) => {
        const button = event.target.closest('[role="tab"]');
        if (!button) return;
        activeGroup = button.dataset.group || 'all';
        grouplist.querySelectorAll('[role="tab"]').forEach((b) => {
          b.setAttribute('aria-selected', String(b === button));
        });
        button.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
        buildCategoryTabs();
      });
    }

    buildCategoryTabs();
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
