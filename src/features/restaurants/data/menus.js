const menus = {
    1: {
        Recommended: [{
                id: 101,
                name: "Chicken Burger",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
                price: 249,
                rating: 4.8,
                veg: false,
            },
            {
                id: 102,
                name: "Cheese Burger",
                image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
                price: 299,
                rating: 4.7,
                veg: false,
            },
        ],

        Drinks: [{
                id: 103,
                name: "Coca Cola",
                image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=500",
                price: 80,
                rating: 4.6,
                veg: true,
            },
            {
                id: 104,
                name: "Cold Coffee",
                image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500",
                price: 140,
                rating: 4.9,
                veg: true,
            },
        ],
    },

    2: {
        Pizzas: [{
                id: 201,
                name: "Margherita Pizza",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
                price: 299,
                rating: 4.8,
                veg: true,
            },
            {
                id: 202,
                name: "Farmhouse Pizza",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
                price: 399,
                rating: 4.7,
                veg: true,
            },
        ],

        Sides: [{
            id: 203,
            name: "Garlic Bread",
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500",
            price: 149,
            rating: 4.6,
            veg: true,
        }, ],
    },

    3: {
        Biryani: [{
                id: 301,
                name: "Chicken Biryani",
                image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d?w=500",
                price: 349,
                rating: 4.9,
                veg: false,
            },
            {
                id: 302,
                name: "Mutton Biryani",
                image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d?w=500",
                price: 449,
                rating: 4.8,
                veg: false,
            },
        ],

        Starters: [{
            id: 303,
            name: "Chicken Tikka",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
            price: 280,
            rating: 4.7,
            veg: false,
        }, ],
    },

    4: {
        Salads: [{
                id: 401,
                name: "Greek Salad",
                image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500",
                price: 199,
                rating: 4.6,
                veg: true,
            },
            {
                id: 402,
                name: "Caesar Salad",
                image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500",
                price: 229,
                rating: 4.5,
                veg: true,
            },
        ],

        Juices: [{
            id: 403,
            name: "Orange Juice",
            image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500",
            price: 120,
            rating: 4.5,
            veg: true,
        }, ],
    },

    5: {
        Noodles: [{
                id: 501,
                name: "Hakka Noodles",
                image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500",
                price: 220,
                rating: 4.7,
                veg: true,
            },
            {
                id: 502,
                name: "Chicken Noodles",
                image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500",
                price: 260,
                rating: 4.8,
                veg: false,
            },
        ],

        Rice: [{
            id: 503,
            name: "Veg Fried Rice",
            image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
            price: 210,
            rating: 4.6,
            veg: true,
        }, ],
    },

    6: {
        Paneer: [{
                id: 601,
                name: "Kadhai Paneer",
                image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500",
                price: 320,
                rating: 4.9,
                veg: true,
            },
            {
                id: 602,
                name: "Shahi Paneer",
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
                price: 340,
                rating: 4.8,
                veg: true,
            },
            {
                id: 603,
                name: "Paneer Butter Masala",
                image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500",
                price: 360,
                rating: 4.9,
                veg: true,
            },
        ],

        Breads: [{
                id: 604,
                name: "Butter Naan",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
                price: 45,
                rating: 4.8,
                veg: true,
            },
            {
                id: 605,
                name: "Garlic Naan",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
                price: 60,
                rating: 4.7,
                veg: true,
            },
            {
                id: 606,
                name: "Tandoori Roti",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
                price: 20,
                rating: 4.7,
                veg: true,
            },
            {
                id: 607,
                name: "Laccha Paratha",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
                price: 65,
                rating: 4.8,
                veg: true,
            },
        ],
    },

    8: {
        Parathas: [{
                id: 801,
                name: "Aloo Paratha",
                image: "https://media.istockphoto.com/id/1951940755/photo/close-up-image-of-indian-breakfast-dish-buffet-triangular-slices-of-aloo-parathas-on-white.jpg",
                price: 120,
                rating: 4.8,
                veg: true,
            },
            {
                id: 802,
                name: "Paneer Paratha",
                image: "https://media.istockphoto.com/id/1951940755/photo/close-up-image-of-indian-breakfast-dish-buffet-triangular-slices-of-aloo-parathas-on-white.jpg",
                price: 150,
                rating: 4.9,
                veg: true,
            },
        ],

        Drinks: [{
                id: 803,
                name: "Masala Chai",
                image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500",
                price: 40,
                rating: 4.7,
                veg: true,
            },
            {
                id: 804,
                name: "Sweet Lassi",
                image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500",
                price: 70,
                rating: 4.8,
                veg: true,
            },
        ],
    },
};

export default menus;