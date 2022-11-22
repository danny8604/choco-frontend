import styles from "./MainShopLead.module.scss";
import chart05 from "../../../assets/chair-05.jpg";
import chart06 from "../../../assets/chair-06.jpg";

const ShopLead = () => {
  return (
    <article>
      <section className={styles.mainSection}>
        <div className={styles.text}>
          <h1>DESIGNER CHAIR</h1>
          <p>FOREVER RELEVANT IN TIME</p>
          <button className={styles.shopNowbutton}>SHOP NOW ➝</button>
        </div>
      </section>
      <section className={styles.middleSection}>
        <div className={styles.middleSectionText}>
          <h2>ANYTHING BUT ORDINARY</h2>
          <p>FOREVER RELEVANT IN TIME</p>
          <button className={styles.shopNowbutton}>SHOP NOW ➝</button>
        </div>
        <div className={styles.imgOneSide}>
          <img src={chart06} alt="a green chair" />
        </div>
      </section>
      <section className={styles.middleSection}>
        <div className={styles.imgOneSide}>
          <img src={chart05} alt="a wooden chair" />
        </div>
        <div className={styles.middleSectionText}>
          <h2>ANYTHING BUT ORDINARY</h2>
          <p>FOREVER RELEVANT IN TIME</p>
          <button className={styles.shopNowbutton}>SHOP NOW ➝</button>
        </div>
      </section>
    </article>
  );
};

export default ShopLead;
