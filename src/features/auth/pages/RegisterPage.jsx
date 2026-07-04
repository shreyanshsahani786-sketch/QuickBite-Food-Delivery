import { useState } from "react";
import {
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  registerUser,
} from "../authSlice";

import {
  selectIsAuthenticated,
} from "../selectors";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    selectIsAuthenticated
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    if (formData.password.length < 6) {
      toast.error(
        "Password must contain at least 6 characters"
      );

      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      toast.error("Passwords do not match");
      return;
    }

    const account = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    localStorage.setItem(
      "quickbite-account",
      JSON.stringify(account)
    );

    dispatch(
      registerUser({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      })
    );

    toast.success(
      "Account created successfully"
    );

    navigate("/profile");
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4 py-12">

      <div className="w-full max-w-lg rounded-3xl border bg-white p-8 shadow-lg">

        <div className="mb-8 text-center">

          <div className="mb-3 text-5xl">
            🍕
          </div>

          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Join QuickBite and start ordering food
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>
            <label className="mb-2 block font-semibold">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

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
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
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
              placeholder="Create password"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-gray-500">
          Already have an account?{" "}

          <Link
            to="/login"
            className="font-bold text-orange-500"
          >
            Login
          </Link>
        </p>

      </div>

    </main>
  );
}

export default RegisterPage;