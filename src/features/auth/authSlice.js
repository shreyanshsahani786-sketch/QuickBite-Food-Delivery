import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",

    initialState,

    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },

        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated = true;
            state.error = null;
        },

        loginFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        },

        updateUser: (state, action) => {
            state.user = {
                ...state.user,
                ...action.payload,
            };
        },

        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
            state.isLoading = false;
            state.error = null;
        },

        clearAuthError: (state) => {
            state.error = null;
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    updateUser,
    logout,
    clearAuthError,
} = authSlice.actions;

export default authSlice.reducer;