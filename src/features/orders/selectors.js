export const selectOrders = (state) =>
    state.orders.orders;

export const selectTotalOrders = (state) =>
    state.orders.orders.length;