import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import {
  getEmail,
  getPassword,
  emailValid,
  passwordValid,
  emailTouched,
  passwordTouched,
} from "./formAuthSlice";

import styles from "./FormAuth.module.scss";
import { useRef } from "react";

interface FormInputProps {
  buttonText: string;
}

const FormInput = ({ buttonText }: FormInputProps) => {
  const formAuth = useAppSelector((state) => state.formAuth);
  const { backdropIsOpen } = useAppSelector((state) => state.backdrop);
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
  const formIsValid = formAuth.emailIsValid && formAuth.passwordIsValid;
  const emailTouchedButNotValid =
    formAuth.emailIsTouched && !formAuth.emailIsValid;
  const passwordTouchedButNotValid =
    formAuth.passwordIsTouched && !formAuth.passwordIsValid;

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
        } ${backdropIsOpen && styles.modalActive}`}
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
