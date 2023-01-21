import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

type authUserLoginProps = {
  email: string;
  password: string;
};

const useAuth = () => {
  const dispatch = useAppDispatch();
  const { login, userToken, tokenExpirationDate } = useAppSelector(
    (state) => state.login
  );
  const navigate = useNavigate();

  ////////////////////////////////////////////////////////////////////////

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

  useEffect(() => {
    let logoutTimer;
    if (userToken && tokenExpirationDate) {
      const remainingTime =
        new Date(tokenExpirationDate).getTime() - new Date().getTime();
      logoutTimer = setTimeout(() => {
        dispatch(resetShoppingCart());
        return dispatch(userLogout());
      }, remainingTime);
      console.log(remainingTime, "remainingTime");
    } else {
      clearTimeout(logoutTimer);
    }
  }, [userToken, tokenExpirationDate]);

  const authUserLogout = () => {
    if (login) {
      dispatch(userLogout());
      dispatch(userFavoriteItems([]));
      dispatch(userShoppingCart([]));
      localStorage.removeItem("userData");
      dispatch(
        openUtilModal({
          message: "You have been logged out.",
          isSucceed: true,
        })
      );
    }
  };

  ////////////////////////////////////////////////////////////////////////

  const authUserLogin = async ({ email, password }: authUserLoginProps) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/login`,
        {
          email: email,
          password: password,
        }
      );
      const tokenExpirationDate = new Date(
        new Date().getTime() + 1000 * 60 * 60
      );
      dispatch(
        openUtilModal({
          message: "Logged in success.",
          isSucceed: true,
        })
      );
      dispatch(
        userLogin({
          userEmail: response.data.user.email,
          userId: response.data.user.userId,
          userToken: response.data.user.token,
          tokenExpirationDate: tokenExpirationDate.toISOString(),
        })
      );
      dispatch(userShoppingCart(response.data.userCart));
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: response.data.user.userId,
          userEmail: response.data.user.email,
          userToken: response.data.user.token,
          login: true,
          tokenExpirationDate: tokenExpirationDate.toISOString(),
        })
      );

      navigate("/");
    } catch (err) {
      dispatch(
        openUtilModal({
          message: "Logged in failed.",
        })
      );
    }
  };

  const authUserSignup = async (email: string, password: string) => {
    try {
      await axios.post("http://localhost:5000/api/users/signup", {
        email: email,
        password: password,
      });
      dispatch(
        openUtilModal({
          message: "Your signup successed.",
          isSucceed: true,
          showbutton: false,
        })
      );
      navigate("/login");
    } catch (err) {
      return dispatch(
        openUtilModal({
          message: "Your signup failed.",
          isSucceed: false,
          showbutton: false,
        })
      );
    }
  };

  const authUserChangePassword = async (values: {
    originPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    if (!login) {
      dispatch(openUtilModal({ message: "Please log in first." }));
      return navigate("/login");
    }

    try {
      await axios.post(
        "http://localhost:5000/api/users/changePassword",
        values,
        {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        }
      );
      dispatch(userLogout());
      dispatch(resetShoppingCart());
      localStorage.removeItem("userData");
      dispatch(
        openUtilModal({ message: "Change password success.", isSucceed: true })
      );
      navigate("/login");
    } catch (err) {
      dispatch(
        openUtilModal({
          message: "Change password failed. please check your origin password.",
        })
      );
    }
  };

  return {
    authUserLogin,
    authUserLogout,
    authUserSignup,
    authUserChangePassword,
  };
};

export default useAuth;
