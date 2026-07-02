import {
  createBrowserRouter,
} from "react-router-dom";

import PublicLayout from "@/shared/layouts/PublicLayout";

import HomePage from "@/features/home/pages/HomePage";

import RestaurantsPage from "@/features/restaurants/pages/RestaurantsPage";

import CartPage from "@/features/cart/pages/CartPage";

import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",

    element: <PublicLayout />,

    children: [
      {
        index: true,

        element: <HomePage />,
      },

      {
        path: "restaurants",

        element: <RestaurantsPage />,
      },

      {
        path: "cart",

        element: <CartPage />,
      },
    ],
  },

  {
    path: "*",

    element: <NotFound />,
  },
]);

export default router;