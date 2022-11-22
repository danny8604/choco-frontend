import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
  return (
    <section className={styles.section}>
      <h1>Oops</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </section>
  );
};

export default ErrorPage;
