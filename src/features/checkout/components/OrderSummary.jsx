import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { selectCartItems } from "@/features/cart/selectors";

function OrderSummary() {
  const items = useAppSelector(selectCartItems);

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-4">

        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b pb-3"
          >
            <div>
              <h3 className="font-medium">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500">
                Qty: {item.quantity}
              </p>
            </div>

            <span className="font-semibold">
              ₹{item.price * item.quantity}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}

export default OrderSummary;