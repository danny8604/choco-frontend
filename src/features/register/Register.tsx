import SignUpForm from "./signUpForm/SignUpForm";
import styles from "./Register.module.scss";

const Register = () => {
  return (
    <section className={styles.topSection}>
      <div className={styles.leadText}>
        <h3>REGISTER CHOCO STORE</h3>
        <SignUpForm />
      </div>
    </section>
  );
};

export default Register;
