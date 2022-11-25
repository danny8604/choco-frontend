import styles from "./AddToCartSection.module.scss";
import chair01 from "../../../assets/mainSectionIMG/chair-01.jpg";
import chair02 from "../../../assets/mainSectionIMG/chair-02.jpg";
import chair07 from "../../../assets/mainSectionIMG/chair-07.jpg";

const AddToCartSection = () => {
  return (
    <section className={styles.sofaSection}>
      <div className={styles.sofaCardLeft}>
        <div className={styles.sofaCard}>
          <img className={styles.sofaImageLeft} src={chair07} alt="test" />
          <h3>Sofasofa</h3>
          <p>$245.00</p>
          <button className={styles.sofaButton}>ADD TO CART</button>
        </div>
      </div>

      <div className={styles.sofaCardMid}>
        <div className={styles.sofaCard}>
          <img className={styles.sofaImageMid} src={chair01} alt="test" />
          <h3>Sofasofa</h3>
          <p>$245.00</p>
          <button className={styles.sofaButton}>ADD TO CART</button>
        </div>
      </div>

      <div className={styles.sofaCardRight}>
        <div className={styles.sofaCard}>
          <img className={styles.sofaImageRight} src={chair02} alt="test" />
          <h3>Sofasofa</h3>
          <p>$245.00</p>
          <button className={styles.sofaButton}>ADD TO CART</button>
        </div>
      </div>
    </section>
  );
};

export default AddToCartSection;
