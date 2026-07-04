import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { selectCartTotal } from "../selectors";

function CartSummary() {
  const subtotal = useAppSelector(selectCartTotal);

  const delivery = subtotal > 0 ? 40 : 0;

  const gst = Math.round(subtotal * 0.05);

  const total = subtotal + delivery + gst;

  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Bill Details
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>₹{delivery}</span>
        </div>

        <div className="flex justify-between">
          <span>GST</span>
          <span>₹{gst}</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>

      <button className="mt-6 w-full rounded-lg bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">
        Proceed to Checkout
      </button>

    </div>
  );
}

export default CartSummary;