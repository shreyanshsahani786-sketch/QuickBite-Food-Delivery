import {
  Navigate,
  useNavigate,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import toast from "react-hot-toast";

import {
  logout,
} from "@/features/auth/authSlice";

import {
  selectCurrentUser,
  selectIsAuthenticated,
} from "@/features/auth/selectors";

function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(
    selectCurrentUser
  );

  const isAuthenticated = useSelector(
    selectIsAuthenticated
  );

  if (!isAuthenticated || !user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  const handleLogout = () => {
    dispatch(logout());

    toast.success(
      "Logged out successfully"
    );

    navigate("/login");
  };

  const firstLetter =
    user.name?.charAt(0).toUpperCase() || "U";

  return (
    <main className="min-h-[80vh] bg-gray-50 py-12">

      <div className="container mx-auto px-4">

        <h1 className="mb-8 text-4xl font-bold">
          My Profile
        </h1>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border bg-white shadow-lg">

          <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-10">

            <div className="flex items-center gap-5">

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl font-bold text-orange-500 shadow">

                {firstLetter}

              </div>

              <div className="text-white">

                <h2 className="text-3xl font-bold">
                  {user.name}
                </h2>

                <p className="mt-1 opacity-90">
                  QuickBite Customer
                </p>

              </div>

            </div>

          </div>

          <div className="p-8">

            <h3 className="mb-6 text-2xl font-bold">
              Account Information
            </h3>

            <div className="grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl bg-gray-50 p-5">

                <p className="text-sm text-gray-500">
                  Full Name
                </p>

                <p className="mt-1 font-bold">
                  {user.name}
                </p>

              </div>

              <div className="rounded-2xl bg-gray-50 p-5">

                <p className="text-sm text-gray-500">
                  Email Address
                </p>

                <p className="mt-1 font-bold">
                  {user.email}
                </p>

              </div>

              <div className="rounded-2xl bg-gray-50 p-5">

                <p className="text-sm text-gray-500">
                  Phone Number
                </p>

                <p className="mt-1 font-bold">
                  {user.phone ||
                    "Not provided"}
                </p>

              </div>

              <div className="rounded-2xl bg-gray-50 p-5">

                <p className="text-sm text-gray-500">
                  Account Status
                </p>

                <p className="mt-1 font-bold text-green-600">
                  Active
                </p>

              </div>

            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <button
                onClick={() =>
                  navigate("/orders")
                }
                className="rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
              >
                View Orders
              </button>

              <button
                onClick={handleLogout}
                className="rounded-xl border border-red-500 px-6 py-3 font-bold text-red-500 transition hover:bg-red-50"
              >
                Logout
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ProfilePage;