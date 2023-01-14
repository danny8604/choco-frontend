import styles from "./CartItemName.module.scss";

type CartItemNameProps = {
  productName: string;
};

const CartItemName = ({ productName }: CartItemNameProps) => {
  return (
    <div className={styles.cartItemName}>
      <label htmlFor={productName}>{productName}</label>
    </div>
  );
};

export default CartItemName;
