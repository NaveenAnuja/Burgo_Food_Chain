/**
 * Burgo Menu Data
 * Replace this sample data with real menu items from MenuPilot
 */

const BURGO_MENU = {
  categories: [
    {
      id: 'bakery',
      name: 'Bakery',
      description: 'Freshly baked goods made daily',
      icon: '🥐',
      items: [
        {
          id: 'croissant',
          name: 'Classic Croissant',
          description: 'Buttery, flaky French pastry',
          price: 'LKR 350',
          image: 'assets/images/placeholders/menu-bakery-1.jpg',
          tags: ['vegetarian', 'popular'],
          available: true
        },
        {
          id: 'danish',
          name: 'Fruit Danish',
          description: 'Sweet pastry with seasonal fruit',
          price: 'LKR 450',
          image: 'assets/images/placeholders/menu-bakery-2.jpg',
          tags: ['vegetarian'],
          available: true
        },
        {
          id: 'sandwich',
          name: 'Club Sandwich',
          description: 'Triple-decker with chicken, bacon, lettuce',
          price: 'LKR 950',
          image: 'assets/images/placeholders/menu-bakery-3.jpg',
          tags: ['popular'],
          available: true
        }
      ]
    },
    {
      id: 'saivar',
      name: 'Saivar Restaurant',
      description: 'Authentic Sri Lankan cuisine',
      icon: '🍛',
      items: [
        {
          id: 'rice-curry',
          name: 'Traditional Rice & Curry',
          description: 'Rice with assorted curries and accompaniments',
          price: 'LKR 1,250',
          image: 'assets/images/placeholders/menu-saivar-1.jpg',
          tags: ['popular', 'spicy'],
          available: true
        },
        {
          id: 'kottu',
          name: 'Chicken Kottu',
          description: 'Chopped roti with chicken and vegetables',
          price: 'LKR 1,100',
          image: 'assets/images/placeholders/menu-saivar-2.jpg',
          tags: ['popular', 'spicy'],
          available: true
        },
        {
          id: 'seafood-curry',
          name: 'Seafood Curry',
          description: 'Fresh catch of the day in rich coconut curry',
          price: 'LKR 1,850',
          image: 'assets/images/placeholders/menu-saivar-3.jpg',
          tags: ['spicy'],
          available: true
        }
      ]
    },
    {
      id: 'beverages',
      name: 'Beverages',
      description: 'Refreshing drinks and coffee',
      icon: '☕',
      items: [
        {
          id: 'coffee',
          name: 'Cappuccino',
          description: 'Rich espresso with steamed milk',
          price: 'LKR 450',
          image: 'assets/images/placeholders/menu-beverage-1.jpg',
          tags: ['popular'],
          available: true
        },
        {
          id: 'smoothie',
          name: 'Tropical Smoothie',
          description: 'Mango, pineapple, and coconut blend',
          price: 'LKR 650',
          image: 'assets/images/placeholders/menu-beverage-2.jpg',
          tags: ['vegetarian', 'vegan'],
          available: true
        },
        {
          id: 'fresh-juice',
          name: 'Fresh Orange Juice',
          description: 'Freshly squeezed',
          price: 'LKR 550',
          image: 'assets/images/placeholders/menu-beverage-3.jpg',
          tags: ['vegetarian', 'vegan'],
          available: true
        }
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      description: 'Sweet endings',
      icon: '🍰',
      items: [
        {
          id: 'cake',
          name: 'Chocolate Lava Cake',
          description: 'Warm chocolate cake with molten center',
          price: 'LKR 750',
          image: 'assets/images/placeholders/menu-dessert-1.jpg',
          tags: ['popular', 'vegetarian'],
          available: true
        },
        {
          id: 'ice-cream',
          name: 'Artisan Ice Cream',
          description: 'Three scoops of your choice',
          price: 'LKR 650',
          image: 'assets/images/placeholders/menu-dessert-2.jpg',
          tags: ['vegetarian'],
          available: true
        }
      ]
    }
  ],

  // Featured/Popular items
  featured: [
    'croissant',
    'rice-curry',
    'kottu',
    'coffee',
    'cake'
  ]
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BURGO_MENU };
}
