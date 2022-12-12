import styles from "./CartItemName.module.scss";

type CartItemNameProps = {
  id: string;
};

const CartItemName = ({ id }: CartItemNameProps) => {
  return (
    <div className={styles.cartItemName}>
      <label htmlFor={id}>{id}</label>
    </div>
  );
};

export default CartItemName;
