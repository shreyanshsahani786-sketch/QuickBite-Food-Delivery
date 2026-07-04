import { createSlice } from "@reduxjs/toolkit";
import { loadCart } from "./utils";

const initialState = {
    items: loadCart(),
};

const cartSlice = createSlice({
    name: "cart",

    initialState,

    reducers: {
        addToCart(state, action) {
            const item = action.payload;

            const existingItem = state.items.find(
                (cartItem) => cartItem.id === item.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    id: item.id,
                    restaurantId: item.restaurantId,
                    restaurantName: item.restaurantName,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    veg: item.veg,
                    rating: item.rating,
                    quantity: 1,
                });
            }
        },
        increaseQuantity(state, action) {
            const item = state.items.find(
                (i) => i.id === action.payload
            );

            if (item) {
                item.quantity++;
            }
        },

        decreaseQuantity(state, action) {
            const item = state.items.find(
                (i) => i.id === action.payload
            );

            if (!item) return;

            if (item.quantity === 1) {
                state.items = state.items.filter(
                    (i) => i.id !== action.payload
                );
            } else {
                item.quantity--;
            }
        },

        removeFromCart(state, action) {
            state.items = state.items.filter(
                (i) => i.id !== action.payload
            );
        },

        clearCart(state) {
            state.items = [];
        },
    },
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;