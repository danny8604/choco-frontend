import { useAppDispatch, useAppSelector, useUser } from "../../app/hooks/hooks";
import styles from "./CartModal.module.scss";
import CartItem from "./cartItem/CartItem";
import CartTotalPrice from "./CartTotalPrice";
import { useEffect } from "react";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { ShoppingCart, ShoppingCartItem } from "../../app/type";
import { useDispatch } from "react-redux";
import {
  addToCart,
  updateItemQuantity,
  updateTotalPriceAndQuantity,
  userShoppingCart,
} from "./cartItem/CartSlice";
import { dbRef } from "../../app/firebase-config";

const CartModal = () => {
  const navbar = useAppSelector((state) => state.navbar);
  const cart = useAppSelector((state) => state.cart);
  const { signInToken, userId, isLogin, isLogout, isLoading } = useAppSelector(
    (state) => state.loginForm
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (signInToken) {
      const fetchUserCartData = async () => {
        try {
          const response = await get(child(dbRef, `users/${userId}/`));

          if (response.exists()) {
            dispatch(userShoppingCart(response.val().shoppingCart));
            console.log("fefefefefefefe");
            dispatch(updateTotalPriceAndQuantity());
          }
        } catch (err) {
          console.error(err);
        }
      };

      fetchUserCartData();
    }
  }, [signInToken]);

  useEffect(() => {
    if (signInToken) {
      // Updata firebase shopping cart
      const db = getDatabase();
      set(ref(db, `users/${userId}/`), {
        shoppingCart: cart.shoppingCart,
      });
    }

    // Updata localStorage auth
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

    // Updata localStorage shopping-cart
    localStorage.setItem("shopping-cart", JSON.stringify(cart.shoppingCart));
    dispatch(updateTotalPriceAndQuantity());
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
