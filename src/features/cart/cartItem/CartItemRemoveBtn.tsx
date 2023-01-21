import styles from "./CartItemRemoveBtn.module.scss";
import RemoveIconBtn from "../../../components/ui/button/removeIconBtn/RemoveIconBtn";
import useCart from "../../../app/hooks/useCart";

type CartItemRemoveBtnProps = {
  productName: string;
  productId: string;
};

const CartItemRemoveBtn = ({ productId }: CartItemRemoveBtnProps) => {
  const { cartRemoveItem } = useCart(productId);

  const confirmRemoveItem = () => cartRemoveItem(productId);

  return (
    <div className={styles.removeItemButton}>
      <RemoveIconBtn onClick={confirmRemoveItem} />
    </div>
  );
};

export default CartItemRemoveBtn;
