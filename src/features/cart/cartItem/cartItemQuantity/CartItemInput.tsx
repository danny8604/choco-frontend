import useCart from "../../../../app/hooks/useCart";
import { ItemQuantity } from "../../../../app/type";
import styles from "./CartItemInput.module.scss";

const CartItemInput = ({ _id, productName, quantity }: ItemQuantity) => {
  const { cartInputQuantity } = useCart();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    cartInputQuantity(e.target.value, _id);

  return (
    <input
      className={styles.quantityInput}
      onChange={inputChangeHandler}
      id={productName}
      type="number"
      min="1"
      max="20"
      name={productName}
      value={quantity}
    />
  );
};

export default CartItemInput;
