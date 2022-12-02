import styles from "./ProductTop.module.scss";
import { useProducts } from "../../app/hooks/hooks";
import ProductText from "./ProductText";
import { useParams } from "react-router-dom";
import ProductImg from "./ProductImg";
import ProductAddToCartBtn from "./ProductAddToCartBtn";
import ProductDescript from "./ProductDescript";
import Loading from "../loading/Loading";

const ProductTop = () => {
  const { productId } = useParams();
  const { productsData, error, isLoading } = useProducts();
  const [currentProduct] = productsData.filter((map) => map.path === productId);
  if (isLoading) return <Loading />;

  return (
    <section className={styles.productTop}>
      <figure className={styles.productFigure}>
        <ProductImg imgA={currentProduct.img.imgA} />
        <figcaption className={styles.productFigcaption}>
          <div>
            <ProductDescript />
            <ProductText type={"Model"} typeText={`${currentProduct.id}`} />
            <ProductText
              type={"Series"}
              typeText={`${currentProduct.series}`}
            />
            <ProductText type={"Price"} typeText={`$${currentProduct.price}`} />
          </div>
          <ProductAddToCartBtn props={currentProduct} />
        </figcaption>
      </figure>
    </section>
  );
};

export default ProductTop;
