/**
 * Burgo Food Chain — Menu showcase
 * Renders any [data-menu] block from data/menu-data.js.
 *
 *   data-limit="3"       max dishes per category (home teaser)
 *   data-include-all     adds an "All" category tab
 *   data-menu-groups     shows cuisine/group filter chips (INDIAN, Chinese, SHISHA, …)
 *   [data-menu-search]   optional search field for dish names / descriptions
 */

(() => {
  if (typeof BURGO_MENU === 'undefined') return;
  const H = BurgoHelpers;

  const CHEVRON_LEFT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>';
  const CHEVRON_RIGHT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';
  const GROUP_ORDER = [
    'INDIAN',
    'SRI LANKAN',
    'CONTINENTAL',
    'Tandoori',
    'Chinese',
    'Bun & Crispy',
    'Drinks',
    'Original Desserts',
    'SHISHA'
  ];

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
    const found = [];
    cats.forEach((cat) => {
      const g = cat.group;
      if (!g || seen.has(g)) return;
      seen.add(g);
      found.push(g);
    });
    const ordered = GROUP_ORDER.filter((g) => seen.has(g));
    found.forEach((g) => {
      if (!ordered.includes(g)) ordered.push(g);
    });
    return ordered;
  }

  function normalize(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  function itemMatches(item, query) {
    if (!query) return true;
    const haystack = normalize(`${item.name} ${item.description || ''} ${(item.dietary || []).join(' ')}`);
    return query.split(/\s+/).filter(Boolean).every((token) => haystack.includes(token));
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
      rail.dataset.fadeLeft = scrollable && !atStart ? '1' : '0';
      rail.dataset.fadeRight = scrollable && !atEnd ? '1' : '0';
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

    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    track.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse') return;
      dragging = true;
      moved = false;
      startX = event.clientX;
      startScroll = track.scrollLeft;
      track.setPointerCapture?.(event.pointerId);
    });

    track.addEventListener('pointermove', (event) => {
      if (!dragging || event.pointerType === 'mouse') return;
      const dx = event.clientX - startX;
      if (Math.abs(dx) > 12) moved = true;
      if (moved) track.scrollLeft = startScroll - dx;
    });

    const endDrag = () => {
      dragging = false;
    };
    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);

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
    const searchForm = root.querySelector('[data-menu-search]');
    const searchInput = root.querySelector('[data-menu-search-input]');
    const searchClear = root.querySelector('[data-menu-search-clear]');
    const searchMeta = root.querySelector('[data-menu-search-meta]');

    let activeGroup = 'all';
    let searchQuery = '';
    let categoryTabs = [];
    let tabButtons = [];
    let activeTabId = null;

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
        const insertBefore = searchForm?.nextSibling || tablist;
        root.insertBefore(grouplist, insertBefore);
      }
    }

    enhanceTabScroller(tablist);

    function filteredCategories(group = activeGroup) {
      const base = group === 'all' ? allCategories : allCategories.filter((c) => c.group === group);
      if (!searchQuery) return base;
      return base
        .map((cat) => ({
          ...cat,
          items: cat.items.filter((item) => itemMatches(item, searchQuery))
        }))
        .filter((cat) => cat.items.length);
    }

    function totalItems(cats) {
      return cats.reduce((n, c) => n + c.items.length, 0);
    }

    function refreshGroupTabs() {
      if (!grouplist) return;
      const fullCounts = Object.fromEntries(
        groups.map((g) => [g, totalItems(filteredCategories(g))])
      );
      const allCount = totalItems(filteredCategories('all'));

      grouplist.innerHTML = [
        `<button class="tab" type="button" role="tab" data-group="all" aria-selected="${activeGroup === 'all'}">All Menus<span class="tab__count">${allCount}</span></button>`,
        ...groups.map((g) => {
          const count = fullCounts[g] || 0;
          const disabled = searchQuery && count === 0;
          return `<button class="tab" type="button" role="tab" data-group="${H.escapeHTML(g)}" aria-selected="${activeGroup === g}" ${disabled ? 'disabled' : ''}>${H.escapeHTML(g)}<span class="tab__count">${count}</span></button>`;
        })
      ].join('');

      if (!grouplist.closest('.tabs-rail')) enhanceTabScroller(grouplist);
      else grouplist._tabsRailSync?.();
    }

    function updateSearchMeta(count) {
      if (!searchMeta) return;
      if (!searchQuery) {
        searchMeta.textContent = '';
        return;
      }
      if (!count) {
        searchMeta.innerHTML = `No dishes match <strong>${H.escapeHTML(searchQuery)}</strong>`;
        return;
      }
      searchMeta.innerHTML = `<strong>${count}</strong> dish${count === 1 ? '' : 'es'} matching <strong>${H.escapeHTML(searchQuery)}</strong>`;
    }

    function buildCategoryTabs({ keepSelection = false } = {}) {
      const cats = filteredCategories(activeGroup);
      categoryTabs = includeAll && cats.length
        ? [...cats, { id: `${prefix}-all-items`, name: searchQuery ? 'Search results' : 'All', items: cats.flatMap((c) => c.items) }]
        : cats;

      if (!categoryTabs.length) {
        tablist.innerHTML = '';
        tabButtons = [];
        panel.innerHTML = searchQuery
          ? `<p class="notice">No dishes found for “${H.escapeHTML(searchQuery)}”. Try another name or clear the search.</p>`
          : '<p class="notice">No dishes in this section yet.</p>';
        updateSearchMeta(0);
        tablist._tabsRailSync?.();
        return;
      }

      let selectedId = keepSelection && categoryTabs.some((t) => t.id === activeTabId)
        ? activeTabId
        : categoryTabs[0].id;
      // Prefer "All / Search results" when searching so matches show together
      if (searchQuery && includeAll) {
        selectedId = `${prefix}-all-items`;
      }
      activeTabId = selectedId;

      tablist.innerHTML = categoryTabs
        .map((tab, i) => {
          const selected = tab.id === selectedId;
          return `
        <button class="tab" type="button" role="tab" id="${prefix}-tab-${tab.id}" data-id="${tab.id}"
          aria-controls="${panel.id}" aria-selected="${selected}" tabindex="${selected ? 0 : -1}">
          ${H.escapeHTML(tab.name)}<span class="tab__count">${Math.min(tab.items.length, limit)}</span>
        </button>`;
        })
        .join('');

      tabButtons = Array.from(tablist.querySelectorAll('[role="tab"]'));
      const selectedTab = categoryTabs.find((t) => t.id === selectedId) || categoryTabs[0];
      render(selectedTab);
      updateSearchMeta(totalItems(cats));
      tablist.scrollTo({ left: 0, behavior: searchQuery ? 'auto' : 'smooth' });
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

      activeTabId = tab.id;
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

    function applySearch(value) {
      searchQuery = normalize(value);
      if (searchClear) searchClear.hidden = !value.trim();
      // If current group has no matches, jump to All Menus
      if (searchQuery && activeGroup !== 'all' && totalItems(filteredCategories(activeGroup)) === 0) {
        activeGroup = 'all';
      }
      refreshGroupTabs();
      buildCategoryTabs();
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
        if (!button || button.disabled) return;
        activeGroup = button.dataset.group || 'all';
        grouplist.querySelectorAll('[role="tab"]').forEach((b) => {
          b.setAttribute('aria-selected', String(b === button));
        });
        button.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
        buildCategoryTabs();
      });
    }

    if (searchForm && searchInput) {
      searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        applySearch(searchInput.value);
      });

      let debounce;
      searchInput.addEventListener('input', () => {
        window.clearTimeout(debounce);
        debounce = window.setTimeout(() => applySearch(searchInput.value), 160);
      });

      searchClear?.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        applySearch('');
      });
    }

    refreshGroupTabs();
    if (grouplist && !grouplist.closest('.tabs-rail')) enhanceTabScroller(grouplist);
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
