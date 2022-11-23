import styles from "./MainMiddleSection.module.scss";
import chart05 from "../../assets/chair-05.jpg";
import chart06 from "../../assets/chair-06.jpg";

const MainMiddleSection = () => {
  return (
    <>
      <section className={styles.middleSection}>
        <div className={styles.middleSectionText}>
          <h2>ANYTHING BUT ORDINARY</h2>
          <p>FOREVER RELEVANT IN TIME</p>
          <button className={styles.shopNowbutton}>SHOP NOW ➝</button>
        </div>
        <div className={styles.imgSide}>
          <img
            className={styles.imgRight}
            loading="lazy"
            src={chart06}
            alt="a green chair"
          />
        </div>
      </section>
      <section className={styles.middleSection}>
        <div className={styles.imgSide}>
          <img
            className={styles.imgLeft}
            loading="lazy"
            src={chart05}
            alt="a wooden chair"
          />
        </div>
        <div className={styles.middleSectionText}>
          <h2>ANYTHING BUT ORDINARY</h2>
          <p>FOREVER RELEVANT IN TIME</p>
          <button className={styles.shopNowbutton}>SHOP NOW ➝</button>
        </div>
      </section>
    </>
  );
};

export default MainMiddleSection;
