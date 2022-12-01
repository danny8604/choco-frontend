import { useEffect } from "react";
import { useAppSelector } from "../../../app/hooks";
import Backdrop from "./backdrop/Backdrop";
import CartModal from "../../cart/CartModal";
import styles from "./Modal.module.scss";
import SearchModal from "../../search/SearchModal";

const Modal = () => {
  const navbar = useAppSelector((state) => state.navbar);

  // lock the page when use searchModal and cartModal.
  useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.overflowY = navbar.showModalToggle ? "hidden" : "auto";
  }, [navbar.showModalToggle]);

  return (
    <aside className={styles.modalContainer}>
      <Backdrop />
      <SearchModal />
      <CartModal />
    </aside>
  );
};

export default Modal;
