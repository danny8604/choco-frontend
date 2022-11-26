import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DiningRoomTop from "./components/shop/diningRoom/DiningRoomTop";
import HomeRoomTop from "./components/shop/homeRoom/HomeRoomTop";
import OthersTop from "./components/shop/others/OthersTop";
import DiningRoomPage from "./pages/DiningRoomPage";
import ErrorPage from "./pages/ErrorPage";
import HomeRoomPage from "./pages/HomeRoomPage";
import LivingRoomPage from "./pages/LivingRoomPage";
import MainPage from "./pages/MainPage";
import OthersPage from "./pages/OthersPage";
import ShopPage from "./pages/ShopPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <ShopPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop/Living-Room",
    element: <LivingRoomPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop/Home-Room",
    element: <HomeRoomPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop/Dining-Room",
    element: <DiningRoomPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop/Others",
    element: <OthersPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
