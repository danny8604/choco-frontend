import { useAppSelector, useUser } from "../../app/hooks/hooks";
import styles from "./CartModal.module.scss";
import CartItem from "./cartItem/CartItem";
import CartTotalPrice from "./CartTotalPrice";
import { useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";

const CartModal = () => {
  const navbar = useAppSelector((state) => state.navbar);
  const cart = useAppSelector((state) => state.cart);
  const { signInToken, userId, isLogin, isLogout, isLoading } = useAppSelector(
    (state) => state.loginForm
  );
  const { userData } = useUser(userId);

  useEffect(() => {
    if (signInToken) {
      // Updata firebase shopping cart
      console.log("post 🐧🐧 ");
      const db = getDatabase();
      set(ref(db, `users/${userId}/`), {
        shoppingCart: cart.shoppingCart,
      });
      // Updata localStorage auth
    }
    localStorage.setItem(
      "auth",
      JSON.stringify({
        userId: userId,
        signInToken: signInToken,
        isLogin: isLogin,
        isLogout: isLogout,
        isLoading: isLoading,
      })
    );
    localStorage.setItem("shopping-cart", JSON.stringify(cart.shoppingCart));
  }, [userId, signInToken, isLogin, isLogout, isLoading, cart.shoppingCart]);

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
