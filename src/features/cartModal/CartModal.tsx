import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import styles from "./CartModal.module.scss";
import CartItem from "../cart/cartItem/CartItem";
import CartTotalPrice from "../cart/cartTotalPrice/CartTotalPrice";
import { useEffect } from "react";
import { child, get, getDatabase, ref, set } from "firebase/database";
import {
  updateTotalPriceAndQuantity,
  userShoppingCart,
} from "../cart/cartItem/cartSlice";
import { dbRef } from "../../app/firebase-config";
import RemoveIconBtn from "../../components/ui/icon/removeIconBtn/RemoveIconBtn";
import { closeBackdrop } from "../backdrop/backdropSlice";
import { closeCartModal } from "./cartModalSlice";

const CartModal = () => {
  const { shoppingCart, shoppingCartTotalPrice, shoppingCartTotalQuantity } =
    useAppSelector((state) => state.cart);
  const { userId, isLogin } = useAppSelector((state) => state.loginForm);
  const dispatch = useAppDispatch();
  const { cartModalIsOpen } = useAppSelector((state) => state.cartModal);

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
      console.log("sfsf");

      fetchUserCartData();
    }
  }, [isLogin]);

  useEffect(() => {
    if (isLogin) {
      // Updata firebase shopping cart
      const db = getDatabase();
      set(ref(db, `users/${userId}/`), {
        shoppingCart: shoppingCart,
      });
      localStorage.removeItem("shopping-cart");
    }

    if (!isLogin) {
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }

    dispatch(updateTotalPriceAndQuantity());
  }, [userId, isLogin, shoppingCart]);

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
        {shoppingCartTotalQuantity ? (
          <h3>{shoppingCartTotalQuantity} items in your cart</h3>
        ) : (
          <h3>Your shopping cart is empty</h3>
        )}

        <RemoveIconBtn onClick={closeCartModalHandler} />
      </div>
      <div className={styles.cartContainer}>
        {shoppingCart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            img={item.img}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className={styles.priceContainer}>
        <CartTotalPrice totalPrice={shoppingCartTotalPrice} />
      </div>
    </section>
  );
};

export default CartModal;
