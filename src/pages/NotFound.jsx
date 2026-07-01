import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center">

      <h1 className="text-7xl font-bold text-orange-500">
        404
      </h1>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-orange-500 px-6 py-3 text-white"
      >
        Go Home
      </Link>

    </div>
  );
}

export default NotFound;