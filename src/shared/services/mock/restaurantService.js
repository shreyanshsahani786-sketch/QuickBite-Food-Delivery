import restaurants from "@/shared/data/restaurants";

const delay = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export async function getRestaurants() {
    await delay(700);

    return restaurants;
}

export async function getRestaurantById(id) {
    await delay(500);

    return restaurants.find(
        (restaurant) => restaurant.id === Number(id)
    );
}