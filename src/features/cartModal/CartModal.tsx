import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import styles from "./CartModal.module.scss";
import CartItem from "../cart/cartItem/CartItem";
import CartTotalPrice from "./CartTotalPrice";
import RemoveIconBtn from "../../components/ui/button/removeIconBtn/RemoveIconBtn";
import { closeBackdrop } from "../backdrop/backdropSlice";
import { closeCartModal } from "./cartModalSlice";
import CartLeadCheckout from "./CartLeadCheckout";

const CartModal = () => {
  const { shoppingCart, shoppingCartTotalPrice, shoppingCartTotalQuantity } =
    useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const { cartModalIsOpen } = useAppSelector((state) => state.cartModal);

  const closeCartModalHandler = () => {
    dispatch(closeBackdrop());
    dispatch(closeCartModal());
  };

  return (
    <section
      className={`${styles.contentContainer}   ${
        cartModalIsOpen && styles.active
      }`}
    >
      <div className={styles.cartNav}>
        <div>
          {shoppingCartTotalQuantity ? (
            <h3>{shoppingCartTotalQuantity} items in your cart</h3>
          ) : (
            <h3>Your shopping cart is empty</h3>
          )}
        </div>

        <RemoveIconBtn onClick={closeCartModalHandler} />
      </div>
      <div className={styles.cartContainer}>
        {shoppingCart.map((item) => (
          <CartItem
            key={item.productId._id}
            productId={item.productId}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className={styles.priceContainer}>
        <CartTotalPrice totalPrice={shoppingCartTotalPrice} />
        {shoppingCart.length > 0 && <CartLeadCheckout />}
      </div>
    </section>
  );
};

export default CartModal;
