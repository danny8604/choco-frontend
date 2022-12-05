import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import FormInput from "../formAuth/FormAuth";
import { resetFormState } from "../formAuth/formAuthSlice";
import FormLink from "../../components/form/formLink/FormLink";
import { resetSignUpToken } from "./registerSlice";
import styles from "./register.module.scss";
import { postSignUpData } from "./registerSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useAppDispatch();
  const formAuth = useAppSelector((state) => state.formAuth);
  const navigate = useNavigate();
  const { signUpToken } = useAppSelector((state) => state.register);

  const SignUpSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sign Up account
    dispatch(
      postSignUpData({
        email: formAuth.emailValue,
        password: formAuth.passwordValue,
        returnSecureToken: true,
        errorMessage: "Register Error!!",
      })
    );
    dispatch(resetFormState());

    // Create userInfor in firebase
  };

  useEffect(() => {
    if (signUpToken) {
      alert("Register succeed!!");
      navigate("/login");
      dispatch(resetSignUpToken());
    }
  }, [signUpToken]);

  return (
    <form onSubmit={SignUpSubmitHandler} className={styles.formContainer}>
      <FormInput buttonText={"SIGN UP ➝"} />
      <FormLink link={"login"} content={"LOGIN HERE"} />
    </form>
  );
};

export default Register;
