export const selectSearchQuery = (state) => state.search.query;

export const selectRecentSearches = (state) =>
    state.search.recentSearches;

export const selectSuggestions = (state) =>
    state.search.suggestions;