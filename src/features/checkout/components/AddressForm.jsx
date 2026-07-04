import { useForm } from "react-hook-form";

function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-bold">
        Delivery Address
      </h2>

      <div className="space-y-4">

        <input
          {...register("name", {
            required: "Name is required",
          })}
          placeholder="Full Name"
          className="w-full rounded-lg border p-3"
        />

        {errors.name && (
          <p className="text-sm text-red-500">
            {errors.name.message}
          </p>
        )}

        <input
          {...register("phone", {
            required: "Phone number is required",
          })}
          placeholder="Phone Number"
          className="w-full rounded-lg border p-3"
        />

        <textarea
          {...register("address", {
            required: "Address is required",
          })}
          rows={4}
          placeholder="Delivery Address"
          className="w-full rounded-lg border p-3"
        />

      </div>

    </div>
  );
}

export default AddressForm;