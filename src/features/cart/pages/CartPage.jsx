import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../cartSlice";

function CartPage() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = items.length > 0 ? 40 : 0;

  const platformFee = items.length > 0 ? 10 : 0;

  const totalAmount = subtotal + deliveryFee + platformFee;

  const handleIncrease = (item) => {
    dispatch(
      increaseQuantity({
        id: item.id,
        restaurantId: item.restaurantId,
      })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      decreaseQuantity({
        id: item.id,
        restaurantId: item.restaurantId,
      })
    );
  };

  const handleRemove = (item) => {
    dispatch(
      removeFromCart({
        id: item.id,
        restaurantId: item.restaurantId,
      })
    );

    toast.success(`${item.name} removed from cart`);
  };

  const handleClearCart = () => {
    dispatch(clearCart());

    toast.success("Cart cleared");
  };

  if (items.length === 0) {
    return (
      <div className="container py-20">
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-6 text-7xl">
            🛒
          </div>

          <h1 className="text-4xl font-bold">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            Add delicious food from your favourite restaurants.
          </p>

          <Link
            to="/restaurants"
            className="mt-8 inline-block rounded-xl bg-orange-500 px-8 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            Browse Restaurants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="container py-10">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Your Cart
          </h1>

          <p className="mt-2 text-gray-500">
            {items.length} item{items.length > 1 ? "s" : ""} in your cart
          </p>
        </div>

        <button
          type="button"
          onClick={handleClearCart}
          className="rounded-lg border border-red-500 px-4 py-2 font-semibold text-red-500 transition hover:bg-red-50"
        >
          Clear Cart
        </button>

      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

        {/* CART ITEMS */}

        <section className="space-y-4">

          {items.map((item) => (

            <article
              key={`${item.restaurantId}-${item.id}`}
              className="flex flex-col gap-5 rounded-2xl border bg-white p-5 shadow-sm sm:flex-row sm:items-center"
            >

              <img
                src={item.image}
                alt={item.name}
                className="h-32 w-full rounded-xl object-cover sm:h-28 sm:w-28"
              />

              <div className="min-w-0 flex-1">

                <p className="text-sm font-medium text-orange-500">
                  {item.restaurantName}
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  {item.name}
                </h2>

                <p className="mt-2 font-semibold">
                  ₹{item.price}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  ⭐ {item.rating}
                </p>

              </div>

              {/* QUANTITY BUTTONS */}

              <div className="flex items-center justify-between gap-4 sm:flex-col">

                <div className="flex items-center overflow-hidden rounded-xl border">

                  <button
                    type="button"
                    onClick={() => handleDecrease(item)}
                    className="px-4 py-2 text-xl font-bold transition hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span className="min-w-10 text-center font-bold">
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleIncrease(item)}
                    className="px-4 py-2 text-xl font-bold transition hover:bg-gray-100"
                  >
                    +
                  </button>

                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(item)}
                  className="text-sm font-semibold text-red-500 hover:text-red-600"
                >
                  Remove
                </button>

              </div>

            </article>

          ))}

        </section>

        {/* BILL SUMMARY */}

        <aside className="h-fit rounded-2xl border bg-white p-6 shadow-sm">

          <h2 className="text-2xl font-bold">
            Bill Details
          </h2>

          <div className="mt-6 space-y-4">

            <div className="flex justify-between">
              <span className="text-gray-600">
                Item Total
              </span>

              <span>
                ₹{subtotal}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">
                Delivery Fee
              </span>

              <span>
                ₹{deliveryFee}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">
                Platform Fee
              </span>

              <span>
                ₹{platformFee}
              </span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>
                To Pay
              </span>

              <span>
                ₹{totalAmount}
              </span>
            </div>

          </div>

          <Link
            to="/checkout"
            className="mt-6 block w-full rounded-xl bg-orange-500 px-6 py-3 text-center font-bold text-white transition hover:bg-orange-600"
          >
            Proceed to Checkout
          </Link>

          <Link
            to="/restaurants"
            className="mt-3 block text-center font-semibold text-orange-500 hover:text-orange-600"
          >
            Add More Items
          </Link>

        </aside>

      </div>

    </main>
  );
}

export default CartPage;