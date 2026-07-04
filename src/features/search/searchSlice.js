import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: "",
    rating: "",
    deliveryTime: "",
    cuisine: "",
    sortBy: "",
};

const searchSlice = createSlice({
    name: "search",

    initialState,

    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        },

        setRating(state, action) {
            state.rating = action.payload;
        },

        setDeliveryTime(state, action) {
            state.deliveryTime = action.payload;
        },

        setCuisine(state, action) {
            state.cuisine = action.payload;
        },

        setSortBy(state, action) {
            state.sortBy = action.payload;
        },

        clearFilters(state) {
            state.query = "";
            state.rating = "";
            state.deliveryTime = "";
            state.cuisine = "";
            state.sortBy = "";
        },
    },
});

export const {
    setQuery,
    setRating,
    setDeliveryTime,
    setCuisine,
    setSortBy,
    clearFilters,
} = searchSlice.actions;

export default searchSlice.reducer;