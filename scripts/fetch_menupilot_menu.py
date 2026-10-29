import json
import re
import urllib.error
import urllib.request

BASE = "https://prod-api.menupilot.lk/api"
SLUG = "burgo-food-chain-pvt-ltd"

candidates = [
    f"{BASE}/shops/{SLUG}",
    f"{BASE}/shop/{SLUG}",
    f"{BASE}/public/shops/{SLUG}",
    f"{BASE}/public/shop/{SLUG}",
    f"{BASE}/restaurants/{SLUG}",
    f"{BASE}/restaurant/{SLUG}",
    f"{BASE}/menu/{SLUG}",
    f"{BASE}/menus/{SLUG}",
    f"{BASE}/public/menu/{SLUG}",
    f"{BASE}/public/menus/{SLUG}",
    f"{BASE}/platform/shops/{SLUG}",
    f"{BASE}/platform/shop/{SLUG}",
    f"{BASE}/platform/public/shops/{SLUG}",
    f"{BASE}/platform/menu/{SLUG}",
    f"{BASE}/platform/restaurants/{SLUG}",
    f"{BASE}/v1/shops/{SLUG}",
    f"{BASE}/v1/shop/{SLUG}",
    f"{BASE}/v1/public/shops/{SLUG}",
    f"{BASE}/customer/shops/{SLUG}",
    f"{BASE}/customer/shop/{SLUG}",
    f"{BASE}/customer/menu/{SLUG}",
    f"{BASE}/storefront/shops/{SLUG}",
    f"{BASE}/storefront/{SLUG}",
    f"{BASE}/qr/shops/{SLUG}",
    f"{BASE}/qr/{SLUG}",
]


def try_url(url: str):
    req = urllib.request.Request(
        url,
        headers={
            "Accept": "application/json",
            "Origin": "https://menupilot.lk",
            "Referer": "https://menupilot.lk/",
            "User-Agent": "Mozilla/5.0",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            body = resp.read()
            ctype = resp.headers.get("Content-Type", "")
            return resp.status, ctype, body[:500]
    except urllib.error.HTTPError as e:
        body = e.read()[:200]
        return e.code, "error", body
    except Exception as e:
        return None, "exc", str(e).encode()


for url in candidates:
    status, ctype, body = try_url(url)
    preview = body.decode("utf-8", "ignore") if isinstance(body, (bytes, bytearray)) else str(body)
    print(f"{status} {url} :: {preview[:160].replace(chr(10), ' ')}")

# Also search JS for concrete endpoint strings around shopSlug
js = urllib.request.urlopen("https://menupilot.lk/assets/index-Bb2OYqly.js").read().decode("utf-8", "ignore")
print("\n--- nearby shopSlug ---")
for m in re.finditer(r".{0,80}shopSlug.{0,120}", js):
    s = m.group(0).replace("\n", " ")
    if "http" in s or "/api" in s or "get" in s.lower():
        print(s[:200])
