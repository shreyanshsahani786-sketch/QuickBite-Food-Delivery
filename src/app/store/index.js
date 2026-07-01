import { configureStore } from "@reduxjs/toolkit";

// Feature Reducers
import authReducer from "@/features/auth/authSlice";
import cartReducer from "@/features/cart/cartSlice";
import restaurantReducer from "@/features/restaurants/restaurantSlice";
import searchReducer from "@/features/search/searchSlice";
import wishlistReducer from "@/features/wishlist/wishlistSlice";
import orderReducer from "@/features/orders/orderSlice";
import uiReducer from "@/features/ui/uiSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,

        cart: cartReducer,

        restaurants: restaurantReducer,

        search: searchReducer,

        wishlist: wishlistReducer,

        orders: orderReducer,

        ui: uiReducer,
    },

    devTools: import.meta.env.DEV,
});

export default store;