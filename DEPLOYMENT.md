# Burgo Food Chain Website - Deployment Guide

## Pre-Deployment Checklist

### 1. Content Updates Required

#### Replace Placeholder Images
Navigate to `assets/images/placeholders/` and replace all placeholder images with actual Burgo restaurant photos:

**Required Images:**
- [ ] `hero-main.jpg` - Main hero background
- [ ] `hero-experiences.jpg` - Experiences page hero
- [ ] `hero-menu.jpg` - Menu page hero
- [ ] `hero-gallery.jpg` - Gallery page hero
- [ ] `hero-locations.jpg` - Locations page hero
- [ ] `hero-about.jpg` - About page hero
- [ ] `experience-bakery.jpg` - Bakery section
- [ ] `experience-iceburg.jpg` - Iceburg Shisha Lounge
- [ ] `experience-saivar.jpg` - Saivar Restaurant
- [ ] `experience-placeholder-1.jpg` - Additional experience
- [ ] `experience-placeholder-2.jpg` - Additional experience
- [ ] Menu item photos (bakery, saivar, beverages, desserts)
- [ ] Gallery photos (food, interior, atmosphere)
- [ ] `og-image.jpg` - Social media sharing image

#### Update Configuration (`js/config.js`)
```javascript
// Update these values before deployment:
BURGO_CONFIG = {
  services: {
    menuPilotUrl: 'YOUR_ACTUAL_MENUPILOT_URL',
    googleMaps: {
      locationUrl: 'YOUR_GOOGLE_MAPS_URL',
      embedUrl: 'YOUR_EMBED_URL'
    },
    googleReviews: {
      placeId: 'YOUR_GOOGLE_PLACE_ID',
      reviewsUrl: 'YOUR_REVIEWS_URL'
    },
    analytics: {
      measurementId: 'YOUR_GA4_MEASUREMENT_ID'  // e.g., G-XXXXXXXXXX
    }
  },
  social: {
    facebook: 'YOUR_FACEBOOK_URL',
    instagram: 'YOUR_INSTAGRAM_URL',
    youtube: 'YOUR_YOUTUBE_URL',
    tiktok: 'YOUR_TIKTOK_URL'
  },
  settings: {
    analyticsEnabled: true  // Set to true when GA4 is configured
  }
}
```

#### Update Menu Data (`data/menu-data.js`)
- [ ] Replace sample menu items with actual Burgo menu
- [ ] Update prices in LKR
- [ ] Add accurate descriptions
- [ ] Update image paths
- [ ] Mark popular items correctly

#### Update Reviews Data (`data/reviews-data.js`)
- [ ] Replace sample reviews with real Google Reviews
- [ ] Update rating statistics
- [ ] Ensure customer names are real or anonymized appropriately

### 2. SEO Optimization

#### Update Meta Tags
Check and update meta descriptions in all HTML files:
- [ ] `index.html` - Home page meta
- [ ] `about.html` - About page meta
- [ ] `experiences.html` - Experiences meta
- [ ] `menu.html` - Menu meta
- [ ] `gallery.html` - Gallery meta
- [ ] `locations.html` - Locations meta

#### Update Sitemap (`sitemap.xml`)
- [ ] Update `<lastmod>` dates to current date
- [ ] Verify all URLs are correct

#### Update Robots.txt
- [ ] Verify sitemap URL is correct
- [ ] Ensure no important pages are blocked

### 3. Performance Optimization

#### Image Optimization
Before uploading images:
- [ ] Compress all images (use TinyPNG, ImageOptim, or Squoosh)
- [ ] Ensure images are appropriately sized:
  - Hero images: max 1920px wide
  - Experience cards: max 1200px wide
  - Menu items: max 600px square
  - Gallery items: max 800px square
- [ ] Convert to WebP format if possible (keep JPG as fallback)
- [ ] Add proper alt text to all images

#### Code Minification (Optional)
Consider minifying for production:
```bash
# CSS minification
# JS minification
```

### 4. Browser Testing

Test the website on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 5. Functionality Testing

Test all interactive elements:
- [ ] Navigation menu (desktop and mobile)
- [ ] All "Order Online" buttons → MenuPilot URL
- [ ] All "WhatsApp" buttons → WhatsApp with correct number
- [ ] All "Get Directions" buttons → Google Maps
- [ ] Menu category filtering
- [ ] Gallery image filtering
- [ ] Gallery lightbox functionality
- [ ] All footer links
- [ ] Smooth scroll animations
- [ ] Mobile sticky CTA

### 6. Responsive Design Testing

