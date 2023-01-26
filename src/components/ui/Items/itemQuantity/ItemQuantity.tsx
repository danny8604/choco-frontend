import styles from "./ItemQuantity.module.scss";

type ItemQuantityProps = {
  quantity: number;
};

const ItemQuantity = ({ quantity }: ItemQuantityProps) => {
  return (
    <div className={styles.ItemQuantity}>
      <p>Quantity : {quantity}</p>
    </div>
  );
};

export default ItemQuantity;
