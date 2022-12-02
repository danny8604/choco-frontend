import { useAppSelector } from "../../app/hooks/hooks";
import styles from "./CartModal.module.scss";
import CartItem from "./cartItem/CartItem";
import CartTotalPrice from "./CartTotalPrice";
import { useEffect } from "react";

const CartModal = () => {
  const navbar = useAppSelector((state) => state.navbar);
  const cart = useAppSelector((state) => state.cart);
  const login = useAppSelector((state) => state.loginForm);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cart.shoppingCart));
  }, [cart.shoppingCart]);

  return (
    <section
      className={`${styles.contentContainer}   ${
        navbar.showModalToggle && navbar.cartIsClick && styles.active
      }`}
    >
      <div className={styles.cartContainer}>
        {cart.shoppingCart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            img={item.img}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <CartTotalPrice totalPrice={cart.shoppingCartTotalPrice} />
    </section>
  );
};

export default CartModal;
