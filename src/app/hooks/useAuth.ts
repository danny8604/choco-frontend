import axios from "axios";
import { useEffect, useState } from "react";
import {
  getFavoriteItems,
  getUserCart,
  getUserOrder,
} from "../../api/usersApi";
import getErrorMessage from "../../components/util/getErrorMessage";
import {
  resetShoppingCart,
  userShoppingCart,
} from "../../features/cart/cartItem/cartSlice";
import {
  userFavoriteItems,
  userLogin,
  userLogout,
} from "../../features/login/loginSlice";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import { Orders } from "../type";
import { useAppDispatch, useAppSelector } from "./hooks";
import useUser from "./useUser";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const { login, userToken, tokenExpirationDate } = useAppSelector(
    (state) => state.login
  );
  const [ordersResult, setOrdersResult] = useState<Orders | null>(null);

  ////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const fetchGoogleUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/auth/login/success",
          { withCredentials: true }
        );
        const tokenExpirationDate = new Date(
          new Date().getTime() + 1000 * 60 * 30
        );
        console.log(response, "🐧🐧🐧");
        if (response.data.status !== 200) return;
        const data = response.data;

        dispatch(
          userLogin({
            userEmail: data.user.email,
            userId: data.user.userId,
            userToken: data.user.token,
            tokenExpirationDate: tokenExpirationDate.toISOString(),
          })
        );
        dispatch(userShoppingCart(data.userCart));
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userId: data.user.userId,
            userEmail: data.user.email,
            userToken: data.user.token,
            login: true,
            tokenExpirationDate: tokenExpirationDate.toISOString(),
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchGoogleUser();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("userData")) return;

    const userData = JSON.parse(localStorage.getItem("userData") || "");

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
    }
  }, []);

  let logoutTimer: NodeJS.Timeout;
  useEffect(() => {
    if (userToken && tokenExpirationDate) {
      const remainingTime =
        new Date(tokenExpirationDate).getTime() - new Date().getTime();
      logoutTimer = setTimeout(() => {
        dispatch(userShoppingCart([]));
        dispatch(userFavoriteItems([]));
        dispatch(userLogout());
        localStorage.removeItem("userData");
      }, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [tokenExpirationDate, userToken]);

  useEffect(() => {
    if (!(login && userToken)) return;

    getUserCart(userToken)
      .then((data) => dispatch(userShoppingCart(data)))
      .catch((err) =>
        dispatch(openUtilModal({ message: getErrorMessage(err) }))
      );

    getUserOrder(userToken)
      .then((data) => {
        data.orders.length === 0
          ? setOrdersResult(null)
          : setOrdersResult(data);
      })
      .catch((err) => {
        dispatch(openUtilModal({ message: getErrorMessage(err) }));
      });

    getUserOrder(userToken)
      .then((data) => {
        data.orders.length === 0
          ? setOrdersResult(null)
          : setOrdersResult(data);
      })
      .catch((err) => {
        dispatch(openUtilModal({ message: getErrorMessage(err) }));
      });

    getFavoriteItems(userToken)
      .then((data) => {
        dispatch(userFavoriteItems(data));
      })
      .catch((err) => {
        dispatch(openUtilModal({ message: getErrorMessage(err) }));
      });
  }, [login, userToken]);

  return {
    ordersResult,
  };
};

export default useAuth;
