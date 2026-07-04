import { HiHeart, HiShare } from "react-icons/hi2";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { toggleWishlist } from "@/features/wishlist/wishlistSlice";
import { isRestaurantWishlisted } from "@/features/wishlist/selectors";

function RestaurantActions({ restaurant }) {
  const dispatch = useAppDispatch();

  const wishlisted = useAppSelector(
    isRestaurantWishlisted(restaurant.id)
  );

  return (
    <div className="flex gap-4">

      <button
        onClick={() =>
          dispatch(toggleWishlist(restaurant))
        }
        className="rounded-xl border p-4 transition hover:bg-red-50"
      >
        <HiHeart
          size={24}
          className={`transition ${
            wishlisted
              ? "fill-red-500 text-red-500"
              : "text-gray-500"
          }`}
        />
      </button>

      <button
        className="rounded-xl border p-4 transition hover:bg-gray-100"
      >
        <HiShare size={24} />
      </button>

    </div>
  );
}

export default RestaurantActions;