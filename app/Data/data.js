const data = [
    {
        "id": 1,
        "name": "Xiaomi Mi 11",
        "img": "https://img.freepik.com/premium-photo/silver-phone-with-camera-back_1149286-247.jpg?semt=ais_hybrid",
        "price": 840.2,
        "size": "5.0 inches",
        "reviews": 286,
        "rating": 1.0,
        "description": "A top-of-the-line smartphone with all the latest features for seamless connectivity. Available in various options.",
        "quantity": 1,
        "category": "mobile"
    },
    {
        "id": 2,
        "name": "Orange Juice",
        "img": "https://th.bing.com/th?q=Golden+Circle+Orange+Juice&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247",
        "price": 13.34,
        "size": "842 ml",
        "reviews": 1193,
        "rating": 5.0,
        "description": "Refreshing and thirst-quenching, perfect for any time of day. Available in various options.",
        "quantity": 1,
        "category": "drink"
    },
    {
        "id": 3,
        "name": "Samsung Galaxy S22",
        "img": "https://img.freepik.com/premium-photo/minimalist-mobile-mockup-clean-ui-showcases_483861-157249.jpg?semt=ais_hybrid",
        "price": 743.98,
        "size": "5.5 inches",
        "reviews": 4914,
        "rating": 3.1,
        "description": "A top-of-the-line smartphone with all the latest features for seamless connectivity. Available in various options.",
        "quantity": 1,
        "category": "mobile"
    },
    {
        "id": 4,
        "name": "Pepsi",
        "img": "https://img.freepik.com/premium-photo/pepsi-fire-with-white-background-high-quality-ultra_670382-117970.jpg?ga=GA1.1.341206175.1729570573&semt=ais_hybrid",
        "price": 34.12,
        "size": "275 ml",
        "reviews": 839,
        "rating": 3.2,
        "description": "Refreshing and thirst-quenching, perfect for any time of day. Available in various options.",
        "quantity": 1,
        "category": "drink"
    },
    {
        "id": 5,
        "name": "Jeans",
        "img": "https://th.bing.com/th/id/OIP.Q94wTAMxUuyTkucFiTSUoAAAAA?w=117&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        "price": 132.52,
        "size": "L",
        "reviews": 525,
        "rating": 4.4,
        "description": "Stylish and comfortable, made from high-quality fabrics to enhance your wardrobe. Available in various options.",
        "quantity": 1,
        "category": "dress"
    },
    {
        "id": 6,
        "name": "Noodles",
        "img": "https://img.freepik.com/premium-photo/cup-noodles-is-being-poured-into-cup_860932-21124.jpg?semt=ais_hybrid",
        "price": 32.03,
        "size": "227 grams",
        "reviews": 1792,
        "rating": 2.9,
        "description": "Delicious and fresh, made from high-quality ingredients to satisfy your cravings. Available in various options.",
        "quantity": 1,
        "category": "food"
    },
    {
        "id": 7,
        "name": "Sushi",
        "img": "https://img.freepik.com/free-photo/closeup-shot-delicious-sushi-roll-with-seasonings-white-background_181624-44235.jpg?semt=ais_hybrid",
        "price": 45.05,
        "size": "210 grams",
        "reviews": 1945,
        "rating": 4.9,
        "description": "Delicious and fresh, made from high-quality ingredients to satisfy your cravings. Available in various options.",
        "quantity": 1,
        "category": "food"
    },
    {
        "id": 8,
        "name": "Sandwich",
        "img": "https://img.freepik.com/free-photo/panini-sandwich-with-ham-cheese-tomato-arugula-isolated-white-background_123827-26729.jpg?semt=ais_hybrid",
        "price": 43.73,
        "size": "314 grams",
        "reviews": 3483,
        "rating": 3.9,
        "description": "Delicious and fresh, made from high-quality ingredients to satisfy your cravings. Available in various options.",
        "quantity": 1,
        "category": "food"
    },
    {
        "id": 9,
        "name": "Milkshake",
        "img": "https://img.freepik.com/premium-photo/glass-vanilla-milkshake-with-whipped-cream-isolated-white-background_1165532-78316.jpg?semt=ais_hybrid",
        "price": 33.91,
        "size": "405 ml",
        "reviews": 4363,
        "rating": 1.3,
        "description": "Refreshing and thirst-quenching, perfect for any time of day. Available in various options.",
        "quantity": 1,
        "category": "drink"
    },
    {
        "id": 10,
        "name": "Jacket",
        "img": "https://img.freepik.com/premium-photo/brown-leather-jacket-hanging-hanger-with-white-background_1296140-20.jpg?semt=ais_hybrid",
        "price": 153.92,
        "size": "XL",
        "reviews": 2526,
        "rating": 4.5,
        "description": "Stylish and comfortable, made from high-quality fabrics to enhance your wardrobe. Available in various options.",
        "quantity": 1,
        "category": "dress"
    },
    {
        "id": 11,
        "name": "Pizza",
        "img": "https://img.freepik.com/premium-photo/delicious-pizza-lying-white-background-with-black-olives-around_967812-14803.jpg?semt=ais_hybrid",
        "price": 41.76,
        "size": "349 grams",
        "reviews": 1037,
        "rating": 3.8,
        "description": "Delicious and fresh, made from high-quality ingredients to satisfy your cravings. Available in various options.",
        "quantity": 1,
        "category": "food"
    },
    {
        "id": 12,
        "name": "Burger",
        "img": "https://img.freepik.com/premium-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese-ai-generated_981309-9138.jpg?semt=ais_hybrid",
        "price": 12.67,
        "size": "470 grams",
        "reviews": 519,
        "rating": 4.5,
        "description": "Delicious and fresh, made from high-quality ingredients to satisfy your cravings. Available in various options.",
        "quantity": 1,
        "category": "food"
    },
    {
        "id": 13,
        "name": "Pasta",
        "img": "https://img.freepik.com/premium-photo/plate-pasta-spaghetti-white-background-professional-advertising-food-photo-ai-generated_755721-83142.jpg?semt=ais_hybrid",
        "price": 9.74,
        "size": "119 grams",
        "reviews": 1639,
        "rating": 4.7,
        "description": "Delicious and fresh, made from high-quality ingredients to satisfy your cravings. Available in various options.",
        "quantity": 1,
        "category": "food"
    },
    {
        "id": 14,
        "name": "OnePlus 9",
        "img": "https://img.freepik.com/premium-photo/smartphone-with-blank-screen-isolated-white-background-3d-illustration_1308175-94817.jpg?semt=ais_hybrid",
        "price": 890.72,
        "size": "5.6 inches",
        "reviews": 3118,
        "rating": 2.9,
        "description": "A top-of-the-line smartphone with all the latest features for seamless connectivity. Available in various options.",
        "quantity": 1,
        "category": "mobile"
    },
    {
        "id": 15,
        "name": "Sweater",
        "img": "https://img.freepik.com/premium-photo/blue-knitted-sweater-white-background_999549-56332.jpg?semt=ais_hybrid",
        "price": 45.73,
        "size": "M",
        "reviews": 220,
        "rating": 2.7,
        "description": "Stylish and comfortable, made from high-quality fabrics to enhance your wardrobe. Available in various options.",
        "quantity": 1,
        "category": "dress"
    },
    {
        "id": 16,
        "name": "Google Pixel 7",
        "img": "https://img.freepik.com/free-photo/png-power-bank-isolated-white-background_185193-165523.jpg?semt=ais_hybrid",
        "price": 893.54,
        "size": "5.4 inches",
        "reviews": 351,
        "rating": 4.0,
        "description": "A top-of-the-line smartphone with all the latest features for seamless connectivity. Available in various options.",
        "quantity": 1,
        "category": "mobile"
    },
    {
        "id": 17,
        "name": "Shorts",
        "img": "https://img.freepik.com/premium-photo/pair-red-shorts-with-white-background_1262781-18086.jpg?ga=GA1.1.341206175.1729570573&semt=ais_hybrid",
        "price": 145.56,
        "size": "XXL",
        "reviews": 4341,
        "rating": 4.9,
        "description": "Stylish and comfortable, made from high-quality fabrics to enhance your wardrobe. Available in various options.",
        "quantity": 1,
        "category": "dress"
    },
    {
        "id": 18,
        "name": "iPhone 14",
        "img": "https://img.freepik.com/premium-vector/iphone-14-mockup-isolated-white-background-with-blank-screen_694085-134.jpg?semt=ais_hybrid",
        "price": 246.08,
        "size": "6.1 inches",
        "reviews": 1022,
        "rating": 1.3,
        "description": "A top-of-the-line smartphone with all the latest features for seamless connectivity. Available in various options.",
        "quantity": 1,
        "category": "mobile"
    },
    {
        "id": 19,
        "name": "Coca Cola",
        "img": "https://img.freepik.com/free-photo/fresh-cola-drink-glass_144627-16201.jpg?semt=ais_hybrid",
        "price": 23.55,
        "size": "821 ml",
        "reviews": 2925,
        "rating": 3.1,
        "description": "Refreshing and thirst-quenching, perfect for any time of day. Available in various options.",
        "quantity": 1,
        "category": "drink"
    },
    {
        "id": 20,
        "name": "Coffee",
        "img": "https://img.freepik.com/premium-photo/steaming-hot-cup-aromatic-coffee-with-scattered-roasted-beans-white-background_38013-76851.jpg?semt=ais_hybrid",
        "price": 17.99,
        "size": "884 ml",
        "reviews": 1889,
        "rating": 1.8,
        "description": "Refreshing and thirst-quenching, perfect for any time of day. Available in various options.",
        "quantity": 1,
        "category": "drink"
    },
    {
        "id": 21,
        "name": "Smoothie",
        "img": "https://img.freepik.com/premium-photo/blueberry-milk-shake-tall-glass-white-background-garnished-with-mint-leaves_978588-78417.jpg?semt=ais_hybrid",
        "price": 31.48,
        "size": "890 ml",
        "reviews": 1712,
        "rating": 4.6,
        "description": "Refreshing and thirst-quenching, perfect for any time of day. Available in various options.",
        "quantity": 1,
        "category": "drink"
    },
    {
        "id": 22,
        "name": "Dress",
        "img": "https://img.freepik.com/premium-photo/small-flower-floral-fashion-design-print-dress-with-white-background_95218-3444.jpg?semt=ais_hybrid",
        "price": 122.05,
        "size": "S",
        "reviews": 897,
        "rating": 1.3,
        "description": "Stylish and comfortable, made from high-quality fabrics to enhance your wardrobe. Available in various options.",
        "quantity": 1,
        "category": "dress"
    },
    {
        "id": 23,
        "name": "Salad",
        "img": "https://img.freepik.com/premium-photo/fresh-greek-salad-plate-with-black-olive-tomato-feta-cheese-cucumber-isolated-white-background_123827-3696.jpg?semt=ais_hybrid",
        "price": 8.61,
        "size": "116 grams",
        "reviews": 3680,
        "rating": 1.3,
        "description": "Delicious and fresh, made from high-quality ingredients to satisfy your cravings. Available in various options.",
        "quantity": 1,
        "category": "food"
    },
    {
        "id": 24,
        "name": "Tea",
        "img": "https://img.freepik.com/free-photo/glass-cup-with-tea-white-background-isolated_169016-26579.jpg?semt=ais_hybrid",
        "price": 22.69,
        "size": "211 ml",
        "reviews": 2144,
        "rating": 2.9,
        "description": "Refreshing and thirst-quenching, perfect for any time of day. Available in various options.",
        "quantity": 1,
        "category": "drink"
    },
    {
        "id": 25,
        "name": "T-shirt",
        "img": "https://img.freepik.com/premium-photo/white-t-shirt-with-white-t-shirt-that-says-t-shirt_1357770-334.jpg?semt=ais_hybrid",
        "price": 85.43,
        "size": "XXL",
        "reviews": 2381,
        "rating": 4.7,
        "description": "Stylish and comfortable, made from high-quality fabrics to enhance your wardrobe. Available in various options.",
        "quantity": 1,
        "category": "dress"
    }
]
export default data;