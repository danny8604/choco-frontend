import styles from "./InfoItem.module.scss";

import CartItemImg from "../cart/cartItem/CartItemImg";
import FavoriteBtn from "../../components/ui/button/FavoriteBtn";
import ItemSeries from "../../components/ui/Items/ItemSeries/ItemSeries";
import ItemPrice from "../../components/ui/Items/itemPirce/ItemPrice";
import ItemName from "../../components/ui/Items/itemName/ItemName";
import ItemQuantity from "../../components/ui/Items/itemQuantity/ItemQuantity";
import ItemTotalPrice from "../../components/ui/Items/itemsTotalPrice/ItemsTotalPrice";

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
        <ItemName productName={productName} />
        {showPrice && price && <ItemPrice price={price} />}
        {showQuantity && quantity && <ItemQuantity quantity={quantity} />}
        {showSeries && series && <ItemSeries series={series} />}
        {showTotalPrice && price && quantity && (
          <ItemTotalPrice totalPrice={price * quantity} />
        )}
      </figcaption>
    </figure>
  );
};

export default InfoItem;
