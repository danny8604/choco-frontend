import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import styles from "./CartModal.module.scss";
import CartItem from "./cartItem/CartItem";
import CartTotalPrice from "./CartTotalPrice";
import { useEffect } from "react";
import { child, get, getDatabase, ref, set } from "firebase/database";
import {
  updateTotalPriceAndQuantity,
  userShoppingCart,
} from "./cartItem/CartSlice";
import { dbRef } from "../../app/firebase-config";

const CartModal = () => {
  const navbar = useAppSelector((state) => state.navbar);
  const cart = useAppSelector((state) => state.cart);
  const { userId, isLogin } = useAppSelector((state) => state.loginForm);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLogin) {
      const fetchUserCartData = async () => {
        try {
          const response = await get(child(dbRef, `users/${userId}/`));

          if (response.exists()) {
            dispatch(userShoppingCart(response.val().shoppingCart));
            dispatch(updateTotalPriceAndQuantity());
          }
        } catch (err) {
          console.error(err);
        }
      };

      localStorage.setItem(
        "auth",
        JSON.stringify({
          userId: userId,
          isLogin: isLogin,
          isLogout: !isLogin,
        })
      );

      localStorage.removeItem("shopping-cart");

      fetchUserCartData();
    }
  }, [isLogin]);

  useEffect(() => {
    if (isLogin) {
      // Updata firebase shopping cart
      const db = getDatabase();
      set(ref(db, `users/${userId}/`), {
        shoppingCart: cart.shoppingCart,
      });
      localStorage.removeItem("shopping-cart");
    }

    if (!isLogin) {
      localStorage.setItem("shopping-cart", JSON.stringify(cart.shoppingCart));
    }
  }, [userId, isLogin, cart.shoppingCart]);

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
