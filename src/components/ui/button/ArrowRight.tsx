import { ArrowRight } from "../icon/Arrow";
import styles from "./ArrowRight.module.scss";

type ButtonProps = {
  className?: string;
  clickAciton: () => void;
};

const ArrowRightBtn = ({ clickAciton, className }: ButtonProps) => {
  return (
    <button
      onClick={() => clickAciton()}
      className={`${styles.arrowRightBtn} ${className && styles[className]}`}
    >
      <ArrowRight />
    </button>
  );
};

export default ArrowRightBtn;
