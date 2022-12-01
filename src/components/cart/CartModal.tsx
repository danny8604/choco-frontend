import { useAppSelector, useUser, useUserCart } from "../../app/hooks";
import styles from "./CartModal.module.scss";
import CartItem from "./CartItem";

const CartModal = () => {
  const loginForm = useAppSelector((state) => state.loginForm);
  const userCart = useUserCart(loginForm.userId);
  const navbar = useAppSelector((state) => state.navbar);

  console.log(userCart?.userCartData);

  return (
    <section
      className={`${styles.contentContainer}   ${
        navbar.showModalToggle && navbar.cartIsClick && styles.active
      }`}
    >
      <div className={styles.cartContainer}>
        <CartItem />
      </div>
      <div className={styles.cartTotalPrice}>
        <h3>TOTAL PRICE: $249.99</h3>
      </div>
    </section>
  );
};

export default CartModal;
