import { Link } from "react-router-dom";
import LoginForm from "../ui/form/LoginForm";
import styles from "./LoginTop.module.scss";

const LoginTop = () => {
  return (
    <section className={styles.topSection}>
      <div className={styles.leadText}>
        <h3>LOGIN CHOCO STORE</h3>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginTop;
