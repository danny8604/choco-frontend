import Login from "../../features/login/Login";
import Map from "../about/StoreMap";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <section className={styles.formWrapper}>
      <div className={styles.formTitle}>
        <h3>LOGIN CHOCO STORE</h3>
        <Login />
      </div>
    </section>
  );
};

export default LoginForm;
