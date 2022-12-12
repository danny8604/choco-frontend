import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import FormInput from "../formAuth/FormAuth";
import { resetFormState } from "../formAuth/formAuthSlice";
import FormLink from "../../components/ui/form/formLink/FormLink";
import { resetSignUpToken } from "./registerSlice";
import styles from "./register.module.scss";
import { postSignUpData } from "./registerSlice";
import { useNavigate } from "react-router-dom";
import EmailInput from "../../components/ui/form/emailInput/EmailInput";
import PasswordInput from "../../components/ui/form/passwordInput/PasswordInput";
import FormLoginButton from "../../components/ui/form/formLoginButton/FormLoginButton";

const Register = () => {
  const dispatch = useAppDispatch();
  const { emailValue, passwordValue, emailIsValid, passwordIsValid } =
    useAppSelector((state) => state.formAuth);
  const navigate = useNavigate();
  const { signUpToken, registerError } = useAppSelector(
    (state) => state.register
  );

  useEffect(() => {
    if (signUpToken) {
      alert("Register succeed!!");
      navigate("/login");
      dispatch(resetSignUpToken());
    }
  }, [signUpToken]);

  useEffect(() => {
    if (registerError) {
      dispatch(resetFormState());
    }
  }, [registerError]);

  const SignUpSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sign Up account
    dispatch(
      postSignUpData({
        email: emailValue,
        password: passwordValue,
        returnSecureToken: true,
        errorMessage: "Register Error!! ( email or password has existed... )",
      })
    );

    dispatch(resetFormState());
  };

  const formIsValid = emailIsValid && passwordIsValid;

  return (
    <form onSubmit={SignUpSubmitHandler} className={styles.form}>
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
