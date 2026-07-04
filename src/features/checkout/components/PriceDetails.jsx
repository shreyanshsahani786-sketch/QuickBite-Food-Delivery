import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { clearCart } from "@/features/cart/cartSlice";
import {
  selectCartItems,
  selectCartTotal,
} from "@/features/cart/selectors";

function PriceDetails() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartTotal);

  const deliveryFee = subtotal > 0 ? 40 : 0;
  const gst = Math.round(subtotal * 0.05);

  const total = subtotal + deliveryFee + gst;

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    dispatch(clearCart());

    toast.success("Order placed successfully");

    navigate("/order-success");
  };

  return (
    <div className="h-fit rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-5 text-xl font-bold">
        Bill Details
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">
            Subtotal
          </span>

          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">
            Delivery Fee
          </span>

          <span>₹{deliveryFee}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">
            GST
          </span>

          <span>₹{gst}</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>

          <span>₹{total}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={handlePlaceOrder}
        disabled={items.length === 0}
        className="mt-6 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Place Order
      </button>
    </div>
  );
}

export default PriceDetails;