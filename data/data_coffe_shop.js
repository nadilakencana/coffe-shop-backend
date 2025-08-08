const menu = [
  // --- Coffee (10 Items) ---
  {
    id: 1,
    name: "Classic Americano",
    slug: "classic-americano",
    description: "Just a straight-up, no-fuss shot of our best espresso topped with hot water. For the purists.",
    price: 25000,
    category: "coffee",
    image: "https://example.com/images/americano.jpg",
    tags: ["classic", "strong", "black-coffee"],
    soldCount: 1200
  },
  {
    id: 2,
    name: "Caramel Cloud Macchiato",
    slug: "caramel-cloud-macchiato",
    description: "A dreamy mix of steamed milk, vanilla, a shot of espresso, and a caramel drizzle on top. It's like a hug in a mug.",
    price: 35000,
    category: "coffee",
    image: "https://example.com/images/caramel-macchiato.jpg",
    tags: ["sweet", "caramel", "creamy"],
    soldCount: 2150
  },
  {
    id: 3,
    name: "Palm Sugar Latte",
    slug: "palm-sugar-latte",
    description: "Our signature espresso with fresh milk and a sweet kick from authentic palm sugar. You can't go wrong with this one.",
    price: 30000,
    category: "coffee",
    image: "https://example.com/images/palm-sugar-latte.jpg",
    tags: ["local-favorite", "sweet", "creamy"],
    soldCount: 3500
  },
  {
    id: 4,
    name: "Vanilla Bean Latte",
    slug: "vanilla-bean-latte",
    description: "Smooth espresso, steamed milk, and a hint of real vanilla bean. Simple, sweet, and always a good idea.",
    price: 32000,
    category: "coffee",
    image: "https://example.com/images/vanilla-latte.jpg",
    tags: ["vanilla", "sweet", "classic"],
    soldCount: 1800
  },
  {
    id: 5,
    name: "Mocha Madness",
    slug: "mocha-madness",
    description: "Rich espresso meets decadent chocolate sauce and steamed milk, topped with whipped cream. It's happiness in a cup.",
    price: 36000,
    category: "coffee",
    image: "https://example.com/images/mocha.jpg",
    tags: ["chocolate", "mocha", "sweet"],
    soldCount: 1550
  },
  {
    id: 6,
    name: "Hazelnut Heaven",
    slug: "hazelnut-heaven",
    description: "A cozy latte with the warm, toasty flavor of hazelnut. Perfect for a rainy day.",
    price: 32000,
    category: "coffee",
    image: "https://example.com/images/hazelnut-latte.jpg",
    tags: ["hazelnut", "nutty", "sweet"],
    soldCount: 1300
  },
  {
    id: 7,
    name: "Flat White",
    slug: "flat-white",
    description: "A perfect balance of strong espresso and velvety steamed milk. Bolder than a latte, smoother than a cappuccino.",
    price: 28000,
    category: "coffee",
    image: "https://example.com/images/flat-white.jpg",
    tags: ["strong", "smooth", "classic"],
    soldCount: 1900
  },
  {
    id: 8,
    name: "Cold Brew Black",
    slug: "cold-brew-black",
    description: "Our coffee steeped overnight for a super smooth, low-acid, and extra-caffeinated kick. Served over ice.",
    price: 30000,
    category: "coffee",
    image: "https://example.com/images/cold-brew.jpg",
    tags: ["cold-brew", "strong", "smooth"],
    soldCount: 2200
  },
  {
    id: 9,
    name: "Salted Caramel Cold Brew",
    slug: "salted-caramel-cold-brew",
    description: "Our signature cold brew with a sweet and savory salted caramel cold foam on top. The best of both worlds.",
    price: 38000,
    category: "coffee",
    image: "https://example.com/images/salted-caramel-cold-brew.jpg",
    tags: ["cold-brew", "sweet", "salted-caramel"],
    soldCount: 2800
  },
  {
    id: 10,
    name: "Affogato",
    slug: "affogato",
    description: "A scoop of premium vanilla ice cream drowned in a hot shot of espresso. Simple, elegant, and delicious.",
    price: 35000,
    category: "coffee",
    image: "https://example.com/images/affogato.jpg",
    tags: ["dessert", "espresso", "sweet"],
    soldCount: 950
  },
  // --- Non-Coffee (7 Items) ---
  {
    id: 11,
    name: "Chocolate Overload",
    slug: "chocolate-overload",
    description: "A super rich and creamy chocolate drink, made with real melted chocolate. Available hot or iced.",
    price: 30000,
    category: "non-coffee",
    image: "https://example.com/images/chocolate.jpg",
    tags: ["chocolate", "creamy", "kids-favorite"],
    soldCount: 1100
  },
  {
    id: 12,
    name: "Kyoto Matcha Latte",
    slug: "kyoto-matcha-latte",
    description: "Earthy and smooth, premium matcha from Kyoto with your choice of steamed milk. A zen moment in a cup.",
    price: 35000,
    category: "non-coffee",
    image: "https://example.com/images/matcha-latte.jpg",
    tags: ["matcha", "earthy", "creamy"],
    soldCount: 1450
  },
  {
    id: 13,
    name: "Strawberry Breeze",
    slug: "strawberry-breeze",
    description: "A refreshing blend of real strawberries, mint, and soda water. Tastes like summer.",
    price: 28000,
    category: "non-coffee",
    image: "https://example.com/images/strawberry-soda.jpg",
    tags: ["fruity", "refreshing", "soda"],
    soldCount: 900
  },
  {
    id: 14,
    name: "Lychee Iced Tea",
    slug: "lychee-iced-tea",
    description: "A tall glass of our freshly brewed black tea, sweetened with lychee syrup and whole lychees.",
    price: 25000,
    category: "non-coffee",
    image: "https://example.com/images/lychee-tea.jpg",
    tags: ["iced-tea", "fruity", "refreshing"],
    soldCount: 1600
  },
  {
    id: 15,
    name: "Red Velvet Latte",
    slug: "red-velvet-latte",
    description: "The iconic flavor of a red velvet cake with a hint of cocoa and cream cheese, turned into a cozy, caffeine-free latte.",
    price: 34000,
    category: "non-coffee",
    image: "https://example.com/images/red-velvet-latte.jpg",
    tags: ["sweet", "creamy", "red-velvet"],
    soldCount: 1250
  },
  {
    id: 16,
    name: "Mango Sunshine Smoothie",
    slug: "mango-sunshine-smoothie",
    description: "A thick and creamy smoothie with sweet mango, a splash of yogurt, and a hint of orange. Pure sunshine.",
    price: 38000,
    category: "non-coffee",
    image: "https://example.com/images/mango-smoothie.jpg",
    tags: ["smoothie", "healthy", "fruity"],
    soldCount: 850
  },
  {
    id: 17,
    name: "Classic English Breakfast Tea",
    slug: "classic-english-breakfast-tea",
    description: "A robust, full-bodied black tea that goes perfectly with a splash of milk. A timeless classic.",
    price: 22000,
    category: "non-coffee",
    image: "https://example.com/images/hot-tea.jpg",
    tags: ["hot-tea", "classic", "black-tea"],
    soldCount: 700
  },
  // --- Snacks (7 Items) ---
  {
    id: 18,
    name: "Truffle Fries",
    slug: "truffle-fries",
    description: "Crispy shoestring fries tossed in truffle oil and topped with grated Parmesan cheese. You can't just have one.",
    price: 35000,
    category: "snack",
    image: "https://example.com/images/truffle-fries.jpg",
    tags: ["savory", "fries", "sharing"],
    soldCount: 2500
  },
  {
    id: 19,
    name: "Spicy Edamame",
    slug: "spicy-edamame",
    description: "Steamed edamame pods tossed with sea salt, garlic, and a spicy chili blend. Healthy yet addictive.",
    price: 28000,
    category: "snack",
    image: "https://example.com/images/edamame.jpg",
    tags: ["healthy", "spicy", "vegan"],
    soldCount: 1300
  },
  {
    id: 20,
    name: "Almond Croissant",
    slug: "almond-croissant",
    description: "A flaky, buttery croissant with a sweet almond paste filling, topped with toasted almonds and powdered sugar.",
    price: 28000,
    category: "snack",
    image: "https://example.com/images/almond-croissant.jpg",
    tags: ["pastry", "sweet", "almond"],
    soldCount: 2900
  },
  {
    id: 21,
    name: "Cinnamon Roll",
    slug: "cinnamon-roll",
    description: "A soft, fluffy, oven-baked cinnamon roll with a generous amount of cream cheese frosting. The ultimate comfort food.",
    price: 30000,
    category: "snack",
    image: "https://example.com/images/cinnamon-roll.jpg",
    tags: ["sweet", "pastry", "cinnamon"],
    soldCount: 2650
  },
  {
    id: 22,
    name: "Triple Cheese Quesadilla",
    slug: "triple-cheese-quesadilla",
    description: "A warm tortilla filled with a melted mix of mozzarella, cheddar, and parmesan cheese. Served with a side of salsa.",
    price: 40000,
    category: "snack",
    image: "https://example.com/images/quesadilla.jpg",
    tags: ["cheese", "savory", "sharing"],
    soldCount: 1100
  },
  {
    id: 23,
    name: "Banana Bread Slice",
    slug: "banana-bread-slice",
    description: "A thick, moist slice of our homemade banana bread, with just the right amount of sweetness. Ask to have it toasted!",
    price: 25000,
    category: "snack",
    image: "https://example.com/images/banana-bread.jpg",
    tags: ["cake", "sweet", "homemade"],
    soldCount: 1950
  },
  {
    id: 24,
    name: "Spicy Chicken Wings",
    slug: "spicy-chicken-wings",
    description: "A bowl of crispy chicken wings tossed in our signature sweet and spicy sauce. Perfect for sharing.",
    price: 45000,
    category: "snack",
    image: "https://example.com/images/chicken-wings.jpg",
    tags: ["savory", "spicy", "chicken"],
    soldCount: 1400
  },
  // --- Main Courses (6 Items) ---
  {
    id: 25,
    name: "Aglio e Olio Pasta",
    slug: "aglio-e-olio-pasta",
    description: "A simple yet delicious pasta dish with garlic, olive oil, chili flakes, and parsley. Add chicken or shrimp if you'd like.",
    price: 55000,
    category: "main-course",
    image: "https://example.com/images/aglio-olio.jpg",
    tags: ["pasta", "savory", "classic"],
    soldCount: 800
  },
  {
    id: 26,
    name: "Creamy Carbonara",
    slug: "creamy-carbonara",
    description: "Spaghetti in a rich and creamy egg-based sauce with smoked beef and a generous amount of Parmesan cheese.",
    price: 65000,
    category: "main-course",
    image: "https://example.com/images/carbonara.jpg",
    tags: ["pasta", "creamy", "cheese"],
    soldCount: 950
  },
  {
    id: 27,
    name: "Classic Cheeseburger",
    slug: "classic-cheeseburger",
    description: "A juicy beef patty with melted cheddar cheese, lettuce, tomato, and our secret sauce in a soft brioche bun. Served with fries.",
    price: 75000,
    category: "main-course",
    image: "https://example.com/images/cheeseburger.jpg",
    tags: ["burger", "beef", "savory"],
    soldCount: 1150
  },
  {
    id: 28,
    name: "Grilled Chicken Steak",
    slug: "grilled-chicken-steak",
    description: "A tender grilled chicken breast served with your choice of mushroom or black pepper sauce, with a side of mashed potatoes and veggies.",
    price: 80000,
    category: "main-course",
    image: "https://example.com/images/chicken-steak.jpg",
    tags: ["chicken", "healthy", "grilled"],
    soldCount: 750
  },
  {
    id: 29,
    name: "Nasi Goreng Special",
    slug: "nasi-goreng-special",
    description: "Our special fried rice with chicken satay, a sunny-side-up egg, and crackers. A complete and satisfying meal.",
    price: 50000,
    category: "main-course",
    image: "https://example.com/images/nasi-goreng.jpg",
    tags: ["fried-rice", "local-favorite", "spicy"],
    soldCount: 1350
  },
  {
    id: 30,
    name: "Fish and Chips",
    slug: "fish-and-chips",
    description: "Crispy battered dory fish served with a side of thick-cut fries and our homemade tartar sauce. A timeless classic.",
    price: 68000,
    category: "main-course",
    image: "https://example.com/images/fish-chips.jpg",
    tags: ["fish", "fried", "savory"],
    soldCount: 850
  }
];

const tables = [
  {
    id: 'T01',
    table_number: 1,
    is_available: true
  },
  {
    id: 'T02',
    table_number: 2,
    is_available: false
  },
  {
    id: 'T03',
    table_number: 3,
    is_available: true
  },
  {
    id: 'T04',
    table_number: 4,
    is_available: true
  },
  {
    id: 'T05',
    table_number: 5,
    is_available: false
  },
  {
    id: 'T06',
    table_number: 6,
    is_available: true
  },
  {
    id: 'T07',
    table_number: 7,
    is_available: false
  },
  {
    id: 'T08',
    table_number: 8,
    is_available: true
  },
  {
    id: 'T09',
    table_number: 9,
    is_available: true
  },
  {
    id: 'T10',
    table_number: 10,
    is_available: false
  }
];

module.exports = { menu, tables };