import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks/hooks";
import {
  getPassword,
  passwordTouched,
  passwordValid,
} from "../../../../features/formAuth/formAuthSlice";
import styles from "./PasswordInput.module.scss";

const PasswordInput = () => {
  const dispatch = useAppDispatch();
  const { passwordIsTouched, passwordIsValid } = useAppSelector(
    (state) => state.formAuth
  );
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const { formClean } = useAppSelector((state) => state.formAuth);

  useEffect(() => {
    passwordInputRef.current!.value = "";
  }, [formClean]);

  const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getPassword(e.target.value));
    if (e.target.value.length > 8) {
      dispatch(passwordValid(true));
    }
    if (e.target.value.length <= 8) {
      dispatch(passwordValid(false));
    }
  };

  const passwordTouchHandler = () => {
    dispatch(passwordTouched(true));
  };

  const passwordTouchedButNotValid = passwordIsTouched && !passwordIsValid;

  return (
    <input
      className={`${styles.formInput}  ${
        passwordTouchedButNotValid && styles.passwordNotValid
      }  ${passwordIsValid && styles.passwordValid} `}
      id="password"
      type="password"
      name="password"
      placeholder="Password"
      minLength={8}
      ref={passwordInputRef}
      onBlur={passwordTouchHandler}
      onChange={passwordInputHandler}
    />
  );
};

export default PasswordInput;
