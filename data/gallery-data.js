/**
 * Burgo Food Chain — Gallery data (gallery.html)
 *
 * All images are PLACEHOLDERS. Replace `src` with official Burgo photos
 * (WebP, ~1600px on the long edge) and update `alt` to describe each photo.
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
    { src: 'assets/images/placeholders/gallery-01.svg', width: 800, height: 1000, layout: 'tall', category: 'food', caption: 'Signature plates', alt: 'Placeholder for a photo of signature plates' },
    { src: 'assets/images/placeholders/gallery-02.svg', width: 800, height: 800, layout: '', category: 'interior', caption: 'The dining room', alt: 'Placeholder for a photo of the dining room' },
    { src: 'assets/images/placeholders/gallery-03.svg', width: 800, height: 800, layout: '', category: 'bakery', caption: 'Fresh from the bakery', alt: 'Placeholder for a photo of bakery items' },
    { src: 'assets/images/placeholders/gallery-04.svg', width: 800, height: 1000, layout: 'tall', category: 'lounge', caption: 'Iceburg Shisha Lounge', alt: 'Placeholder for a photo of Iceburg Shisha Lounge' },
    { src: 'assets/images/placeholders/gallery-05.svg', width: 800, height: 800, layout: '', category: 'food', caption: 'From the kitchen', alt: 'Placeholder for a food photo' },
    { src: 'assets/images/placeholders/gallery-06.svg', width: 800, height: 800, layout: 'wide', category: 'interior', caption: 'Tables at Saivar Restaurant', alt: 'Placeholder for a photo of Saivar Restaurant tables' },
    { src: 'assets/images/placeholders/gallery-07.svg', width: 800, height: 1000, layout: 'tall', category: 'bakery', caption: 'Coffee and bakes', alt: 'Placeholder for a photo of coffee and bakery items' },
    { src: 'assets/images/placeholders/gallery-08.svg', width: 800, height: 800, layout: '', category: 'food', caption: 'Saivar favourites', alt: 'Placeholder for a photo of Saivar Restaurant dishes' },
    { src: 'assets/images/placeholders/gallery-09.svg', width: 800, height: 800, layout: '', category: 'lounge', caption: 'Evenings at the lounge', alt: 'Placeholder for a photo of the lounge in the evening' },
    { src: 'assets/images/placeholders/gallery-10.svg', width: 800, height: 1000, layout: 'tall', category: 'events', caption: 'Celebrations at Burgo', alt: 'Placeholder for a photo of an event at Burgo' }
  ]
};
