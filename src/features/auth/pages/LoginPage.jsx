import { useState } from "react";
import {
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  login,
} from "../authSlice";

import {
  selectIsAuthenticated,
} from "../selectors";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    selectIsAuthenticated
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    const savedAccount = localStorage.getItem(
      "quickbite-account"
    );

    if (savedAccount) {
      const account = JSON.parse(savedAccount);

      if (
        account.email !== formData.email ||
        account.password !== formData.password
      ) {
        toast.error("Invalid email or password");
        return;
      }

      dispatch(
        login({
          name: account.name,
          email: account.email,
          phone: account.phone || "",
        })
      );
    } else {
      dispatch(
        login({
          name: formData.email.split("@")[0],
          email: formData.email,
          phone: "",
        })
      );
    }

    toast.success("Login successful");

    navigate("/profile");
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border bg-white p-8 shadow-lg">

        <div className="mb-8 text-center">
          <div className="mb-3 text-5xl">
            🍔
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Login to continue ordering with QuickBite
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{" "}

          <Link
            to="/register"
            className="font-bold text-orange-500"
          >
            Create Account
          </Link>
        </p>

      </div>
    </main>
  );
}

export default LoginPage;