import styles from "./ProductInfo.module.scss";
import ProductText from "./ProductText";
import ProductImg from "./ProductImg";
import ProductAddToCartBtn from "./ProductAddToCartBtn";
import ProductDescript from "./ProductDescript";
import Loading from "../../ui/loading/Loading";
import usDollar from "../../util/usDollar";
import { ProductsType } from "../../../app/type";
import FavoriteBtn from "../../ui/button/FavoriteBtn";

type ProductInfoProps = {
  chairData: ProductsType;
};

const ProductInfo = ({ chairData }: ProductInfoProps) => {
  return (
    <>
      {!chairData && <Loading />}
      {chairData && (
        <section className={styles.productTop}>
          <FavoriteBtn productId={chairData._id} />
          <figure className={styles.productFigure}>
            <ProductImg imgA={chairData.img.imgA} />
            <figcaption className={styles.productFigcaption}>
              <div>
                <ProductDescript productName={chairData.productName} />
                <ProductText
                  type={"Price"}
                  typeText={`${usDollar(chairData.price)}`}
                />
                <ProductText type={"Series"} typeText={`${chairData.series}`} />
                <ProductText
                  type={"Designer"}
                  typeText={`${chairData.designer}`}
                />
              </div>
              <ProductAddToCartBtn props={chairData} />
            </figcaption>
          </figure>
        </section>
      )}
    </>
  );
};

export default ProductInfo;
