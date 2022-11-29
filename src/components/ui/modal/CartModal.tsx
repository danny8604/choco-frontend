import { useAppSelector } from "../../../app/hooks";
import styles from "./CartModal.module.scss";

const CartModal = () => {
  const navbar = useAppSelector((state) => state.navbar);
  return (
    <section
      className={`${styles.contentContainer}   ${
        navbar.showModalToggle && navbar.cartIsClick && styles.active
      }`}
    >
      <div>
        <h4>Cart</h4>
      </div>
    </section>
  );
};

export default CartModal;
