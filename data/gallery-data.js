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
    { src: 'assets/images/photos/gallery-02.jpg', width: 800, height: 800, layout: '', category: 'interior', caption: 'The dining room', alt: 'Warm dining room tables at Burgo Food Chain' },
    { src: 'assets/images/photos/gallery-03.jpg', width: 800, height: 800, layout: '', category: 'bakery', caption: 'Fresh from the bakery', alt: 'Fresh croissants and pastries from the Burgo bakery' },
    { src: 'assets/images/photos/gallery-04.jpg', width: 800, height: 1000, layout: 'tall', category: 'lounge', caption: 'Iceburg Shisha Lounge', alt: 'Evening atmosphere inside Iceburg Shisha Lounge' },
    { src: 'assets/images/photos/gallery-05.jpg', width: 800, height: 800, layout: '', category: 'food', caption: 'From the kitchen', alt: 'A hot dish plated fresh from the Burgo kitchen' },
    { src: 'assets/images/photos/gallery-06.jpg', width: 1280, height: 720, layout: 'wide', category: 'interior', caption: 'Tables at Saivar Restaurant', alt: 'Dining tables set for guests at Saivar Restaurant' },
    { src: 'assets/images/photos/gallery-07.jpg', width: 800, height: 1000, layout: 'tall', category: 'bakery', caption: 'Coffee and bakes', alt: 'Coffee with fresh bakery treats at Burgo' },
    { src: 'assets/images/photos/gallery-08.jpg', width: 800, height: 800, layout: '', category: 'food', caption: 'Saivar favourites', alt: 'Colourful Saivar Restaurant favourites on a shared platter' },
    { src: 'assets/images/photos/gallery-09.jpg', width: 800, height: 800, layout: '', category: 'lounge', caption: 'Evenings at the lounge', alt: 'Soft evening lighting in the Iceburg lounge' },
    { src: 'assets/images/photos/gallery-10.jpg', width: 800, height: 1000, layout: 'tall', category: 'events', caption: 'Celebrations at Burgo', alt: 'A celebration table set for an event at Burgo' },

    { src: 'assets/images/photos/gallery-11.jpg', width: 800, height: 800, layout: '', category: 'food', caption: 'Kebab platter', alt: 'Sizzling kebab platter with herbs and lemon at Burgo' },
    { src: 'assets/images/photos/gallery-12.jpg', width: 800, height: 800, layout: '', category: 'food', caption: 'Pizza and pasta', alt: 'Fresh pizza and creamy pasta ready to serve at Burgo' },
    { src: 'assets/images/photos/gallery-13.jpg', width: 800, height: 1000, layout: 'tall', category: 'bakery', caption: 'Bakery counter', alt: 'Fresh bread and cakes on the Burgo bakery counter' },
    { src: 'assets/images/photos/gallery-14.jpg', width: 800, height: 800, layout: '', category: 'lounge', caption: 'Lounge details', alt: 'Hookah coals and soft lounge lighting at Iceburg' },
    { src: 'assets/images/photos/gallery-15.jpg', width: 800, height: 1000, layout: 'tall', category: 'interior', caption: 'Warm interiors', alt: 'Wooden feature wall and yellow booth seating inside Burgo' },
    { src: 'assets/images/photos/gallery-16.jpg', width: 800, height: 800, layout: '', category: 'events', caption: 'Gatherings', alt: 'Friends and family sharing a celebration meal at Burgo' },

    { src: 'assets/images/photos/staff/staff-team-chefs.jpg', width: 800, height: 1000, layout: 'tall', category: 'staff', caption: 'Our kitchen team', alt: 'Burgo chefs standing together in uniform' },
    { src: 'assets/images/photos/staff/staff-managers.jpg', width: 1280, height: 720, layout: 'wide', category: 'staff', caption: 'Managers and Director', alt: 'Restaurant managers and director of Burgo Food Chain' },
    { src: 'assets/images/photos/staff/staff-chef-portrait-01.jpg', width: 800, height: 1000, layout: 'tall', category: 'staff', caption: 'Meet the chef', alt: 'Burgo chef seated for a portrait in the dining room' },
    { src: 'assets/images/photos/staff/staff-chef-outdoor-01.jpg', width: 800, height: 1000, layout: 'tall', category: 'staff', caption: 'Chef portrait', alt: 'Burgo chef standing outdoors by the red door' },
    { src: 'assets/images/photos/staff/staff-chef-portrait-02.jpg', width: 800, height: 1000, layout: 'tall', category: 'staff', caption: 'Kitchen leadership', alt: 'Burgo chef in white jacket seated at a table' },
    { src: 'assets/images/photos/staff/staff-chef-outdoor-02.jpg', width: 800, height: 1000, layout: 'tall', category: 'staff', caption: 'On the floor', alt: 'Burgo chef posing outdoors beside the green scooter' }
  ]
};
