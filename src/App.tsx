import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Root from "./pages/Root";
import CheckoutPage from "./pages/CheckoutPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
// import DiningRoomPage from "./pages/DiningRoomPage";
// import HomeRoomPage from "./pages/HomeRoomPage";
// import LivingRoomPage from "./pages/LivingRoomPage";
// import OthersPage from "./pages/OthersPage";
// import ShopPage from "./pages/ShopPage";
// import ProductPage from "./pages/ProductPage";

const HomeRoomPage = React.lazy(() => import("./pages/HomeRoomPage"));
const LivingRoomPage = React.lazy(() => import("./pages/LivingRoomPage"));
const DiningRoomPage = React.lazy(() => import("./pages/DiningRoomPage"));
const OthersPage = React.lazy(() => import("./pages/OthersPage"));
const ShopPage = React.lazy(() => import("./pages/ShopPage"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));

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
        path: "login",
        element: <LoginPage />,
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

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
