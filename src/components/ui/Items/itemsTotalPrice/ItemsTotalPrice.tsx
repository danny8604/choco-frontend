import usDollar from "../../../util/usDollar";
import styles from "./ItemsTotalPrice.module.scss";

type ItemTotalPriceProps = {
  totalPrice: number;
};

const ItemTotalPrice = ({ totalPrice }: ItemTotalPriceProps) => {
  return (
    <span className={styles.itemTotalPrice}>
      <p>{totalPrice && usDollar(totalPrice)}</p>
    </span>
  );
};

export default ItemTotalPrice;
