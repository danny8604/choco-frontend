import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks/hooks";
import Backdrop from "../../features/backdrop/Backdrop";
import CartModal from "../../features/cartModal/CartModal";
import styles from "./Modal.module.scss";
import SearchModal from "../../features/searchModal/SearchModal";
import DesignerModal from "../../features/designerModal/DesignerModal";
import InfoModal from "../../features/infoModal/InfoModal";
import UtilModal from "../../features/utilModal/UtilModal";

const Modal = () => {
  const { backdropIsOpen } = useAppSelector((state) => state.backdrop);

  useEffect(() => {
    document.body.style.overflow = backdropIsOpen ? "hidden" : "auto";
  }, [backdropIsOpen]);

  return (
    <aside className={`${styles.modalContainer} ${styles.active}`}>
      <Backdrop />
      <SearchModal />
      <CartModal />
      <DesignerModal />
      <InfoModal />
      <UtilModal />
    </aside>
  );
};

export default Modal;
