# 🚀 Go Live Guide - Burgo Food Chain Website

## Step-by-Step: From Local to Live

---

## PHASE 1: PREPARE (Before Going Live)

### 1.1 Add Real Images ⚠️ CRITICAL
**Location:** `d:\Burgo_site\assets\images\placeholders\`

**Required images:**
```
hero-main.jpg               - Main homepage hero (1920x1080)
hero-experiences.jpg        - Experiences page
hero-menu.jpg              - Menu page
hero-gallery.jpg           - Gallery page
hero-locations.jpg         - Locations page
hero-about.jpg             - About page

experience-bakery.jpg      - Bakery photo (1200x800)
experience-iceburg.jpg     - Iceburg lounge (1200x800)
experience-saivar.jpg      - Saivar restaurant (1200x800)
experience-placeholder-1.jpg
experience-placeholder-2.jpg

Menu items: 10-15 food photos
Gallery: 20-30 photos (food, interior, atmosphere)
```

**How to:**
1. Collect your restaurant photos
2. Rename them to match the names above
3. Resize if needed (use online tools like TinyPNG.com)
4. Copy into `assets/images/placeholders/` folder

---

### 1.2 Update Configuration ⚠️ REQUIRED
**File:** `d:\Burgo_site\js\config.js`

**Open the file and update:**

```javascript
// Line 13: Your MenuPilot ordering URL
menuPilotUrl: 'https://your-actual-menupilot-url.com',

// Line 22: Your Google Maps URL
locationUrl: 'https://goo.gl/maps/YOUR_ACTUAL_LINK',

// Line 30: Your Google Reviews URL
reviewsUrl: 'https://g.page/YOUR_BUSINESS_REVIEWS',

// Line 37: Your Google Analytics ID (optional)
measurementId: 'G-YOUR_ACTUAL_ID',

