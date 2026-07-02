import { Link } from "react-router-dom";

function RestaurantInfo({
  id,
  name,
  cuisine,
  deliveryTime,
  priceForTwo,
}) {
  return (
    <div className="space-y-2">

      <Link
        to={`/restaurants/${id}`}
        className="text-xl font-bold hover:text-orange-500"
      >
        {name}
      </Link>

      <p className="text-sm text-gray-500">
        {cuisine.join(" • ")}
      </p>

      <div className="flex items-center justify-between text-sm text-gray-600">

        <span>{deliveryTime}</span>

        <span>₹{priceForTwo} for two</span>

      </div>

    </div>
  );
}

export default RestaurantInfo;