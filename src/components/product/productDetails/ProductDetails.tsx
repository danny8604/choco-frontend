import styles from "./ProductDetails.module.scss";
import ProductDetailList from "./ProductDetailsList";
import ProductDetailsImg from "./ProductDetailsImg";
import { messageData } from "../../../app/data";
import { ChairDataProps } from "../../../app/type";
import Loading from "../../loading/Loading";
const ProductDetails = ({ chairData }: ChairDataProps) => {
  return (
    <>
      {!chairData && <Loading />}
      {chairData && (
        <section className={styles.productDetails}>
          <figure className={styles.productFigure}>
            <div className={styles.imgContainer}>
              <ProductDetailsImg img={chairData.img} />
            </div>
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
      )}
    </>
  );
};

export default ProductDetails;
