import styles from "./ShopTop.module.scss";
import { Link } from "react-router-dom";

const ShopTop = () => {
  return (
    <section className={styles.topSection}>
      <Link
        to="/shop/Living-Room"
        reloadDocument
        className={`${styles.LivingRoom} ${styles.container}`}
      >
        <h4>LIVING ROOM</h4>
      </Link>
      <Link
        to="/shop/Home-Room"
        reloadDocument
        className={`${styles.homeOffice} ${styles.container}`}
      >
        <h4>HOME ROOM</h4>
      </Link>
      <Link
        to="/shop/Dining-Room"
        reloadDocument
        className={`${styles.diningRoom} ${styles.container}`}
      >
        <h4>DINING ROOM</h4>
      </Link>
      <Link
        to="/shop/Others"
        reloadDocument
        className={`${styles.others} ${styles.container}`}
      >
        <h4>OTHERS</h4>
      </Link>
    </section>
  );
};

export default ShopTop;
