import { useNavigate } from "react-router-dom";
import styles from "./TopSection.module.scss";

const TopSection = () => {
  const navigate = useNavigate();
  const shopHandler = () => {
    navigate("/shop");
  };
  return (
    <section className={styles.topSection}>
      <div className={styles.leadText}>
        <h1>DESIGNER CHAIR</h1>
        <p>FOREVER RELEVANT IN TIME</p>
        <button className={styles.shopNowbutton} onClick={() => shopHandler()}>
          SHOP NOW ➝
        </button>
      </div>
    </section>
  );
};

export default TopSection;
