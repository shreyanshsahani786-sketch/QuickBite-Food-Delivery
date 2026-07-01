import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalItems: 0,
    totalQuantity: 0,
    subtotal: 0,
    deliveryFee: 40,
    discount: 0,
    tax: 0,
    total: 0,
};

const calculateCartTotals = (state) => {
    state.totalItems = state.items.length;

    state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
    );

    state.subtotal = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    state.tax = Number((state.subtotal * 0.05).toFixed(2));

    state.total =
        state.subtotal +
        state.deliveryFee +
        state.tax -
        state.discount;
};

const cartSlice = createSlice({
    name: "cart",

    initialState,

    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            const existingItem = state.items.find(
                (cartItem) => cartItem.id === item.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    ...item,
                    quantity: 1,
                });
            }

            calculateCartTotals(state);
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );

            calculateCartTotals(state);
        },

        increaseQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }

            calculateCartTotals(state);
        },

        decreaseQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload
            );

            if (!item) return;

            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter(
                    (cartItem) => cartItem.id !== action.payload
                );
            }

            calculateCartTotals(state);
        },

        applyDiscount: (state, action) => {
            state.discount = action.payload;

            calculateCartTotals(state);
        },

        updateDeliveryFee: (state, action) => {
            state.deliveryFee = action.payload;

            calculateCartTotals(state);
        },

        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalQuantity = 0;
            state.subtotal = 0;
            state.tax = 0;
            state.discount = 0;
            state.total = 0;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    applyDiscount,
    updateDeliveryFee,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;