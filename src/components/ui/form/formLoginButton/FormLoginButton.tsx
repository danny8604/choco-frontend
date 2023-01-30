import { useAppDispatch } from "../../../../app/hooks/hooks";

import styles from "./FormLoginButton.module.scss";

interface LoginButtonProps {
  buttonText: string;
  disabled: boolean;
}

const FormLoginButton = ({ buttonText, disabled }: LoginButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button type="submit" disabled={disabled} className={styles.loginButton}>
        {disabled ? "Loading ..." : buttonText}
      </button>
    </div>
  );
};

export default FormLoginButton;
