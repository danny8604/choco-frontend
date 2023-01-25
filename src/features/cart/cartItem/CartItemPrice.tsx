import usDollar from "../../../components/util/usDollar";
import styles from "./CartItemPrice.module.scss";

type CartItemPriceProps = {
  totalPrice: number;
};

const CartItemPrice = ({ totalPrice }: CartItemPriceProps) => {
  return (
    <span className={styles.itemPrice}>
      <p>{totalPrice && usDollar(totalPrice)}</p>
    </span>
  );
};

export default CartItemPrice;
