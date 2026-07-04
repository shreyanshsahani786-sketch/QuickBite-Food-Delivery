import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: null,
    paymentMethod: "cod",
    coupon: null,
    discount: 0,
};

const checkoutSlice = createSlice({
    name: "checkout",

    initialState,

    reducers: {
        saveAddress(state, action) {
            state.address = action.payload;
        },

        setPaymentMethod(state, action) {
            state.paymentMethod = action.payload;
        },

        applyCoupon(state, action) {
            state.coupon = action.payload.code;
            state.discount = action.payload.discount;
        },

        removeCoupon(state) {
            state.coupon = null;
            state.discount = 0;
        },

        resetCheckout() {
            return initialState;
        },
    },
});

export const {
    saveAddress,
    setPaymentMethod,
    applyCoupon,
    removeCoupon,
    resetCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;