import usDollar from "../../../components/util/usDollar";
import styles from "./CartItemPrice.module.scss";

type CartItemPriceProps = {
  price: number;
  quantity: number;
};

const CartItemPrice = ({ price, quantity }: CartItemPriceProps) => {
  const usdPrice = usDollar(price * quantity);

  return (
    <span className={styles.itemPrice}>
      <p>{usdPrice}</p>
    </span>
  );
};

export default CartItemPrice;
