import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiHeart,
  HiStar,
  HiClock,
} from "react-icons/hi2";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { toggleWishlist } from "@/features/wishlist/wishlistSlice";
import { isRestaurantWishlisted } from "@/features/wishlist/selectors";

function RestaurantCard({ restaurant }) {
  const dispatch = useAppDispatch();

  const wishlisted = useAppSelector(
    isRestaurantWishlisted(restaurant.id)
  );

  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group overflow-hidden rounded-3xl bg-white shadow-md transition hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={restaurant.image}
          alt={restaurant.name}
          loading="lazy"
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />

        {/* Wishlist */}

        <button
          onClick={() =>
            dispatch(toggleWishlist(restaurant))
          }
          className="absolute right-4 top-4 rounded-full bg-white p-3 shadow-lg transition hover:scale-110"
        >
          <HiHeart
            className={`text-xl transition ${
              wishlisted
                ? "fill-red-500 text-red-500"
                : "text-gray-400"
            }`}
          />
        </button>

        {/* Promoted */}

        {restaurant.promoted && (
          <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
            Promoted
          </span>
        )}

        {/* Rating */}

        <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">

          <HiStar />

          {restaurant.rating}

        </div>

      </div>

      {/* Body */}

      <div className="space-y-4 p-5">

        <Link
          to={`/restaurants/${restaurant.id}`}
          className="block text-2xl font-bold transition hover:text-orange-500"
        >
          {restaurant.name}
        </Link>

        <p className="text-gray-500">
          {restaurant.cuisine.join(" • ")}
        </p>

        <div className="flex flex-wrap gap-2">

          <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-600">
            ₹{restaurant.priceForTwo} for two
          </span>

          <span className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">

            <HiClock />

            {restaurant.deliveryTime}

          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">

            Delivery ₹{restaurant.deliveryFee}

          </span>

        </div>

        <Link
          to={`/restaurants/${restaurant.id}`}
          className="block rounded-xl bg-orange-500 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
        >
          View Menu
        </Link>

      </div>
    </motion.article>
  );
}

export default RestaurantCard;