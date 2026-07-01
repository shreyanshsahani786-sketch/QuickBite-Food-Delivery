import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    restaurants: [],
    foods: [],
};

const wishlistSlice = createSlice({
    name: "wishlist",

    initialState,

    reducers: {
        toggleRestaurant: (state, action) => {
            const id = action.payload;

            const exists = state.restaurants.includes(id);

            state.restaurants = exists ?
                state.restaurants.filter((item) => item !== id) :
                [...state.restaurants, id];
        },

        toggleFood: (state, action) => {
            const id = action.payload;

            const exists = state.foods.includes(id);

            state.foods = exists ?
                state.foods.filter((item) => item !== id) :
                [...state.foods, id];
        },

        clearWishlist: (state) => {
            state.restaurants = [];
            state.foods = [];
        },
    },
});

export const {
    toggleRestaurant,
    toggleFood,
    clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;