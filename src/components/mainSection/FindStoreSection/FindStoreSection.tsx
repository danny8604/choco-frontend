import styles from "./FindStoreSection.module.scss";
import chair10 from "../../../assets/mainSectionIMG/chair-10.jpg";
import { Link } from "react-router-dom";

const FindStore = () => {
  return (
    <section className={styles.findStoreSection}>
      <div className={styles.storePhoto}>
        <img src={chair10} alt="an interior with white sofa and table" />
      </div>
      <div className={styles.storeInfor}>
        <div>
          <h3>FIND YOUR NEAREST RETAIL STORE</h3>
          <p>
            CHOCO is an exclusive, international design brand whose timeless
            collection unites world-famous classic and contemporary furniture,
            lighting and accessories.
          </p>
        </div>
        <div>
          <Link to="/about">FIND STORE ➝</Link>
        </div>
      </div>
    </section>
  );
};

export default FindStore;
