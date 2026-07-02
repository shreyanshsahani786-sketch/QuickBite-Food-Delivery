import clsx from "clsx";

function Input({
  label,
  error,
  className,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">

      {label && (
        <label className="font-medium">
          {label}
        </label>
      )}

      <input
        className={clsx(
          "rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500",
          className
        )}
        {...props}
      />

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}

    </div>
  );
}

export default Input;