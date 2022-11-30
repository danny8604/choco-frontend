import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  getEmail,
  getPassword,
  emailValid,
  passwordValid,
  emailTouched,
  passwordTouched,
} from "./FormInputSlice";

import styles from "./FormInput.module.scss";
import { useRef } from "react";

interface FormInputProps {
  buttonText: string;
}

const FormInput = ({ buttonText }: FormInputProps) => {
  const formInput = useAppSelector((state) => state.formInput);
  const dispatch = useAppDispatch();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  // Email input
  const emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getEmail(e.target.value));
    if (e.target.value.includes("@")) {
      dispatch(emailValid(true));
    }
    if (!e.target.value.includes("@")) {
      dispatch(emailValid(false));
    }
  };

  // Password input
  const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getPassword(e.target.value));
    if (e.target.value.length > 8) {
      dispatch(passwordValid(true));
    }
    if (e.target.value.length <= 8) {
      dispatch(passwordValid(false));
    }
  };

  // check Form
  const formIsValid = formInput.emailIsValid && formInput.passwordIsValid;
  const emailTouchedButNotValid =
    formInput.emailIsTouched && !formInput.emailIsValid;
  const passwordTouchedButNotValid =
    formInput.passwordIsTouched && !formInput.passwordIsValid;

  // Form blur
  const emailTouchHandler = () => {
    dispatch(emailTouched(true));
  };
  const passwordTouchHandler = () => {
    dispatch(passwordTouched(true));
  };

  //formCleaner
  const formCleaner = () => {
    emailInputRef.current!.value = "";
    passwordInputRef.current!.value = "";
  };

  return (
    <>
      <div
        className={`${styles.inputContainer} ${
          formIsValid && styles.inputActive
        } ${emailTouchedButNotValid && styles.emailNotValid}  ${
          passwordTouchedButNotValid && styles.passwordNotValid
        }`}
      >
        <input
          className={styles.emailInput}
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          ref={emailInputRef}
          onBlur={emailTouchHandler}
          onChange={emailInputHandler}
        />
        <input
          className={styles.passwordInput}
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          minLength={8}
          ref={passwordInputRef}
          onBlur={passwordTouchHandler}
          onChange={passwordInputHandler}
        />
      </div>
      {formIsValid && (
        <div className={styles.buttonContainer}>
          <button
            onClick={() => formCleaner()}
            type="submit"
            className={styles.loginButton}
          >
            {buttonText}
          </button>
        </div>
      )}
    </>
  );
};

export default FormInput;
