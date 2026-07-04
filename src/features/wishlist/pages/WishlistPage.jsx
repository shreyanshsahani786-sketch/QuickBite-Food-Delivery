import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { WishlistCard } from "../components";

import {
  selectWishlistItems,
} from "../selectors";

function WishlistPage() {
  const restaurants = useAppSelector(
    selectWishlistItems
  );

  if (!restaurants.length) {
    return (
      <div className="container py-20 text-center">

        <h1 className="text-4xl font-bold">
          Your Wishlist is Empty
        </h1>

        <p className="mt-3 text-gray-500">
          Save your favourite restaurants ❤️
        </p>

      </div>
    );
  }

  return (
    <div className="container py-10">

      <h1 className="mb-8 text-4xl font-bold">
        My Wishlist
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {restaurants.map((restaurant) => (
          <WishlistCard
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}

      </div>

    </div>
  );
}

export default WishlistPage;