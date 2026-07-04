import { HiClock, HiMapPin, HiStar } from "react-icons/hi2";

function RestaurantMeta({ restaurant }) {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">{restaurant.name}</h1>

      <p className="text-gray-500">
        {restaurant.cuisine.join(" • ")}
      </p>

      <div className="flex flex-wrap gap-3">
        <span className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
          <HiStar className="text-green-600" />
          {restaurant.rating}
        </span>

        <span className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2">
          <HiClock />
          {restaurant.deliveryTime}
        </span>

        <span className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
          <HiMapPin />
          {restaurant.distance}
        </span>
      </div>

      <div className="flex gap-3">
        <span className="rounded-full bg-red-500 px-4 py-2 text-white">
          {restaurant.discount}
        </span>

        <span className="rounded-full bg-green-500 px-4 py-2 text-white">
          {restaurant.isOpen ? "Open" : "Closed"}
        </span>
      </div>
    </div>
  );
}

export default RestaurantMeta;