import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import FormLink from "../../components/ui/form/formLink/FormLink";

import styles from "./Login.module.scss";
import { userLogin } from "./loginSlice";

import FormLoginButton from "../../components/ui/form/formLoginButton/FormLoginButton";
import { userShoppingCart } from "../cart/cartItem/cartSlice";
import axios from "axios";
import { openUtilModal } from "../utilModal/utilModalSlice";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/ui/form/formInput/FormInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [values, setValues] = useState({
    email: "test@test.com",
    password: "123123123",
  });

  const LoginSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/login`,
        {
          email: values.email,
          password: values.password,
        }
      );
      const tokenExpirationDate = new Date(
        new Date().getTime() + 1000 * 60 * 60
      );
      dispatch(
        openUtilModal({
          message: "Logged in success.",
          isSucceed: true,
          showbutton: false,
        })
      );
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
      localStorage.setItem(
        "cart",
        JSON.stringify({ userCart: response.data.userCart })
      );
      navigate("/");
    } catch (err) {
      dispatch(
        openUtilModal({
          message: "Logged in failed.",
          isSucceed: false,
          showbutton: false,
        })
      );
    }
  };

  const inputs = [
    {
      id: 1,
      errorMessage:
        "Enter your email in the following format: name@example.com",
      input: {
        type: "email",
        name: "email",
        label: "email",
        placeholder: "EMAIL",
        pattern: values.email,
        required: true,
      },
    },
    {
      id: 2,
      errorMessage: "Password should be 8-20 characters.",
      input: {
        type: "password",
        name: "password",
        label: "password",
        placeholder: "PASSWORD",
        pattern: "^[A-Za-z0-9]{8,20}$",
        required: true,
      },
    },
  ];

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={LoginSubmitHandler} className={styles.form}>
      {inputs.map((input) => {
        return (
          <FormInput
            key={input.id}
            errorMessage={input.errorMessage}
            props={{ ...input.input }}
            onChange={changeHandler}
          />
        );
      })}
      <FormLoginButton buttonText={"LOGIN ➝"} />
      <FormLink link={"register"} content={"REGISTER CHOCO ACCOUNT"} />
    </form>
  );
};

export default Login;
