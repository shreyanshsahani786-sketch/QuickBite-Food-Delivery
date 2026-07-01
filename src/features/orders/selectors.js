export const selectOrders = (state) => state.orders.orders;

export const selectCurrentOrder = (state) =>
    state.orders.currentOrder;

export const selectOrderLoading = (state) =>
    state.orders.isLoading;

export const selectOrderError = (state) =>
    state.orders.error;