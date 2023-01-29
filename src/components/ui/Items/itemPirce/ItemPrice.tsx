import usDollar from "../../../util/usDollar";
import styles from "./ItemPrice.module.scss";

type ItemPriceProps = {
  price: number;
};

const ItemPrice = ({ price }: ItemPriceProps) => {
  return (
    <div className={styles.itemPrice}>
      <p>Price : {usDollar(price)}</p>
    </div>
  );
};

export default ItemPrice;
