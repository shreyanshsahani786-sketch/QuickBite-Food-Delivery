import { useParams } from "react-router-dom";

import restaurants from "@/shared/data/restaurants";
import menus from "../data/menus";

import RestaurantBanner from "../components/RestaurantBanner";
import Menu from "../components/Menu";

function RestaurantDetailsPage() {
  const { id } = useParams();

  const restaurant = restaurants.find(
    (item) => item.id === Number(id)
  );

  if (!restaurant) {
    return (
      <div className="container py-20">
        <h1 className="text-3xl font-bold">
          Restaurant Not Found
        </h1>
      </div>
    );
  }

  const restaurantMenu = menus[restaurant.id];

  return (
    <div className="container py-10">
      <RestaurantBanner restaurant={restaurant} />

      <Menu
        restaurant={restaurant}
        menu={restaurantMenu}
      />
    </div>
  );
}

export default RestaurantDetailsPage;