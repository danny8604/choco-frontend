import { useAppDispatch } from "../../../../app/hooks/hooks";
import { ItemQuantity } from "../../../../app/type";
import { updateItemQuantity, updateTotalPriceAndQuantity } from "../CartSlice";
import styles from "./CartItemSelect.module.scss";

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
      onChange={inputChangeHandler}
      id="number"
      type="number"
      name="number"
      value={quantity}
      placeholder="Quantity"
    />
  );
};

export default CartItemInput;
