import { createSlice } from "@reduxjs/toolkit";

const getSavedOrders = () => {
    try {
        const orders = localStorage.getItem("quickbite-orders");

        return orders ? JSON.parse(orders) : [];
    } catch {
        return [];
    }
};

const initialState = {
    orders: getSavedOrders(),
};

const orderSlice = createSlice({
    name: "orders",

    initialState,

    reducers: {
        placeOrder(state, action) {
            state.orders.unshift(action.payload);

            localStorage.setItem(
                "quickbite-orders",
                JSON.stringify(state.orders)
            );
        },

        clearOrders(state) {
            state.orders = [];

            localStorage.removeItem("quickbite-orders");
        },
    },
});

export const {
    placeOrder,
    clearOrders,
} = orderSlice.actions;

export default orderSlice.reducer;