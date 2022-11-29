import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DiningRoomPage from "./pages/DiningRoomPage";
import ErrorPage from "./pages/ErrorPage";
import HomeRoomPage from "./pages/HomeRoomPage";
import LivingRoomPage from "./pages/LivingRoomPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import OthersPage from "./pages/OthersPage";
import Root from "./pages/Root";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
// import "./App.css";

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
        path: "product/:id",
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
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
