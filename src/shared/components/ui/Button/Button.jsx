import clsx from "clsx";

const variants = {
  primary:
    "bg-orange-500 hover:bg-orange-600 text-white",

  secondary:
    "bg-teal-500 hover:bg-teal-600 text-white",

  outline:
    "border border-orange-500 text-orange-500 hover:bg-orange-50",

  danger:
    "bg-red-500 hover:bg-red-600 text-white",

  success:
    "bg-green-600 hover:bg-green-700 text-white",

  ghost:
    "hover:bg-gray-100 text-gray-700",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  className = "",
  ...props
}) {
  const sizes = {
    sm: "px-3 py-2 text-sm",

    md: "px-5 py-2.5",

    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      className={clsx(
        "rounded-xl font-semibold transition disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;