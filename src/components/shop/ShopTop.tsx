import styles from "./ShopTop.module.scss";
import { Link } from "react-router-dom";

const ShopTop = () => {
  return (
    <section className={styles.topSection}>
      <Link
        to="/shop/Living-Room"
        className={`${styles.LivingRoom} ${styles.container} flex-alignCenter-justifyCenter`}
      >
        <h4>LIVING ROOM</h4>
      </Link>
      <Link
        to="/shop/Home-Room"
        className={`${styles.homeOffice} ${styles.container} flex-alignCenter-justifyCenter`}
      >
        <h4>HOME ROOM</h4>
      </Link>
      <Link
        to="/shop/Dining-Room"
        className={`${styles.diningRoom} ${styles.container} flex-alignCenter-justifyCenter`}
      >
        <h4>DINING ROOM</h4>
      </Link>
      <Link
        to="/shop/Others"
        className={`${styles.others} ${styles.container}`}
      >
        <h4>OTHERS</h4>
      </Link>
    </section>
  );
};

export default ShopTop;
