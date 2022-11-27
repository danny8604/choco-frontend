import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DiningRoomPage from "./pages/DiningRoomPage";
import ErrorPage from "./pages/ErrorPage";
import HomeRoomPage from "./pages/HomeRoomPage";
import LivingRoomPage from "./pages/LivingRoomPage";
import LivingRoomProductPage from "./pages/LivingRoomProductPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import OthersPage from "./pages/OthersPage";
import Root from "./pages/Root";
import ShopPage from "./pages/ShopPage";

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
        path: "shop/Living-Room",
        element: <LivingRoomPage />,
      },
      {
        path: "shop/Living-Room/:id",
        element: <LivingRoomProductPage />,
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
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },

  // {
  //   path: "main",
  //   element: <MainPage />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "shop",
  //   element: <ShopPage />,
  //   errorElement: <ErrorPage />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
