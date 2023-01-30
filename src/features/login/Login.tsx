import React, { useState } from "react";
import FormLink from "../../components/ui/form/formLink/FormLink";
import styles from "./Login.module.scss";
import FormLoginButton from "../../components/ui/form/formLoginButton/FormLoginButton";
import FormInput from "../../components/ui/form/formInput/FormInput";
import useAuth from "../../app/hooks/useAuth";
import useUser from "../../app/hooks/useUser";
import Button from "../../components/ui/button/Button";
import axios from "axios";

const Login = () => {
  const { authUserLogin, isLoading } = useUser();
  const [values, setValues] = useState({
    email: "test@test.com",
    password: "123123123",
  });

  const LoginSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authUserLogin(values.email, values.password);
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

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <form onSubmit={LoginSubmitHandler} className={styles.form}>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          errorMessage={input.errorMessage}
          props={{ ...input.input }}
          onChange={changeHandler}
        />
      ))}
      <FormLoginButton buttonText={"LOGIN ➝"} disabled={isLoading} />
      <FormLink link={"register"} content={"REGISTER CHOCO ACCOUNT"} />
    </form>
  );
};

export default Login;
