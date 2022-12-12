import styles from "./CarouselBtn.module.scss";
import { ArrowLeft, ArrowRight } from "../../components/ui/icon/Arrow";

type CarouselBtnProps = {
  clickLeft(): void;
  clickRight(): void;
};

const CarouselBtn = ({ clickLeft, clickRight }: CarouselBtnProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={`${styles.carouselButton}  ${styles.prev}`}
        onClick={() => clickLeft()}
      >
        <ArrowLeft />
      </button>
      <button
        className={`${styles.carouselButton}  ${styles.next}`}
        onClick={() => clickRight()}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default CarouselBtn;
