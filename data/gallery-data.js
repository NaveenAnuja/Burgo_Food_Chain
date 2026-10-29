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
    { id: 'events', label: 'Events' }
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
    { src: 'assets/images/photos/gallery-10.jpg', width: 800, height: 1000, layout: 'tall', category: 'events', caption: 'Celebrations at Burgo', alt: 'A celebration table set for an event at Burgo' }
  ]
};
