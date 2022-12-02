import styles from "./ProductDetails.module.scss";
import ProductDetailList from "./ProductDetailsList";
import ProductDetailsImg from "./ProductDetailsImg";
import { messageData } from "../../../app/data";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../app/hooks/hooks";

const ProductDetails = () => {
  const { productId } = useParams();
  const { productsData } = useProducts();
  const [currentProduct] = productsData.filter((map) => map.path === productId);

  if (!currentProduct) return <></>;

  return (
    <section className={styles.productDetails}>
      <figure className={styles.productFigure}>
        <ProductDetailsImg img={currentProduct.img} />
        <ul className={styles.detailsContainer}>
          {messageData.map((map) => (
            <ProductDetailList
              key={map.title}
              title={map.title}
              descriptTitle={map.descriptTitle}
              descript={map.descript}
            />
          ))}
        </ul>
      </figure>
    </section>
  );
};

export default ProductDetails;
