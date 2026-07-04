import { useMemo } from "react";

import { SearchBar, EmptySearch } from "@/features/search/components";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import restaurants from "@/shared/data/restaurants";

import { selectSearch } from "@/features/search/selectors";
import { filterRestaurants } from "@/features/search/utils";

import RestaurantCard from "../components/RestaurantCard";

import {
  FilterBar
} from "@/features/search/components";

function RestaurantsPage() {
  const { query } = useAppSelector(selectSearch);

  const filteredRestaurants = useMemo(() => {
    return filterRestaurants(restaurants, query);
  }, [query]);

  return (
    <section className="container mx-auto px-4 py-10">

      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="mt-5">
        <FilterBar />
        </div>

      <h1 className="mb-8 text-4xl font-bold">
        Popular Restaurants
      </h1>

      {filteredRestaurants.length === 0 ? (
        <EmptySearch />
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default RestaurantsPage;