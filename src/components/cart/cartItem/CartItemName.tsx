import styles from "./CartItemName.module.scss";

type CartItemNameProps = {
  id: string;
};

const CartItemName = ({ id }: CartItemNameProps) => {
  return (
    <div className={styles.cartItemName}>
      <h5>{id}</h5>
    </div>
  );
};

export default CartItemName;
