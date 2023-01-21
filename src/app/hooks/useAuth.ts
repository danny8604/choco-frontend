import axios from "axios";
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
  const { login, userToken } = useAppSelector((state) => state.login);
  const navigate = useNavigate();

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
