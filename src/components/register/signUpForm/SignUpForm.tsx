import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import FormInput from "../../ui/form/formInput/FormInput";
import { resetFormState } from "../../ui/form/formInput/FormInputSlice";
import FormLink from "../../ui/form/formLink/FormLink";
import { resetSignUpToken } from "./SignUpFormSlice";
import styles from "./SignUpForm.module.scss";
import { SignUpFormData } from "./SignUpFormSlice";
import { useNavigate } from "react-router-dom";
import { PostData } from "../../../app/PostDataSlice";

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const formInput = useAppSelector((state) => state.formInput);
  const navigate = useNavigate();
  const { isLoading, signUpToken, signUpUserId } = useAppSelector(
    (state) => state.signUpForm
  );

  const SignUpSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sign Up account
    dispatch(
      SignUpFormData({
        email: formInput.emailValue,
        password: formInput.passwordValue,
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

export default SignUpForm;
