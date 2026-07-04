export const selectCheckoutAddress = (state) =>
    state.checkout.address;

export const selectPaymentMethod = (state) =>
    state.checkout.paymentMethod;

export const selectCoupon = (state) =>
    state.checkout.coupon;

export const selectDiscount = (state) =>
    state.checkout.discount;