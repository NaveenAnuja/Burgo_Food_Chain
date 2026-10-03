# Burgo Food Chain - Restaurant Website

Premium modern restaurant website for Burgo Food Chain PVT LTD.

## Business Information

**Burgo Food Chain PVT LTD**  
380/1 Galle Road, Hettimulla, Beruwala  
Phone: +94 71 174 6051  
Website: burgofc.com

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- No frameworks, no backend

## Project Structure

```
/burgo-website
├── index.html              # Home page
├── about.html              # Our Story
├── experiences.html        # Dining Experiences
├── menu.html              # Menu showcase
├── gallery.html           # Photo gallery
├── locations.html         # Locations & contact
├── css/                   # All stylesheets
├── js/                    # All JavaScript
├── assets/                # Images, icons, videos
├── data/                  # Menu & reviews data
├── sitemap.xml
├── robots.txt
└── README.md
```

## Configuration

All site-wide settings are centralized in `js/config.js`:

- MenuPilot URL
- WhatsApp number
- Google Maps URLs
- Google Analytics ID
- Social media links

## Updating Content

### Menu Items
Edit `data/menu-data.js` to update menu categories and items.

### Reviews
Edit `data/reviews-data.js` when real Google Reviews data is available.

### Images
Replace placeholder images in `assets/images/placeholders/` with real Burgo photos:
- Maintain the same file names
- Keep aspect ratios consistent
- Optimize images before upload

### Contact Information
Update business details in `js/config.js`

## External Integrations

### Order Online (MenuPilot)
"Order Online" buttons redirect to MenuPilot URL configured in `js/config.js`

### WhatsApp
Contact buttons use WhatsApp number from `js/config.js`

### Google Maps
Location links use Google Maps URLs from `js/config.js`

### Google Reviews
Reviews section links to Google Reviews URL from `js/config.js`

### Google Analytics
Analytics tracking ID configured in `js/config.js`

## Development Notes

### Placeholder Images
All images use descriptive placeholder names:
- `hero-main.jpg`
- `experience-bakery.jpg`
- `experience-iceburg.jpg`
- `experience-saivar.jpg`
- `menu-featured-1.jpg`
- `gallery-food-1.jpg`

Replace these files with real Burgo images when available.

### Responsive Design
Mobile-first design with breakpoints:
- Mobile: 320px - 599px
- Tablet: 600px - 1023px
- Desktop: 1024px - 1439px
- Large: 1440px+

### Performance
- Lazy loading enabled for images
- Optimized CSS delivery
- Minimal JavaScript
- No external dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO

- Semantic HTML5
- Meta tags and Open Graph
- Schema.org structured data
- Sitemap.xml
- Robots.txt

## Deployment

This site is designed to work with FastHosts Website Builder / hosting.

### Before Deployment:
1. Replace all placeholder images with real Burgo images
2. Update `js/config.js` with real URLs and IDs
3. Replace sample menu data in `data/menu-data.js`
4. Add real Google Reviews data to `data/reviews-data.js`
5. Enable Google Analytics in `js/config.js`
6. Test all links and CTAs
7. Test responsive design on multiple devices
8. Run performance audit
9. Verify SEO metadata

### DO NOT:
- Deploy to live burgofc.com until final approval
- Modify existing live website during development
- Remove this README from version control

## Support

For questions about this project:
- Developer: [Your contact information]
- Client: Burgo Food Chain PVT LTD

---

**Version:** 1.0.0  
**Last Updated:** 2024  
**Status:** In Development
