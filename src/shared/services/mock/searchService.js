import restaurants from "@/shared/data/restaurants";

const delay = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export async function searchRestaurants(query) {
    await delay(300);

    if (!query) return restaurants;

    return restaurants.filter((restaurant) =>
        restaurant.name
        .toLowerCase()
        .includes(query.toLowerCase())
    );
}