import { Link } from "react-router-dom";
import { HiHeart, HiStar } from "react-icons/hi2";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";

import { removeFromWishlist } from "../wishlistSlice";

function WishlistCard({ restaurant }) {
  const dispatch = useAppDispatch();

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-xl">

      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="h-52 w-full object-cover"
      />

      <div className="space-y-4 p-5">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold">
            {restaurant.name}
          </h2>

          <div className="flex items-center gap-1 rounded-full bg-green-600 px-2 py-1 text-white">

            <HiStar />

            {restaurant.rating}

          </div>

        </div>

        <p className="text-gray-500">
          {restaurant.cuisine.join(" • ")}
        </p>

        <p className="font-medium">
          ₹{restaurant.priceForTwo} for two
        </p>

        <div className="flex gap-3">

          <Link
            to={`/restaurants/${restaurant.id}`}
            className="flex-1 rounded-lg bg-orange-500 py-2 text-center font-semibold text-white hover:bg-orange-600"
          >
            View Restaurant
          </Link>

          <button
            onClick={() =>
              dispatch(removeFromWishlist(restaurant.id))
            }
            className="rounded-lg border border-red-500 p-3 text-red-500 hover:bg-red-50"
          >
            <HiHeart className="fill-red-500" />
          </button>

        </div>

      </div>

    </div>
  );
}

export default WishlistCard;