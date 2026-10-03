# Burgo Food Chain — Website

Static website for **Burgo Food Chain PVT LTD** — 380/1 Galle Road, Hettimulla, Beruwala · +94 71 174 6051.

HTML5, CSS3 and vanilla JavaScript only. No build step, no backend, no database — it runs on any static host (GitHub Pages, FastHosts, Netlify…). Online ordering is handled by **MenuPilot**; the site only links to it.

## Run locally

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Project structure

```
index.html            Home
about.html            Our Story
experiences.html      Dining Experiences (Bakery, Iceburg Shisha Lounge, Saivar Restaurant)
menu.html             Menu preview + ordering (#order)
gallery.html          Photo gallery with lightbox
locations.html        Location, map and contact (#contact)

css/
  variables.css       Design tokens — logo colours, type scale, spacing, section themes
  reset.css           Modern reset
  base.css            Typography, containers, section headings, focus styles
  layout.css          Header, desktop nav, mobile menu, footer
  components.css      Buttons, arch media frames, tabs, dish cards, info list, map, lightbox
  sections.css        Hero, story, experiences, menu showcase, gallery, reviews, visit, CTA band, inner pages
  animations.css      Entrance + scroll reveal, reduced-motion overrides
  style.css           Imports the files above in order

js/
  config.js           ★ All editable links and business details
  main.js             Wires [data-link] buttons to config, map, hours, reviews, footer year
  navigation.js       Header scroll state, accessible mobile menu
  menu.js             Menu category tabs (home + menu page)
  gallery.js          Gallery grid, filters, lightbox
  animations.js       Scroll reveal
  analytics.js        GA4 (loads only when an ID is set)

data/
  menu-data.js        Menu preview dishes (currently SAMPLE data)
  gallery-data.js     Gallery photos
  reviews-data.js     Verified Google reviews (empty until genuine reviews are added)

assets/
  images/brand/       Official logo (original + optimised WebP/PNG)
  images/placeholders SVG placeholders — replace with real photos
  images/og-image.jpg Social sharing image (1200×630)
  icons/              Favicons and app icons
```

## Configuration — `js/config.js`

Everything that changes per business lives here. Values left as `''` are treated as "not configured" and the site falls back gracefully:

| Setting | When empty |
| --- | --- |
| `links.menuPilotUrl` | "Order Online" opens `menu.html#order`, which offers call / WhatsApp ordering |
| `links.whatsappNumber` | WhatsApp buttons are hidden |
| `links.googleMapsUrl` | Directions use the street address |
| `links.googleMapsEmbedUrl` | The map searches the street address |
| `links.googleReviewsUrl` | "Read reviews" opens a Google Maps search for Burgo |
| `links.googleWriteReviewUrl` | "Write a review" is hidden |
| `business.email` | Email link is hidden |
| `business.openingHours` | "Please call for today's hours" is shown |
| `analytics.measurementId` | Google Analytics does not load |
| `social.*` | That social icon is hidden |

Buttons get their link from a `data-link` attribute (`order`, `whatsapp`, `whatsapp-order`, `call`, `email`, `directions`, `reviews`, `write-review`) or `data-social="instagram"` etc. The `href` written in the HTML is only a no-JavaScript fallback.

## Updating content

- **Menu preview** — edit `data/menu-data.js`. Set `isSample: false` once dishes are real. Only fill `price` and `dietary` with confirmed information; empty values are not shown.
- **Reviews** — copy genuine reviews from Google into `data/reviews-data.js`. Never invent names, ratings or text.
- **Gallery** — edit `data/gallery-data.js` (`layout: 'tall' | 'wide' | ''`).
- **Photos** — see `assets/images/placeholders/README.md`.
- **New dining area** — copy one `<article class="exp-card">` in `index.html` and one `<article class="feature">` in `experiences.html`; both grids adapt automatically. Add a footer link on each page.
- **Placeholder copy** — search the HTML for `PLACEHOLDER` to find text and images awaiting verified content.

## Design system

- **Colours** are sampled from the official logo: bun red `#DC3224`, ring gold `#F2CC63`, sesame yellow `#F6E257`, warm black `#120F0D`, on a warm paper background `#F7F1E7`. Darker variants (`--brand-red-deep`, `--brand-gold-deep`) are used for text on light backgrounds to meet WCAG AA contrast.
- **Type**: Fraunces (display, with italic emphasis) + Manrope (UI and body), sized fluidly with `clamp()`.
- **Motifs**: arch / dome-shaped image frames and the red "bun dome" CTA band with a yellow rim echo the logo.
- **Section themes**: add `theme-light`, `theme-alt`, `theme-dark` or `theme-red` to a section and every component inside adapts.
- **Breakpoints** (mobile-first, `min-width`): 376, 600, 768, 1024, 1280px.
- **Motion** respects `prefers-reduced-motion`; all content is visible without JavaScript.

## Before going live

1. Fill in the `TODO` values in `js/config.js` (MenuPilot URL, Google Maps/Reviews links, GA4 ID, social profiles, opening hours).
2. Confirm WhatsApp is active on +94 71 174 6051.
3. Replace placeholder photos and `PLACEHOLDER` copy.
4. Replace sample dishes in `data/menu-data.js` and set `isSample: false`.
5. If the domain is not `burgofc.com`, update canonical/OG URLs in each page `<head>`, `sitemap.xml` and `robots.txt`.
6. Once opening hours are verified, they can also be added to the JSON-LD in `index.html` and `locations.html`.
