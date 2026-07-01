import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    currentOrder: null,
    isLoading: false,
    error: null,
};

const orderSlice = createSlice({
    name: "orders",

    initialState,

    reducers: {
        fetchOrdersStart: (state) => {
            state.isLoading = true;
        },

        fetchOrdersSuccess: (state, action) => {
            state.orders = action.payload;
            state.isLoading = false;
        },

        fetchOrdersFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },

        setCurrentOrder: (state, action) => {
            state.currentOrder = action.payload;
        },

        clearCurrentOrder: (state) => {
            state.currentOrder = null;
        },
    },
});

export const {
    fetchOrdersStart,
    fetchOrdersSuccess,
    fetchOrdersFailure,
    setCurrentOrder,
    clearCurrentOrder,
} = orderSlice.actions;

export default orderSlice.reducer;