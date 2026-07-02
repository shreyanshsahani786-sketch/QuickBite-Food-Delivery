import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-2xl text-white">
        🍔
      </div>

      <div>
        <h1 className="text-xl font-bold text-orange-500">
          QuickBite
        </h1>

        <p className="text-xs text-gray-500">
          Fast. Fresh. Delivered.
        </p>
      </div>
    </Link>
  );
}

export default Logo;