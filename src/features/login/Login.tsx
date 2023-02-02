import React, { useState } from "react";
import FormLink from "../../components/ui/form/formLink/FormLink";
import FormLoginButton from "../../components/ui/form/formLoginButton/FormLoginButton";
import useUser from "../../app/hooks/useUser";
import { FormInputs } from "../../app/type";
import Form from "../../components/ui/form/Form";

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

  const inputs: FormInputs[] = [
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
    <Form
      submitAction={LoginSubmitHandler}
      changeHandler={changeHandler}
      inputs={inputs}
      footer={
        <>
          <FormLoginButton buttonText={"LOGIN ➝"} disabled={isLoading} />
          <FormLink link={"register"} content={"REGISTER CHOCO ACCOUNT"} />
        </>
      }
    />
  );
};

export default Login;
