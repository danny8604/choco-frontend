import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import FormInput from "../formInput/FormInput";
import {
  emailValid,
  getEmail,
  passwordValid,
  resetFormState,
} from "../formInput/FormInputSlice";
import FormLink from "../formLink/FormLink";
import RememberCheckBox from "../rememberCheckbox/RememberCheckBox";
import styles from "./LoginForm.module.scss";
import { login, postFormData } from "./PostFormSlice";

const LoginForm = () => {
  const formInput = useAppSelector((state) => state.formInput);
  const dispatch = useAppDispatch();
  const postForm = useAppSelector((state) => state.postForm);

  const LoginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      postFormData({
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",
        email: formInput.emailValue,
        password: formInput.passwordValue,
        returnSecureToken: true,
        errorMessage: "Login Error!!",
      })
    );

    dispatch(resetFormState());
  };

  useEffect(() => {
    if (postForm.signInToken) {
      alert("Login succeed");
      dispatch(login());
    }
  }, [postForm.signInToken]);

  return (
    <form onSubmit={LoginSubmitHandler} className={styles.formContainer}>
      <FormInput buttonText={"LOGIN ➝"} />
      <RememberCheckBox />
      <FormLink link={"register"} content={"REGISTER CHOCO ACCOUNT"} />
      {postForm.isLoading && <h3>LOADING...... 🐄🐄🐄</h3>}
    </form>
  );
};

export default LoginForm;
