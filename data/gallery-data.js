/**
 * Burgo Food Chain — Gallery data (gallery.html)
 *
 * Photos live under assets/images/photos/.
 *   layout: 'tall' (spans two rows), 'wide' (spans two columns) or '' (single tile)
 */

const BURGO_GALLERY = {
  categories: [
    { id: 'food', label: 'Food' },
    { id: 'bakery', label: 'Bakery' },
    { id: 'lounge', label: 'Lounge' },
    { id: 'interior', label: 'Interiors' },
    { id: 'events', label: 'Events' },
    { id: 'staff', label: 'Staff' }
  ],

  items: [
    { src: 'assets/images/photos/gallery-01.jpg', width: 800, height: 1000, layout: 'tall', category: 'food', caption: 'Signature plates', alt: 'Signature Burgo plates with rice, curry and fresh garnish' },
    { src: 'assets/images/photos/gallery-02.jpg?v=15', width: 1200, height: 886, layout: 'wide', category: 'interior', caption: 'The dining room', alt: 'Yellow booth seating and warm lighting in the Burgo dining room' },
    { src: 'assets/images/photos/gallery-03.jpg', width: 800, height: 800, layout: '', category: 'bakery', caption: 'Fresh from the bakery', alt: 'Fresh croissants and pastries from the Burgo bakery' },
    { src: 'assets/images/photos/gallery-04.jpg?v=14', width: 800, height: 1000, layout: 'tall', category: 'lounge', caption: 'Iceburg evenings', alt: 'Wide view of yellow booths and gold leaf murals in Iceburg Shisha Lounge' },
    { src: 'assets/images/photos/gallery-05.jpg', width: 800, height: 800, layout: '', category: 'food', caption: 'From the kitchen', alt: 'A hot dish plated fresh from the Burgo kitchen' },
    { src: 'assets/images/photos/gallery-06.jpg?v=15', width: 848, height: 1230, layout: 'tall', category: 'interior', caption: 'Seating area', alt: 'Black chairs and gold-trim tables fully visible in front of Burgo wooden wall' },
    { src: 'assets/images/photos/gallery-07.jpg', width: 800, height: 1000, layout: 'tall', category: 'bakery', caption: 'Coffee and bakes', alt: 'Coffee with fresh bakery treats at Burgo' },
    { src: 'assets/images/photos/gallery-08.jpg', width: 800, height: 800, layout: '', category: 'food', caption: 'Saivar favourites', alt: 'Colourful Saivar Restaurant favourites on a shared platter' },
    { src: 'assets/images/photos/gallery-09.jpg?v=14', width: 800, height: 1000, layout: 'tall', category: 'lounge', caption: 'Lounge booths', alt: 'Facing yellow tufted booths and shisha table in Iceburg Lounge' },
    { src: 'assets/images/photos/gallery-11.jpg', width: 800, height: 800, layout: '', category: 'food', caption: 'Kebab platter', alt: 'Sizzling kebab platter with herbs and lemon at Burgo' },
    { src: 'assets/images/photos/gallery-12.jpg', width: 800, height: 800, layout: '', category: 'food', caption: 'Pizza and pasta', alt: 'Fresh pizza and creamy pasta ready to serve at Burgo' },
    { src: 'assets/images/photos/gallery-13.jpg', width: 800, height: 1000, layout: 'tall', category: 'bakery', caption: 'Bakery counter', alt: 'Fresh bread and cakes on the Burgo bakery counter' },
    { src: 'assets/images/photos/gallery-14.jpg?v=14', width: 900, height: 900, layout: '', category: 'lounge', caption: 'Coals and glow', alt: 'Glowing shisha coals and warm lounge light at Iceburg' },
    { src: 'assets/images/photos/gallery-15.jpg', width: 800, height: 1000, layout: 'tall', category: 'interior', caption: 'Warm interiors', alt: 'Wooden feature wall and yellow booth seating inside Burgo' },

    { src: 'assets/images/photos/gallery-10.jpg?v=10', width: 1024, height: 768, layout: '', category: 'events', caption: 'Table talk at Burgo', alt: 'Guests sharing biryani and conversation in yellow booth seating at Burgo' },
    { src: 'assets/images/photos/gallery-16.jpg?v=10', width: 1280, height: 720, layout: 'wide', category: 'events', caption: 'Long-table meetings', alt: 'A large group meeting over lunch at a long Burgo dining table' },
    { src: 'assets/images/photos/gallery-17.jpg?v=10', width: 1024, height: 768, layout: '', category: 'events', caption: 'Working lunch', alt: 'Colleagues talking and eating together at Burgo yellow booth tables' },
    { src: 'assets/images/photos/gallery-18.jpg?v=10', width: 800, height: 800, layout: '', category: 'events', caption: 'Gatherings over food', alt: 'Friends gathered around a Burgo table talking while sharing a meal' },

    { src: 'assets/images/photos/staff/staff-team-chefs.jpg', width: 800, height: 1000, layout: 'tall', category: 'staff', caption: 'Our kitchen team', alt: 'Burgo chefs standing together in uniform' },
    { src: 'assets/images/photos/staff/staff-managers.jpg', width: 1280, height: 720, layout: 'wide', category: 'staff', caption: 'Managers and Director', alt: 'Restaurant managers and director of Burgo Food Chain' },
    { src: 'assets/images/photos/staff/staff-chef-portrait-01.jpg', width: 800, height: 1000, layout: 'tall', category: 'staff', caption: 'Meet the chef', alt: 'Burgo chef seated for a portrait in the dining room' },
    { src: 'assets/images/photos/staff/staff-chef-outdoor-01.jpg', width: 800, height: 1000, layout: 'tall', category: 'staff', caption: 'Chef portrait', alt: 'Burgo chef standing outdoors by the red door' },
    { src: 'assets/images/photos/staff/staff-chef-portrait-02.jpg', width: 800, height: 1000, layout: 'tall', category: 'staff', caption: 'Kitchen leadership', alt: 'Burgo chef in white jacket seated at a table' },
    { src: 'assets/images/photos/staff/staff-chef-outdoor-02.jpg', width: 800, height: 1000, layout: 'tall', category: 'staff', caption: 'On the floor', alt: 'Burgo chef posing outdoors beside the green scooter' }
  ]
};
