/**
 * Burgo Reviews Data
 * PLACEHOLDER: Replace with real Google Reviews data when available
 * DO NOT use fake customer names in production
 */

const BURGO_REVIEWS = {
  summary: {
    averageRating: 4.8,
    totalReviews: 127,
    ratingDistribution: {
      5: 89,
      4: 28,
      3: 7,
      2: 2,
      1: 1
    }
  },

  // Sample reviews structure - Replace with real data
  featured: [
    {
      id: 1,
      author: 'Sample Customer 1',
      rating: 5,
      date: '2024-01-15',
      text: 'Amazing food and wonderful atmosphere. The Saivar restaurant section has authentic Sri Lankan flavors.',
      platform: 'google',
      verified: true
    },
    {
      id: 2,
      author: 'Sample Customer 2',
      rating: 5,
      date: '2024-01-10',
      text: 'Best bakery items in Beruwala. Fresh pastries every morning!',
      platform: 'google',
      verified: true
    },
    {
      id: 3,
      author: 'Sample Customer 3',
      rating: 5,
      date: '2024-01-05',
      text: 'Love the shisha lounge ambiance. Great place to relax with friends.',
      platform: 'google',
      verified: true
    },
    {
      id: 4,
      author: 'Sample Customer 4',
      rating: 4,
      date: '2023-12-28',
      text: 'Excellent service and quality food. Highly recommended!',
      platform: 'google',
      verified: true
    }
  ]
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BURGO_REVIEWS };
}
