import styles from "./ProductDetails.module.scss";
import dummyImg1 from "../../assets/productImg/872.jpg";
import dummyImg2 from "../../assets/productImg/873.jpg";
import dummyImg3 from "../../assets/productImg/875.jpg";
import test from "../../assets/productImg/121.png";
import DetailList from "../ui/detailList/DetailList";
import { messageData } from "../../app/data";

const ProductDetails = () => {
  return (
    <section className={styles.productDetails}>
      <figure className={styles.productFigure}>
        <div className={styles.productImg}>
          <img src={test} />
          <img src={dummyImg1} />
          <img src={dummyImg2} />
          <img src={dummyImg3} />
        </div>
        <ul className={styles.detailsContainer}>
          {messageData.map((map) => (
            <DetailList
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
