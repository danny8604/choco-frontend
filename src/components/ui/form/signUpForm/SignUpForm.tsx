import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import FormInput from "../formInput/FormInput";
import { resetFormState } from "../formInput/FormInputSlice";
import FormLink from "../formLink/FormLink";
import { postFormData, resetSignUpToken } from "../loginForm/PostFormSlice";
import styles from "./SignUpForm.module.scss";

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const formInput = useAppSelector((state) => state.formInput);
  const postForm = useAppSelector((state) => state.postForm);

  const SignUpSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sign Up account
    dispatch(
      postFormData({
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
        email: formInput.emailValue,
        password: formInput.passwordValue,
        returnSecureToken: true,
        errorMessage: "Register Error!!",
      })
    );
    console.log(postForm.signUpToken, "fefefefef");
    dispatch(resetFormState());
  };

  useEffect(() => {
    if (postForm.signUpToken) {
      alert("Register succeed!!");
      dispatch(resetSignUpToken());
    }
  }, [postForm.signUpToken]);

  return (
    <form onSubmit={SignUpSubmitHandler} className={styles.formContainer}>
      <FormInput buttonText={"SIGN UP ➝"} />
      <FormLink link={"login"} content={"LOGIN HERE"} />
    </form>
  );
};

export default SignUpForm;
