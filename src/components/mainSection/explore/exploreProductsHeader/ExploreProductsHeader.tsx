import styles from "./ExploreProductsHeader.module.scss";
import { ArrowLeft, ArrowRight } from "../../../ui/icon/Arrow";

type ExploroProductHeaderProps = {
  clickLeft(): void;
  clickRight(): void;
};

const ExploroProductHeader = ({
  clickLeft,
  clickRight,
}: ExploroProductHeaderProps) => {
  return (
    <header className={styles.header}>
      <h3>EXPLORE ALL NEW PRODUCTS</h3>
      <div className={styles.arrowIconContainer}>
        <button className={styles.leftIcon} onClick={() => clickLeft()}>
          <ArrowLeft />
        </button>
        <button className={styles.rightIcon} onClick={() => clickRight()}>
          <ArrowRight />
        </button>
      </div>
    </header>
  );
};

export default ExploroProductHeader;
