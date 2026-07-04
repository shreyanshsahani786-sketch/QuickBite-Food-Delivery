import { useAppDispatch } from "@/shared/hooks/useAppDispatch";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../cartSlice";

function CartItem({ item }) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-5 rounded-xl border bg-white p-5 shadow-sm">

      <img
        src={item.image}
        alt={item.name}
        className="h-28 w-28 rounded-lg object-cover"
      />

      <div className="flex flex-1 flex-col justify-between">

        <div>
          <h3 className="text-xl font-semibold">
            {item.name}
          </h3>

          <p className="text-gray-500">
            ₹{item.price}
          </p>
        </div>

        <div className="flex items-center gap-3">

          <button
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
            className="h-8 w-8 rounded border"
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
            className="h-8 w-8 rounded border"
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
            className="ml-auto text-red-600"
          >
            Remove
          </button>

        </div>

      </div>

    </div>
  );
}

export default CartItem;