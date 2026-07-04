import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "@/shared/layouts/PublicLayout";

import HomePage from "@/features/home/pages/HomePage";
import RestaurantsPage from "@/features/restaurants/pages/RestaurantsPage";
import RestaurantDetailsPage from "@/features/restaurants/pages/RestaurantDetailsPage";
import CartPage from "@/features/cart/pages/CartPage";
import WishlistPage from "@/features/wishlist/pages/WishlistPage";
import CheckoutPage from "@/features/checkout/pages/CheckoutPage";
import OrderSuccessPage from "@/features/checkout/pages/OrderSuccessPage";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import ProfilePage from "@/features/profile/pages/ProfilePage";
import OrdersPage from "@/features/orders/pages/OrdersPage";

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
        path: "login",
        element: <LoginPage />,
     },
    {  
        path: "register",
       element: <RegisterPage />,
    },
    {
      path: "profile",
      element: <ProfilePage />,
    },
      {
        path: "restaurants",
        element: <RestaurantsPage />,
      },
      {
        path: "restaurants/:id",
        element: <RestaurantDetailsPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
     },
      {
        path:"order-success",
        element:<OrderSuccessPage/>
      }
      
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;