import { Link } from "react-router-dom";
import { HiCheckCircle } from "react-icons/hi2";

function OrderSuccessPage() {
  return (
    <main className="container mx-auto flex min-h-[75vh] items-center justify-center px-4 py-10">

      <div className="w-full max-w-xl rounded-3xl border bg-white p-8 text-center shadow-lg sm:p-12">

        <HiCheckCircle className="mx-auto text-8xl text-green-500" />

        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
          Order Placed Successfully!
        </h1>

        <p className="mt-4 text-gray-500">
          Your order has been confirmed and your food is being prepared.
        </p>

        <div className="mt-6 rounded-2xl bg-orange-50 p-5">

          <p className="text-sm text-gray-500">
            Estimated Delivery Time
          </p>

          <p className="mt-1 text-2xl font-bold text-orange-500">
            25 - 35 minutes
          </p>

        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/orders"
            className="rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            View My Orders
          </Link>

          <Link
            to="/restaurants"
            className="rounded-xl border border-orange-500 px-7 py-3 font-semibold text-orange-500 transition hover:bg-orange-50"
          >
            Order More Food
          </Link>

        </div>

      </div>

    </main>
  );
}

export default OrderSuccessPage;