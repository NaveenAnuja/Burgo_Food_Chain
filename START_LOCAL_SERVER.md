# How to Run Burgo Website Locally

## Method 1: Simple File Opening (Quick Test)
1. Navigate to: `d:\Burgo_site\`
2. Double-click `index.html`
3. Website opens in your browser
4. Click links to navigate between pages

**Limitations:** Some features may not work perfectly (like loading external fonts)

---

## Method 2: Using VS Code Live Server (Recommended)

### Step 1: Install VS Code (if not installed)
- Download from: https://code.visualstudio.com/
- Install and open it

### Step 2: Install Live Server Extension
1. Open VS Code
2. Click Extensions icon (or press `Ctrl+Shift+X`)
3. Search for "Live Server"
4. Click "Install" on the one by Ritwick Dey
5. Wait for installation to complete

### Step 3: Open Project
1. In VS Code: File → Open Folder
2. Select: `d:\Burgo_site`
3. Click "Select Folder"

### Step 4: Start Live Server
1. Right-click on `index.html` in VS Code
2. Select "Open with Live Server"
3. Website opens at: http://127.0.0.1:5500 or http://localhost:5500

**Benefits:**
- ✅ Auto-refresh when you make changes
- ✅ Works like a real web server
- ✅ Better for testing JavaScript features
- ✅ See changes instantly

---

## Method 3: Using Python (If You Have Python Installed)

### If you have Python installed:

**Open PowerShell/Terminal in the Burgo_site folder:**
```powershell
cd d:\Burgo_site
```

**For Python 3:**
```powershell
python -m http.server 8000
```

**For Python 2:**
```powershell
python -m SimpleHTTPServer 8000
```

**Then open browser to:**
```
http://localhost:8000
```

---

## Method 4: Using Node.js http-server

### If you have Node.js installed:

```powershell
cd d:\Burgo_site
npx http-server -p 8000
```

**Then open:**
```
http://localhost:8000
```

---

## Testing Checklist

Once the site is running, test:
- [ ] All pages load (Home, About, Experiences, Menu, Gallery, Locations)
- [ ] Navigation menu works
- [ ] Mobile menu opens/closes (resize browser window)
- [ ] Menu category filtering works
- [ ] Gallery filtering works
- [ ] All buttons are clickable
- [ ] Scroll animations work

---

## Current Status

⚠️ **PLACEHOLDER IMAGES:** The website currently uses placeholder image names. Images won't display until you:
1. Add actual photos to `assets/images/placeholders/` folder
2. Or temporarily use any images for testing (name them as expected)

---

## Quick Test Images

To see images while testing, you can:
1. Download free restaurant photos from Unsplash.com
2. Save them with these names in `d:\Burgo_site\assets\images\placeholders\`:
   - hero-main.jpg
   - experience-bakery.jpg
   - experience-iceburg.jpg
   - experience-saivar.jpg
   - menu-featured-1.jpg (and more)

Or just test the layout first - images will be added later!
