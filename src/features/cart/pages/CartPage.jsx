import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { CartItem, CartSummary } from "../components";

import { selectCartItems } from "../selectors";

function CartPage() {
  const items = useAppSelector(selectCartItems);

  if (!items.length) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-4xl font-bold">
          Your Cart is Empty
        </h1>

        <p className="mt-3 text-gray-500">
          Add delicious food to continue.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-10">

      <h1 className="mb-8 text-4xl font-bold">
        Shopping Cart
      </h1>

      <div className="grid gap-10 lg:grid-cols-3">

        <div className="space-y-5 lg:col-span-2">

          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

        </div>

        <CartSummary />

      </div>

    </div>
  );
}

export default CartPage;