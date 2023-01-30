import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../api/axios";
import {
  postUserChangePassword,
  postUserLogin,
  postUserSignup,
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
import { useAppDispatch, useAppSelector } from "./hooks";

const useUser = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { login, userToken } = useAppSelector((state) => state.login);
  const [isLoading, setIsLoading] = useState(false);

  const authUserLogout = () => {
    if (!login) return;

    dispatch(userLogout());
    dispatch(userFavoriteItems([]));
    dispatch(userShoppingCart([]));
    dispatch(
      openUtilModal({
        message: "You have been logged out.",
        isSucceed: true,
      })
    );
    window.open(`${baseURL}auth/logout`, "_self");
    localStorage.removeItem("userData");
  };

  const authUserLogin = async (email: string, password: string) => {
    setIsLoading(true);
    const tokenExpirationDate = new Date(new Date().getTime() + 1000 * 60 * 30);

    postUserLogin(email, password)
      .then((data) => {
        dispatch(
          openUtilModal({
            message: "Logged in success.",
            isSucceed: true,
          })
        );
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
            showChangePassword: true,
            tokenExpirationDate: tokenExpirationDate.toISOString(),
          })
        );

        setIsLoading(false);
        navigate("/shop");
      })
      .catch((err) => {
        setIsLoading(false);
        dispatch(
          openUtilModal({
            message: getErrorMessage(err),
          })
        );
      });
  };

  const authUserSignup = async (email: string, password: string) => {
    setIsLoading(true);
    postUserSignup(email, password)
      .then(() => {
        dispatch(
          openUtilModal({
            message: "Your signup successed.",
            isSucceed: true,
            showbutton: false,
          })
        );
        setIsLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        setIsLoading(false);
        dispatch(
          openUtilModal({
            message: getErrorMessage(err),
            isSucceed: false,
            showbutton: false,
          })
        );
      });
  };

  const authUserChangePassword = async (values: {
    originPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    if (!(login && userToken)) {
      dispatch(openUtilModal({ message: "Please log in first." }));
      return navigate("/login");
    }

    postUserChangePassword({ ...values, userToken })
      .then(() => {
        dispatch(userLogout());
        dispatch(resetShoppingCart());
        dispatch(
          openUtilModal({
            message: "Change password success.",
            isSucceed: true,
          })
        );
        navigate("/login");
        localStorage.removeItem("userData");
      })
      .catch((err) =>
        dispatch(
          openUtilModal({
            message: getErrorMessage(err),
          })
        )
      );
  };

  return {
    authUserLogin,
    authUserLogout,
    authUserSignup,
    authUserChangePassword,
    isLoading,
  };
};

export default useUser;
