# -*- coding: utf-8 -*-
"""Build data/menu-data.js from the official Burgo PDF menu."""
from pathlib import Path
import json
import re

IMG = "assets/images/photos/menu"

# Keyword → image mapping (first match wins)
IMAGE_RULES = [
    (r"mojito|lassi|juice|lime|watermelon|mango|papaya|orange|pineapple|pepsi|7up|water bottle", f"{IMG}/mojito-passion.jpg"),
    (r"shake|milk shake", f"{IMG}/shake-chocolate.jpg"),
    (r"tiramisu|brownie|lava|cheesecake|cookie|fruit salad|dessert", f"{IMG}/dessert-lava-cake.jpg"),
    (r"shawarma", f"{IMG}/shawarma-chicken.jpg"),
    (r"burger|sub|sandwich|sanwich", f"{IMG}/burger-chicken.jpg"),
    (r"crispy chicken|chicken 65|chicken with cheese|chicken kapsa|masala omelette|boiled egg", f"{IMG}/crispy-chicken.jpg"),
    (r"devilled|sweet & sour|lemon chicken|hot butter|butter prawn|prawns with cheese", f"{IMG}/devilled-chicken.jpg"),
    (r"noodle|nasi mix noodle", f"{IMG}/noodles-chicken.jpg"),
    (r"fried rice|nasi goreng|kabsa|copsey|hong kong|singapore|mongolian|arabic seafood rice", f"{IMG}/fried-rice-chicken.jpg"),
    (r"manchow|sweet corn soup|hot & sour|vegetable soup", f"{IMG}/soup-cream-chicken.jpg"),
    (r"kebab|seekh", f"{IMG}/kebab-chicken.jpg"),
    (r"naan|paratha|chapathi|roti|kulcha", f"{IMG}/naan-garlic.jpg"),
    (r"tandoori|roast chicken|fry fish", f"{IMG}/tandoori-chicken.jpg"),
    (r"biriyani|biryani", f"{IMG}/biryani-chicken.jpg"),
    (r"masala|kurma|kadai|chettinad|tikka|chukka|butter chicken|do.?piazza|do.?pyaza|dal|bhurji|muttai|paneer|malavani|arabic chicken|kulambu|prawn tawa|mushroom pepper|chana|cuttlefish kadai", f"{IMG}/curry-butter-chicken.jpg"),
    (r"pasta", f"{IMG}/pasta-chicken.jpg"),
    (r"pizza", f"{IMG}/pizza-margherita.jpg"),
    (r"cream of chicken|soup", f"{IMG}/soup-cream-chicken.jpg"),
    (r"salad", f"{IMG}/salad-green.jpg"),
    (r"prawn|cuttle|crab|fish", f"{IMG}/devilled-chicken.jpg"),
    (r"beef|mutton|chicken", f"{IMG}/curry-butter-chicken.jpg"),
]

DEFAULT_IMG = f"{IMG}/salad-green.jpg"


def pick_image(name: str) -> str:
    n = name.lower()
    for pattern, path in IMAGE_RULES:
        if re.search(pattern, n):
            return path
    return DEFAULT_IMG


