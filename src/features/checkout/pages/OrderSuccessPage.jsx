import { Link } from "react-router-dom";
import { HiCheckCircle } from "react-icons/hi2";

function OrderSuccessPage() {
  return (
    <main className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 text-center shadow-lg sm:p-12">
        <HiCheckCircle className="mx-auto text-8xl text-green-500" />

        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
          Order Placed Successfully!
        </h1>

        <p className="mt-4 text-gray-500">
          Thank you for ordering with QuickBite.
          Your delicious food is being prepared.
        </p>

        <div className="mt-6 rounded-xl bg-orange-50 p-4">
          <p className="text-sm text-gray-500">
            Estimated Delivery Time
          </p>

          <p className="mt-1 text-xl font-bold text-orange-500">
            25 - 35 minutes
          </p>
        </div>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}

export default OrderSuccessPage;