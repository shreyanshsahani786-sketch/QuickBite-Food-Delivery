import RestaurantMeta from "./RestaurantMeta";
import RestaurantActions from "./RestaurantActions";

function RestaurantBanner({ restaurant }) {
  return (
    <section className="overflow-hidden rounded-3xl bg-white shadow-lg">

      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="h-80 w-full object-cover"
      />

      <div className="flex flex-col justify-between gap-6 p-8 lg:flex-row">

        <RestaurantMeta restaurant={restaurant} />

        <RestaurantActions
          restaurant={restaurant}
        />

      </div>

    </section>
  );
}

export default RestaurantBanner;