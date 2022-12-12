import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks/hooks";
import {
  getName,
  nameTouched,
  nameValid,
} from "../../../../features/formAuth/formAuthSlice";
import styles from "./NameInput.module.scss";

const NameInput = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { nameIsTouched, nameIsValid } = useAppSelector(
    (state) => state.formAuth
  );
  const { formClean } = useAppSelector((state) => state.formAuth);

  useEffect(() => {
    nameInputRef.current!.value = "";
  }, [formClean]);

  const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getName(e.target.value));
    if (e.target.value.length > 0) {
      dispatch(nameValid(true));
    }
    if (e.target.value.length <= 0) {
      dispatch(nameValid(false));
    }
  };

  const nameTouchHandler = () => {
    dispatch(nameTouched(true));
  };

  const nameTouchedButNotValid = nameIsTouched && !nameIsValid;

  return (
    <input
      className={`${styles.formInput} ${
        nameTouchedButNotValid && styles.nameNotValid
      }  ${nameIsValid && styles.nameValid}`}
      id="text"
      type="text"
      name="text"
      placeholder="Name"
      ref={nameInputRef}
      onBlur={nameTouchHandler}
      onChange={nameInputHandler}
    />
  );
};

export default NameInput;
