function AddressCard() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Delivery Address
      </h2>

      <div className="space-y-2">
        <h3 className="font-semibold">
          John Doe
        </h3>

        <p className="text-gray-600">
          221B Baker Street
        </p>

        <p className="text-gray-600">
          Delhi, India
        </p>

        <button className="mt-4 rounded-lg border border-orange-500 px-4 py-2 text-orange-500 hover:bg-orange-50">
          Change Address
        </button>
      </div>
    </div>
  );
}

export default AddressCard;