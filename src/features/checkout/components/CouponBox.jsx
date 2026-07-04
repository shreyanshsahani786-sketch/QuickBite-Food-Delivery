function CouponBox() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-5 text-xl font-bold">
        Apply Coupon
      </h2>

      <div className="flex gap-3">

        <input
          placeholder="Enter Coupon"
          className="flex-1 rounded-lg border p-3"
        />

        <button
          className="rounded-lg bg-orange-500 px-5 text-white"
        >
          Apply
        </button>

      </div>

    </div>
  );
}

export default CouponBox;