import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks/hooks";
import {
  getPhone,
  phoneTouched,
  phoneValid,
} from "../../../../features/formAuth/formAuthSlice";
import styles from "./phoneInput.module.scss";

const PhoneInput = () => {
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { phoneIsTouched, phoneIsValid } = useAppSelector(
    (state) => state.formAuth
  );
  const { formClean } = useAppSelector((state) => state.formAuth);

  useEffect(() => {
    phoneInputRef.current!.value = "";
  }, [formClean]);

  const phoneInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getPhone(e.target.value));
    if (e.target.value.length === 10) {
      dispatch(phoneValid(true));
    }
    if (!(e.target.value.length === 10)) {
      dispatch(phoneValid(false));
    }
  };

  const phoneTouchHandler = () => {
    dispatch(phoneTouched(true));
  };

  const phoneTouchedButNotValid = phoneIsTouched && !phoneIsValid;

  return (
    <input
      className={`${styles.formInput}  ${
        phoneTouchedButNotValid && styles.phoneNotValid
      }  ${phoneIsValid && styles.phoneValid}`}
      id="phone"
      type="number"
      name="phone"
      placeholder="phone"
      ref={phoneInputRef}
      onBlur={phoneTouchHandler}
      onChange={phoneInputHandler}
    />
  );
};

export default PhoneInput;
