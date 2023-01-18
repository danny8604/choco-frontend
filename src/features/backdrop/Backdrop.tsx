import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { closeCartModal } from "../cartModal/cartModalSlice";
import { closeDesignerModal } from "../designerModal/designerModalSlicel";
import { closeInfoModal } from "../infoModal/infoModalSlice";
import { closeSearchModal } from "../searchModal/searchModalSlice";
import { closeUtilModal } from "../utilModal/utilModalSlice";
import styles from "./Backdrop.module.scss";
import { closeBackdrop } from "./backdropSlice";

const Backdrop = () => {
  const dispatch = useAppDispatch();
  const { backdropIsOpen } = useAppSelector((state) => state.backdrop);

  const backdropClickHandeler = () => {
    dispatch(closeBackdrop());
    dispatch(closeCartModal());
    dispatch(closeSearchModal());
    dispatch(closeDesignerModal());
    dispatch(closeInfoModal());
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
