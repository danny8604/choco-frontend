import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks/hooks";
import Backdrop from "../../features/backdrop/Backdrop";
import CartModal from "../../features/cartModal/CartModal";
import styles from "./Modal.module.scss";
import SearchModal from "../../features/searchModal/SearchModal";

const Modal = () => {
  const { backdropIsOpen } = useAppSelector((state) => state.backdrop);

  // useEffect(() => {
  //   // lock the page when use searchModal and cartModal.
  //   document.body.style.overflow = backdropIsOpen ? "hidden" : "auto";
  //   const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
  //   console.log(scrollBarCompensation);
  //   document.body.style.paddingRight = `17px`;
  // }, [backdropIsOpen]);

  return (
    <aside className={styles.modalContainer}>
      <Backdrop />
      <SearchModal />
      <CartModal />
    </aside>
  );
};

export default Modal;
