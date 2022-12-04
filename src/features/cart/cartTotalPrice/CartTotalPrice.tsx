import styles from "./CartTotalPrice.module.scss";

type CartTotalPriceProps = {
  totalPrice: number;
};

const CartTotalPrice = ({ totalPrice }: CartTotalPriceProps) => {
  return (
    <div className={styles.cartTotalPrice}>
      <h3>TOTAL PRICE: ${totalPrice}</h3>
    </div>
  );
};

export default CartTotalPrice;
