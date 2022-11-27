import { useAppSelector } from "../../../app/hooks";
import Backdrop from "../backdrop/Backdrop";
import styles from "./SearchModal.module.scss";

const SearchModal = () => {
  const navbar = useAppSelector((state) => state.navbar);

  return (
    <aside className={styles.modalContainer}>
      <Backdrop />

      <section
        className={`${styles.contentContainer} ${styles.search}  ${
          navbar.showModalToggle && navbar.searchIsClick && styles.active
        }`}
      >
        <h4>Search</h4>
      </section>

      <section
        className={`${styles.contentContainer} ${styles.cart}  ${
          navbar.showModalToggle && navbar.cartIsClick && styles.active
        }`}
      >
        <h4>Cart</h4>
      </section>
    </aside>
  );
};

export default SearchModal;
