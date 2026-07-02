const API_ENDPOINTS = {
    AUTH: {
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",
        LOGOUT: "/auth/logout",
        REFRESH: "/auth/refresh",
        PROFILE: "/auth/profile",
    },

    RESTAURANTS: {
        ALL: "/restaurants",
        DETAILS: (id) => `/restaurants/${id}`,
        MENU: (id) => `/restaurants/${id}/menu`,
    },

    SEARCH: {
        ALL: "/search",
    },

    CART: {
        ALL: "/cart",
    },

    ORDERS: {
        ALL: "/orders",
        DETAILS: (id) => `/orders/${id}`,
    },

    WISHLIST: {
        ALL: "/wishlist",
    },
};

export default API_ENDPOINTS;