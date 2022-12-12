import styles from "./CartItemPrice.module.scss";

type CartItemPriceProps = {
  price: number;
  quantity: number;
};

const CartItemPrice = ({ price, quantity }: CartItemPriceProps) => {
  return (
    <span className={styles.itemPrice}>
      <p>${price * quantity}</p>
    </span>
  );
};

export default CartItemPrice;
