import styles from "./SeeMoreSection.module.scss";
import chair01 from "../../../assets/mainSectionIMG/chair-01.jpg";
import chair02 from "../../../assets/mainSectionIMG/chair-02.jpg";
import chair07 from "../../../assets/mainSectionIMG/chair-07.jpg";
import { Link } from "react-router-dom";

const AddToCartSection = () => {
  return (
    <section className={styles.sofaSection}>
      <div className={styles.sofaCardLeft}>
        <div className={styles.sofaCard}>
          <img className={styles.sofaImageLeft} src={chair07} alt="chair" />
          <h3>Chair</h3>
          <p>$245.00</p>
          <Link to={"/shop"} reloadDocument>
            <button className={styles.sofaButton}>SEE MORE</button>
          </Link>
        </div>
      </div>

      <div className={styles.sofaCardMid}>
        <div className={styles.sofaCard}>
          <img className={styles.sofaImageMid} src={chair01} alt="chair" />
          <h3>Chair</h3>
          <p>$245.00</p>
          <Link to={"/shop"} reloadDocument>
            <button className={styles.sofaButton}>SEE MORE</button>
          </Link>
        </div>
      </div>

      <div className={styles.sofaCardRight}>
        <div className={styles.sofaCard}>
          <img className={styles.sofaImageRight} src={chair02} alt="chair" />
          <h3>Chair</h3>
          <p>$245.00</p>
          <Link to={"/shop"} reloadDocument>
            <button className={styles.sofaButton}>SEE MORE</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AddToCartSection;
