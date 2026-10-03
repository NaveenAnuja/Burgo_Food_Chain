/**
 * Burgo Food Chain — Menu preview data
 *
 * The live menu, prices and ordering are on MenuPilot (see links.menuPilotUrl in js/config.js).
 * This file only powers the visual preview on the website.
 *
 * SAMPLE DATA: the dishes below are illustrative placeholders, not the verified Burgo menu.
 * When replacing them with real dishes:
 *   - set `isSample` to false (this hides the "sample dishes" note)
 *   - add `price` only when confirmed, e.g. 'LKR 1,250' (omit or use null to hide it)
 *   - add `dietary` labels only when confirmed, e.g. ['Vegetarian']
 *   - swap `image` for a real photo (square, ~800×800, WebP preferred)
 *   - set `available: false` to hide an item without deleting it
 */

const BURGO_MENU = {
  isSample: true,

  categories: [
    {
      id: 'bakery',
      name: 'Bakery',
      items: [
        {
          id: 'croissant',
          name: 'Butter Croissant',
          description: 'Flaky, buttery, golden layers.',
          price: null,
          dietary: [],
          image: 'assets/images/placeholders/menu-bakery-1.svg',
          available: true
        },
        {
          id: 'pastry',
          name: 'Seasonal Pastry',
          description: 'A rotating sweet bake from the counter.',
          price: null,
          dietary: [],
          image: 'assets/images/placeholders/menu-bakery-2.svg',
          available: true
        },
        {
          id: 'sandwich',
          name: 'Bakery Sandwich',
          description: 'Freshly filled bread from the bakery.',
          price: null,
          dietary: [],
          image: 'assets/images/placeholders/menu-bakery-3.svg',
          available: true
        }
      ]
    },
    {
      id: 'saivar',
      name: 'Saivar Restaurant',
      items: [
        {
          id: 'rice-curry',
          name: 'Rice & Curry',
          description: 'Rice served with a selection of curries.',
          price: null,
          dietary: [],
          image: 'assets/images/placeholders/menu-saivar-1.svg',
          available: true
        },
        {
          id: 'kottu',
          name: 'Kottu',
          description: 'Chopped roti tossed on the griddle.',
          price: null,
          dietary: [],
          image: 'assets/images/placeholders/menu-saivar-2.svg',
          available: true
        },
        {
          id: 'fish-curry',
          name: 'Fish Curry',
          description: 'A coastal favourite with rich spices.',
          price: null,
          dietary: [],
          image: 'assets/images/placeholders/menu-saivar-3.svg',
          available: true
        }
      ]
    },
    {
      id: 'drinks',
      name: 'Drinks',
      items: [
        {
          id: 'coffee',
          name: 'Cappuccino',
          description: 'Espresso with steamed, velvety milk.',
          price: null,
          dietary: [],
          image: 'assets/images/placeholders/menu-beverage-1.svg',
          available: true
        },
        {
          id: 'mocktail',
          name: 'Chilled Mocktail',
          description: 'Bright, fruity and served over ice.',
          price: null,
          dietary: [],
          image: 'assets/images/placeholders/menu-beverage-2.svg',
          available: true
        },
        {
          id: 'juice',
          name: 'Fresh Juice',
          description: 'Pressed to order.',
          price: null,
          dietary: [],
          image: 'assets/images/placeholders/menu-beverage-3.svg',
          available: true
        }
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      items: [
        {
          id: 'cake',
          name: 'Chocolate Cake',
          description: 'A rich slice to finish.',
          price: null,
          dietary: [],
          image: 'assets/images/placeholders/menu-dessert-1.svg',
          available: true
        },
        {
          id: 'ice-cream',
          name: 'Ice Cream',
          description: 'Cool scoops for warm evenings.',
          price: null,
          dietary: [],
          image: 'assets/images/placeholders/menu-dessert-2.svg',
          available: true
        }
      ]
    }
  ]
};