Test on different screen sizes:
- [ ] Mobile portrait (320px - 599px)
- [ ] Mobile landscape
- [ ] Tablet (600px - 1023px)
- [ ] Desktop (1024px - 1439px)
- [ ] Large desktop (1440px+)

Verify:
- [ ] No horizontal scrolling
- [ ] Text is readable
- [ ] Buttons are tappable (min 44px)
- [ ] Images scale correctly
- [ ] Navigation works on all sizes

### 7. Accessibility Check

- [ ] All images have alt text
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Sufficient color contrast
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Screen reader friendly

### 8. Security

- [ ] Ensure no sensitive data in code
- [ ] Verify all external links use HTTPS
- [ ] Check that forms (if added) have CSRF protection

---

## Deployment Steps

### Option 1: FastHosts Website Builder

1. **Prepare Files:**
   - Zip entire `Burgo_site` folder
   - Exclude: `.git`, `node_modules` (if any), `DEPLOYMENT.md`

2. **Upload to FastHosts:**
   - Login to FastHosts control panel
   - Navigate to Website Builder / File Manager
   - Upload all files maintaining folder structure
   - Ensure `index.html` is in root directory

3. **Verify Upload:**
   - Check all pages load correctly
   - Test all links and buttons
   - Verify images display properly

### Option 2: FTP Upload

1. **FTP Credentials:**
   - Get FTP host, username, password from FastHosts
   - Use FileZilla or similar FTP client

2. **Upload Files:**
   ```
   Local: d:\Burgo_site\*
   Remote: /public_html/ (or similar)
   ```

3. **Set Permissions:**
   - Files: 644
   - Folders: 755

### Option 3: cPanel File Manager

1. Login to cPanel
2. Navigate to File Manager
3. Go to `public_html` directory
4. Upload zip file
5. Extract in place
6. Delete zip file

---

## Post-Deployment Verification

### Immediate Checks
- [ ] Visit https://burgofc.com
- [ ] Test on mobile device
- [ ] Check all pages load
- [ ] Verify all CTAs work
- [ ] Test menu filtering
- [ ] Test gallery lightbox

### SEO Verification
- [ ] Google Search Console: Submit sitemap
- [ ] Test structured data: https://search.google.com/test/rich-results
- [ ] Verify Open Graph tags: https://www.opengraph.xyz/
- [ ] Check mobile-friendliness: https://search.google.com/test/mobile-friendly

### Analytics Setup
- [ ] Verify Google Analytics is tracking
- [ ] Set up conversion goals in GA4
- [ ] Test event tracking (Order Online clicks, etc.)

### Performance Check
- [ ] Run Google PageSpeed Insights
- [ ] Target: 80+ on mobile, 90+ on desktop
- [ ] Check Core Web Vitals

---

## Maintenance Schedule

### Weekly
- Monitor Google Analytics
- Check for broken links
- Review customer feedback

### Monthly
- Update menu items if changed
- Add new gallery photos
- Review and update reviews
- Check for security updates

### Quarterly
- Review and update content
- Check all external links
- Update blog/news (if added)
- Performance audit

---

## Troubleshooting

### Images Not Loading
- Check file paths are correct
- Verify images are uploaded
- Check file permissions (644)
- Clear browser cache

### Mobile Menu Not Working
- Verify JavaScript files are loaded
- Check for console errors
- Ensure navigation.js is included

### Menu/Gallery Filtering Not Working
- Verify data files are loaded
- Check menu.js / gallery.js are included
- Check for JavaScript errors in console

### Analytics Not Tracking
- Verify measurement ID is correct
- Enable analytics in config.js
- Check ad blockers aren't interfering

### Slow Loading
- Optimize images further
- Enable browser caching
- Consider CDN for static assets
- Minify CSS/JS files

---

## Support Contacts

**Developer:** [Your contact information]  
**Client:** Burgo Food Chain PVT LTD  
**Hosting:** FastHosts support

---

## Backup Procedure

### Before Making Changes
1. Download current live site via FTP
2. Store in dated folder: `backup-YYYY-MM-DD/`
3. Keep at least 3 recent backups

### Automated Backups
- Set up automated daily backups through FastHosts
- Store backups in separate location
- Test restore procedure quarterly

---

## Future Enhancements

Consider adding in future updates:
- [ ] Online table reservation system
- [ ] Customer loyalty program
- [ ] Blog section for food stories
- [ ] Newsletter subscription
- [ ] Live chat support
- [ ] Multiple language support
- [ ] Dark mode option

---

**Version:** 1.0.0  
**Last Updated:** 2024  
**Status:** Ready for Deployment
