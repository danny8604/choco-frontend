import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks/hooks";
import {
  getAddress,
  addressTouched,
  addressValid,
} from "../../../../features/formAuth/formAuthSlice";
import styles from "./AddressInput.module.scss";

const AddressInput = () => {
  const dispatch = useAppDispatch();
  const addressInputRef = useRef<HTMLInputElement>(null);
  const { addressIsTouched, addressIsValid } = useAppSelector(
    (state) => state.formAuth
  );
  const { formClean } = useAppSelector((state) => state.formAuth);

  useEffect(() => {
    addressInputRef.current!.value = "";
  }, [formClean]);

  const addressInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getAddress(e.target.value));
    if (e.target.value.length > 0) {
      dispatch(addressValid(true));
    }
    if (e.target.value.length <= 0) {
      dispatch(addressValid(false));
    }
  };

  const addressTouchHandler = () => {
    dispatch(addressTouched(true));
  };

  const addressTouchedButNotValid = addressIsTouched && !addressIsValid;

  return (
    <input
      className={`${styles.formInput} ${
        addressTouchedButNotValid && styles.addressNotValid
      } ${addressIsValid && styles.addressValid}`}
      id="address"
      type="text"
      name="address"
      placeholder="address"
      ref={addressInputRef}
      onBlur={addressTouchHandler}
      onChange={addressInputHandler}
    />
  );
};

export default AddressInput;
