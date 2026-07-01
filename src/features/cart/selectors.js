export const selectCart = (state) => state.cart;

export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalItems = (state) =>
    state.cart.totalItems;

export const selectCartQuantity = (state) =>
    state.cart.totalQuantity;

export const selectSubtotal = (state) =>
    state.cart.subtotal;

export const selectDeliveryFee = (state) =>
    state.cart.deliveryFee;

export const selectTax = (state) =>
    state.cart.tax;

export const selectDiscount = (state) =>
    state.cart.discount;

export const selectCartTotal = (state) =>
    state.cart.total;