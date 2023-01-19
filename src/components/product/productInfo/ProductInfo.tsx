import styles from "./ProductInfo.module.scss";
import ProductText from "./ProductText";
import ProductImg from "./ProductImg";
import ProductAddToCartBtn from "./ProductAddToCartBtn";
import ProductDescript from "./ProductDescript";
import Loading from "../../loading/Loading";
import usDollar from "../../util/usDollar";
import { ChairDataProps } from "../../../app/type";

const ProductInfo = ({ chairData }: ChairDataProps) => {
  return (
    <>
      {!chairData && <Loading />}
      {chairData && (
        <section className={styles.productTop}>
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
