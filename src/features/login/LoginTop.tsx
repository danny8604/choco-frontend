import LoginForm from "./loginForm/LoginForm";
import styles from "./LoginTop.module.scss";

const LoginTop = () => {
  const test = () => {
    console.log("🦔🦔🦔🦔🦔");
  };
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
