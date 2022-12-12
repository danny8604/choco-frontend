import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import FormAuth from "../formAuth/FormAuth";
import { resetFormState } from "../formAuth/formAuthSlice";
import FormLink from "../../components/ui/form/formLink/FormLink";
import RememberCheckBox from "../../components/ui/form/rememberCheckbox/RememberCheckBox";
import styles from "./Login.module.scss";
import { postLoginData } from "./loginSlice";
import { userLogin } from "./loginSlice";
import { child, get } from "firebase/database";
import { dbRef } from "../../app/firebase-config";
import {
  updateTotalPriceAndQuantity,
  userShoppingCart,
} from "../cart/cartItem/cartSlice";
import EmailInput from "../../components/ui/form/emailInput/EmailInput";
import PasswordInput from "../../components/ui/form/passwordInput/PasswordInput";
import FormLoginButton from "../../components/ui/form/formLoginButton/FormLoginButton";
import Backdrop from "../backdrop/Backdrop";

const Login = () => {
  const { emailValue, passwordValue, emailIsValid, passwordIsValid } =
    useAppSelector((state) => state.formAuth);
  const dispatch = useAppDispatch();
  const { loginIsLoading, userId, isRememberEmail } = useAppSelector(
    (state) => state.login
  );
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(
      "rememberEmail",
      JSON.stringify({
        isRememberEmail: isRememberEmail,
      })
    );
  }, [isRememberEmail]);

  useEffect(() => {
    if (userId) {
      dispatch(userLogin());
      navigate("/shop");

      const fetchUserCartData = async () => {
        try {
          const response = await get(child(dbRef, `users/${userId}/`));
          if (response.exists()) {
            dispatch(userShoppingCart(response.val().shoppingCart));
            dispatch(updateTotalPriceAndQuantity());
          }
        } catch (err) {
          console.error(err);
        }
      };
      localStorage.removeItem("shopping-cart");
      fetchUserCartData();
    }
  }, [userId]);

  const LoginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      postLoginData({
        email: emailValue,
        password: passwordValue,
        returnSecureToken: true,
        errorMessage: "Login Error!!",
      })
    );
    dispatch(resetFormState());
  };

  const formIsValid = emailIsValid && passwordIsValid;

  return (
    <form onSubmit={LoginSubmitHandler} className={styles.form}>
      <FormAuth>
        <EmailInput />
        <PasswordInput />
      </FormAuth>
      {formIsValid && <FormLoginButton buttonText={"LOGIN ➝"} />}
      <RememberCheckBox />
      <FormLink link={"register"} content={"REGISTER CHOCO ACCOUNT"} />
    </form>
  );
};

export default Login;
