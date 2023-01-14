import React, { Suspense, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Root from "./pages/Root";
import CheckoutPage from "./pages/CheckoutPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import DiningRoomPage from "./pages/DiningRoomPage";
import HomeRoomPage from "./pages/HomeRoomPage";
import LivingRoomPage from "./pages/LivingRoomPage";
import OthersPage from "./pages/OthersPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import { useAppDispatch, useAppSelector } from "./app/hooks/hooks";
import { userLogin } from "./features/login/loginSlice";
import {
  updateTotalPriceAndQuantity,
  userShoppingCart,
} from "./features/cart/cartItem/cartSlice";
import OrderPage from "./pages/OrderPage";
import UserPage from "./pages/UserPage";
import UserChangePasswordPage from "./pages/UserChangePasswordPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
      },
      {
        path: "shop/Living-Room",
        element: <LivingRoomPage />,
      },

      {
        path: "shop/Home-Room",
        element: <HomeRoomPage />,
      },
      {
        path: "shop/Dining-Room",
        element: <DiningRoomPage />,
      },
      {
        path: "shop/Others",
        element: <OthersPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "order",
        element: <OrderPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
      {
        path: "changePassword",
        element: <UserChangePasswordPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

const cart = JSON.parse(localStorage.getItem("cart") || "");

function App() {
  const dispatch = useAppDispatch();
  const { shoppingCart } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(userShoppingCart(cart.userCart));
    dispatch(updateTotalPriceAndQuantity());

    if (!localStorage.getItem("userData")) {
      return;
    }
    const userData = JSON.parse(localStorage.getItem("userData") || "");

    if (userData && new Date(userData.expiration) > new Date()) {
      dispatch(
        userLogin({
          userId: userData.userId,
          userEmail: userData.userEmail,
          userToken: userData.userToken,
          login: userData.login,
        })
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify({
        userCart: shoppingCart,
      })
    );
    dispatch(updateTotalPriceAndQuantity());
  }, [shoppingCart]);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