def slug(name: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    return s or "item"


def money(amount: str) -> str:
    # "1,200.00" -> "LKR 1,200"
    amount = amount.replace(",", "").strip()
    whole = amount.split(".")[0]
    return f"LKR {int(whole):,}"


# (category_id, category_name, [(name, price, description), ...])
CATEGORIES = [
    (
        "continental",
        "Continental",
        [
            ("Green Salad", "500.00", "A refreshing mix of fresh, crisp green vegetables, including lettuce, cucumber, and other seasonal greens, served with a light dressing."),
            ("Corn Salad", "600.00", "A refreshing blend of sweet corn, fresh vegetables, and a delicious dressing, with sweetness, crunch, and freshness in every bite."),
            ("Potato Salad", "600.00", "Tender potatoes, fresh herbs, and creamy dressing, seasoned for a rich, smooth, and satisfying flavour."),
            ("Tomato Onion Chilly Salad", "450.00", "Juicy tomatoes, crisp onions, and fresh green chillies, lightly seasoned for freshness, crunch, and spice."),
            ("Greek Salad", "800.00", "Crisp lettuce, tomatoes, cucumber, red onions, olives, and creamy feta with olive oil dressing and herbs."),
            ("Cream Of Chicken Soup", "700.00", "Rich and creamy soup with tender chicken, fresh ingredients, and delicate seasonings."),
            ("Margherita Pizza", "990.00", "Classic pizza with tomato sauce, melted mozzarella, and fresh basil on a golden crust."),
            ("Chicken Pizza", "1200.00", "Tender chicken, tomato sauce, mozzarella, fresh vegetables, and herbs on a crispy crust."),
            ("Mushroom Pizza", "1300.00", "Fresh mushrooms, tomato sauce, mozzarella, and aromatic herbs on a golden crust."),
            ("Diavola Pizza", "1700.00", "Spicy Italian-style pizza with zesty tomato sauce, mozzarella, spicy salami, and herbs."),
            ("Beef Pizza", "1800.00", "Flavourful beef, tomato sauce, mozzarella, and aromatic herbs on a golden crust."),
            ("Chicken Pasta", "990.00", "Tender chicken, perfectly cooked pasta, and a rich sauce with herbs and a touch of cheese."),
            ("Chicken Cheese Pasta", "1250.00", "Creamy pasta with tender chicken, rich cheese sauce, and aromatic herbs."),
            ("Beef Pasta", "1090.00", "Flavourful beef tossed with pasta, a rich savoury sauce, and aromatic herbs."),
            ("Mix Pasta", "1590.00", "Pasta with chicken, beef, fresh vegetables, and a rich savoury sauce."),
        ],
    ),
    (
        "indian",
        "Indian",
        [
            ("Chicken Biriyani", "1150.00", "Fragrant basmati rice with aromatic spices, layered with tender chicken."),
            ("Beef Biriyani", "1350.00", "Fragrant basmati rice with aromatic spices and tender, flavourful beef."),
            ("Hyderabad Beef Dum Biriyani", "1900.00", "Basmati rice layered with marinated beef and Hyderabadi spices, slow-cooked dum style."),
            ("Hyderabad Mutton Dum Biriyani", "2400.00", "Basmati rice layered with succulent mutton and Hyderabadi spices, dum-cooked."),
            ("Tandoori Chicken Biriyani", "1600.00", "Aromatic basmati rice with juicy tandoori chicken and traditional spices."),
            ("Fry Biriyani", "1800.00", "Basmati rice tossed with spices, rich masala, and perfectly fried meat."),
            ("Chicken Masala", "1190.00", "Tender chicken in a rich, aromatic masala gravy with traditional spices."),
            ("Chicken Kurma", "1190.00", "Tender chicken simmered in a creamy, aromatic gravy with spices and herbs."),
            ("Vegetable Kurma", "750.00", "Fresh vegetables simmered in a creamy, aromatic gravy."),
            ("Beef Kurma", "1300.00", "Tender beef in a rich, creamy gravy infused with aromatic spices."),
            ("Mutton Kurma", "1700.00", "Tender mutton simmered in a rich, creamy spiced gravy."),
            ("Chicken Do - Piazza", "1190.00", "Chicken cooked with sautéed onions, aromatic spices, and a rich masala gravy."),
            ("Chicken Tikka", "1290.00", "Chicken marinated in spices and yogurt, grilled for a smoky flavour."),
            ("Chicken Chukka", "1150.00", "Chicken dry-roasted with spices, herbs, and sautéed onions."),
            ("Butter Chicken Masala", "1300.00", "Chicken in a rich, creamy tomato gravy with butter and aromatic spices."),
            ("Beef Masala", "1290.00", "Tender beef in a rich, spicy masala gravy."),
            ("Beef Chukka", "1350.00", "Beef dry-roasted with spices, sautéed onions, and fresh herbs."),
            ("Chana Masala", "870.00", "Chickpeas in a rich, spicy masala gravy with aromatic spices."),
            ("Mushroom Masala", "1250.00", "Fresh mushrooms in a rich, flavourful masala gravy."),
            ("Chicken Kadai", "1950.00", "Chicken with bell peppers, onions, and spices in a rich masala gravy."),
            ("Chettinad Beef", "1800.00", "Beef cooked in authentic Chettinad spices for a bold, spicy flavour."),
            ("Chettinad Chicken", "1700.00", "Chicken with traditional Chettinad spices and aromatic herbs."),
            ("Chettinad Crab Masala", "2300.00", "Fresh crab in authentic Chettinad spices with a rich masala gravy."),
            ("Chettinad Mutton", "2600.00", "Tender mutton with authentic Chettinad spices and herbs."),
            ("Chettinad Prawn", "2300.00", "Juicy prawns in Chettinad spices with a rich aromatic gravy."),
            ("Cuttlefish Kadai", "2100.00", "Cuttlefish with bell peppers, onions, and spices in a rich masala gravy."),
            ("Dal Tadka", "1400.00", "Yellow lentils tempered with spices, garlic, and herbs."),
            ("Egg Bhurji", "750.00", "Scrambled eggs with onions, tomatoes, green chillies, and spices."),
            ("Egg Do-Pyaza", "1650.00", "Boiled eggs in a rich masala gravy with sautéed onions."),
            ("Mushroom Pepper Fry", "1900.00", "Mushrooms stir-fried with black pepper, spices, and onions."),
            ("Muttai Kalakki", "550.00", "Soft fluffy egg preparation with spices, herbs, and a touch of pepper."),
            ("Paneer Kadai", "1900.00", "Soft paneer with bell peppers, onions, and spices in masala gravy."),
            ("Paneer Tikka Malai", "2100.00", "Paneer marinated in yogurt, cream, and spices, grilled to perfection."),
            ("Chicken Malavani Curry", "2000.00", "Chicken in a coastal Malvani gravy with spices and coconut."),
            ("Arabic Chicken Curry", "2000.00", "Chicken in an aromatic curry infused with Middle Eastern spices."),
            ("Paneer Butter Masala", "1900.00", "Paneer cubes in a creamy tomato gravy with butter and spices."),
            ("Fish Kulambu", "1600.00", "Fresh fish in a tangy tamarind gravy with South Indian spices."),
            ("Prawn Tawa", "2300.00", "Prawns pan-fried on a hot tawa with spices, herbs, and masala."),
        ],
    ),
    (
        "tandoori",
        "Tandoori",
        [
            ("Malabar Paratha", "190.00", "Layered flatbread with a crispy exterior and soft, flaky texture."),
            ("Plain Naan", "220.00", "Soft freshly baked flatbread with a light, fluffy texture."),
            ("Garlic Naan", "250.00", "Soft naan infused with aromatic garlic and butter."),
            ("Butter Naan", "270.00", "Soft naan generously brushed with melted butter."),
            ("Chapathi", "200.00", "Traditional whole-wheat flatbread, soft and wholesome."),
            ("Paratha", "100.00", "Golden-brown flatbread with crispy exterior and soft flaky layers."),
            ("Butter Roti", "350.00", "Flatbread enriched with butter for a soft, golden finish."),
            ("Butter Kulcha", "350.00", "Soft fluffy flatbread brushed with melted butter."),
            ("Coriander Naan", "450.00", "Soft naan infused with aromatic coriander."),
            ("Chicken Kebab", "1350.00", "Chicken marinated in spices and grilled for a smoky, juicy bite."),
            ("Beef Kebab", "1450.00", "Premium beef marinated in spices and grilled to perfection."),
            ("Beef Seekh Kebab", "1950.00", "Minced beef with spices and herbs, skewered and grilled."),
            ("Beef Kebab Roll", "1900.00", "Spice-marinated beef kebab wrapped in flatbread with vegetables and sauces."),
            ("Chicken Kebab Roll", "1600.00", "Spice-marinated chicken kebab wrapped in flatbread with vegetables and sauces."),
            ("Chicken Seekh Kebab", "1850.00", "Minced chicken with spices and herbs, skewered and grilled."),
            ("Mutton Seekh Kebab", "3100.00", "Minced mutton with spices and herbs, skewered and grilled."),
            ("Tandoori Chicken Masala Kebab", "2100.00", "Chicken marinated in yogurt and Indian spices, grilled juicy and smoky."),
            ("Roast Chicken", "900.00", "Chicken seasoned with herbs and spices, slow-roasted to golden perfection."),
            ("Tandoori Chicken", "1100.00", "Chicken marinated in yogurt and spices, roasted for a smoky aroma."),
            ("Fry Fish", "1520.00", "Fresh fish seasoned and fried to golden perfection."),
        ],
    ),
    (
        "chinese",
        "Chinese",
        [
            ("Chicken Manchow Soup", "800.00", "Chinese-style soup with chicken, vegetables, and aromatic spices."),
            ("Vegetable Soup", "400.00", "Wholesome soup with fresh vegetables, herbs, and delicate seasonings."),
            ("Chicken Sweet Corn Soup", "650.00", "Creamy soup with tender chicken and sweet corn."),
            ("Chicken Hot & Sour Soup", "650.00", "Chicken, vegetables, and spices in a tangy, mildly spicy broth."),
            ("Chicken Fried Rice", "1050.00", "Rice stir-fried with chicken, vegetables, eggs, and savoury seasonings."),
            ("Chicken Kabsa", "1090.00", "Arabian-style basmati rice with traditional spices and tender chicken."),
            ("Beef Fried Rice", "1150.00", "Rice stir-fried with beef, vegetables, eggs, and savoury seasonings."),
            ("Mix Fried Rice", "1250.00", "Rice with chicken, beef, seafood, vegetables, eggs, and seasonings."),
            ("Veg Fried Rice", "890.00", "Rice stir-fried with fresh vegetables, eggs, and savoury seasonings."),
            ("Nasi Goreng Chicken", "1090.00", "Indonesian-style fried rice with chicken, vegetables, eggs, and spices."),
            ("Nasi Goreng Beef", "1190.00", "Indonesian-style fried rice with beef, vegetables, eggs, and spices."),
            ("Nasi Goreng Mix", "1250.00", "Indonesian-style fried rice with chicken, beef, seafood, and spices."),
            ("Arabic Seafood Rice", "2700.00", "Arabic-style rice with traditional spices and a selection of fresh seafood."),
            ("Copsey Rice Chicken", "2200.00", "Seasoned rice served with tender chicken and aromatic spices."),
            ("Copsey Rice Mix", "3200.00", "Seasoned rice with chicken, beef, and seafood."),
            ("Hong Kong Fried Rice", "1600.00", "Hong Kong-style fried rice with eggs, vegetables, and savoury seasonings."),
            ("Singapore Fried Rice", "1700.00", "Singapore-style fried rice with aromatic spices, eggs, and vegetables."),
            ("Mongolian Fried Rice", "1800.00", "Mongolian-style fried rice with vegetables, eggs, and savoury sauces."),
            ("Chicken Noodles", "990.00", "Stir-fried noodles with chicken, vegetables, and savoury seasonings."),
            ("Beef Noodles", "1090.00", "Stir-fried noodles with beef, vegetables, and savoury sauces."),
            ("Mix Noodles", "1590.00", "Noodles with chicken, beef, seafood, vegetables, and sauces."),
            ("Nasi Mix Noodle", "1750.00", "Indonesian-style noodles with chicken, beef, seafood, and spices."),
            ("Chicken Devilled", "1100.00", "Chicken stir-fried with onions, bell peppers, and spicy sauces."),
            ("Beef Devilled", "1250.00", "Beef tossed with onions, bell peppers, and spicy sauces."),
            ("Prawns Devilled", "1550.00", "Prawns stir-fried with onions, bell peppers, and spicy sauces."),
            ("Chilly Chicken Devilled", "1150.00", "Chicken in spicy chili sauce with onions and bell peppers."),
            ("Garlic Chicken Devilled", "1200.00", "Chicken stir-fried with garlic, onions, bell peppers, and sauces."),
            ("Chicken 65", "1350.00", "Crispy spicy fried chicken with Indian spices, curry leaves, and herbs."),
            ("Cuttle Fish Devilled", "1450.00", "Cuttlefish stir-fried with onions, bell peppers, and spicy sauces."),
            ("Chicken Sweet & Sour", "1800.00", "Chicken with crisp vegetables in a sweet and tangy sauce."),
            ("Lemon Chicken", "1300.00", "Crispy chicken coated in a zesty lemon sauce."),
            ("Hot Butter Cuttlefish", "1900.00", "Crispy cuttlefish in rich buttery sauce with spices and a hint of heat."),
            ("Butter Prawns", "2100.00", "Prawns sautéed in rich butter with garlic and seasonings."),
        ],
    ),
    (
        "bun-crispy",
        "Bun & Crispy",
        [
            ("Crispy Chicken", "750.00", "Golden crispy chicken with a seasoned crunchy crust and juicy meat."),
            ("Chicken Kapsa", "550.00", "Arabian-style rice with fragrant spices and tender chicken."),
            ("Boiled Egg", "150.00", "Perfectly boiled egg, served fresh and simple."),
            ("Masala Omelette", "800.00", "Fluffy omelette with spices, onions, green chillies, and herbs."),
            ("Chicken with Cheese", "1900.00", "Juicy chicken topped with melted cheese."),
            ("Prawns With Cheese", "2400.00", "Juicy prawns topped with melted cheese."),
            ("Crispy Chicken Burger", "1050.00", "Crispy chicken fillet with lettuce, cheese, and sauces in a toasted bun."),
            ("Nashville Hot Chicken Burger", "1090.00", "Crispy chicken with spicy Nashville seasoning, lettuce, and sauce."),
            ("Double Beef Burger", "2100.00", "Two beef patties with cheese, lettuce, and sauces in a toasted bun."),
            ("Smokie Burger", "750.00", "Smoky sausage, lettuce, cheese, and sauces in a soft toasted bun."),
            ("Chicken Sub", "1150.00", "Seasoned chicken with vegetables, cheese, and sauces in sub bread."),
            ("Crispy Chicken Sub", "1250.00", "Crispy chicken with vegetables, cheese, and sauces in sub bread."),
            ("Spicy Chicken Sub", "1250.00", "Spicy chicken with vegetables, cheese, and zesty sauces in sub bread."),
            ("Beef Sub", "1300.00", "Seasoned beef with vegetables, cheese, and sauces in sub bread."),
            ("Vegetable Sub", "990.00", "Fresh vegetables, melted cheese, and sauces in submarine bread."),
            ("Club Sandwich", "1400.00", "Triple-layered sandwich with chicken, egg, vegetables, and mayonnaise."),
            ("Chicken Shawarma", "990.00", "Marinated chicken in flatbread with vegetables and creamy garlic sauce."),
            ("Beef Shawarma", "1090.00", "Marinated beef in flatbread with vegetables and creamy garlic sauce."),
            ("Spicy Shawarma", "1150.00", "Spicy marinated meat in flatbread with vegetables and garlic sauce."),
        ],
    ),
    (
        "drinks",
        "Drinks",
        [
            ("Vanilla Shake", "750.00", "Creamy vanilla milkshake blended with ice cream and chilled milk."),
            ("Chocolate Shake", "750.00", "Rich chocolate milkshake blended with chilled milk."),
            ("Strawberry Shake", "750.00", "Creamy strawberry milkshake blended with chilled milk."),
            ("Lime Juice", "390.00", "Freshly squeezed lime juice, chilled and refreshing."),
            ("Watermelon Juice", "490.00", "Fresh watermelon juice, naturally sweet and hydrating."),
            ("Mango Juice", "550.00", "Fresh mango juice from ripe, juicy mangoes."),
            ("Papaya Juice", "490.00", "Fresh papaya juice with a smooth tropical flavour."),
            ("Orange Juice", "650.00", "Fresh orange juice with a vibrant citrus flavour."),
            ("Pineapple Juice", "550.00", "Fresh pineapple juice, sweet and tangy."),
            ("Water Bottle", "130.00", "Chilled bottled water."),
            ("Passion Mojito", "500.00", "Passion fruit mojito with lime, mint, and sparkling soda."),
            ("Strawberry Mojito", "500.00", "Strawberry mojito with mint, lime, and sparkling soda."),
            ("Lime Mint Mojito", "500.00", "Lime mint mojito with sparkling soda."),
            ("Blue Berry Mojito", "550.00", "Blueberry mojito with mint, lime, and sparkling soda."),
            ("Sweet Lassi", "490.00", "Creamy sweet lassi made with smooth yogurt."),
            ("Salt Lassi", "490.00", "Refreshing salted lassi with creamy yogurt."),
            ("Pepsi", "250.00", "Chilled soft drink."),
            ("7Up", "250.00", "Chilled soft drink."),
        ],
    ),
    (
        "desserts",
        "Original Desserts",
        [
            ("Tiramisu", "790.00", "Coffee-soaked ladyfingers, mascarpone cream, and cocoa powder."),
            ("Warm Brownies", "700.00", "Warm chocolate brownies with a soft fudgy centre."),
            ("Lava Cake", "490.00", "Warm chocolate lava cake with a molten chocolate centre."),
            ("Vanilla Cheesecake Slice", "790.00", "Creamy vanilla cheesecake on a buttery biscuit base."),
            ("Warm Cookie Dough", "700.00", "Warm cookie dough with a gooey centre and chocolate chips."),
            ("Fruit Salad", "490.00", "A refreshing mix of fresh, juicy seasonal fruits."),
        ],
    ),
]


def main():
    used_ids = set()
    categories_out = []
    for cat_id, cat_name, items in CATEGORIES:
        out_items = []
        for name, price, desc in items:
            item_id = slug(name)
            base = item_id
            n = 2
            while item_id in used_ids:
                item_id = f"{base}-{n}"
                n += 1
            used_ids.add(item_id)
            out_items.append(
                {
                    "id": item_id,
                    "name": name,
                    "description": desc,
                    "price": money(price),
                    "dietary": [],
                    "image": pick_image(name),
                    "available": True,
                }
            )
        categories_out.append({"id": cat_id, "name": cat_name, "items": out_items})

    header = """/**
 * Burgo Food Chain — Menu data
 *
 * Sourced from the official restaurant menu (prices in LKR).
 * Online ordering uses links.menuPilotUrl in js/config.js.
 * Images live under assets/images/photos/menu/.
 */

const BURGO_MENU = """

    # Pretty-print JS-ish object (JSON is valid JS for this structure)
    body = json.dumps({"isSample": False, "categories": categories_out}, indent=2, ensure_ascii=False)
    # Convert JSON true/false/null if needed — already fine
    out = header + body + ";\n"

    dest = Path(__file__).resolve().parents[1] / "data" / "menu-data.js"
    dest.write_text(out, encoding="utf-8")
    total = sum(len(c["items"]) for c in categories_out)
    print(f"Wrote {dest} with {len(categories_out)} categories, {total} items")


if __name__ == "__main__":
    main()
