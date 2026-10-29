/**
 * Burgo Food Chain — Menu data
 *
 * Synced from the live public menu (same catalogue as online ordering).
 * Regenerate: python scripts/import_menupilot_menu.py
 */

const BURGO_MENU = {
  "isSample": false,
  "source": "live-menu",
  "stats": {
    "categories": 29,
    "items": 164
  },
  "categories": [
    {
      "id": "indian-biriyani-0bd5d0",
      "name": "Biriyani",
      "group": "INDIAN",
      "items": [
        {
          "id": "beef-biriyani",
          "name": "Beef Biriyani",
          "description": "Fragrant basmati rice cooked with aromatic spices and herbs, combined with tender, flavorful beef for a rich, hearty, and authentic Indian dining experience.",
          "price": "LKR 1,350",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791975366778-140773442.jpg",
          "available": true
        },
        {
          "id": "hyderabad-beef-dum-biriyani",
          "name": "Hyderabad Beef Dum Biriyani",
          "description": "Aromatic basmati rice layered with tender, marinated beef and traditional Hyderabadi spices, slow-cooked using the dum method to lock in rich flavours and irresistible aromas for an authentic and satisfying experience.",
          "price": "LKR 1,900",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791975552773-317542823.jpg",
          "available": true
        },
        {
          "id": "hyderabad-mutton-dum-biriyani",
          "name": "Hyderabad Mutton Dum Biriyani",
          "description": "Fragrant basmati rice layered with tender, succulent mutton, marinated in traditional Hyderabadi spices and slow-cooked to perfection using the dum method, delivering rich aromas and authentic flavors in every bite.",
          "price": "LKR 2,400",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791975771053-66914145.jpg",
          "available": true
        },
        {
          "id": "tandoori-chicken-biriyani",
          "name": "Tandoori Chicken Biriyani",
          "description": "Aromatic basmati rice layered with juicy tandoori chicken, marinated in traditional Indian spices and cooked to perfection, combining smoky flavours, fragrant herbs, and rich spices for an unforgettable dining experience.",
          "price": "LKR 1,600",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791975925559-670852669.jpg",
          "available": true
        },
        {
          "id": "fry-biriyani",
          "name": "Fry Biriyani",
          "description": "Aromatic basmati rice tossed with flavorful spices, rich masala, and perfectly fried meat for a delicious and satisfying taste.",
          "price": "LKR 1,800",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791976135680-46624797.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "bun-crispy-chicken-35df98",
      "name": "Chicken",
      "group": "Bun & Crispy",
      "items": [
        {
          "id": "crispy-chicken",
          "name": "Crispy Chicken",
          "description": "Golden, crispy chicken coated in a perfectly seasoned crunchy crust, with juicy, tender meat inside for a delicious and satisfying bite.",
          "price": "LKR 750",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792146946320-8604506.jpg",
          "available": true
        },
        {
          "id": "chicken-kapsa",
          "name": "Chicken Kapsa",
          "description": "Aromatic Arabian-style rice cooked with fragrant spices and served with tender, flavorful chicken for a rich and authentic Middle Eastern dining experience.",
          "price": "LKR 550",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792147163901-146866252.jpg",
          "available": true
        },
        {
          "id": "boiled-egg",
          "name": "Boiled egg",
          "description": "A perfectly boiled egg with a tender white and a delicious, protein-rich yolk, served fresh and simple.",
          "price": "LKR 150",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792147234568-425343567.jpg",
          "available": true
        },
        {
          "id": "masala-omelette",
          "name": "Masala Omelette",
          "description": "A fluffy omelette infused with aromatic spices, onions, green chilies, and fresh herbs for a deliciously savory and flavorful bite.",
          "price": "LKR 800",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792147332913-739846392.jpg",
          "available": true
        },
        {
          "id": "chicken-with-cheese",
          "name": "Chicken with Cheese",
          "description": "Tender, juicy chicken topped with melted cheese and seasoned to perfection, delivering a rich, creamy flavor in every bite.",
          "price": "LKR 1,900",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792147450125-290143574.jpg",
          "available": true
        },
        {
          "id": "prawns-with-cheese",
          "name": "Prawns With Cheese",
          "description": "Juicy prawns topped with melted cheese and seasoned to perfection, offering a rich, creamy texture and delicious seafood flavor.",
          "price": "LKR 2,400",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792147577415-380995375.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "original-desserts-desserts-6414c6",
      "name": "Desserts",
      "group": "Original Desserts",
      "items": [
        {
          "id": "tiramisu",
          "name": "Tiramisu",
          "description": "Classic Italian tiramisu made with layers of coffee-soaked ladyfingers, rich mascarpone cream, and a delicate dusting of cocoa powder.",
          "price": "LKR 790",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792564398039-210046752.jpg",
          "available": true
        },
        {
          "id": "warm-brownies",
          "name": "Warm Brownies",
          "description": "Warm, rich chocolate brownies with a soft, fudgy center and a delicate, slightly crisp crust, served freshly heated for the perfect indulgent treat.",
          "price": "LKR 700",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792564562818-103453624.jpg",
          "available": true
        },
        {
          "id": "lava-cake",
          "name": "Lava Cake",
          "description": "Warm chocolate lava cake with a soft, rich exterior and a luscious molten chocolate center, served for an indulgent dessert experience.",
          "price": "LKR 490",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792564656564-27500394.jpg",
          "available": true
        },
        {
          "id": "vanilla-cheesecake-slice",
          "name": "Vanilla Cheesecake Slice",
          "description": "Creamy vanilla cheesecake with a smooth, rich texture and a buttery biscuit base, offering a perfectly balanced and indulgent dessert experience.",
          "price": "LKR 790",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792564811191-822319098.jpg",
          "available": true
        },
        {
          "id": "warm-cookie-dough",
          "name": "Warm Cookie Dough",
          "description": "Warm, freshly baked cookie dough with a soft, gooey center and rich chocolate chips, served warm for the ultimate sweet indulgence.",
          "price": "LKR 700",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792564923706-31542306.jpg",
          "available": true
        },
        {
          "id": "fruit-salad",
          "name": "Fruit Salad",
          "description": "A refreshing mix of fresh, juicy seasonal fruits, offering a naturally sweet and vibrant treat.",
          "price": "LKR 490",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792565030017-190475247.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "shisha-flavored-shisha-618501",
      "name": "Flavored Shisha",
      "group": "SHISHA",
      "items": [
        {
          "id": "shisha",
          "name": "Shisha",
          "description": "Shisha flavours no tobacco",
          "price": "LKR 4,000",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793185069447-884338101.jpg",
          "available": true
        },
        {
          "id": "chicken-pastries-2-pieces",
          "name": "Chicken pastries 2 pieces",
          "description": "Chicken pastry made with white flour and chicken",
          "price": "LKR 350",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793185324249-719663529.jpg",
          "available": true
        },
        {
          "id": "mojito-juice-strawberry",
          "name": "Mojito juice strawberry",
          "description": "Mojito juice strawberry made with fresh",
          "price": "LKR 500",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793185842859-849195293.jpg",
          "available": true
        },
        {
          "id": "barbican-malt-beverage-halal",
          "name": "Barbican malt beverage Halal",
          "description": "Barbican malt beverage fully halal",
          "price": "LKR 900",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793186066920-920099499.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "sri-lankan-kandiri-kidu-3034a3",
      "name": "Kandiri Kidu",
      "group": "SRI LANKAN",
      "items": [
        {
          "id": "beef-kidu-rice-full",
          "name": "Beef Kidu rice full",
          "description": "White rice, kaliya, mango curry dhal curry banana flower achchar and meat soup served with beef fried chil and papadam",
          "price": "LKR 600",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793168943672-386828741.jpg",
          "available": true
        },
        {
          "id": "chicken-kidu-rice-full",
          "name": "Chicken kidu rice full",
          "description": "White rice, kaliya, mango curry dhal curry banana flower achchar and meat soup served with chicken fried chil and",
          "price": "LKR 500",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793168861538-24344362.jpg",
          "available": true
        },
        {
          "id": "fried-fish-kidu-rice-full",
          "name": "Fried fish kidu rice Full",
          "description": "White rice, kaliya, mango curry dhal curry banana flower achchar and meat soup served with fried fish fried chil and papadam",
          "price": "LKR 600",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793169172476-560368117.jpg",
          "available": true
        },
        {
          "id": "kandiri-kidu-beef-whole",
          "name": "Kandiri Kidu Beef Whole",
          "description": "Tender, flavourful beef cooked with aromatic Sri Lankan spices for a rich, delicious, and satisfying meal.",
          "price": "LKR 3,000",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793184572869-395559861.jpg",
          "available": true
        },
        {
          "id": "kandiri-kidu-chicken-whole",
          "name": "Kandiri Kidu Chicken Whole",
          "description": "Tender chicken cooked with aromatic Sri Lankan spices, delivering a rich, flavourful, and satisfying taste in every bite.",
          "price": "LKR 2,500",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793184133553-157499607.jpg",
          "available": true
        },
        {
          "id": "kandiri-kidu-fish-whole",
          "name": "Kandiri Kidu Fish Whole",
          "description": "Fresh fish cooked with aromatic Sri Lankan spices, delivering a delicious blend of rich flavours and authentic local taste.",
          "price": "LKR 2,500",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793184539753-144992198.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "drinks-milk-shake-35f1a6",
      "name": "Milk Shake",
      "group": "Drinks",
      "items": [
        {
          "id": "vanilla-shake",
          "name": "Vanilla shake",
          "description": "A smooth and creamy vanilla milkshake blended with rich vanilla ice cream and chilled milk for a classic, refreshing treat.",
          "price": "LKR 750",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792149465158-69171276.jpg",
          "available": true
        },
        {
          "id": "chocolate-shake",
          "name": "Chocolate Shake",
          "description": "A rich and creamy chocolate milkshake blended with chilled milk and delicious chocolate flavor for a smooth, indulgent treat.",
          "price": "LKR 750",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792149568273-694625021.jpg",
          "available": true
        },
        {
          "id": "strawberry-shake",
          "name": "Strawberry Shake",
          "description": "A smooth and creamy strawberry milkshake blended with chilled milk and sweet strawberry flavor for a refreshing, fruity treat.",
          "price": "LKR 750",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792149683423-36924327.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "tandoori-roti-s-32c6e2",
      "name": "Roti's",
      "group": "Tandoori",
      "items": [
        {
          "id": "malabar-paratha",
          "name": "Malabar Paratha",
          "description": "A traditional layered flatbread, expertly prepared to achieve a crispy exterior and soft, flaky texture, perfect to pair with rich curries and savory dishes.",
          "price": "LKR 190",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792133070807-529170995.jpg",
          "available": true
        },
        {
          "id": "plain-naan",
          "name": "Plain Naan",
          "description": "A soft, freshly baked Indian flatbread with a light, fluffy texture and a delicate golden finish, perfect for pairing with rich curries and flavorful gravies.",
          "price": "LKR 220",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792133191317-945361808.jpg",
          "available": true
        },
        {
          "id": "garlic-naan",
          "name": "Garlic Naan",
          "description": "A soft, freshly baked Indian flatbread infused with aromatic garlic and butter, delivering a rich, savory flavor that perfectly complements curries and grilled dishes.",
          "price": "LKR 250",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792133354343-293549983.jpg",
          "available": true
        },
        {
          "id": "butter-naan",
          "name": "Butter Naan",
          "description": "A soft, freshly baked Indian flatbread generously brushed with melted butter, offering a rich, buttery flavor and a tender texture that pairs perfectly with curries and gravies.",
          "price": "LKR 270",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792133451891-594641964.jpg",
          "available": true
        },
        {
          "id": "chapathi",
          "name": "Chapathi",
          "description": "A traditional Indian whole-wheat flatbread, freshly prepared to deliver a soft texture and wholesome flavor, perfect for pairing with curries, dhal, and savory dishes.",
          "price": "LKR 200",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792133562408-453119898.jpg",
          "available": true
        },
        {
          "id": "paratha",
          "name": "Paratha",
          "description": "A freshly prepared, golden-brown flatbread with a crispy exterior and soft, flaky layers, offering a rich, satisfying taste that pairs perfectly with curries and savory dishes.",
          "price": "LKR 100",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792133643163-27062070.jpg",
          "available": true
        },
        {
          "id": "butter-roti",
          "name": "Butter Roti",
          "description": "Freshly prepared flatbread enriched with butter, offering a soft texture, a golden finish, and a rich, buttery flavor that perfectly complements curries and savory dishes.",
          "price": "LKR 350",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792133766227-284554824.jpg",
          "available": true
        },
        {
          "id": "butter-kulcha",
          "name": "Butter Kulcha",
          "description": "A soft, fluffy Indian flatbread freshly baked to perfection and brushed with melted butter, delivering a rich, buttery flavor that pairs beautifully with curries and flavorful gravies.",
          "price": "LKR 350",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792133846205-348661176.jpg",
          "available": true
        },
        {
          "id": "coriander-naan",
          "name": "Coriander Naan",
          "description": "A soft, freshly baked Indian flatbread infused with aromatic coriander, delivering a refreshing herbal flavor and a deliciously savory taste, perfect for pairing with curries and gravies.",
          "price": "LKR 450",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792133959596-757070989.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "continental-salad-0b4586",
      "name": "Salad",
      "group": "CONTINENTAL",
      "items": [
        {
          "id": "green-salad",
          "name": "Green Salad",
          "description": "A refreshing mix of fresh, crisp green vegetables, including lettuce, cucumber, and other seasonal greens, served with a light dressing for a healthy, delicious, and refreshing taste.",
          "price": "LKR 500",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791969982835-232890084.jpg",
          "available": true
        },
        {
          "id": "corn-salad",
          "name": "Corn Salad",
          "description": "A refreshing blend of sweet corn, fresh vegetables, and a delicious dressing, offering a perfect balance of sweetness, crunch, and freshness in every bite.",
          "price": "LKR 600",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791970222792-113546619.jpg",
          "available": true
        },
        {
          "id": "potato-salad",
          "name": "Potato Salad",
          "description": "A delicious blend of tender potatoes, fresh herbs, and creamy dressing, seasoned to perfection for a rich, smooth, and satisfying flavour.",
          "price": "LKR 600",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791970469802-401612162.jpg",
          "available": true
        },
        {
          "id": "tomato-onion-chilly-salad",
          "name": "Tomato Onion Chilly Salad",
          "description": "A refreshing combination of juicy tomatoes, crisp onions, and fresh green chillies, lightly seasoned to deliver a perfect balance of freshness, crunch, and spicy flavour.",
          "price": "LKR 450",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791970743891-157994002.jpg",
          "available": true
        },
        {
          "id": "greek-salad",
          "name": "Greek Salad",
          "description": "A refreshing Mediterranean salad featuring crisp lettuce, juicy tomatoes, cucumber, red onions, olives, and creamy feta cheese, tossed with a light olive oil dressing and aromatic herbs for a fresh and vibrant flavour.",
          "price": "LKR 800",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791971181108-588214710.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "chinese-soup-32de64",
      "name": "Soup (Chinese)",
      "group": "Chinese",
      "items": [
        {
          "id": "chicken-manchow-soup",
          "name": "Chicken Manchow Soup",
          "description": "A rich and flavorful Chinese-style soup prepared with tender chicken, fresh vegetables, aromatic spices, and savory seasonings, delivering a warm, spicy, and satisfying taste.",
          "price": "LKR 800",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792135845576-221739283.jpg",
          "available": true
        },
        {
          "id": "vegetable-soup",
          "name": "Vegetable soup",
          "description": "A wholesome and comforting soup prepared with fresh vegetables, aromatic herbs, and delicate seasonings, offering a light, nourishing, and flavorful experience in every spoonful.",
          "price": "LKR 400",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792135925698-460143147.jpg",
          "available": true
        },
        {
          "id": "chicken-sweet-corn-soup",
          "name": "Chicken Sweet Corn soup",
          "description": "A creamy, comforting soup combining tender chicken and sweet corn in a rich, flavorful broth, delivering a perfect balance of sweetness and savory goodness.",
          "price": "LKR 650",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792135992064-627919342.jpg",
          "available": true
        },
        {
          "id": "chicken-hot-sour-soup",
          "name": "Chicken Hot & Sour Soup",
          "description": "A flavorful blend of tender chicken, fresh vegetables, and aromatic spices in a rich, tangy, and mildly spicy broth.",
          "price": "LKR 650",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792136143499-58950330.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "bun-crispy-burgers-35dfc5",
      "name": "Burgers",
      "group": "Bun & Crispy",
      "items": [
        {
          "id": "crispy-chicken-burger",
          "name": "Crispy Chicken Burger",
          "description": "A golden, crispy chicken fillet layered with fresh lettuce, cheese, and signature sauces, served in a soft toasted bun for a delicious, satisfying bite.",
          "price": "LKR 1,050",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792147650467-172668333.jpg",
          "available": true
        },
        {
          "id": "nashville-hot-chicken-burger",
          "name": "Nashville Hot Chicken Burger",
          "description": "A crispy chicken fillet coated in spicy Nashville-style seasoning, layered with fresh lettuce and signature sauce in a toasted bun for a bold, fiery flavor.",
          "price": "LKR 1,090",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792147731576-255220052.jpg",
          "available": true
        },
        {
          "id": "double-beef-burger",
          "name": "Double Beef Burger",
          "description": "Two juicy beef patties layered with melted cheese, fresh lettuce, and signature sauces, served in a soft toasted bun for a rich and satisfying bite.",
          "price": "LKR 2,100",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792147861224-8949115.jpg",
          "available": true
        },
        {
          "id": "smokie-burger",
          "name": "Smokie Burger",
          "description": "A delicious burger featuring a smoky sausage, fresh lettuce, melted cheese, and signature sauces, served in a soft toasted bun for a bold, savory flavor.",
          "price": "LKR 750",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792147937086-719395967.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "indian-curries-0bd606",
      "name": "Curries",
      "group": "INDIAN",
      "items": [
        {
          "id": "chicken-masala",
          "name": "Chicken Masala",
          "description": "Tender chicken cooked in a rich, aromatic masala gravy with a perfect blend of traditional spices.",
          "price": "LKR 1,190",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791976243554-695572635.jpg",
          "available": true
        },
        {
          "id": "chicken-kurma",
          "name": "Chicken Kurma",
          "description": "Tender chicken simmered in a creamy, aromatic gravy with a rich blend of spices and herbs.",
          "price": "LKR 1,190",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791976328792-333269053.jpg",
          "available": true
        },
        {
          "id": "vegetable-kurma",
          "name": "Vegetable Kurma",
          "description": "Fresh vegetables simmered in a creamy, aromatic gravy with a rich blend of spices and herbs.",
          "price": "LKR 750",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791976426456-524108285.jpg",
          "available": true
        },
        {
          "id": "beef-kurma",
          "name": "Beef Kurma",
          "description": "Tender beef cooked in a rich, creamy gravy infused with aromatic spices and herbs.",
          "price": "LKR 1,300",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791976531409-317192292.jpg",
          "available": true
        },
        {
          "id": "mutton-kurma",
          "name": "Mutton Kurma",
          "description": "Tender mutton simmered in a rich, creamy gravy infused with aromatic spices and herbs.",
          "price": "LKR 1,700",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791976622910-302301848.jpg",
          "available": true
        },
        {
          "id": "chicken-do-piazza",
          "name": "Chicken Do - Piazza",
          "description": "Tender chicken cooked with sautéed onions, aromatic spices, and a rich, flavorful masala gravy.",
          "price": "LKR 1,190",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791976752985-992815673.jpg",
          "available": true
        },
        {
          "id": "chicken-tikka",
          "name": "Chicken Tikka",
          "description": "Juicy chicken marinated in aromatic spices and yogurt, grilled to perfection for a smoky, flavorful taste.",
          "price": "LKR 1,290",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791976848796-315487314.jpg",
          "available": true
        },
        {
          "id": "chicken-chukka",
          "name": "Chicken Chukka",
          "description": "Tender chicken dry-roasted with aromatic spices, fresh herbs, and sautéed onions for a bold, flavorful taste.",
          "price": "LKR 1,150",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791976939195-631041701.jpg",
          "available": true
        },
        {
          "id": "butter-chicken-masala",
          "name": "Butter Chicken Masala",
          "description": "ender chicken cooked in a rich, creamy tomato gravy with butter and aromatic spices for a smooth, flavorful taste.",
          "price": "LKR 1,300",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791977018366-388412182.jpg",
          "available": true
        },
        {
          "id": "beef-masala",
          "name": "Beef Masala",
          "description": "Tender beef cooked in a rich, spicy masala gravy infused with aromatic spices for a bold, flavorful taste.",
          "price": "LKR 1,290",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791977089408-394428593.jpg",
          "available": true
        },
        {
          "id": "beef-chukka",
          "name": "Beef Chukka",
          "description": "Tender beef dry-roasted with aromatic spices, sautéed onions, and fresh herbs for a rich, bold flavor.",
          "price": "LKR 1,350",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791977197134-168708221.jpg",
          "available": true
        },
        {
          "id": "chana-masala",
          "name": "Chana Masala",
          "description": "Tender chickpeas cooked in a rich, spicy masala gravy with aromatic spices and fresh herbs.",
          "price": "LKR 870",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791977334480-194058592.jpg",
          "available": true
        },
        {
          "id": "mushroom-masala",
          "name": "Mushroom Masala",
          "description": "Fresh mushrooms cooked in a rich, flavorful masala gravy with aromatic spices and herbs.",
          "price": "LKR 1,250",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791977439833-235751294.jpg",
          "available": true
        },
        {
          "id": "chicken-kadai",
          "name": "Chicken Kadai",
          "description": "Tender chicken cooked with bell peppers, onions, and aromatic spices in a rich, flavorful masala gravy.",
          "price": "LKR 1,950",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791977560958-580684235.jpg",
          "available": true
        },
        {
          "id": "chettinad-beef",
          "name": "Chettinad Beef",
          "description": "Tender beef cooked in authentic Chettinad spices with aromatic herbs for a rich, bold, and spicy flavor.",
          "price": "LKR 1,800",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791977662686-732177103.jpg",
          "available": true
        },
        {
          "id": "chettinad-chicken",
          "name": "Chettinad Chicken",
          "description": "Tender chicken cooked with traditional Chettinad spices and aromatic herbs for a rich, bold, and spicy flavor.",
          "price": "LKR 1,700",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791977752317-263718592.jpg",
          "available": true
        },
        {
          "id": "chettinad-crab-masala",
          "name": "Chettinad Crab Masala",
          "description": "Fresh crab cooked in authentic Chettinad spices with a rich, aromatic masala gravy for a bold, spicy flavor.",
          "price": "LKR 2,300",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791977927178-441144395.jpg",
          "available": true
        },
        {
          "id": "chettinad-mutton",
          "name": "Chettinad Mutton",
          "description": "Tender mutton cooked with authentic Chettinad spices and aromatic herbs for a rich, bold, and flavorful taste.",
          "price": "LKR 2,600",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791978039448-704434064.jpg",
          "available": true
        },
        {
          "id": "chettinad-prawn",
          "name": "Chettinad Prawn",
          "description": "Juicy prawns cooked in authentic Chettinad spices with a rich, aromatic masala gravy for a bold, spicy flavor.",
          "price": "LKR 2,300",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791978163569-244053621.jpg",
          "available": true
        },
        {
          "id": "cuttlefish-kadai",
          "name": "Cuttlefish Kadai",
          "description": "Tender cuttlefish cooked with bell peppers, onions, and aromatic spices in a rich, flavorful masala gravy.",
          "price": "LKR 2,100",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791978299246-751746521.jpg",
          "available": true
        },
        {
          "id": "dal-tadka",
          "name": "Dal Tadka",
          "description": "Yellow lentils tempered with aromatic spices, garlic, and herbs for a comforting and flavorful taste.",
          "price": "LKR 1,400",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791978389839-785985108.jpg",
          "available": true
        },
        {
          "id": "egg-bhurji",
          "name": "Egg Bhurji",
          "description": "Scrambled eggs sautéed with onions, tomatoes, green chilies, and aromatic spices for a delicious, flavorful taste.",
          "price": "LKR 750",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791978491540-834271190.jpg",
          "available": true
        },
        {
          "id": "egg-do-pyaza",
          "name": "Egg Do-Pyaza",
          "description": "Boiled eggs simmered in a rich masala gravy with sautéed onions and aromatic spices for a flavorful taste.",
          "price": "LKR 1,650",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791978600117-435224593.jpg",
          "available": true
        },
        {
          "id": "mushroom-pepper-fry",
          "name": "Mushroom Pepper Fry",
          "description": "Fresh mushrooms stir-fried with crushed black pepper, aromatic spices, and sautéed onions for a bold, spicy flavor.",
          "price": "LKR 1,900",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791978697415-7585950.jpg",
          "available": true
        },
        {
          "id": "muttai-kalakki",
          "name": "Muttai Kalakki",
          "description": "A soft, fluffy egg preparation blended with aromatic spices, fresh herbs, and a touch of pepper for a rich, flavorful taste.",
          "price": "LKR 550",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791978777452-194460627.jpg",
          "available": true
        },
        {
          "id": "paneer-kadai",
          "name": "Paneer Kadai",
          "description": "Soft paneer cooked with bell peppers, onions, and aromatic spices in a rich, flavorful masala gravy.",
          "price": "LKR 1,900",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791978856228-507980479.jpg",
          "available": true
        },
        {
          "id": "paneer-tikka-malai",
          "name": "Paneer Tikka Malai",
          "description": "Soft paneer marinated in a creamy blend of yogurt, fresh cream, and aromatic spices, grilled to perfection for a rich, smoky flavor.",
          "price": "LKR 2,100",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791978978058-398128908.jpg",
          "available": true
        },
        {
          "id": "chicken-malavani-curry",
          "name": "Chicken Malavani Curry",
          "description": "Tender chicken simmered in a rich, coastal-style Malvani gravy with aromatic spices and coconut for a bold, flavorful taste.",
          "price": "LKR 2,000",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791979094237-898390486.jpg",
          "available": true
        },
        {
          "id": "arabic-chicken-curry",
          "name": "Arabic Chicken Curry",
          "description": "Tender chicken simmered in a rich, aromatic curry infused with Middle Eastern spices for a distinctive and flavorful taste.",
          "price": "LKR 2,000",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791979234753-290598858.jpg",
          "available": true
        },
        {
          "id": "paneer-butter-masala",
          "name": "Paneer Butter Masala",
          "description": "Soft paneer cubes simmered in a rich, creamy tomato gravy with butter and aromatic spices for a smooth, flavorful taste.",
          "price": "LKR 1,900",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791979359040-569883479.jpg",
          "available": true
        },
        {
          "id": "fish-kulambu",
          "name": "Fish Kulambu",
          "description": "Fresh fish simmered in a tangy, spicy tamarind gravy with traditional South Indian spices for an authentic, flavorful taste.",
          "price": "LKR 1,600",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791979440466-421778617.jpg",
          "available": true
        },
        {
          "id": "prawn-tawa",
          "name": "Prawn Tawa",
          "description": "Juicy prawns pan-fried on a hot tawa with aromatic spices, herbs, and a flavorful masala coating.",
          "price": "LKR 2,300",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791979519470-39195154.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "drinks-fresh-juice-35f1d4",
      "name": "Fresh & Juice",
      "group": "Drinks",
      "items": [
        {
          "id": "lime-juice",
          "name": "Lime Juice",
          "description": "Freshly squeezed lime juice with a perfect balance of citrus tanginess and sweetness, served chilled for a refreshing burst of flavor.",
          "price": "LKR 390",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792149767730-207509922.jpg",
          "available": true
        },
        {
          "id": "watermelon-juice",
          "name": "Watermelon Juice",
          "description": "Fresh watermelon juice made from ripe, juicy watermelon, served chilled for a naturally sweet, hydrating, and refreshing taste.",
          "price": "LKR 490",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792149887026-218814868.jpg",
          "available": true
        },
        {
          "id": "mango-juice",
          "name": "Mango Juice",
          "description": "Fresh mango juice made from ripe, juicy mangoes, offering a naturally sweet, refreshing taste with a smooth and tropical flavor.",
          "price": "LKR 550",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792150034811-950109232.jpg",
          "available": true
        },
        {
          "id": "papaya-juice",
          "name": "Papaya Juice",
          "description": "Fresh papaya juice made from ripe papayas, offering a naturally sweet, smooth, and refreshing tropical flavor.",
          "price": "LKR 490",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792150115731-318722046.jpg",
          "available": true
        },
        {
          "id": "orange-juice",
          "name": "Orange Juice",
          "description": "Fresh orange juice with a vibrant citrus flavor, offering a naturally sweet and tangy taste for a refreshing experience.",
          "price": "LKR 650",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792150187401-987088361.jpg",
          "available": true
        },
        {
          "id": "pineapple-juice",
          "name": "Pineapple Juice",
          "description": "Fresh pineapple juice with a naturally sweet and tangy tropical flavor, delivering a refreshing and revitalizing taste.",
          "price": "LKR 550",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792150275036-153676659.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "tandoori-kebabs-32c717",
      "name": "Kebabs",
      "group": "Tandoori",
      "items": [
        {
          "id": "chicken-kebab",
          "name": "Chicken Kebab",
          "description": "ender chicken marinated in aromatic spices and expertly grilled to perfection, delivering a smoky aroma, juicy texture, and rich, flavorful taste in every bite.",
          "price": "LKR 1,350",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792134059540-39389642.jpg",
          "available": true
        },
        {
          "id": "beef-kebab",
          "name": "Beef Kebab",
          "description": "Premium beef marinated in aromatic spices and expertly grilled to perfection, delivering a rich, smoky flavor with a tender, juicy texture in every bite.",
          "price": "LKR 1,450",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792134134794-413585801.jpg",
          "available": true
        },
        {
          "id": "beef-seekh-kebab",
          "name": "Beef seekh Kebab",
          "description": "Succulent minced beef blended with aromatic spices and fresh herbs, skewered and grilled to perfection for a smoky aroma, rich flavor, and tender texture.",
          "price": "LKR 1,950",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792134228672-622246168.jpg",
          "available": true
        },
        {
          "id": "beef-kebab-roll",
          "name": "Beef Kebab Roll",
          "description": "Juicy, spice-marinated beef kebab wrapped in soft flatbread with fresh vegetables and flavorful sauces, delivering a delicious blend of smoky flavors and satisfying textures.",
          "price": "LKR 1,900",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792134297981-333536435.jpg",
          "available": true
        },
        {
          "id": "chicken-kebab-roll",
          "name": "Chicken Kebab Roll",
          "description": "Tender, spice-marinated chicken kebab wrapped in soft flatbread with fresh vegetables and savory sauces, offering a perfect blend of smoky flavors and delicious textures.",
          "price": "LKR 1,600",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792134374926-768019995.jpg",
          "available": true
        },
        {
          "id": "chicken-seekh-kebab",
          "name": "Chicken Seekh kebab",
          "description": "Juicy minced chicken blended with aromatic spices and fresh herbs, skewered and grilled to perfection for a smoky aroma, tender texture, and authentic flavor.",
          "price": "LKR 1,850",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792134459681-806909623.jpg",
          "available": true
        },
        {
          "id": "mutton-seekh-kebab",
          "name": "Mutton Seekh kebab",
          "description": "Succulent minced mutton blended with aromatic spices and fresh herbs, skewered and grilled to perfection for a rich, smoky flavor and irresistibly tender texture.",
          "price": "LKR 3,100",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792134532322-595177304.jpg",
          "available": true
        },
        {
          "id": "tandoori-chicken-masala-kebab",
          "name": "Tandoori Chicken Masala Kebab",
          "description": "Tender chicken marinated in a rich blend of traditional Indian spices and yogurt, expertly grilled to perfection for a smoky aroma, vibrant flavor, and juicy texture.",
          "price": "LKR 2,100",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792134618594-44754374.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "chinese-rice-32de97",
      "name": "Rice",
      "group": "Chinese",
      "items": [
        {
          "id": "chicken-fried-rice",
          "name": "Chicken Fried Rice",
          "description": "Fragrant rice stir-fried with tender chicken, fresh vegetables, eggs, and savory seasonings for a delicious, flavorful meal.",
          "price": "LKR 1,050",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792140995854-479270390.jpg",
          "available": true
        },
        {
          "id": "chicken-kabsa",
          "name": "Chicken Kabsa",
          "description": "Aromatic Arabian-style basmati rice cooked with traditional spices, served with tender, flavorful chicken for an authentic Middle Eastern taste.",
          "price": "LKR 1,090",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792141110507-609498375.jpg",
          "available": true
        },
        {
          "id": "beef-fried-rice",
          "name": "Beef Fried Rice",
          "description": "Fragrant rice stir-fried with tender beef, fresh vegetables, eggs, and savory seasonings for a rich and satisfying meal.",
          "price": "LKR 1,150",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792141208195-94845470.jpg",
          "available": true
        },
        {
          "id": "mix-fried-rice",
          "name": "Mix Fried Rice",
          "description": "Fragrant rice stir-fried with a delicious mix of chicken, beef, seafood, fresh vegetables, eggs, and savory seasonings.",
          "price": "LKR 1,250",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792141348988-173323132.jpg",
          "available": true
        },
        {
          "id": "veg-fried-rice",
          "name": "Veg Fried Rice",
          "description": "Fragrant rice stir-fried with fresh vegetables, eggs, and savory seasonings for a delicious and satisfying vegetarian meal.",
          "price": "LKR 890",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792141449238-460176765.jpg",
          "available": true
        },
        {
          "id": "nasi-goreng-chicken",
          "name": "Nasi Goreng Chicken",
          "description": "Indonesian-style fried rice tossed with tender chicken, fresh vegetables, eggs, and aromatic spices for a bold, savory flavor.",
          "price": "LKR 1,090",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792141569978-794143124.jpg",
          "available": true
        },
        {
          "id": "nasi-goreng-beef",
          "name": "Nasi Goreng Beef",
          "description": "Indonesian-style fried rice tossed with tender beef, fresh vegetables, eggs, and aromatic spices for a rich, savory flavor.",
          "price": "LKR 1,190",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792141667407-414506683.jpg",
          "available": true
        },
        {
          "id": "nasi-goreng-mix",
          "name": "Nasi Goreng Mix",
          "description": "Indonesian-style fried rice tossed with a delicious mix of chicken, beef, seafood, fresh vegetables, eggs, and aromatic spices for a bold, savory taste.",
          "price": "LKR 1,250",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792141840288-567450067.jpg",
          "available": true
        },
        {
          "id": "arabic-seafood-rice",
          "name": "Arabic Seafood Rice",
          "description": "Aromatic Arabic-style rice infused with traditional spices, topped with a delicious selection of fresh seafood for a rich and flavorful dining experience.",
          "price": "LKR 2,700",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792141942950-218507822.jpg",
          "available": true
        },
        {
          "id": "copsey-rice-chicken",
          "name": "Copsey Rice Chicken",
          "description": "Fragrant, perfectly seasoned rice served with tender chicken, aromatic spices, and rich flavors for a satisfying and delicious meal.",
          "price": "LKR 2,200",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792142019904-367085501.jpg",
          "available": true
        },
        {
          "id": "copsey-rice-mix",
          "name": "Copsey Rice Mix",
          "description": "Fragrant, perfectly seasoned rice served with a delicious mix of chicken, beef, and seafood, infused with aromatic spices for a rich and satisfying meal.",
          "price": "LKR 3,200",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792142113910-257351275.jpg",
          "available": true
        },
        {
          "id": "hong-kong-fried-rice",
          "name": "Hong Kong Fried Rice",
          "description": "Classic Hong Kong-style fried rice tossed with fragrant rice, eggs, fresh vegetables, and savory seasonings for a delicious, flavorful meal.",
          "price": "LKR 1,600",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792142230646-516610141.jpg",
          "available": true
        },
        {
          "id": "singapore-fried-rice",
          "name": "Singapore Fried Rice",
          "description": "Singapore-style fried rice tossed with aromatic spices, eggs, fresh vegetables, and savory seasonings for a vibrant and flavorful meal.",
          "price": "LKR 1,700",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792142361676-174541541.jpg",
          "available": true
        },
        {
          "id": "mongolian-fried-rice",
          "name": "Mongolian Fried Rice",
          "description": "Mongolian-style fried rice tossed with fresh vegetables, eggs, and savory sauces, delivering a rich, smoky flavor with a hint of spice.",
          "price": "LKR 1,800",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792142451952-722191982.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "continental-soup-0b45b4",
      "name": "Soup (Continental)",
      "group": "CONTINENTAL",
      "items": [
        {
          "id": "cream-of-chicken-soup",
          "name": "Cream Of Chicken Soup",
          "description": "A rich and creamy soup prepared with tender chicken, fresh ingredients, and delicate seasonings, offering a smooth texture and comforting flavour in every spoonful.",
          "price": "LKR 700",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791971866282-377767010.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "sri-lankan-kottu-303493",
      "name": "Kottu",
      "group": "SRI LANKAN",
      "items": [
        {
          "id": "beef-kottu",
          "name": "Beef kottu",
          "description": "Ceylon Rotti made with white clour cut into small pieces mix with gravy severed with beef",
          "price": "LKR 1,200",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793170057968-600073526.jpg",
          "available": true
        },
        {
          "id": "chicken-kottu",
          "name": "Chicken kottu",
          "description": "Ceylon Rotti made with white clour cut into small pieces mix with gravy severed with chicken",
          "price": "LKR 1,000",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793170388968-239517535.jpg",
          "available": true
        },
        {
          "id": "egg-kottu",
          "name": "Egg Kottu",
          "description": "A delicious Sri Lankan street-food favorite made with chopped godamba roti, fresh eggs, vegetables, and aromatic spices, stir-fried to perfection for a rich and satisfying taste.",
          "price": "LKR 950",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793184042177-544079616.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "chinese-noodles-32deb0",
      "name": "Noodles",
      "group": "Chinese",
      "items": [
        {
          "id": "chicken-noodles",
          "name": "Chicken Noodles",
          "description": "Stir-fried noodles tossed with tender chicken, fresh vegetables, and savory seasonings for a delicious and satisfying meal.",
          "price": "LKR 990",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792142572038-388867087.jpg",
          "available": true
        },
        {
          "id": "beef-noodles",
          "name": "Beef Noodles",
          "description": "Stir-fried noodles tossed with tender beef, fresh vegetables, and savory sauces for a rich, flavorful, and satisfying meal.",
          "price": "LKR 1,090",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792142654244-696790433.jpg",
          "available": true
        },
        {
          "id": "mix-noodles",
          "name": "Mix Noodles",
          "description": "Stir-fried noodles tossed with a delicious mix of chicken, beef, seafood, fresh vegetables, and savory sauces for a rich and flavorful meal.",
          "price": "LKR 1,590",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792142775014-65281720.jpg",
          "available": true
        },
        {
          "id": "nasi-mix-noodle",
          "name": "Nasi Mix Noodle",
          "description": "Indonesian-style stir-fried noodles combined with a delicious mix of chicken, beef, seafood, fresh vegetables, and aromatic spices for a bold, savory flavor.",
          "price": "LKR 1,750",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792142862980-625214469.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "continental-pizza-0b45cf",
      "name": "Pizza",
      "group": "CONTINENTAL",
      "items": [
        {
          "id": "margherita-pizza",
          "name": "Margherita Pizza",
          "description": "A classic Italian pizza topped with rich tomato sauce, melted mozzarella cheese, and fresh basil, baked to perfection on a golden crust for a deliciously simple and authentic taste.",
          "price": "LKR 990",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791972206279-930452544.jpg",
          "available": true
        },
        {
          "id": "chicken-pizza",
          "name": "Chicken Pizza",
          "description": "A delicious pizza topped with tender chicken, rich tomato sauce, melted mozzarella cheese, and a blend of fresh vegetables and aromatic herbs, baked to perfection on a golden, crispy crust.",
          "price": "LKR 1,200",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791972563913-985105676.jpg",
          "available": true
        },
        {
          "id": "mushroom-pizza",
          "name": "Mushroom Pizza",
          "description": "A delicious pizza topped with fresh mushrooms, rich tomato sauce, melted mozzarella cheese, and aromatic herbs, baked to perfection on a golden crust for a savoury and satisfying taste.",
          "price": "LKR 1,300",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791972843167-841689193.jpg",
          "available": true
        },
        {
          "id": "diavola-pizza",
          "name": "Diavola Pizza",
          "description": "A bold and spicy Italian-style pizza topped with zesty tomato sauce, melted mozzarella cheese, spicy salami, and aromatic herbs, baked to perfection on a crispy golden crust for a rich and fiery flavour.",
          "price": "LKR 1,700",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791973204930-556171913.jpg",
          "available": true
        },
        {
          "id": "beef-pizza",
          "name": "Beef Pizza",
          "description": "A delicious pizza topped with tender, flavourful beef, rich tomato sauce, melted mozzarella cheese, and aromatic herbs, baked to perfection on a golden crust for a rich and satisfying taste.",
          "price": "LKR 1,800",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791973416616-909869176.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "tandoori-roasted-32c73b",
      "name": "Roasted",
      "group": "Tandoori",
      "items": [
        {
          "id": "roast-chicken",
          "name": "Roast Chicken",
          "description": "Succulent chicken seasoned with aromatic herbs and spices, slow-roasted to golden perfection for a crispy exterior, tender texture, and rich, savory flavor.",
          "price": "LKR 900",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792135022048-598762043.jpg",
          "available": true
        },
        {
          "id": "tandoori-chicken",
          "name": "Tandoori Chicken",
          "description": "Juicy chicken marinated in yogurt and authentic Indian spices, traditionally roasted in a clay oven to achieve a smoky aroma, vibrant color, and irresistibly tender flavor.",
          "price": "LKR 1,100",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792135173887-936542050.jpg",
          "available": true
        },
        {
          "id": "fry-fish",
          "name": "Fry Fish",
          "description": "Fresh fish seasoned with aromatic spices and fried to golden perfection, delivering a crispy exterior, tender flesh, and a deliciously savory flavor.",
          "price": "LKR 1,520",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792135250058-235986441.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "bun-crispy-submarines-35dfd7",
      "name": "Submarines",
      "group": "Bun & Crispy",
      "items": [
        {
          "id": "chicken-sub",
          "name": "Chicken Sub",
          "description": "Tender, seasoned chicken layered with fresh vegetables, melted cheese, and signature sauces in freshly baked submarine bread for a delicious and satisfying meal.",
          "price": "LKR 1,150",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792148033208-866278331.jpg",
          "available": true
        },
        {
          "id": "crispy-chicken-sub",
          "name": "Crispy Chicken Sub",
          "description": "Golden, crispy chicken layered with fresh vegetables, melted cheese, and signature sauces in freshly baked submarine bread for a crunchy and satisfying bite.",
          "price": "LKR 1,250",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792148094847-898154341.jpg",
          "available": true
        },
        {
          "id": "spicy-chicken-sub",
          "name": "Spicy Chicken Sub",
          "description": "Tender chicken tossed in spicy seasoning, layered with fresh vegetables, melted cheese, and zesty sauces in freshly baked submarine bread for a bold and flavorful bite.",
          "price": "LKR 1,250",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792148168177-549137478.jpg",
          "available": true
        },
        {
          "id": "beef-sub",
          "name": "Beef Sub",
          "description": "Tender, seasoned beef layered with fresh vegetables, melted cheese, and signature sauces in freshly baked submarine bread for a rich and satisfying meal.",
          "price": "LKR 1,300",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792148249230-175103356.jpg",
          "available": true
        },
        {
          "id": "vegetable-sub",
          "name": "Vegetable Sub",
          "description": "Freshly baked submarine bread filled with crisp, fresh vegetables, melted cheese, and signature sauces for a delicious and satisfying vegetarian meal.",
          "price": "LKR 990",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792148321387-592256460.jpg",
          "available": true
        },
        {
          "id": "club-sanwich",
          "name": "Club Sanwich",
          "description": "A classic triple-layered sandwich filled with tender chicken, egg, fresh vegetables, and creamy mayonnaise, served with perfectly toasted bread for a satisfying bite.",
          "price": "LKR 1,400",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792148414847-645661314.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "drinks-water-bottle-35f1e7",
      "name": "Water Bottle",
      "group": "Drinks",
      "items": [
        {
          "id": "water-bottle",
          "name": "Water Bottle",
          "description": "",
          "price": "LKR 130",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792150471253-732962129.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "chinese-devilled-32dec7",
      "name": "Devilled",
      "group": "Chinese",
      "items": [
        {
          "id": "chicken-devilled",
          "name": "chicken Devilled",
          "description": "Tender chicken stir-fried with onions, bell peppers, and spicy sauces, delivering a perfect balance of heat, sweetness, and bold flavors.",
          "price": "LKR 1,100",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792142975118-397192858.jpg",
          "available": true
        },
        {
          "id": "beef-devilled",
          "name": "Beef Devilled",
          "description": "Tender beef tossed with onions, bell peppers, and spicy sauces, delivering a bold, savory flavor with the perfect balance of heat and sweetness.",
          "price": "LKR 1,250",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792143052059-653987230.jpg",
          "available": true
        },
        {
          "id": "prawns-devilled",
          "name": "Prawns Devilled",
          "description": "Juicy prawns stir-fried with onions, bell peppers, and spicy sauces, creating a delicious blend of bold flavors, heat, and sweetness.",
          "price": "LKR 1,550",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792143126801-525841985.jpg",
          "available": true
        },
        {
          "id": "chilly-chicken-devilled",
          "name": "Chilly Chicken Devilled",
          "description": "Tender chicken tossed in a spicy chili sauce with onions and bell peppers, delivering a bold, fiery flavor with a delicious sweet and savory finish.",
          "price": "LKR 1,150",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792143211091-554568213.jpg",
          "available": true
        },
        {
          "id": "garlic-chicken-devilled",
          "name": "Garlic Chicken Devilled",
          "description": "Tender chicken stir-fried with aromatic garlic, onions, bell peppers, and savory sauces for a rich, flavorful dish with a delicious garlic kick.",
          "price": "LKR 1,200",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792143369234-914606768.jpg",
          "available": true
        },
        {
          "id": "chicken-65",
          "name": "Chicken 65",
          "description": "Crispy, spicy fried chicken marinated with aromatic Indian spices, curry leaves, and herbs for a bold, flavorful bite.",
          "price": "LKR 1,350",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792143443879-366567680.jpg",
          "available": true
        },
        {
          "id": "cuttle-fish-devilled",
          "name": "Cuttle Fish Devilled",
          "description": "Tender cuttlefish stir-fried with onions, bell peppers, and spicy sauces, delivering a delicious blend of bold flavors, heat, and sweetness.",
          "price": "LKR 1,450",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792143570269-622996890.jpg",
          "available": true
        },
        {
          "id": "chicken-sweet-sour",
          "name": "Chicken Sweet & Sour",
          "description": "Tender chicken tossed with crisp vegetables in a delicious sweet and tangy sauce, creating the perfect balance of flavors in every bite.",
          "price": "LKR 1,800",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792143663985-775901926.jpg",
          "available": true
        },
        {
          "id": "lemon-chicken",
          "name": "Lemon Chicken",
          "description": "Crispy, tender chicken coated in a zesty lemon sauce, delivering a refreshing citrus flavor with the perfect balance of sweetness and tanginess.",
          "price": "LKR 1,300",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792143774609-958033101.jpg",
          "available": true
        },
        {
          "id": "hot-butter-cuttlefish",
          "name": "Hot Butter Cuttlefish",
          "description": "Crispy cuttlefish tossed in rich, buttery sauce with aromatic spices and a hint of heat for a deliciously creamy and flavorful dish.",
          "price": "LKR 1,900",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792143854952-714409982.jpg",
          "available": true
        },
        {
          "id": "butter-prawns",
          "name": "Butter Prawns",
          "description": "Juicy prawns sautéed in rich butter with aromatic garlic and seasonings, delivering a deliciously creamy texture and irresistible flavor.",
          "price": "LKR 2,100",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792143956136-7114925.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "drinks-mojito-35f200",
      "name": "Mojito",
      "group": "Drinks",
      "items": [
        {
          "id": "passion-mojito",
          "name": "Passion mojito",
          "description": "A refreshing passion fruit mojito blended with zesty lime, fresh mint, and sparkling soda, delivering a perfect balance of sweet and tangy flavors.",
          "price": "LKR 500",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792150550952-965337122.jpg",
          "available": true
        },
        {
          "id": "strawberry-mojito",
          "name": "Strawberry Mojito",
          "description": "A refreshing strawberry mojito blended with sweet strawberries, fresh mint, zesty lime, and sparkling soda for a perfectly balanced fruity taste.",
          "price": "LKR 500",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792150634371-86427959.jpg",
          "available": true
        },
        {
          "id": "lime-mint-mojito",
          "name": "Lime Mint Mojito",
          "description": "A refreshing lime mint mojito blended with zesty lime, fresh mint, and sparkling soda, delivering a crisp, cooling, and invigorating taste.",
          "price": "LKR 500",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792150727406-534793217.jpg",
          "available": true
        },
        {
          "id": "blue-berry-mojito",
          "name": "Blue Berry Mojito",
          "description": "A refreshing blueberry mojito blended with sweet blueberries, fresh mint, zesty lime, and sparkling soda for a vibrant, fruity, and refreshing taste.",
          "price": "LKR 550",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792150842451-802200949.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "continental-pasta-0b45ec",
      "name": "Pasta",
      "group": "CONTINENTAL",
      "items": [
        {
          "id": "chicken-pasta",
          "name": "Chicken Pasta",
          "description": "A delicious pasta dish featuring tender chicken, perfectly cooked pasta, and a rich, flavourful sauce, enhanced with aromatic herbs and a touch of cheese for a satisfying dining experience.",
          "price": "LKR 990",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791974190765-675563754.jpg",
          "available": true
        },
        {
          "id": "chicken-cheese-pasta",
          "name": "Chicken Cheese Pasta",
          "description": "A creamy and delicious pasta dish prepared with tender chicken, perfectly cooked pasta, rich cheese sauce, and aromatic herbs, delivering a smooth, cheesy flavour in every bite.",
          "price": "LKR 1,250",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791974348329-335183070.jpg",
          "available": true
        },
        {
          "id": "beef-pasta",
          "name": "Beef Pasta",
          "description": "A delicious pasta dish featuring tender, flavourful beef tossed with perfectly cooked pasta, a rich savoury sauce, and aromatic herbs for a hearty and satisfying dining experience.",
          "price": "LKR 1,090",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791974482791-608546460.jpg",
          "available": true
        },
        {
          "id": "mix-pasta",
          "name": "Mix Pasta",
          "description": "A delicious combination of perfectly cooked pasta, tender chicken, flavourful beef, fresh vegetables, and a rich, savoury sauce, enhanced with aromatic herbs for a delightful and satisfying dining experience.",
          "price": "LKR 1,590",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1791974666935-368635668.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "bun-crispy-shawarma-wrap-35dfef",
      "name": "Shawarma Wrap",
      "group": "Bun & Crispy",
      "items": [
        {
          "id": "chicken-shawarma",
          "name": "Chicken Shawarma",
          "description": "Tender, marinated chicken wrapped in soft flatbread with fresh vegetables, creamy garlic sauce, and aromatic spices for an authentic Middle Eastern flavor.",
          "price": "LKR 990",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792148493183-73908437.jpg",
          "available": true
        },
        {
          "id": "beef-shawarma",
          "name": "Beef Shawarma",
          "description": "Tender, marinated beef wrapped in soft flatbread with fresh vegetables, creamy garlic sauce, and aromatic spices for a rich and authentic Middle Eastern flavor.",
          "price": "LKR 1,090",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792148574556-260605366.jpg",
          "available": true
        },
        {
          "id": "spicy-shawarma",
          "name": "Spicy Shawarma",
          "description": "Tender, spicy marinated meat wrapped in soft flatbread with fresh vegetables, creamy garlic sauce, and a fiery kick for a bold and flavorful bite.",
          "price": "LKR 1,150",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792148669328-671411871.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "sri-lankan-string-hoppers-kottu-3034c1",
      "name": "String Hoppers Kottu",
      "group": "SRI LANKAN",
      "items": [
        {
          "id": "chicken-string-hoppers-kottu",
          "name": "Chicken  String Hoppers Kottu",
          "description": "Tender chicken, soft string hoppers, fresh vegetables, and aromatic Sri Lankan spices stir-fried together for a delicious and flavourful meal.",
          "price": "LKR 1,000",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793183858354-287191206.jpg",
          "available": true
        },
        {
          "id": "beef-string-hoppers-kottu",
          "name": "Beef String Hoppers Kottu",
          "description": "Tender beef, soft string hoppers, fresh vegetables, and aromatic Sri Lankan spices stir-fried to perfection for a rich, savoury, and satisfying meal.",
          "price": "LKR 1,200",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793183879136-768223176.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "drinks-lassi-35f230",
      "name": "Lassi",
      "group": "Drinks",
      "items": [
        {
          "id": "sweet-lassi",
          "name": "Sweet Lassi",
          "description": "A creamy and refreshing sweet lassi made with smooth yogurt and a touch of sweetness, offering a deliciously rich and satisfying taste.",
          "price": "LKR 490",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792150936322-733517734.jpg",
          "available": true
        },
        {
          "id": "salt-lassi",
          "name": "Salt Lassi",
          "description": "A refreshing salted lassi made with creamy yogurt and a hint of salt, delivering a smooth, savory taste with a cooling finish.",
          "price": "LKR 490",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792151007775-505607648.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "drinks-soft-drinks-35f24a",
      "name": "Soft Drinks",
      "group": "Drinks",
      "items": [
        {
          "id": "pepsi",
          "name": "Pepsi",
          "description": "",
          "price": "LKR 250",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792151060315-908512893.jpg",
          "available": true
        },
        {
          "id": "7up",
          "name": "7Up",
          "description": "",
          "price": "LKR 250",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1792151142472-942791604.jpg",
          "available": true
        }
      ]
    },
    {
      "id": "drinks-hot-drinks-60e899",
      "name": "Hot Drinks",
      "group": "Drinks",
      "items": [
        {
          "id": "chai",
          "name": "Chai",
          "description": "A comforting cup of freshly brewed tea infused with aromatic spices and milk, offering a rich flavour and a soothing finish.",
          "price": "LKR 200",
          "dietary": [],
          "image": "https://prod-api.menupilot.lk/uploads/images/menu-item-1793174249361-559848665.jpg",
          "available": true
        }
      ]
    }
  ]
};
