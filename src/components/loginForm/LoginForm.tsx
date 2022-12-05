import Login from "../../features/login/Login";
import styles from "./LoginForm.module.scss";

const LoginTop = () => {
  const test = () => {
    console.log("🦔🦔🦔🦔🦔");
  };
  return (
    <section className={styles.topSection}>
      <div className={styles.leadText}>
        <h3>LOGIN CHOCO STORE</h3>
        <Login />
      </div>
    </section>
  );
};

export default LoginTop;
