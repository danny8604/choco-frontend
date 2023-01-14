import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import FormInput from "../formAuth/FormAuth";
import { resetFormState } from "../formAuth/formAuthSlice";
import FormLink from "../../components/ui/form/formLink/FormLink";
import styles from "./register.module.scss";
import EmailInput from "../../components/ui/form/emailInput/EmailInput";
import PasswordInput from "../../components/ui/form/passwordInput/PasswordInput";
import FormLoginButton from "../../components/ui/form/formLoginButton/FormLoginButton";
import axios from "axios";
import UtilModal from "../utilModal/UtilModal";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useAppDispatch();
  const { emailValue, passwordValue, emailIsValid, passwordIsValid } =
    useAppSelector((state) => state.formAuth);
  const navigate = useNavigate();
  const [signupSubmit, setSignupSubmit] = useState(false);
  const [signupMeesage, setSignupMeesage] = useState("");

  useEffect(() => {
    if (signupSubmit) {
      const timer = setTimeout(() => {
        setSignupSubmit(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [signupSubmit]);

  const SignUpSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetFormState());

    // Sign Up account
    try {
      await axios.post("http://localhost:5000/api/users/signup", {
        email: emailValue,
        password: passwordValue,
      });
    } catch (err) {
      setSignupMeesage("Signup failed. email already exisit.");
      return setSignupSubmit(true);
    }
    setSignupMeesage("Your signup successed.");
    setSignupSubmit(true);
  };

  const formIsValid = emailIsValid && passwordIsValid;

  return (
    <form onSubmit={SignUpSubmitHandler} className={styles.form}>
      <UtilModal modalClass="" show={signupSubmit}>
        <p>{signupMeesage}</p>
      </UtilModal>
      <FormInput>
        <EmailInput />
        <PasswordInput />
      </FormInput>
      {formIsValid && <FormLoginButton buttonText={"SIGN UP ➝"} />}
      <FormLink link={"login"} content={"LOGIN HERE"} />
    </form>
  );
};

export default Register;
