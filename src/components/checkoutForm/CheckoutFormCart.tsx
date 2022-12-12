import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";
import CartItem from "../../features/cart/cartItem/CartItem";
import CartCheckout from "../../features/cartModal/CartLeadCheckout";
import CartTotalPrice from "../../features/cartModal/CartTotalPrice";
import styles from "./CheckoutFormCart.module.scss";

const CheckoutFormCart = () => {
  const { shoppingCart, shoppingCartTotalQuantity, shoppingCartTotalPrice } =
    useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    if (shoppingCart.length === 0) {
      navigate("/");
    }
  }, [shoppingCart]);

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
          key={item.id}
          id={item.id}
          img={item.img}
          price={item.price}
          path={item.path}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default CheckoutFormCart;
