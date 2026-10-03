# Placeholder images

Every `.svg` in this folder is a **temporary, brand-styled placeholder** (labelled "Photo placeholder"). None of them are real Burgo photos. Replace them with official photography before launch.

## How to replace an image

1. Export the photo as **WebP** (JPEG is fine as a fallback) at the size below, compressed (e.g. with [Squoosh](https://squoosh.app)).
2. Save it to `assets/images/photos/` (create the folder), e.g. `assets/images/photos/hero-main.webp`.
3. Update the path where it is used (listed below) and rewrite the `alt` text to describe the actual photo.
4. Keep the `width`/`height` attributes matching the photo's aspect ratio so the page does not jump while loading.

## Files and where they are used

| Placeholder | Ratio · suggested size | Used in |
| --- | --- | --- |
| `hero-main.svg` | 4:5 · 1200×1500 | `index.html` hero |
| `story-dining-room.svg` | 4:5 · 1000×1250 | `index.html` Our Story, `about.html` |
| `experience-bakery.svg` | 4:5 · 1000×1250 | `index.html`, `experiences.html` |
| `experience-iceburg.svg` | 4:5 · 1000×1250 | `index.html`, `experiences.html` |
| `experience-saivar.svg` | 4:5 · 1000×1250 | `index.html`, `experiences.html` |
| `menu-*.svg` | 1:1 · 800×800 | `data/menu-data.js` (`image`) |
| `gallery-01.svg` … `gallery-10.svg` | 4:5 or 1:1 · 1600px long edge | `data/gallery-data.js` and the home gallery in `index.html` (`src` and `data-src`) |

Images are cropped with `object-fit: cover`, so keep the main subject near the centre. The hero becomes a wide dome on tablets, so leave some room at the sides.

The social sharing image (`assets/images/og-image.jpg`) and favicons (`assets/icons/`) are generated from the official logo and can stay.
