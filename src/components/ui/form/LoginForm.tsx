import React from "react";
import { Link, useActionData } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import styles from "./LoginForm.module.scss";
import {
  getEmail,
  getPassword,
  emailValid,
  passwordValid,
} from "./LoginFormSlice";

const LoginForm = () => {
  const loginForm = useAppSelector((state) => state.loginForm);
  const dispatch = useAppDispatch();

  // Email input
  const emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getEmail(e.target.value));
    if (e.target.value.includes("@")) {
      dispatch(emailValid(true));
    }
    if (!e.target.value.includes("@")) {
      dispatch(emailValid(false));
    }
  };

  // Password input
  const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getPassword(e.target.value));
    if (e.target.value.length > 8) {
      dispatch(passwordValid(true));
    }
    if (e.target.value.length <= 8) {
      dispatch(passwordValid(false));
    }
  };

  // Form submit
  const LoginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginForm.emailValue, loginForm.passwordValue, "🦔");
  };

  // check Form
  const formIsValid = loginForm.emailIsValid && loginForm.passwordIsValid;

  return (
    <form onSubmit={LoginSubmitHandler} className={styles.loginForm}>
      <div className={styles.loginInput}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          onChange={emailInputHandler}
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          minLength={8}
          onChange={passwordInputHandler}
        />
      </div>
      {formIsValid && (
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.loginButton}>
            LOGIN ➝
          </button>
        </div>
      )}
      <div className={styles.rememberCheck}>
        <input type="checkbox" name="remember" id="remember" />
        <label htmlFor="remember">REMEMBER EMAIL</label>
      </div>
      <div className={styles.linkContainer}>
        <Link to="/">REGISTER CHOCO ACCOUNT</Link>
      </div>
    </form>
  );
};

export default LoginForm;
