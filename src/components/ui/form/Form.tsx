import Button from "../button/Button";
import styles from "./Form.module.scss";

type FormProps = {
  formTitle: string;
  children: JSX.Element;
  showGoogleBtn?: boolean;
};

const Form = ({ formTitle, children, showGoogleBtn }: FormProps) => {
  const googleHandler = () => {
    window.open(
      "https://choco-chair-backend.herokuapp.com/auth/google",
      "_self"
    );
  };

  return (
    <section className={styles.formWrapper}>
      <h3>{formTitle}</h3>
      <div className={styles.formContainer}>
        {children}
        {showGoogleBtn && (
          <div className={styles.oAuthBtn}>
            <Button
              btnMessage={"GOOGLE"}
              className={"google"}
              clickAciton={googleHandler}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Form;
