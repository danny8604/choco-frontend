import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import FormAuth from "../formAuth/FormAuth";
import { resetFormState } from "../formAuth/formAuthSlice";
import FormLink from "../../components/ui/form/formLink/FormLink";
import RememberCheckBox from "../../components/ui/form/rememberCheckbox/RememberCheckBox";
import styles from "./Login.module.scss";
import { userLogin } from "./loginSlice";
import EmailInput from "../../components/ui/form/emailInput/EmailInput";
import PasswordInput from "../../components/ui/form/passwordInput/PasswordInput";
import FormLoginButton from "../../components/ui/form/formLoginButton/FormLoginButton";
import { userShoppingCart } from "../cart/cartItem/cartSlice";
import axios from "axios";

const Login = () => {
  const { emailValue, passwordValue, emailIsValid, passwordIsValid } =
    useAppSelector((state) => state.formAuth);
  const { login, userCart } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  const LoginSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/login`,
        {
          email: emailValue,
          password: passwordValue,
        }
      );
      const tokenExpirationDate = new Date(
        new Date().getTime() + 1000 * 60 * 60
      );

      dispatch(resetFormState());
      dispatch(
        userLogin({
          userEmail: response.data.user.email,
          userId: response.data.user.userId,
          userToken: response.data.user.token,
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
          expiration: tokenExpirationDate.toISOString(),
        })
      );
      console.log(response.data.userCart, "response.data.userCart");
      localStorage.setItem(
        "cart",
        JSON.stringify({ userCart: response.data.userCart })
      );
    } catch (err) {
      console.log(err);
    }
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
