import styles from "./CartItem.module.scss";
import deleteIcon from "../../assets/svg/close-outline.svg";

interface CartItemProps {
  src: string;
}

const CartItem = () => {
  return (
    <figure className={styles.cartItemContainer}>
      <div className={styles.cartItemImg}>
        <img alt="test img" />
      </div>
      <figcaption className={styles.cartItemText}>
        <div className={styles.cartItemName}>
          <h5>Model 1</h5>
        </div>
        <select className={styles.itemAmount}>
          <option value="1">1</option>
          <option value="1">2</option>
        </select>
        <span>
          <p>$249.99</p>
        </span>
        <button className={styles.deleteItemButton}>
          <img src={deleteIcon} />
        </button>
      </figcaption>
    </figure>
  );
};

export default CartItem;
