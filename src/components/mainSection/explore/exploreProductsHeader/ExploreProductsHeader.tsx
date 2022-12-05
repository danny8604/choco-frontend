import styles from "./ExploreProductsHeader.module.scss";
import { ArrowLeft, ArrowRight } from "../../../ui/icon/Arrow";

const ExploroProductHeader = () => {
  return (
    <header className={styles.header}>
      <h3>EXPLORE PRODUCTS BY CATEGORY</h3>
      <div className={styles.arrowIconContainer}>
        <button className={styles.leftIcon}>
          <ArrowLeft />
        </button>
        <button className={styles.rightIcon}>
          <ArrowRight />
        </button>
      </div>
    </header>
  );
};

export default ExploroProductHeader;
