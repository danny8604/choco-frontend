import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { resetFormState } from "../formAuth/formAuthSlice";
import FormLink from "../../components/ui/form/formLink/FormLink";
import styles from "./register.module.scss";
import FormInput from "../../components/ui/form/formInput/FormInput";
import FormLoginButton from "../../components/ui/form/formLoginButton/FormLoginButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { openUtilModal } from "../utilModal/utilModalSlice";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const SignUpSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetFormState());

    // Sign Up account
    try {
      await axios.post("http://localhost:5000/api/users/signup", {
        email: values.email,
        password: values.password,
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
    <form onSubmit={SignUpSubmitHandler} className={styles.form}>
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
      <FormLoginButton buttonText={"SIGN UP ➝"} />
      <FormLink link={"login"} content={"LOGIN HERE"} />
    </form>
  );
};

export default Register;
