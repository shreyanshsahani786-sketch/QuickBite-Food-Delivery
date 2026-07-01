import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarOpen: false,
    mobileMenuOpen: false,
    theme: "light",
};

const uiSlice = createSlice({
    name: "ui",

    initialState,

    reducers: {
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },

        closeSidebar: (state) => {
            state.sidebarOpen = false;
        },

        toggleMobileMenu: (state) => {
            state.mobileMenuOpen = !state.mobileMenuOpen;
        },

        closeMobileMenu: (state) => {
            state.mobileMenuOpen = false;
        },

        setTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

export const {
    toggleSidebar,
    closeSidebar,
    toggleMobileMenu,
    closeMobileMenu,
    setTheme,
} = uiSlice.actions;

export default uiSlice.reducer;