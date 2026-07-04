export function filterRestaurants(restaurants, query) {
    if (!query.trim()) return restaurants;

    const search = query.toLowerCase();

    return restaurants.filter((restaurant) => {
        const matchName = restaurant.name.toLowerCase().includes(search);

        const matchCuisine = restaurant.cuisine
            .join(" ")
            .toLowerCase()
            .includes(search);

        const matchMenu =
            restaurant.menu &&
            restaurant.menu.some((item) =>
                item.name.toLowerCase().includes(search)
            );

        return matchName || matchCuisine || matchMenu;
    });
}