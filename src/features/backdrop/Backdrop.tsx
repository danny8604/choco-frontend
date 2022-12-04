import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { closeCartModal } from "../cartModal/cartModalSlice";
import { closeSearchModal } from "../searchModal/searchModalSlice";
import styles from "./Backdrop.module.scss";
import { closeBackdrop } from "./backdropSlice";

const Backdrop = () => {
  const dispatch = useAppDispatch();
  const { backdropIsOpen } = useAppSelector((state) => state.backdrop);

  const backdropClickHandeler = () => {
    dispatch(closeBackdrop());
    dispatch(closeCartModal());
    dispatch(closeSearchModal());
  };

  return (
    <div
      onClick={() => backdropClickHandeler()}
      className={`${styles.backdrop} ${
        backdropIsOpen && styles.backdropActive
      }`}
    ></div>
  );
};

export default Backdrop;
