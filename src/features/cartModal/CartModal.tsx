import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import styles from "./CartModal.module.scss";
import CartItem from "../cart/cartItem/CartItem";
import CartTotalPrice from "./CartTotalPrice";
import RemoveIconBtn from "../../components/ui/button/removeIconBtn/RemoveIconBtn";
import { closeBackdrop } from "../backdrop/backdropSlice";
import { closeCartModal } from "./cartModalSlice";
import CartLeadCheckout from "./CartLeadCheckout";
import SideModal from "../../components/ui/sideModal/SideModal";

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
    <SideModal show={cartModalIsOpen}>
      <>
        <div className={`${styles.cartNav} flex-alignCenter-justifyBetween`}>
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
          {shoppingCartTotalQuantity > 0 && (
            <CartTotalPrice totalPrice={shoppingCartTotalPrice} />
          )}
          {shoppingCart.length > 0 && <CartLeadCheckout />}
        </div>
      </>
    </SideModal>
  );
};

export default CartModal;
