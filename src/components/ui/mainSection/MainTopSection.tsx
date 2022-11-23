import styles from "./MainTopSection.module.scss";

const MainTopSection = () => {
  return (
    <section className={styles.topSection}>
      <div className={styles.leadText}>
        <h1>DESIGNER CHAIR</h1>
        <p>FOREVER RELEVANT IN TIME</p>
        <button className={styles.shopNowbutton}>SHOP NOW ➝</button>
      </div>
    </section>
  );
};

export default MainTopSection;
