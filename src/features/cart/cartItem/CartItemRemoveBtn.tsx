import styles from "./CartItemRemoveBtn.module.scss";
import removeIcon from "../../../assets/svg/close-outline.svg";
import { useAppDispatch } from "../../../app/hooks/hooks";
import { removeCartItem, updateTotalPriceAndQuantity } from "./cartSlice";

type CartItemRemoveBtnProps = {
  id: string;
};

const CartItemRemoveBtn = ({ id }: CartItemRemoveBtnProps) => {
  const dispatch = useAppDispatch();
  const removeItemHandler = () => {
    dispatch(removeCartItem(id));
    dispatch(updateTotalPriceAndQuantity());
  };
  return (
    <button onClick={removeItemHandler} className={styles.removeItemButton}>
      <img src={removeIcon} />
    </button>
  );
};

export default CartItemRemoveBtn;
