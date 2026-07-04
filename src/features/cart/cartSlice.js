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
                (cartItem) =>
                cartItem.id === item.id &&
                cartItem.restaurantId === item.restaurantId
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
            const { id, restaurantId } = action.payload;

            const item = state.items.find(
                (cartItem) =>
                cartItem.id === id &&
                cartItem.restaurantId === restaurantId
            );

            if (item) {
                item.quantity += 1;
            }
        },

        decreaseQuantity(state, action) {
            const { id, restaurantId } = action.payload;

            const item = state.items.find(
                (cartItem) =>
                cartItem.id === id &&
                cartItem.restaurantId === restaurantId
            );

            if (!item) {
                return;
            }

            if (item.quantity === 1) {
                state.items = state.items.filter(
                    (cartItem) =>
                    !(
                        cartItem.id === id &&
                        cartItem.restaurantId === restaurantId
                    )
                );
            } else {
                item.quantity -= 1;
            }
        },

        removeFromCart(state, action) {
            const { id, restaurantId } = action.payload;

            state.items = state.items.filter(
                (cartItem) =>
                !(
                    cartItem.id === id &&
                    cartItem.restaurantId === restaurantId
                )
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