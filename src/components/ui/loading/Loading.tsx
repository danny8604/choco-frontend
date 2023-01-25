import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <section className={styles.loadingPage}>
      <div className={styles.loadingText}>
        <h1>Loading</h1>
        <h2> ... ... </h2>
      </div>
    </section>
  );
};

export default Loading;
