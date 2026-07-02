import Hero from "../Hero";
import Categories from "../Categories";

import restaurants from "@/shared/data/restaurants";
import RestaurantCard from "@/features/restaurants/components/RestaurantCard";

function HomePage() {
  return (
    <>
      <Hero />

      <Categories />

      <section className="container py-16">

        <h2 className="mb-8 text-4xl font-bold">
          Popular Restaurants
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}

        </div>

      </section>
    </>
  );
}

export default HomePage;