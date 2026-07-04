import { createSlice } from "@reduxjs/toolkit";
import { loadWishlist } from "./utils";

const initialState = {
    items: loadWishlist(),
};

const wishlistSlice = createSlice({
    name: "wishlist",

    initialState,

    reducers: {
        addToWishlist(state, action) {
            const restaurant = action.payload;

            const exists = state.items.find(
                (item) => item.id === restaurant.id
            );

            if (!exists) {
                state.items.push(restaurant);
            }
        },

        removeFromWishlist(state, action) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },

        toggleWishlist(state, action) {
            const restaurant = action.payload;

            const exists = state.items.find(
                (item) => item.id === restaurant.id
            );

            if (exists) {
                state.items = state.items.filter(
                    (item) => item.id !== restaurant.id
                );
            } else {
                state.items.push(restaurant);
            }
        },

        clearWishlist(state) {
            state.items = [];
        },
    },
});

export const {
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;