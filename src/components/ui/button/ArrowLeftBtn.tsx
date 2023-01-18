import { ArrowLeft } from "../icon/Arrow";
import styles from "./ArrowLeftBtn.module.scss";

type ButtonProps = {
  className: string;
  clickAciton: () => void;
};

const ArrowLeftBtn = ({ clickAciton, className }: ButtonProps) => {
  return (
    <button
      onClick={() => clickAciton()}
      className={`${styles.arrowLeftBtn} ${styles[className]}`}
    >
      <ArrowLeft />
    </button>
  );
};

export default ArrowLeftBtn;
