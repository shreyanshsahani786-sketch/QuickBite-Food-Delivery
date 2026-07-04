import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { placeOrder } from "@/features/orders/orderSlice";
import { clearCart } from "@/features/cart/cartSlice";

import {
  selectCurrentUser,
  selectIsAuthenticated,
} from "@/features/auth/selectors";

function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(
    selectIsAuthenticated
  );

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const [address, setAddress] = useState("");

  const [phone, setPhone] = useState(
    user?.phone || ""
  );

  const [paymentMethod, setPaymentMethod] =
    useState("cash");

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <Navigate
        to="/cart"
        replace
      />
    );
  }

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      item.price * (item.quantity || 1),
    0
  );

  const deliveryFee = 40;

  const gst = Math.round(subtotal * 0.05);

  const totalAmount =
    subtotal + deliveryFee + gst;

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    if (!address.trim()) {
      toast.error(
        "Please enter delivery address"
      );

      return;
    }

    if (!phone.trim()) {
      toast.error(
        "Please enter phone number"
      );

      return;
    }

    const newOrder = {
      id: `QB-${Date.now()}`,

      user: {
        name: user.name,
        email: user.email,
        phone,
      },

      items: cartItems.map((item) => ({
        ...item,
      })),

      address,

      paymentMethod,

      subtotal,

      deliveryFee,

      gst,

      totalAmount,

      status: "Order Confirmed",

      createdAt: new Date().toISOString(),
    };

    dispatch(placeOrder(newOrder));

    dispatch(clearCart());

    toast.success(
      "Order placed successfully!"
    );

    navigate("/order-success");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10">

      <div className="container mx-auto px-4">

        <h1 className="mb-8 text-4xl font-bold">
          Checkout
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">

          <form
            onSubmit={handlePlaceOrder}
            className="space-y-6 lg:col-span-2"
          >

            <section className="rounded-2xl border bg-white p-6 shadow-sm">

              <h2 className="mb-5 text-2xl font-bold">
                Delivery Information
              </h2>

              <div className="space-y-5">

                <div>
                  <label className="mb-2 block font-semibold">
                    Customer Name
                  </label>

                  <input
                    value={user?.name || ""}
                    disabled
                    className="w-full rounded-xl border bg-gray-100 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) =>
                      setPhone(event.target.value)
                    }
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold">
                    Delivery Address
                  </label>

                  <textarea
                    value={address}
                    onChange={(event) =>
                      setAddress(event.target.value)
                    }
                    placeholder="House number, street, city, pincode..."
                    rows={4}
                    className="w-full resize-none rounded-xl border px-4 py-3 outline-none focus:border-orange-500"
                  />
                </div>

              </div>

            </section>

            <section className="rounded-2xl border bg-white p-6 shadow-sm">

              <h2 className="mb-5 text-2xl font-bold">
                Payment Method
              </h2>

              <div className="space-y-3">

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border p-4">

                  <input
                    type="radio"
                    value="cash"
                    checked={
                      paymentMethod === "cash"
                    }
                    onChange={(event) =>
                      setPaymentMethod(
                        event.target.value
                      )
                    }
                  />

                  <span className="font-semibold">
                    Cash on Delivery
                  </span>

                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border p-4">

                  <input
                    type="radio"
                    value="upi"
                    checked={
                      paymentMethod === "upi"
                    }
                    onChange={(event) =>
                      setPaymentMethod(
                        event.target.value
                      )
                    }
                  />

                  <span className="font-semibold">
                    UPI Payment
                  </span>

                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border p-4">

                  <input
                    type="radio"
                    value="card"
                    checked={
                      paymentMethod === "card"
                    }
                    onChange={(event) =>
                      setPaymentMethod(
                        event.target.value
                      )
                    }
                  />

                  <span className="font-semibold">
                    Credit / Debit Card
                  </span>

                </label>

              </div>

            </section>

            <button
              type="submit"
              className="w-full rounded-xl bg-orange-500 py-4 text-lg font-bold text-white transition hover:bg-orange-600"
            >
              Place Order • ₹{totalAmount}
            </button>

          </form>

          <section className="h-fit rounded-2xl border bg-white p-6 shadow-sm">

            <h2 className="mb-5 text-2xl font-bold">
              Order Summary
            </h2>

            <div className="space-y-4">

              {cartItems.map((item) => (
                <div
                  key={`${item.restaurantId}-${item.id}`}
                  className="flex justify-between gap-4 border-b pb-3"
                >

                  <div>
                    <p className="font-semibold">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold">
                    ₹{item.price * item.quantity}
                  </p>

                </div>
              ))}

            </div>

            <div className="mt-6 space-y-3">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>

              <div className="flex justify-between">
                <span>GST</span>
                <span>₹{gst}</span>
              </div>

              <div className="flex justify-between border-t pt-4 text-xl font-bold">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}

export default CheckoutPage;