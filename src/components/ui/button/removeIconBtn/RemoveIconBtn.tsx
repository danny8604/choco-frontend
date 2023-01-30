import useCart from "../../../../app/hooks/useCart";
import removeIcon from "../../../../assets/svg/close-outline.svg";
import refresh from "../../../../assets/svg/refresh-outline.svg";
import styles from "./RemoveIconBtn.module.scss";

type RemoveBtnProps = {
  onClick(): void;
  removeIsLoading?: boolean;
};
const RemoveBtn = ({ onClick, removeIsLoading }: RemoveBtnProps) => {
  return (
    <button
      onClick={() => onClick()}
      disabled={removeIsLoading}
      className={`${removeIsLoading && styles.isLoading}`}
    >
      {removeIsLoading ? <img src={refresh} /> : <img src={removeIcon} />}
    </button>
  );
};

export default RemoveBtn;
