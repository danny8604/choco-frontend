import styles from "./InfoItem.module.scss";

import CartItemName from "../cart/cartItem/CartItemName";
import CartItemPrice from "../cart/cartItem/CartItemPrice";
import CartItemImg from "../cart/cartItem/CartItemImg";
import { ProductsType } from "../../app/type";
import InfoItemQuantity from "./InfoItemQuantity";
import FavoriteBtn from "../../components/ui/button/FavoriteBtn";
import ItemSeries from "../../components/ui/Items/ItemSeries/ItemSeries";
import ItemPrice from "../../components/ui/Items/itemPirce/ItemPrice";

interface InfoItemProps {
  id: string;
  imgA: string;
  path: string;
  productName: string;
  price?: number;
  series?: number;
  quantity?: number;
  totalPrice?: number;
  showFavoriteBtn?: boolean;
}
interface InfoItemType {
  products: {
    _id: string;
    img: {
      imgA: string;
      imgB: string;
      imgC: string;
      imgD: string;
    };
    path: string;
    productName: string;
    price: number;
    series: string;
  };
  quantity?: number;
  showPrice?: boolean;
  showQuantity?: boolean;
  showTotalPrice?: boolean;
  showFavoriteBtn?: boolean;
  showSeries?: boolean;
  showBorderBottom?: boolean;
}

const InfoItem = ({
  products: { _id, img, path, productName, price, series },
  quantity,
  showPrice,
  showQuantity,
  showFavoriteBtn,
  showTotalPrice,
  showSeries,
  showBorderBottom,
}: InfoItemType) => {
  return (
    <figure
      className={`${styles.cartItemContainer} ${
        showBorderBottom && styles.showBorderBottom
      }`}
    >
      {showFavoriteBtn && <FavoriteBtn key={_id} productId={_id} />}
      <CartItemImg img={img.imgA} path={path} />
      <figcaption className={styles.cartItemText}>
        <CartItemName productName={productName} />
        {showPrice && price && <ItemPrice price={price} />}
        {showQuantity && quantity && <InfoItemQuantity quantity={quantity} />}
        {showSeries && series && <ItemSeries series={series} />}
        {showTotalPrice && price && quantity && (
          <CartItemPrice totalPrice={price * quantity} />
        )}
      </figcaption>
    </figure>
  );
};

export default InfoItem;
