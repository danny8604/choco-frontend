import styles from "./CartItem.module.scss";

import CartItemName from "./CartItemName";
import CartItemPrice from "./CartItemPrice";
import CartItemRemoveBtn from "./CartItemRemoveBtn";
import CartItemImg from "./CartItemImg";
import { ShoppingCartItem } from "../../../app/type";
import CartItemQuantity from "./cartItemQuantity/CartItemQuantity";

const CartItem = ({ id, img, price, quantity }: ShoppingCartItem) => {
  return (
    <figure className={styles.cartItemContainer}>
      <CartItemImg img={img} />
      <figcaption className={styles.cartItemText}>
        <CartItemName id={id} />
        <CartItemQuantity id={id} quantity={quantity} />
        <CartItemPrice price={price} quantity={quantity} />
        <CartItemRemoveBtn id={id} />
      </figcaption>
    </figure>
  );
};

export default CartItem;
