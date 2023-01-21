import { ReactNode, Suspense, useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
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
  resetShoppingCart,
  userShoppingCart,
} from "./features/cart/cartItem/cartSlice";
import OrderPage from "./pages/OrderPage";
import UserPage from "./pages/UserPage";
import UserChangePasswordPage from "./pages/UserChangePasswordPage";
import UserOrderPage from "./pages/UserOrderPage";
import axios from "axios";

let logoutTimer: any;

function App() {
  const dispatch = useAppDispatch();
  const { shoppingCart } = useAppSelector((state) => state.cart);
  const { login, userToken, tokenExpirationDate } = useAppSelector(
    (state) => state.login
  );

  useEffect(() => {
    if (login) {
      const fetchUserCart = async () => {
        const response = await axios.get(
          `http://localhost:5000/api/users/getUserCart/`,
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );
        dispatch(userShoppingCart(response.data.userCart));
      };
      fetchUserCart();
    }
  }, [login, userToken]);

  type ProtectedRouteProps = {
    children: JSX.Element;
  };

  const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    if (!login) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  //////////////////////////////////////////////////////////
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
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "user",
          element: (
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "changePassword",
          element: (
            <ProtectedRoute>
              <UserChangePasswordPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "userOrder",
          element: (
            <ProtectedRoute>
              <UserOrderPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
