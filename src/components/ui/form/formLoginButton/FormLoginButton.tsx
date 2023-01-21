import { useAppDispatch } from "../../../../app/hooks/hooks";

import styles from "./FormLoginButton.module.scss";

interface LoginButtonProps {
  buttonText: string;
}

const FormLoginButton = ({ buttonText }: LoginButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button type="submit" className={styles.loginButton}>
        {buttonText}
      </button>
    </div>
  );
};
export default FormLoginButton;
