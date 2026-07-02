import banners from "@/shared/data/banners";
import categories from "@/shared/data/categories";
import offers from "@/shared/data/offers";
import restaurants from "@/shared/data/restaurants";

const delay = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export async function getHomeData() {
    await delay(800);

    return {
        banners,
        categories,
        offers,
        restaurants,
    };
}