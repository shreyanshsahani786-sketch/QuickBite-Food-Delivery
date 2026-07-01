export const selectRestaurants = (state) =>
    state.restaurants.restaurants;

export const selectFilteredRestaurants = (state) =>
    state.restaurants.filteredRestaurants;

export const selectRestaurantLoading = (state) =>
    state.restaurants.isLoading;

export const selectRestaurantError = (state) =>
    state.restaurants.error;

export const selectSelectedRestaurant = (state) =>
    state.restaurants.selectedRestaurant;

export const selectCategories = (state) =>
    state.restaurants.categories;

export const selectSelectedCategory = (state) =>
    state.restaurants.selectedCategory;

export const selectRestaurantFilters = (state) =>
    state.restaurants.filters;

export const selectRestaurantSort = (state) =>
    state.restaurants.sortBy;

export const selectRestaurantSearch = (state) =>
    state.restaurants.searchQuery;