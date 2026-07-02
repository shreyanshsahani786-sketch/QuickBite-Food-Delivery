import { motion } from "framer-motion";
import { HiHeart } from "react-icons/hi2";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { toggleRestaurant } from "@/features/wishlist/wishlistSlice";

import Card from "@/shared/components/ui/Card";

import RestaurantImage from "./RestaurantImage";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantBadges from "./RestaurantBadges";

function RestaurantCard({
  restaurant,
}) {
  const dispatch = useAppDispatch();

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Card className="overflow-hidden p-4">

        <div className="relative">

          <RestaurantImage
            id={restaurant.id}
            image={restaurant.image}
            name={restaurant.name}
          />

          <button
            onClick={() =>
              dispatch(
                toggleRestaurant(
                  restaurant.id
                )
              )
            }
            className="absolute right-3 top-3 rounded-full bg-white p-2 shadow"
          >
            <HiHeart className="text-red-500" />
          </button>

        </div>

        <div className="mt-4 space-y-4">

          <RestaurantBadges
            promoted={restaurant.promoted}
            rating={restaurant.rating}
          />

          <RestaurantInfo
            id={restaurant.id}
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            deliveryTime={restaurant.deliveryTime}
            priceForTwo={
              restaurant.priceForTwo
            }
          />

        </div>

      </Card>
    </motion.div>
  );
}

export default RestaurantCard;