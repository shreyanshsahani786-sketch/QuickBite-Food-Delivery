function PaymentMethods() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Payment Method
      </h2>

      <div className="space-y-4">

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            defaultChecked
          />

          Cash on Delivery
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
          />

          UPI
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
          />

          Credit / Debit Card
        </label>

      </div>
    </div>
  );
}

export default PaymentMethods;