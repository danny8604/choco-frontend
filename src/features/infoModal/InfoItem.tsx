import styles from "./InfoItem.module.scss";

import CartItemName from "../cart/cartItem/CartItemName";
import CartItemPrice from "../cart/cartItem/CartItemPrice";
import CartItemImg from "../cart/cartItem/CartItemImg";
import { ShoppingCartItem } from "../../app/type";
import InfoItemQuantity from "./InfoItemQuantity";

const InfoItem = ({
  productId: { productName, img, price, path, _id },
  quantity,
}: ShoppingCartItem) => {
  return (
    <figure className={styles.cartItemContainer}>
      <CartItemImg img={img.imgA} path={path} />
      <figcaption className={styles.cartItemText}>
        <CartItemName productName={productName} />
        <InfoItemQuantity quantity={quantity} />
        <CartItemPrice price={price} quantity={quantity} />
      </figcaption>
    </figure>
  );
};

export default InfoItem;
