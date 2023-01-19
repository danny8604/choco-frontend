import { useAppSelector } from "../../app/hooks/hooks";
import CartItem from "../../features/cart/cartItem/CartItem";
import CartTotalPrice from "../../features/cartModal/CartTotalPrice";
import styles from "./CheckoutFormCart.module.scss";

const CheckoutFormCart = () => {
  const { shoppingCart, shoppingCartTotalQuantity, shoppingCartTotalPrice } =
    useAppSelector((state) => state.cart);

  return (
    <div className={styles.cartInfoContainer}>
      <div className={styles.cartInfoTitle}>
        <div className={styles.cartQuantity}>
          {shoppingCartTotalQuantity ? (
            <h3>{shoppingCartTotalQuantity} items in your cart</h3>
          ) : (
            <h3>Your shopping cart is empty</h3>
          )}
        </div>
        <CartTotalPrice totalPrice={shoppingCartTotalPrice} />
      </div>

      {shoppingCart.map((item) => (
        <CartItem
          key={item.productId._id}
          productId={item.productId}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default CheckoutFormCart;
