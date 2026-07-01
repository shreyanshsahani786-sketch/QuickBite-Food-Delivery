import { Link, useRouteError } from "react-router-dom";

function ErrorFallback() {
  const error = useRouteError();

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center gap-6">

      <h1 className="text-5xl font-bold">
        Something went wrong
      </h1>

      <p>
        {error?.statusText || error?.message}
      </p>

      <Link
        to="/"
        className="rounded-lg bg-orange-500 px-5 py-3 text-white"
      >
        Back Home
      </Link>

    </div>
  );
}

export default ErrorFallback;