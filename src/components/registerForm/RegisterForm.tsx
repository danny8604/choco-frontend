import Register from "../../features/register/Register";
import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  return (
    <section className={styles.formWrapper}>
      <div className={styles.formTitle}>
        <h3>REGISTER CHOCO STORE</h3>
        <Register />
      </div>
    </section>
  );
};

export default RegisterForm;
