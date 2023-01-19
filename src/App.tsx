import React, { Suspense, useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
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
import { userLogin, userLogout } from "./features/login/loginSlice";
import {
  updateTotalPriceAndQuantity,
  userShoppingCart,
} from "./features/cart/cartItem/cartSlice";
import OrderPage from "./pages/OrderPage";
import UserPage from "./pages/UserPage";
import UserChangePasswordPage from "./pages/UserChangePasswordPage";
import UserOrderPage from "./pages/UserOrderPage";
import useAuth from "./app/hooks/useAuth";

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
        path: "product/:productPath",
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
        path: "userOrder",
        element: <UserOrderPage />,
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

let logoutTimer: any;

function App() {
  const dispatch = useAppDispatch();
  const { shoppingCart } = useAppSelector((state) => state.cart);
  const { login, userToken, tokenExpirationDate } = useAppSelector(
    (state) => state.login
  );

  useEffect(() => {
    if (!localStorage.getItem("userData") || !localStorage.getItem("cart")) {
      return;
    }
    const userData = JSON.parse(localStorage.getItem("userData") || "");
    const cart = JSON.parse(localStorage.getItem("cart") || "");

    if (userData && new Date(userData.tokenExpirationDate) > new Date()) {
      dispatch(
        userLogin({
          userId: userData.userId,
          userEmail: userData.userEmail,
          userToken: userData.userToken,
          tokenExpirationDate: new Date(
            userData.tokenExpirationDate
          ).toISOString(),
        })
      );
      dispatch(userShoppingCart(cart.userCart));
      dispatch(updateTotalPriceAndQuantity());
    }
  }, []);

  useEffect(() => {
    if (userToken && tokenExpirationDate) {
      const remainingTime =
        new Date(tokenExpirationDate).getTime() - new Date().getTime();
      logoutTimer = setTimeout(() => {
        return dispatch(userLogout());
      }, remainingTime);

      console.log(remainingTime, "remainingTime");
    } else {
      clearTimeout(logoutTimer);
    }
  }, [userToken, tokenExpirationDate]);

  useEffect(() => {
    if (login) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          userCart: shoppingCart,
        })
      );
      dispatch(updateTotalPriceAndQuantity());
    }
  }, [shoppingCart, login]);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
