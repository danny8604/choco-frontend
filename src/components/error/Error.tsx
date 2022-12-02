import styles from "./Error.module.scss";

const Error = () => {
  return (
    <section className={styles.errorPage}>
      <div className={styles.errorText}>
        <h1>Opps</h1>
        <p>Sorry, an unexpected error has occurred...</p>
      </div>
    </section>
  );
};

export default Error;
