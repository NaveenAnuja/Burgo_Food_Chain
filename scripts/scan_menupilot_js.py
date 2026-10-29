import re
import urllib.request

js = urllib.request.urlopen("https://menupilot.lk/assets/index-Bb2OYqly.js").read().decode("utf-8", "ignore")

# Find string literals that look like API routes
routes = sorted(set(re.findall(r"[\"'`](/[a-zA-Z0-9_\-{}]+(?:/[a-zA-Z0-9_\-{}]+){1,6})[\"'`]", js)))
for r in routes:
    if any(k in r.lower() for k in ["shop", "menu", "categor", "item", "restaurant", "store", "public", "qr", "slug"]):
        print(r)

print("\n--- getShop contexts ---")
idx = 0
count = 0
while count < 15:
    i = js.find("getShop", idx)
    if i < 0:
        break
    print(js[max(0, i - 100) : i + 200].replace("\n", " "))
    print("---")
    idx = i + 7
    count += 1
