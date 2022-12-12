import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import styles from "./CartModal.module.scss";
import CartItem from "../cart/cartItem/CartItem";
import CartTotalPrice from "./CartTotalPrice";
import { useEffect } from "react";
import { child, get, getDatabase, ref, set } from "firebase/database";
import {
  updateTotalPriceAndQuantity,
  userShoppingCart,
} from "../cart/cartItem/cartSlice";
import RemoveIconBtn from "../../components/ui/button/removeIconBtn/RemoveIconBtn";
import { closeBackdrop } from "../backdrop/backdropSlice";
import { closeCartModal } from "./cartModalSlice";
import CartLeadCheckout from "./CartLeadCheckout";

const CartModal = () => {
  const { shoppingCart, shoppingCartTotalPrice, shoppingCartTotalQuantity } =
    useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const { cartModalIsOpen } = useAppSelector((state) => state.cartModal);
  const { isLogin, userId, userEmail } = useAppSelector((state) => state.login);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

    if (isLogin) {
      const db = getDatabase();
      set(ref(db, `users/${userId}/`), {
        shoppingCart: shoppingCart,
      });

      localStorage.setItem(
        "auth",
        JSON.stringify({
          userId: userId,
          isLogin: isLogin,
          isLogout: !isLogin,
          userEmail: userEmail,
        })
      );
    }
    dispatch(updateTotalPriceAndQuantity());
  }, [isLogin, shoppingCart]);

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
            key={item.id}
            id={item.id}
            img={item.img}
            price={item.price}
            path={item.path}
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
