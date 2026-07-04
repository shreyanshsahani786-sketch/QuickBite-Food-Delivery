import {
  Navigate,
  Link,
} from "react-router-dom";

import {
  useSelector,
} from "react-redux";

import {
  selectOrders,
} from "../selectors";

import {
  selectIsAuthenticated,
} from "@/features/auth/selectors";

function OrdersPage() {
  const orders = useSelector(selectOrders);

  const isAuthenticated = useSelector(
    selectIsAuthenticated
  );

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (!orders.length) {
    return (
      <main className="flex min-h-[75vh] items-center justify-center px-4">

        <div className="text-center">

          <div className="mb-5 text-7xl">
            📦
          </div>

          <h1 className="text-4xl font-bold">
            No Orders Yet
          </h1>

          <p className="mt-3 text-gray-500">
            Your placed orders will appear here.
          </p>

          <Link
            to="/restaurants"
            className="mt-6 inline-block rounded-xl bg-orange-500 px-6 py-3 font-bold text-white"
          >
            Browse Restaurants
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10">

      <div className="container mx-auto px-4">

        <h1 className="mb-8 text-4xl font-bold">
          My Orders
        </h1>

        <div className="space-y-6">

          {orders.map((order) => (

            <article
              key={order.id}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >

              <div className="flex flex-col justify-between gap-4 border-b pb-5 sm:flex-row">

                <div>

                  <p className="text-sm text-gray-500">
                    Order ID
                  </p>

                  <h2 className="font-bold">
                    {order.id}
                  </h2>

                </div>

                <div>

                  <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                    {order.status}
                  </span>

                </div>

              </div>

              <div className="py-5">

                <h3 className="mb-4 text-lg font-bold">
                  Items
                </h3>

                <div className="space-y-3">

                  {order.items.map((item) => (

                    <div
                      key={`${order.id}-${item.restaurantId}-${item.id}`}
                      className="flex justify-between"
                    >

                      <span>
                        {item.name} ×{" "}
                        {item.quantity || 1}
                      </span>

                      <span>
                        ₹
                        {item.price *
                          (item.quantity || 1)}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              <div className="grid gap-4 border-t pt-5 md:grid-cols-3">

                <div>
                  <p className="text-sm text-gray-500">
                    Delivery Address
                  </p>

                  <p className="font-semibold">
                    {order.address}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Payment
                  </p>

                  <p className="font-semibold capitalize">
                    {order.paymentMethod}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Total Amount
                  </p>

                  <p className="text-xl font-bold text-orange-500">
                    ₹{order.totalAmount}
                  </p>
                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </main>
  );
}

export default OrdersPage;