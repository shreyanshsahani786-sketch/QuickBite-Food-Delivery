import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { addToCart } from "@/features/cart/cartSlice";

function MenuItemCard({
  item,
  restaurantId,
  restaurantName,
}) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...item,
        restaurantId,
        restaurantName,
      })
    );

    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className="flex w-full items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md sm:gap-4 sm:p-4">
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28"
      />

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span
            className={`h-3 w-3 shrink-0 rounded-full ${
              item.veg ? "bg-green-600" : "bg-red-600"
            }`}
          />

          <h3 className="truncate text-base font-bold sm:text-xl">
            {item.name}
          </h3>
        </div>

        <p className="mt-2 font-semibold">
          ₹{item.price}
        </p>

        <p className="mt-1 text-sm text-gray-500">
          ⭐ {item.rating}
        </p>
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        style={{
          backgroundColor: "#f97316",
          color: "white",
          padding: "10px 18px",
          border: "none",
          borderRadius: "10px",
          fontWeight: "700",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        ADD
      </button>
    </div>
  );
}

export default MenuItemCard;