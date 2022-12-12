import { useAppDispatch } from "../../../../app/hooks/hooks";
import { formCleaner } from "../../../../features/formAuth/formAuthSlice";
import styles from "./FormLoginButton.module.scss";

interface LoginButtonProps {
  buttonText: string;
}

const FormLoginButton = ({ buttonText }: LoginButtonProps) => {
  const dispatch = useAppDispatch();
  const cleaneFormHandler = () => {
    dispatch(formCleaner());
  };
  return (
    <div className={styles.buttonContainer}>
      <button
        onClick={() => cleaneFormHandler()}
        type="submit"
        className={styles.loginButton}
      >
        {buttonText}
      </button>
    </div>
  );
};
export default FormLoginButton;
