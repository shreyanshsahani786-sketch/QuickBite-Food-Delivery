import { createSlice } from "@reduxjs/toolkit";

const getSavedUser = () => {
    try {
        const savedUser = localStorage.getItem("quickbite-user");

        return savedUser ?
            JSON.parse(savedUser) :
            null;
    } catch {
        return null;
    }
};

const savedUser = getSavedUser();

const initialState = {
    user: savedUser,
    isAuthenticated: Boolean(savedUser),
};

const authSlice = createSlice({
    name: "auth",

    initialState,

    reducers: {
        login(state, action) {
            state.user = action.payload;
            state.isAuthenticated = true;

            localStorage.setItem(
                "quickbite-user",
                JSON.stringify(action.payload)
            );
        },

        registerUser(state, action) {
            state.user = action.payload;
            state.isAuthenticated = true;

            localStorage.setItem(
                "quickbite-user",
                JSON.stringify(action.payload)
            );
        },

        logout(state) {
            state.user = null;
            state.isAuthenticated = false;

            localStorage.removeItem("quickbite-user");
        },
    },
});

export const {
    login,
    registerUser,
    logout,
} = authSlice.actions;

export default authSlice.reducer;