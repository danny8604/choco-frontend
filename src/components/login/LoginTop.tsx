import { Link } from "react-router-dom";
import styles from "./LoginTop.module.scss";

const LoginTop = () => {
  return (
    <section className={styles.topSection}>
      <div className={styles.leadText}>
        <h3>LOGIN CHOCO STORE</h3>
        <form className={styles.userForm}>
          <div className={styles.userInput}>
            <input id="email" type="email" name="email" placeholder="Email" />
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className={styles.rememberCheck}>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">REMEMBER EMAIL</label>
          </div>
        </form>
        <div className={styles.linkContainer}>
          <Link to="/">REGISTER CHOCO ACCOUNT</Link>
        </div>
      </div>
    </section>
  );
};

export default LoginTop;
