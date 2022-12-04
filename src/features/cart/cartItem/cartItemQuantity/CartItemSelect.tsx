import { useAppDispatch } from "../../../../app/hooks/hooks";
import { ItemQuantity } from "../../../../app/type";
import { updateItemQuantity, updateTotalPriceAndQuantity } from "../cartSlice";
import styles from "./CartItemSelect.module.scss";

const CartItemSelect = ({ id, quantity }: ItemQuantity) => {
  const dispatch = useAppDispatch();

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue = e.target.value;
    if (selectValue) {
      dispatch(updateItemQuantity({ id: id, quantity: +selectValue }));
      dispatch(updateTotalPriceAndQuantity());
    }
  };

  return (
    <select
      value={quantity}
      onChange={selectChangeHandler}
      className={styles.itemAmount}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10+</option>
    </select>
  );
};

export default CartItemSelect;
