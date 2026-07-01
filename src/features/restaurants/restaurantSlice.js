import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    restaurants: [],
    filteredRestaurants: [],
    selectedRestaurant: null,

    categories: [],
    selectedCategory: "All",

    searchQuery: "",

    filters: {
        rating: 0,
        vegOnly: false,
        freeDelivery: false,
        priceRange: "ALL",
    },

    sortBy: "relevance",

    isLoading: false,
    error: null,
};

const restaurantSlice = createSlice({
    name: "restaurants",

    initialState,

    reducers: {
        fetchRestaurantsStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },

        fetchRestaurantsSuccess: (state, action) => {
            state.isLoading = false;

            state.restaurants = action.payload;
            state.filteredRestaurants = action.payload;
        },

        fetchRestaurantsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        setSelectedRestaurant: (state, action) => {
            state.selectedRestaurant = action.payload;
        },

        clearSelectedRestaurant: (state) => {
            state.selectedRestaurant = null;
        },

        setCategories: (state, action) => {
            state.categories = action.payload;
        },

        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },

        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },

        setFilters: (state, action) => {
            state.filters = {
                ...state.filters,
                ...action.payload,
            };
        },

        clearFilters: (state) => {
            state.filters = initialState.filters;
            state.selectedCategory = "All";
            state.searchQuery = "";
        },

        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
    },
});

export const {
    fetchRestaurantsStart,
    fetchRestaurantsSuccess,
    fetchRestaurantsFailure,
    setSelectedRestaurant,
    clearSelectedRestaurant,
    setCategories,
    setSelectedCategory,
    setSearchQuery,
    setFilters,
    clearFilters,
    setSortBy,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;