import styles from "./CartItemRemoveBtn.module.scss";
import RemoveIconBtn from "../../../components/ui/button/removeIconBtn/RemoveIconBtn";
import useCart from "../../../app/hooks/useCart";

type CartItemRemoveBtnProps = {
  productName: string;
  productId: string;
};

const CartItemRemoveBtn = ({
  productId,
  productName,
}: CartItemRemoveBtnProps) => {
  const { cartRemoveItem, removeIsLoading } = useCart(productId, productName);

  const confirmRemoveItem = () => cartRemoveItem();

  return (
    <div className={styles.removeItemButton}>
      <RemoveIconBtn
        onClick={confirmRemoveItem}
        removeIsLoading={removeIsLoading}
      />
    </div>
  );
};

export default CartItemRemoveBtn;
