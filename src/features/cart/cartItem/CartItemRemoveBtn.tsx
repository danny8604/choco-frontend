import styles from "./CartItemRemoveBtn.module.scss";
import removeIcon from "../../../assets/svg/close-outline.svg";
import { useAppDispatch } from "../../../app/hooks/hooks";
import { removeCartItem, updateTotalPriceAndQuantity } from "./cartSlice";
import RemoveIconBtn from "../../../components/ui/button/removeIconBtn/RemoveIconBtn";

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
    <div className={styles.removeItemButton}>
      <RemoveIconBtn onClick={removeItemHandler} />
    </div>
  );
};

export default CartItemRemoveBtn;
