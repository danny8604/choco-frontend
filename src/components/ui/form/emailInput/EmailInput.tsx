import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks/hooks";
import {
  emailTouched,
  emailValid,
  getEmail,
} from "../../../../features/formAuth/formAuthSlice";
import styles from "./EmailInput.module.scss";

const EmailInput = () => {
  const { emailIsValid, emailIsTouched, formClean } = useAppSelector(
    (state) => state.formAuth
  );
  const { backdropIsOpen } = useAppSelector((state) => state.backdrop);
  const { isRememberEmail, userEmail, isLogin } = useAppSelector(
    (state) => state.login
  );
  const { shoppingCart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (userEmail && isRememberEmail) {
      emailInputRef.current!.value = userEmail;
      dispatch(getEmail(userEmail));
      dispatch(emailValid(true));
    }
    if (!(userEmail && isRememberEmail)) {
      emailInputRef.current!.value = "";
    }
    if (isLogin && userEmail && shoppingCart.length > 0) {
      emailInputRef.current!.value = userEmail;
      dispatch(emailValid(true));
    }
  }, [userEmail, isRememberEmail, formClean]);

  const emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getEmail(e.target.value));
    if (e.target.value.includes("@")) {
      dispatch(emailValid(true));
    }
    if (!e.target.value.includes("@")) {
      dispatch(emailValid(false));
    }
  };
  const emailTouchHandler = () => {
    dispatch(emailTouched(true));
  };

  const emailTouchedButNotValid = emailIsTouched && !emailIsValid;

  return (
    <input
      className={`${styles.formInput} ${
        emailTouchedButNotValid && styles.emailNotValid
      } ${backdropIsOpen && styles.modalActive} ${
        emailIsValid && styles.emailValid
      }`}
      id="email"
      type="email"
      name="email"
      placeholder="Email"
      ref={emailInputRef}
      onBlur={emailTouchHandler}
      onChange={emailInputHandler}
    />
  );
};

export default EmailInput;
