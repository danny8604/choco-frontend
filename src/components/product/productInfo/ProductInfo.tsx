import styles from "./ProductInfo.module.scss";
import ProductText from "./ProductText";
import { useParams } from "react-router-dom";
import ProductImg from "./ProductImg";
import ProductAddToCartBtn from "./ProductAddToCartBtn";
import ProductDescript from "./ProductDescript";
import Loading from "../../loading/Loading";
import useChairsData from "../../../app/hooks/useChairsData";
import usDollar from "../../util/usDollar";

const ProductInfo = () => {
  const { productPath } = useParams();
  const { pathChairsData } = useChairsData(productPath);

  return (
    <>
      {!pathChairsData && <Loading />}
      {pathChairsData && (
        <section className={styles.productTop}>
          <figure className={styles.productFigure}>
            <ProductImg imgA={pathChairsData.product.img.imgA} />
            <figcaption className={styles.productFigcaption}>
              <div>
                <ProductDescript
                  productName={pathChairsData.product.productName}
                />
                <ProductText
                  type={"Price"}
                  typeText={`${usDollar(pathChairsData.product.price)}`}
                />
                <ProductText
                  type={"Series"}
                  typeText={`${pathChairsData.product.series}`}
                />
                <ProductText
                  type={"Designer"}
                  typeText={`${pathChairsData.product.designer}`}
                />
              </div>
              <ProductAddToCartBtn props={pathChairsData.product} />
            </figcaption>
          </figure>
        </section>
      )}
    </>
  );
};

export default ProductInfo;
