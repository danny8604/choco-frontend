import styles from "./ProductTop.module.scss";
import { useAppDispatch, useAppSelector, useProducts } from "../../app/hooks";
import ProductText from "./ProductText";
import { useParams } from "react-router-dom";
import ProductImg from "./ProductImg";
import ProductAddToCartBtn from "./ProductAddToCartBtn";
import ProductDescript from "./ProductDescript";

const ProductTop = () => {
  const { productId } = useParams();
  const { productsData } = useProducts();
  const [currentProduct] = productsData.filter((map) => map.path === productId);

  if (!currentProduct) return;

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
            <ProductText type={"Price"} typeText={`${currentProduct.price}`} />
          </div>
          <ProductAddToCartBtn />
        </figcaption>
      </figure>
    </section>
  );
};

export default ProductTop;
