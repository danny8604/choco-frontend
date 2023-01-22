import styles from "./InfoItem.module.scss";

import CartItemName from "../cart/cartItem/CartItemName";
import CartItemPrice from "../cart/cartItem/CartItemPrice";
import CartItemImg from "../cart/cartItem/CartItemImg";
import { ShoppingCartItem } from "../../app/type";
import InfoItemQuantity from "./InfoItemQuantity";
import FavoriteBtn from "../../components/ui/button/FavoriteBtn";
import ItemSeries from "../../components/ui/ItemSeries/ItemSeries";

interface InfoItemProps extends ShoppingCartItem {
  showFavoriteBtn?: boolean;
  showSeries?: boolean;
}

const InfoItem = ({
  productId,
  quantity,
  showFavoriteBtn,
  showSeries,
}: InfoItemProps) => {
  const { img, path, productName, price, series } = productId;

  console.log(price, "test price");
  return (
    <figure className={styles.cartItemContainer}>
      {showFavoriteBtn && (
        <FavoriteBtn key={productId._id} productId={productId._id} />
      )}
      <CartItemImg img={img.imgA} path={path} />
      <figcaption className={styles.cartItemText}>
        <CartItemName productName={productName} />
        {!showSeries && <InfoItemQuantity quantity={quantity} />}
        {showSeries && <ItemSeries series={series} />}
        <CartItemPrice price={price} quantity={quantity} />
      </figcaption>
    </figure>
  );
};

export default InfoItem;
