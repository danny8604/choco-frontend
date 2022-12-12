import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { formCleaner } from "./formAuthSlice";

import styles from "./FormAuth.module.scss";

interface FormInputProps {
  children: JSX.Element[];
}

const FormAuth = ({ children }: FormInputProps) => {
  const { emailIsValid, passwordIsValid } = useAppSelector(
    (state) => state.formAuth
  );
  const dispatch = useAppDispatch();

  // check Form
  const formIsValid = emailIsValid && passwordIsValid;

  //formCleaner
  const cleaneFormHandler = () => {
    dispatch(formCleaner());
  };

  return (
    <div
      className={`${styles.inputContainer} ${
        formIsValid && styles.inputActive
      } `}
    >
      {children}
    </div>
  );
};

export default FormAuth;
