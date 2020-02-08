import deliveryRestaurantsIcon from './assets/images/category_1.png';

const path = [
  {
    title: 'Home',
    href: 'https://www.zomato.com/',
  },
  {
    title: 'India',
    href: 'https://www.zomato.com/india',
  },
  {
    title: 'Mumbai Restaurants',
    href: 'https://www.zomato.com/mumbai/delivery',
  },
];

const filterState = {
  sortBy: [
    {
      title: 'Popularity',
      sub: 'high to low',
    },
    {
      title: 'Rating',
      sub: 'high to low',
    },
    {
      title: 'Cost',
      sub: 'high to low',
    },
    {
      title: 'Cost',
      sub: 'low to high',
    },
    {
      title: 'Recently Added',
      sub: 'new to old',
    },
  ],
  category: [
    {
      title: 'Delivery',
      count: 16717,
    },
    {
      title: 'Dine-out',
      count: 16717,
    },
    {
      title: 'Drink & Nightlife',
      count: 407,
    },
    {
      title: 'Cafes',
      count: 1065,
    },
  ],
  location: [
    {
      title: 'Western Suburbs',
      count: 7944,
    },
    {
      title: 'Navi Mumbai',
      count: 3564,
    },
    {
      title: 'Central Mumbai',
      count: 3365,
    },
    {
      title: 'South Mumbai',
      count: 1065,
    },
    {
      title: 'Thane',
      count: 1917,
    },
    {
      title: 'Thane Suburbs',
      count: 1738,
    },
    {
      title: 'Andheri East',
      count: 1402,
    },
  ],
  cuisine: [
    {
      title: 'North Indian',
      count: 9544,
    },
    {
      title: 'Chinese',
      count: 9152,
    },
    {
      title: 'Fast Food',
      count: 7476,
    },
    {
      title: 'Desserts',
      count: 3904,
    },
    {
      title: 'Beverages',
      count: 3567,
    },
    {
      title: 'South Indian',
      count: 2738,
    },
    {
      title: 'Mughlai',
      count: 2071,
    },
    {
      title: 'Biryani',
      count: 1900,
    },
    {
      title: 'Street Food',
      count: 1780,
    },
  ],
  establishment: [
    {
      title: 'Quick Bites',
      count: 9044,
    },
    {
      title: 'Casual Dining',
      count: 4979,
    },
    {
      title: 'Dessert Parlor',
      count: 2320,
    },
    {
      title: 'Bakeries',
      count: 1904,
    },
    {
      title: 'Cafes',
      count: 791,
    },
    {
      title: 'Bars',
      count: 638,
    },
    {
      title: 'Beverage Shops',
      count: 476,
    },
    {
      title: 'Sweet Shops',
      count: 402,
    },
    {
      title: 'Food Courts',
      count: 279,
    },
    {
      title: 'Kiosks',
      count: 150,
    },
  ],
  costForTwo: [
    {
      title: 'Less than ₹250',
      count: 3784,
    },
    {
      title: '₹250 to  ₹500',
      count: 11979,
    },
    {
      title: '₹500 to ₹1,000',
      count: 8095,
    },
    {
      title: '₹1,000 to ₹1,500',
      count: 1904,
    },
    {
      title: '₹1,500 to ₹2,500',
      count: 891,
    },
    {
      title: '₹2,500 +',
      count: 46,
    },
  ],
  restaurantsOffer: ['Promotions'],
  moreFilters: [
    'Open at 2:55 PM',
    'Alcohol served',
    'Pure veg',
    'Credit cards',
    'Buffet',
    'Happy hours',
    'Wifi',
    'Alcohol not served',
    'Sunday Brunch',
    'Dessert and Bakes',
    'Luxury Dining',
    'Outdoor seating',
    'Wheelchair Access',
    'Sneekpeek',
  ],
};

const SAP = {
  deliveryRestaurants: {
    title: 'Delivery Restaurants',
    subtitle: 'Get food delivered',
    icon: deliveryRestaurantsIcon,
    hotels: [
      {
        title: 'Meraki',
        subtitle: 'SANTACRUZ EAST, MUMBAI Taste to die for!',
        rating: '4.0',
        image: `https://source.unsplash.com/120x120/?food,${Math.random(1000)}`,
      },
      {
        title: 'Radha Krishna',
        subtitle: 'MAJIWADA, THANE WEST, THANE Order Now !',
        rating: '3.4',
        image: `https://source.unsplash.com/120x120/?food,${Math.random(1000)}`,
      },
      {
        title: 'Bikkgane Briyani',
        subtitle:
          'VIKHROLI, MUMBAI Taste of Hyderbadi Biryani at your doorstep!',
        rating: '4.3',
        image: `https://source.unsplash.com/120x120/?food,${Math.random(1000)}`,
      },
      {
        title: 'Subway',
        subtitle: 'MAHAKALI, MUMBAI Best Sub',
        rating: '3.7',
        image: `https://source.unsplash.com/120x120/?food,${Math.random(1000)}`,
      },
      {
        title: 'The Chinese Food Co',
        subtitle:
          'ANDHERI LOKHANDWALA, ANDHERI WEST Order now for authentic chinese food in town!',
        rating: '4.4',
        image: `https://source.unsplash.com/120x120/?food,${Math.random(1000)}`,
      },
      {
        title: 'Lazeez-Good Mood Food',
        subtitle: 'KASARVADAVLI,THANE WEST,THANE Order Food Now',
        rating: '4.0',
        image: `https://source.unsplash.com/120x120/?food,${Math.random(1000)}`,
      },
    ],
  },
};
export { path, filterState, SAP };
