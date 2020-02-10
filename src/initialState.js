import deliveryRestaurantsIcon from './assets/images/category_1.png';
import dineOutIcon from './assets/images/category_3.png';
import cafeIcon from './assets/images/category_6.png';
import iceCreamIcon from './assets/images/category_8.png';
import pubBarIcon from './assets/images/category_9.png';
import randomImageUrl from './util';

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
        image: randomImageUrl(),
      },
      {
        title: 'Radha Krishna',
        subtitle: 'MAJIWADA, THANE WEST, THANE Order Now !',
        rating: '3.4',
        image: randomImageUrl(),
      },
      {
        title: 'Bikkgane Briyani',
        subtitle:
          'VIKHROLI, MUMBAI Taste of Hyderbadi Biryani at your doorstep!',
        rating: '4.3',
        image: randomImageUrl(),
      },
      {
        title: 'Subway',
        subtitle: 'MAHAKALI, MUMBAI Best Sub',
        rating: '3.7',
        image: randomImageUrl(),
      },
      {
        title: 'The Chinese Food Co',
        subtitle:
          'ANDHERI LOKHANDWALA, ANDHERI WEST Order now for authentic chinese food in town!',
        rating: '4.4',
        image: randomImageUrl(),
      },
      {
        title: 'Lazeez-Good Mood Food',
        subtitle: 'KASARVADAVLI,THANE WEST,THANE Order Food Now',
        rating: '4.0',
        image: randomImageUrl(),
      },
    ],
  },
  dineOut: {
    title: 'Dine-out restaurants',
    subtitle: 'Go out for a meal',
    icon: dineOutIcon,
    hotels: [
      {
        title: 'Meraki',
        subtitle: 'SANTACRUZ EAST, MUMBAI Taste to die for!',
        rating: 'NEW',
        image: randomImageUrl(),
      },
      {
        title: 'Radha Krishna',
        subtitle: 'MAJIWADA, THANE WEST, THANE Order Now !',
        rating: '3.4',
        image: randomImageUrl(),
      },
      {
        title: 'Bikkgane Briyani',
        subtitle:
          'VIKHROLI, MUMBAI Taste of Hyderbadi Biryani at your doorstep!',
        rating: '4.3',
        image: randomImageUrl(),
      },
      {
        title: 'Subway',
        subtitle: 'MAHAKALI, MUMBAI Best Sub',
        rating: '3.7',
        image: randomImageUrl(),
      },
      {
        title: 'The Chinese Food Co',
        subtitle:
          'ANDHERI LOKHANDWALA, ANDHERI WEST Order now for authentic chinese food in town!',
        rating: '4.4',
        image: randomImageUrl(),
      },
      {
        title: 'Lazeez-Good Mood Food',
        subtitle: 'KASARVADAVLI,THANE WEST,THANE Order Food Now',
        rating: '4.0',
        image: randomImageUrl(),
      },
    ],
  },
  cafe: {
    title: 'Cafes',
    subtitle: 'Coffee, snacks & beverages',
    icon: cafeIcon,
    hotels: [
      {
        title: 'Meraki',
        subtitle: 'SANTACRUZ EAST, MUMBAI Taste to die for!',
        rating: 'NEW',
        image: randomImageUrl(),
      },
      {
        title: 'Radha Krishna',
        subtitle: 'MAJIWADA, THANE WEST, THANE Order Now !',
        rating: '3.4',
        image: randomImageUrl(),
      },
      {
        title: 'Bikkgane Briyani',
        subtitle:
          'VIKHROLI, MUMBAI Taste of Hyderbadi Biryani at your doorstep!',
        rating: '4.3',
        image: randomImageUrl(),
      },
      {
        title: 'Subway',
        subtitle: 'MAHAKALI, MUMBAI Best Sub',
        rating: '3.7',
        image: randomImageUrl(),
      },
      {
        title: 'The Chinese Food Co',
        subtitle:
          'ANDHERI LOKHANDWALA, ANDHERI WEST Order now for authentic chinese food in town!',
        rating: '4.4',
        image: randomImageUrl(),
      },
      {
        title: 'Lazeez-Good Mood Food',
        subtitle: 'KASARVADAVLI,THANE WEST,THANE Order Food Now',
        rating: '4.0',
        image: randomImageUrl(),
      },
    ],
  },
  iceCream: {
    title: 'Cakes, ice cream & bakery',
    subtitle: 'Satisfy your sweet tooth',
    icon: iceCreamIcon,
    hotels: [
      {
        title: 'Meraki',
        subtitle: 'SANTACRUZ EAST, MUMBAI Taste to die for!',
        rating: 'NEW',
        image: randomImageUrl(),
      },
      {
        title: 'Radha Krishna',
        subtitle: 'MAJIWADA, THANE WEST, THANE Order Now !',
        rating: '3.4',
        image: randomImageUrl(),
      },
      {
        title: 'Bikkgane Briyani',
        subtitle:
          'VIKHROLI, MUMBAI Taste of Hyderbadi Biryani at your doorstep!',
        rating: '4.3',
        image: randomImageUrl(),
      },
      {
        title: 'Subway',
        subtitle: 'MAHAKALI, MUMBAI Best Sub',
        rating: '3.7',
        image: randomImageUrl(),
      },
      {
        title: 'The Chinese Food Co',
        subtitle:
          'ANDHERI LOKHANDWALA, ANDHERI WEST Order now for authentic chinese food in town!',
        rating: '4.4',
        image: randomImageUrl(),
      },
      {
        title: 'Lazeez-Good Mood Food',
        subtitle: 'KASARVADAVLI,THANE WEST,THANE Order Food Now',
        rating: '4.0',
        image: randomImageUrl(),
      },
    ],
  },
  pubBar: {
    title: 'Pubs, bars & party spots',
    subtitle: 'Enjoy the nightlife',
    icon: pubBarIcon,
    hotels: [
      {
        title: 'Meraki',
        subtitle: 'SANTACRUZ EAST, MUMBAI Taste to die for!',
        rating: 'NEW',
        image: randomImageUrl(),
      },
      {
        title: 'Radha Krishna',
        subtitle: 'MAJIWADA, THANE WEST, THANE Order Now !',
        rating: '3.4',
        image: randomImageUrl(),
      },
      {
        title: 'Bikkgane Briyani',
        subtitle:
          'VIKHROLI, MUMBAI Taste of Hyderbadi Biryani at your doorstep!',
        rating: '4.3',
        image: randomImageUrl(),
      },
      {
        title: 'Subway',
        subtitle: 'MAHAKALI, MUMBAI Best Sub',
        rating: '3.7',
        image: randomImageUrl(),
      },
      {
        title: 'The Chinese Food Co',
        subtitle:
          'ANDHERI LOKHANDWALA, ANDHERI WEST Order now for authentic chinese food in town!',
        rating: '4.4',
        image: randomImageUrl(),
      },
      {
        title: 'Lazeez-Good Mood Food',
        subtitle: 'KASARVADAVLI,THANE WEST,THANE Order Food Now',
        rating: '4.0',
        image: randomImageUrl(),
      },
    ],
  },
};
const restaurants = [
  {
    mainImg: 'https://b.zmtcdn.com/data/pictures/chains/7/46577/8b503cd43b786fc3be3dfa40fc3a2ca3_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
    isSponsored: true,
    types: ['Dine'],
    name: 'Meraki',
    miniLocation: 'Powai',
    rating: '4.2',
    votes: 2001,
    address: 'ANDHERI LOKHANDWALA, ANDHERI WEST',
    moreDetails: [
      {
        key: 'CUISINES',
        value: 'American, Mediterranean, Italian, European',
      },
      {
        key: 'COST FOR TWO',
        value: '₹3,500',
      },
      {
        key: 'HOURS',
        value: '8pm – 1am (Mon-Fri),12:30pm – 3:30pm, 8pm –...',
      },
      {
        key: 'FEATURED IN',
        value: 'Romantic',
      },
    ],
    availableActions: [
      {
        action: 'Call',
        icon: 'call',
      },
      {
        action: 'View Menu',
        icon: 'book',
      },
      {
        action: 'Book a Table',
        icon: 'calendar_today',
        textColor: '#00AACD',
      },
      {
        action: 'Order',
        icon: 'shopping_cart',
        textColor: 'white',
        bgColor: '#099E44',
      },
    ],
    hasOutlet: true,
    outlets: [
      {
        location: 'Airport',
        outletImg: randomImageUrl('hotel'),
      },
      {
        location: 'Railway Road',
        outletImg: randomImageUrl('hotel'),
      },
    ],
    noOfOutlets: 11,
  },
  {
    mainImg: randomImageUrl(),
    isSponsored: true,
    types: ['Dine'],
    name: 'Meraki',
    miniLocation: 'Powai',
    rating: '4.2',
    votes: 2001,
    address: 'ANDHERI LOKHANDWALA, ANDHERI WEST',
    moreDetails: [
      {
        key: 'CUISINES',
        value: 'American, Mediterranean, Italian, European',
      },
      {
        key: 'COST FOR TWO',
        value: '₹3,500',
      },
      {
        key: 'HOURS',
        value: '8pm – 1am (Mon-Fri),12:30pm – 3:30pm, 8pm –...',
      },
      {
        key: 'FEATURED IN',
        value: 'Romantic',
      },
    ],
    availableActions: [
      {
        action: 'Call',
        icon: 'call',
      },
      {
        action: 'View Menu',
        icon: 'book',
      },
      {
        action: 'Book a Table',
        icon: 'calendar_today',
        textColor: '#00AACD',
      },
      {
        action: 'Order',
        icon: 'shopping_cart',
        textColor: 'white',
        bgColor: '#099E44',
      },
    ],
    hasOutlet: true,
    outlets: [
      {
        location: 'Airport',
        outletImg: randomImageUrl('hotel'),
      },
      {
        location: 'Railway Road',
        outletImg: randomImageUrl('hotel'),
      },
    ],
    noOfOutlets: 11,
  },
  {
    mainImg: randomImageUrl(),
    isSponsored: false,
    types: ['Dine'],
    name: 'Meraki',
    miniLocation: 'Powai',
    rating: '4.2',
    votes: 2001,
    address: 'ANDHERI LOKHANDWALA, ANDHERI WEST',
    moreDetails: [
      {
        key: 'CUISINES',
        value: 'American, Mediterranean, Italian, European',
      },
      {
        key: 'COST FOR TWO',
        value: '₹3,500',
      },
      {
        key: 'HOURS',
        value: '8pm – 1am (Mon-Fri),12:30pm – 3:30pm, 8pm –...',
      },
      {
        key: 'FEATURED IN',
        value: 'Romantic',
      },
    ],
    availableActions: [
      {
        action: 'Call',
        icon: 'call',
      },
      {
        action: 'View Menu',
        icon: 'book',
      },
      {
        action: 'Book a Table',
        icon: 'calendar_today',
        textColor: '#00AACD',
      },
      {
        action: 'Order',
        icon: 'shopping_cart',
        textColor: 'white',
        bgColor: '#099E44',
      },
    ],
    hasOutlet: false,
  },
  {
    mainImg: randomImageUrl(),
    isSponsored: true,
    types: ['Dine'],
    name: 'Donut',
    miniLocation: 'Powai',
    rating: '4.5',
    votes: 2021,
    address: 'LOKHANDWALA, ANDHERI WEST',
    moreDetails: [
      {
        key: 'CUISINES',
        value: 'American, Mediterranean, Italian, European',
      },
      {
        key: 'COST FOR TWO',
        value: '₹3,500',
      },
      {
        key: 'HOURS',
        value: '8pm – 1am (Mon-Fri),12:30pm – 3:30pm, 8pm –...',
      },
      {
        key: 'FEATURED IN',
        value: 'Romantic',
      },
    ],
    availableActions: [
      {
        action: 'Call',
        icon: 'call',
      },
      {
        action: 'View Menu',
        icon: 'book',
      },
      {
        action: 'Order',
        icon: 'shopping_cart',
        textColor: 'white',
        bgColor: '#099E44',
        currentlyNotAvailable: false,
      },
    ],
    hasOutlet: true,
    outlets: [
      {
        location: 'Airport',
        outletImg: randomImageUrl('hotel'),
      },
      {
        location: 'Railway Road',
        outletImg: randomImageUrl('hotel'),
      },
    ],
    noOfOutlets: 11,
  },
  {
    mainImg: randomImageUrl(),
    isSponsored: true,
    types: ['Dine'],
    name: 'Donut',
    miniLocation: 'Powai',
    rating: '4.5',
    votes: 2021,
    address: 'LOKHANDWALA, ANDHERI WEST',
    moreDetails: [
      {
        key: 'CUISINES',
        value: 'American, Mediterranean, Italian, European',
      },
      {
        key: 'COST FOR TWO',
        value: '₹3,500',
      },
      {
        key: 'HOURS',
        value: '8pm – 1am (Mon-Fri),12:30pm – 3:30pm, 8pm –...',
      },
      {
        key: 'FEATURED IN',
        value: 'Romantic',
      },
    ],
    availableActions: [
      {
        action: 'Call',
        icon: 'call',
      },
      {
        action: 'View Menu',
        icon: 'book',
      },
      {
        action: 'Order',
        icon: 'shopping_cart',
        textColor: 'white',
        bgColor: '#099E44',
        currentlyNotAvailable: false,
      },
    ],
    hasOutlet: true,
    outlets: [
      {
        location: 'Airport',
        outletImg: randomImageUrl('hotel'),
      },
      {
        location: 'Railway Road',
        outletImg: randomImageUrl('hotel'),
      },
    ],
    noOfOutlets: 11,
  },
  {
    mainImg: randomImageUrl(),
    isSponsored: true,
    types: ['Dine'],
    name: 'Donut',
    miniLocation: 'Powai',
    rating: '4.5',
    votes: 2021,
    address: 'LOKHANDWALA, ANDHERI WEST',
    moreDetails: [
      {
        key: 'CUISINES',
        value: 'American, Mediterranean, Italian, European',
      },
      {
        key: 'COST FOR TWO',
        value: '₹3,500',
      },
      {
        key: 'HOURS',
        value: '8pm – 1am (Mon-Fri),12:30pm – 3:30pm, 8pm –...',
      },
      {
        key: 'FEATURED IN',
        value: 'Romantic',
      },
    ],
    availableActions: [
      {
        action: 'Call',
        icon: 'call',
      },
      {
        action: 'View Menu',
        icon: 'book',
      },
      {
        action: 'Order',
        icon: 'shopping_cart',
        textColor: 'white',
        bgColor: '#099E44',
        currentlyNotAvailable: false,
      },
    ],
    hasOutlet: true,
    outlets: [
      {
        location: 'Airport',
        outletImg: randomImageUrl('hotel'),
      },
      {
        location: 'Railway Road',
        outletImg: randomImageUrl('hotel'),
      },
    ],
    noOfOutlets: 11,
  },
];
const footerContent = {
  aboutZomato: ['About Us', 'Culture',
    'Blog',
    'Careers',
    'Contact'],
  forFoodies: [
    'Code of Conduct',
    'Community',
    'Verified Users',
    'Blogger Help',
    'Developers',
    'Mobile Apps',
  ],
  forRestaurants: [
    [
      'Add a Restaurant',
      'Claim your Listing',
      'Business App',
      'Business Owner ',
      'Business Blog',
      'Restaurant Widgets',
      'Products for Businesses',
    ],
    ['Advertise',
      'Order',
      'Book',
      'Trace',
      'Hyperpure',

    ],
  ],
  countries: [
    'Australia',
    'Brasil',
    'Canada',
    'Chile',
    'Czech Republic',
    'India',
    'Indonesia',
    'Ireland',
    'Italy',
    'Lebanon',
    'Malaysia',
    'New Zealand',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Singapore',
    'Slovakia',
    'South Africa',
    'Sri Lanka',
    'Turkey',
    'UAE',
    'United Kingdom',
    'United States',
  ],
};

export {
  path, filterState, SAP, restaurants, footerContent,
};