// Lines 42-47: Your social media
facebook: 'https://facebook.com/your-page',
instagram: 'https://instagram.com/your-profile',
youtube: 'https://youtube.com/@your-channel',
tiktok: 'https://tiktok.com/@your-profile'
```

**Save the file!**

---

### 1.3 Update Menu Data (Optional)
**File:** `d:\Burgo_site\data\menu-data.js`

Replace sample menu with your actual menu items.

---

### 1.4 Test Everything Locally
**Run the website locally (see START_LOCAL_SERVER.md)**

Test checklist:
- [ ] All pages load
- [ ] Images display correctly
- [ ] Menu filtering works
- [ ] Gallery works
- [ ] All buttons work
- [ ] Test on your phone (if using Live Server)

---

## PHASE 2: DEPLOY TO WEB SERVER

### Option A: FastHosts Control Panel (Recommended)

#### Step 1: Log into FastHosts
1. Go to: https://www.fasthosts.co.uk/
2. Click "Control Panel" / "My Account"
3. Log in with your credentials

#### Step 2: Access File Manager
1. Find your website hosting account
2. Click "Website Builder" or "File Manager"
3. Look for "public_html" or "www" folder

#### Step 3: Upload Files
**Option 3a: Upload Folder (Easiest)**
1. Create a ZIP file of your Burgo_site folder:
   - Right-click `d:\Burgo_site` folder
   - Select "Send to" → "Compressed (zipped) folder"
   - Name it: `burgo-website.zip`

2. In FastHosts File Manager:
   - Upload `burgo-website.zip`
   - Extract/Unzip it
   - Move all files to `public_html` root
   - Delete the zip file

**Option 3b: Upload Files Directly**
1. Select all files in `d:\Burgo_site\`
2. Drag and drop into FastHosts File Manager
3. Make sure folder structure is maintained:
   ```
   public_html/
   ├── index.html
   ├── about.html
   ├── css/
   ├── js/
   ├── assets/
   etc.
   ```

#### Step 4: Set Permissions (Usually Automatic)
- Files: 644
- Folders: 755
- FastHosts usually sets these automatically

#### Step 5: Test Live Site
1. Visit: https://burgofc.com
2. Test all pages
3. Test on mobile device
4. Check all links work

---

### Option B: FTP Upload (Alternative)

#### Step 1: Get FTP Credentials
From FastHosts:
- FTP Host: usually `ftp.burgofc.com` or similar
- Username: provided by FastHosts
- Password: provided by FastHosts
- Port: 21 (usually)

#### Step 2: Download FTP Client
- Download FileZilla: https://filezilla-project.org/
- Install and open it

#### Step 3: Connect
1. Open FileZilla
2. Enter:
   - Host: ftp.burgofc.com
   - Username: [your username]
   - Password: [your password]
   - Port: 21
3. Click "Quickconnect"

#### Step 4: Upload Files
1. Left side (Local): Navigate to `d:\Burgo_site\`
2. Right side (Remote): Navigate to `public_html/` or `/`
3. Select all files/folders on left
4. Right-click → Upload
5. Wait for upload to complete

#### Step 5: Verify
1. Check all files uploaded correctly
2. Visit https://burgofc.com
3. Test the website

---

## PHASE 3: POST-LAUNCH

### 3.1 Immediate Tests
- [ ] Visit https://burgofc.com
- [ ] Click every link
- [ ] Test "Order Online" button
- [ ] Test WhatsApp button
- [ ] Test on mobile phone
- [ ] Test on tablet
- [ ] Share with 2-3 friends for feedback

### 3.2 SEO Setup (Within 24 hours)

**Google Search Console:**
1. Go to: https://search.google.com/search-console
2. Add property: burgofc.com
3. Verify ownership (follow instructions)
4. Submit sitemap: https://burgofc.com/sitemap.xml

**Google Analytics:**
1. Go to: https://analytics.google.com
2. Create account if needed
3. Add property for burgofc.com
4. Copy Measurement ID (G-XXXXXXXXXX)
5. Update in `js/config.js`
6. Set `analyticsEnabled: true`

### 3.3 Social Media Update
- [ ] Update Facebook page with new website
- [ ] Update Instagram bio with website link
- [ ] Post announcement about new website
- [ ] Update Google Business profile

### 3.4 Marketing Push
- [ ] Email existing customers
- [ ] Post on social media
- [ ] Update business cards
- [ ] Update menus/receipts
- [ ] Tell your staff
- [ ] Add QR code in restaurant

---

## COMMON ISSUES & FIXES

### Issue: Images not showing
**Fix:**
- Check image files are uploaded
- Check file names match exactly (case-sensitive)
- Check file paths in code

### Issue: Website shows old version
**Fix:**
- Clear browser cache (Ctrl + Shift + Delete)
- Hard refresh (Ctrl + F5)
- Try incognito mode

### Issue: "Order Online" button doesn't work
**Fix:**
- Check MenuPilot URL in `js/config.js`
- Make sure URL is correct
- Test URL directly in browser

### Issue: Mobile menu not working
**Fix:**
- Check JavaScript files uploaded
- Check browser console for errors (F12)
- Verify `js/navigation.js` exists

---

## ROLLBACK PLAN (If Something Goes Wrong)

### If you need to revert:
1. Keep a backup of your old site
2. Rename new files temporarily
3. Restore old files
4. Fix issues
5. Re-upload when ready

**Always backup before uploading!**

---

## CONTACT FOR HELP

### FastHosts Support
- Website: https://www.fasthosts.co.uk/support
- Phone: [Their support number]
- Live Chat: Available on website

### Developer Support
[Your contact information here]

---

## SUCCESS CHECKLIST

**Before declaring "live":**
- [ ] Website loads at burgofc.com
- [ ] All images display
- [ ] All 6 pages work (Home, About, Experiences, Menu, Gallery, Locations)
- [ ] Mobile menu works
- [ ] Order Online button works
- [ ] WhatsApp button works
- [ ] Google Maps link works
- [ ] Site works on your phone
- [ ] Site works on friend's phone
- [ ] No console errors (F12 in browser)

---

## 🎉 CONGRATULATIONS!

Once everything above is checked, your website is LIVE!

**Next:**
- Monitor Google Analytics weekly
- Update menu monthly
- Add new photos regularly
- Encourage Google reviews
- Promote on social media

**Your new website:** https://burgofc.com

---

**Questions?** Refer to QUICK_START.md or contact your developer.
