export const selectWishlistItems = (state) =>
    state.wishlist.items;

export const selectWishlistCount = (state) =>
    state.wishlist.items.length;

export const isRestaurantWishlisted =
    (id) => (state) =>
    state.wishlist.items.some(
        (item) => item.id === id
    );