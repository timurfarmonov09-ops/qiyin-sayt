// Test ma'lumotlar - MongoDB bo'lmasa ham ishlaydi
const sampleFoods = [
  {
    _id: '1',
    name: 'Osh',
    description: 'An\'anaviy o\'zbek taomi, go\'sht va sabzavotlar bilan',
    price: 25000,
    category: 'Milliy taomlar',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '2',
    name: 'Lag\'mon',
    description: 'Qo\'l tortmasi va go\'sht bilan tayyorlangan',
    price: 22000,
    category: 'Milliy taomlar',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '3',
    name: 'Manti',
    description: 'Bug\'da pishirilgan go\'shtli manti',
    price: 18000,
    category: 'Milliy taomlar',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '4',
    name: 'Shashlik',
    description: 'Cho\'g\'da pishirilgan mol go\'shti',
    price: 30000,
    category: 'Milliy taomlar',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '5',
    name: 'Somsa',
    description: 'Tandir somsasi go\'sht va piyoz bilan',
    price: 8000,
    category: 'Milliy taomlar',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '6',
    name: 'No\'xat sho\'rva',
    description: 'No\'xat va go\'shtdan tayyorlangan issiq sho\'rva',
    price: 15000,
    category: 'Milliy taomlar',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '7',
    name: 'Burger',
    description: 'Klassik burger pomidor va salat bilan',
    price: 20000,
    category: 'Fast food',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '8',
    name: 'Cheeseburger',
    description: 'Ikki qavat go\'sht va pishloq bilan',
    price: 25000,
    category: 'Fast food',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '9',
    name: 'Pizza Margarita',
    description: 'Klassik italyan pitsasi pomidor va pishloq bilan',
    price: 35000,
    category: 'Fast food',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '10',
    name: 'Pizza Pepperoni',
    description: 'Pepperoni kolbasa va pishloq bilan',
    price: 40000,
    category: 'Fast food',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '11',
    name: 'Hot Dog',
    description: 'Sosiska, sous va sabzavotlar bilan',
    price: 12000,
    category: 'Fast food',
    image: 'https://images.unsplash.com/photo-1612392062798-2dbaa2c2c993?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '12',
    name: 'French Fries',
    description: 'Xrustkor kartoshka fri',
    price: 10000,
    category: 'Fast food',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '13',
    name: 'Sezar salati',
    description: 'Tovuq go\'shti, salat va sezar sousi bilan',
    price: 18000,
    category: 'Salatlar',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '14',
    name: 'Yunon salati',
    description: 'Yangi sabzavotlar va feta pishloq bilan',
    price: 16000,
    category: 'Salatlar',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '15',
    name: 'Achiq-chuchuk',
    description: 'Pomidor, piyoz va ko\'k o\'tlar bilan',
    price: 12000,
    category: 'Salatlar',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '16',
    name: 'Olivye',
    description: 'Klassik rus salati',
    price: 14000,
    category: 'Salatlar',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '17',
    name: 'Sushi Set',
    description: 'Turli xil sushi va rolllar to\'plami',
    price: 45000,
    category: 'Yapon taomlar',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '18',
    name: 'Ramen',
    description: 'Yapon sho\'rvasi tovuq va tuxum bilan',
    price: 28000,
    category: 'Yapon taomlar',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '19',
    name: 'Pasta Carbonara',
    description: 'Italyan pastasi qaymoq va bekon bilan',
    price: 24000,
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '20',
    name: 'Pasta Bolognese',
    description: 'Go\'shtli sous bilan italyan pastasi',
    price: 26000,
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '21',
    name: 'Steak',
    description: 'Mol go\'shtidan tayyorlangan bifshteks',
    price: 50000,
    category: 'Grill',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '22',
    name: 'Tovuq grill',
    description: 'Grilda pishirilgan tovuq',
    price: 32000,
    category: 'Grill',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '23',
    name: 'Baliq grill',
    description: 'Yangi baliq grilda pishirilgan',
    price: 38000,
    category: 'Grill',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '24',
    name: 'Pancake',
    description: 'Asal va mevalar bilan',
    price: 15000,
    category: 'Shirinliklar',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    available: true
  }
];

const sampleDrinks = [
  {
    _id: '1',
    name: 'Qora choy',
    price: 5000,
    type: 'hot',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '2',
    name: 'Ko\'k choy',
    price: 6000,
    type: 'hot',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '3',
    name: 'Espresso',
    price: 8000,
    type: 'hot',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '4',
    name: 'Americano',
    price: 9000,
    type: 'hot',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '5',
    name: 'Cappuccino',
    price: 10000,
    type: 'hot',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '6',
    name: 'Latte',
    price: 11000,
    type: 'hot',
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '7',
    name: 'Hot Chocolate',
    price: 12000,
    type: 'hot',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '8',
    name: 'Cola',
    price: 7000,
    type: 'cold',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '9',
    name: 'Fanta',
    price: 7000,
    type: 'cold',
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '10',
    name: 'Sprite',
    price: 7000,
    type: 'cold',
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '11',
    name: 'Sharbat',
    price: 6000,
    type: 'cold',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '12',
    name: 'Limonad',
    price: 8000,
    type: 'cold',
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9d?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '13',
    name: 'Fresh Orange',
    price: 10000,
    type: 'cold',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '14',
    name: 'Fresh Apple',
    price: 10000,
    type: 'cold',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '15',
    name: 'Smoothie',
    price: 12000,
    type: 'cold',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '16',
    name: 'Milkshake',
    price: 13000,
    type: 'cold',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '17',
    name: 'Ice Coffee',
    price: 11000,
    type: 'cold',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop',
    available: true
  },
  {
    _id: '18',
    name: 'Mojito',
    price: 14000,
    type: 'cold',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop',
    available: true
  }
];

module.exports = { sampleFoods, sampleDrinks };
