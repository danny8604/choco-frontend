import React from "react";
import { ProductsType } from "../../../app/type";
import InfoItem from "../../../features/infoModal/InfoItem";
import Card from "../card/Card";
import styles from "./FavoriteItems.module.scss";

type PostProps = {
  products: ProductsType;
};

const FavoriteItmes = React.forwardRef(({ products }: PostProps, ref) => {
  console.log(products, "products");
  const postBody = (
    <Card>
      <InfoItem
        key={products._id}
        products={products}
        showFavoriteBtn
        showPrice
        showSeries
      />
    </Card>
  );

  const content = ref ? (
    <section ref={ref}>{postBody}</section>
  ) : (
    <section>{postBody}</section>
  );

  return <div className={styles.post}>{content}</div>;
});
export default FavoriteItmes;
