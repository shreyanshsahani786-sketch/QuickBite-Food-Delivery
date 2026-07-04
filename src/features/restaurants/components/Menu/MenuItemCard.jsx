import { useSelector } from "react-redux";

import { addToCart } from "@/features/cart/cartSlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";

function MenuItemCard({
  item,
  restaurantId,
  restaurantName,
}) {
  const dispatch = useAppDispatch();

  // Get cart items from Redux
  const cartItems = useSelector(
    (state) => state.cart.items || []
  );

  // Check whether this menu item is already in cart
  const cartItem = cartItems.find(
    (cartItem) =>
      cartItem.id === item.id &&
      cartItem.restaurantId === restaurantId
  );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...item,
        restaurantId,
        restaurantName,
      })
    );
  };

  return (
    <div className="flex items-center justify-between gap-5 rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">

      {/* LEFT SECTION */}

      <div className="flex items-center gap-4">

        <img
          src={item.image}
          alt={item.name}
          className="h-28 w-28 rounded-lg object-cover"
        />

        <div>

          <div className="mb-2 flex items-center gap-2">

            {/* VEG / NON-VEG INDICATOR */}

            <span
              className={`h-3 w-3 rounded-full ${
                item.veg
                  ? "bg-green-600"
                  : "bg-red-600"
              }`}
            />

            <h3 className="text-lg font-semibold">
              {item.name}
            </h3>

          </div>

          <p className="font-medium">
            ₹{item.price}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            ⭐ {item.rating}
          </p>

        </div>

      </div>


      {/* RIGHT SECTION */}

      <div className="flex flex-col items-center gap-2">

        <button
          type="button"
          onClick={handleAddToCart}
          className="min-w-24 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 active:scale-95"
        >
          {cartItem ? "ADD MORE" : "ADD TO CART"}
        </button>

        {cartItem && (
          <span className="text-sm font-medium text-green-600">
            ✓ Added to Cart
          </span>
        )}

      </div>

    </div>
  );
}

export default MenuItemCard;