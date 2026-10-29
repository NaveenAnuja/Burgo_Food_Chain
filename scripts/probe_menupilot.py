import re
import urllib.request

js = urllib.request.urlopen("https://menupilot.lk/assets/index-Bb2OYqly.js").read().decode("utf-8", "ignore")
print("len", len(js))

urls = sorted(set(re.findall(r"https://[a-zA-Z0-9._\-/%?=&:+]+", js)))
for u in urls:
    low = u.lower()
    if any(k in low for k in ["api", "supabase", "firebase", "amazonaws", "cloud", "graphql", "menu", "shop", "supabase.co"]):
        print("URL", u)

print("---api paths---")
for a in sorted(set(re.findall(r"/api/[a-zA-Z0-9_/\-{}]+", js)))[:80]:
    print(a)

print("---vite---")
print(sorted(set(re.findall(r"VITE_[A-Z0-9_]+", js)))[:40])

print("---supabase keys---")
for m in re.findall(r"supabase.{0,100}", js, flags=re.I)[:20]:
    print(m[:120])

print("---slug/shop---")
for pat in ["getShop", "shopSlug", "restaurant", "categories", "menuItems", "firestore", "collection("]:
    print(pat, js.lower().count(pat.lower()))
