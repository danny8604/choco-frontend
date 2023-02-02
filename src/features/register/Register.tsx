import { useState } from "react";
import FormLink from "../../components/ui/form/formLink/FormLink";
import FormLoginButton from "../../components/ui/form/formLoginButton/FormLoginButton";
import useUser from "../../app/hooks/useUser";
import Form from "../../components/ui/form/Form";

const Register = () => {
  const { authUserSignup, isLoading } = useUser();
  const [values, setValues] = useState({
    signupEmail: "",
    signupPassword: "",
  });

  const SignUpSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authUserSignup(values.signupEmail, values.signupPassword);
  };

  const inputs = [
    {
      id: 1,
      errorMessage:
        "Enter your email in the following format: name@example.com",
      input: {
        type: "email",
        name: "signupEmail",
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
        name: "signupPassword",
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
      submitAction={SignUpSubmitHandler}
      changeHandler={changeHandler}
      inputs={inputs}
      footer={
        <>
          <FormLoginButton buttonText={"SIGN UP ➝"} disabled={isLoading} />
          <FormLink link={"login"} content={"LOGIN HERE"} />
        </>
      }
    />
  );
};

export default Register;
