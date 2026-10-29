# -*- coding: utf-8 -*-
"""Import Burgo menu from MenuPilot public API into data/menu-data.js."""
from __future__ import annotations

import json
import re
import urllib.request
from collections import defaultdict
from pathlib import Path

API = "https://prod-api.menupilot.lk/api/public/shop/burgo-food-chain-pvt-ltd"
IMAGE_BASE = "https://prod-api.menupilot.lk"
OUT = Path(__file__).resolve().parents[1] / "data" / "menu-data.js"
RAW_OUT = Path(__file__).resolve().parents[1] / "data" / "menupilot-raw.json"


def slug(text: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", (text or "").lower()).strip("-")
    return s or "item"


def money(value) -> str | None:
    if value is None or value == "":
        return None
    try:
        n = float(value)
    except (TypeError, ValueError):
        return None
    return f"LKR {int(round(n)):,}"


def absolute_image(url: str | None, fallback_name: str) -> str:
    if url:
        if url.startswith("http"):
            return url
        if url.startswith("/"):
            return IMAGE_BASE + url
        return f"{IMAGE_BASE}/{url.lstrip('/')}"
    # local fallbacks if remote missing
    return "assets/images/photos/menu/salad-green.jpg"


def fetch():
    req = urllib.request.Request(
        API,
        headers={
            "Accept": "application/json",
            "Origin": "https://menupilot.lk",
            "Referer": "https://menupilot.lk/",
            "User-Agent": "Mozilla/5.0",
        },
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def build(payload: dict):
    data = payload["data"]
    menus = {m["id"]: m for m in data.get("menus") or []}
    categories = data.get("categories") or []
    items = data.get("items") or []

    # Group items by category id
    by_cat: dict[str, list] = defaultdict(list)
    for it in items:
        cat = it.get("category") or {}
        cat_id = cat.get("id") or cat.get("_id")
        if not cat_id:
            continue
        by_cat[str(cat_id)].append(it)

    # Detect duplicate category display names across menus
    name_counts = defaultdict(int)
    for cat in categories:
        name_counts[cat.get("name", "").strip()] += 1

    used_item_ids = set()
    out_categories = []

    # Keep MenuPilot category order
    for cat in categories:
        cat_id = str(cat["id"])
        raw_name = (cat.get("name") or "Category").strip()
        menu = menus.get(cat.get("menuId"))
        parent = (menu or {}).get("name")
        display = raw_name
        if name_counts[raw_name] > 1 and parent:
            display = f"{raw_name} ({parent.title() if parent.isupper() else parent})"

        cat_items = []
        for it in by_cat.get(cat_id, []):
            if it.get("isAvailable") is False:
                continue
            name = (it.get("name") or "").strip()
            if not name:
                continue
            item_id = slug(name)
            base = item_id
            n = 2
            while item_id in used_item_ids:
                item_id = f"{base}-{n}"
                n += 1
            used_item_ids.add(item_id)

            cat_items.append(
                {
                    "id": item_id,
                    "name": name,
                    "description": (it.get("description") or "").strip(),
                    "price": money(it.get("price")),
                    "dietary": list(it.get("labels") or []),
                    "image": absolute_image(it.get("imageUrl"), name),
                    "available": True,
                }
            )

        if not cat_items:
            continue

        out_categories.append(
            {
                "id": slug(f"{parent or 'menu'}-{raw_name}-{cat_id[-6:]}"),
                "name": display,
                "group": parent,
                "items": cat_items,
            }
        )

    return out_categories


def main():
    payload = fetch()
    RAW_OUT.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
    categories = build(payload)
    item_total = sum(len(c["items"]) for c in categories)

    menu = {
        "isSample": False,
        "source": "live-menu",
        "stats": {"categories": len(categories), "items": item_total},
        "categories": categories,
    }

    header = """/**
 * Burgo Food Chain — Menu data
 *
 * Synced from the live public menu (same catalogue as online ordering).
 * Regenerate: python scripts/import_menupilot_menu.py
 */

const BURGO_MENU = """

    OUT.write_text(header + json.dumps(menu, indent=2, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"categories: {len(categories)}")
    print(f"items: {item_total}")
    for c in categories:
        print(f"  - {c['name']}: {len(c['items'])} [{c.get('group')}]")


if __name__ == "__main__":
    main()
