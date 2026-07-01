import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: "",
    recentSearches: [],
    suggestions: [],
};

const searchSlice = createSlice({
    name: "search",
    initialState,

    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },

        addRecentSearch: (state, action) => {
            const value = action.payload.trim();

            if (!value) return;

            state.recentSearches = [
                value,
                ...state.recentSearches.filter((item) => item !== value),
            ].slice(0, 10);
        },

        clearRecentSearches: (state) => {
            state.recentSearches = [];
        },

        setSuggestions: (state, action) => {
            state.suggestions = action.payload;
        },
    },
});

export const {
    setQuery,
    addRecentSearch,
    clearRecentSearches,
    setSuggestions,
} = searchSlice.actions;

export default searchSlice.reducer;