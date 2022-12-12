import { useAppDispatch } from "../../../../app/hooks/hooks";
import { ItemQuantity } from "../../../../app/type";
import { updateItemQuantity, updateTotalPriceAndQuantity } from "../cartSlice";
import styles from "./CartItemInput.module.scss";

const CartItemInput = ({ id, quantity }: ItemQuantity) => {
  const dispatch = useAppDispatch();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue) {
      dispatch(updateItemQuantity({ id: id, quantity: +inputValue }));
      dispatch(updateTotalPriceAndQuantity());
    }
  };

  return (
    <input
      className={styles.quantityInput}
      onChange={inputChangeHandler}
      id={id}
      type="number"
      name={id}
      value={quantity}
      min="1"
      max="20"
    />
  );
};

export default CartItemInput;
