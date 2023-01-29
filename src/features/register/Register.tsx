import { useState } from "react";
import FormLink from "../../components/ui/form/formLink/FormLink";
import styles from "./Register.module.scss";
import FormInput from "../../components/ui/form/formInput/FormInput";
import FormLoginButton from "../../components/ui/form/formLoginButton/FormLoginButton";
import useUser from "../../app/hooks/useUser";

const Register = () => {
  const { authUserSignup } = useUser();
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
    <form onSubmit={SignUpSubmitHandler} className={styles.form}>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          errorMessage={input.errorMessage}
          props={{ ...input.input }}
          onChange={changeHandler}
        />
      ))}
      <FormLoginButton buttonText={"SIGN UP ➝"} />
      <FormLink link={"login"} content={"LOGIN HERE"} />
    </form>
  );
};

export default Register;
