import styles from "./ItemName.module.scss";

type ItemNameProps = {
  productName: string;
};

const ItemName = ({ productName }: ItemNameProps) => {
  return (
    <div className={styles.itemName}>
      <label htmlFor={productName}>{productName}</label>
    </div>
  );
};

export default ItemName;
