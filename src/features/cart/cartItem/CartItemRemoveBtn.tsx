import styles from "./CartItemRemoveBtn.module.scss";
import { useAppDispatch } from "../../../app/hooks/hooks";
import RemoveIconBtn from "../../../components/ui/button/removeIconBtn/RemoveIconBtn";
import { openCheckModal } from "../../checkModal/checkModalSlice";
import CheckModal from "../../checkModal/CheckModal";
import useCart from "../../../app/hooks/useCart";

type CartItemRemoveBtnProps = {
  productName: string;
  productId: string;
};

const CartItemRemoveBtn = ({ productId }: CartItemRemoveBtnProps) => {
  const dispatch = useAppDispatch();
  const { cartRemoveItem } = useCart();

  const confirmRemoveItem = async () => {
    cartRemoveItem(productId);
  };

  const removeItemHandler = () => {
    dispatch(openCheckModal("Are you sure you want to delete this item?"));
  };

  return (
    <>
      <CheckModal okAction={confirmRemoveItem} />
      <div className={styles.removeItemButton}>
        <RemoveIconBtn onClick={removeItemHandler} />
      </div>
    </>
  );
};

export default CartItemRemoveBtn;
