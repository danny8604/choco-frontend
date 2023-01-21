import styles from "./CartItem.module.scss";

import CartItemName from "./CartItemName";
import CartItemPrice from "./CartItemPrice";
import CartItemRemoveBtn from "./CartItemRemoveBtn";
import CartItemImg from "./CartItemImg";
import { ShoppingCartItem } from "../../../app/type";
import CartItemQuantity from "./cartItemQuantity/CartItemQuantity";
import FavoriteBtn from "../../../components/ui/button/FavoriteBtn";

const CartItem = ({
  productId: { productName, img, price, path, _id },
  quantity,
}: ShoppingCartItem) => {
  return (
    <figure className={styles.cartItemContainer}>
      <FavoriteBtn productId={_id} />
      <CartItemImg img={img.imgA} path={path} />
      <figcaption className={styles.cartItemText}>
        <CartItemName productName={productName} />
        <CartItemQuantity
          _id={_id}
          productName={productName}
          quantity={quantity}
        />
        <CartItemPrice price={price} quantity={quantity} />
        <CartItemRemoveBtn productName={productName} productId={_id} />
      </figcaption>
    </figure>
  );
};

export default CartItem;
