import styles from "./ProductInfo.module.scss";
import ProductText from "./ProductText";
import { useParams } from "react-router-dom";
import ProductImg from "./ProductImg";
import ProductAddToCartBtn from "./ProductAddToCartBtn";
import ProductDescript from "./ProductDescript";
import Loading from "../../loading/Loading";
import useChairsData from "../../../app/hooks/useChairsData";
import Error from "../../error/Error";

const ProductTop = () => {
  const { productId } = useParams();
  const { data, error } = useChairsData(productId);

  return (
    <>
      {!data && !error && <Loading />}
      {data && (
        <section className={styles.productTop}>
          <figure className={styles.productFigure}>
            <ProductImg imgA={data.product.img.imgA} />
            <figcaption className={styles.productFigcaption}>
              <div>
                <ProductDescript productName={data.product.productName} />
                <ProductText
                  type={"Price"}
                  typeText={`$${data.product.price}`}
                />
                <ProductText
                  type={"Series"}
                  typeText={`${data.product.series}`}
                />
                <ProductText
                  type={"Designer"}
                  typeText={`${data.product.designer}`}
                />
              </div>
              <ProductAddToCartBtn props={data.product} />
            </figcaption>
          </figure>
        </section>
      )}
      {error && <Error />}
    </>
  );
};

export default ProductTop;
