import styles from "./ProductTop.module.scss";
import dummyImg from "../../assets/productImg/874.jpg";

const ProductTop = () => {
  return (
    <section className={styles.productTop}>
      <figure className={styles.productFigure}>
        <div className={styles.productImg}>
          <img src={dummyImg} />
        </div>
        <figcaption className={styles.productFigcaption}>
          <div className={styles.textContainer}>
            <div className={styles.productDescript}>
              <h3>PRODUCT ID</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores, adipisci eius architecto unde suscipit itaque ipsam
                saepe, facere magni omnis ab voluptates enim facilis beatae.
                Expedita, aliquam suscipit?
              </p>
            </div>
            <div className={styles.productText}>
              <h6>Model</h6>
              <p>Model 3</p>
            </div>
            <div className={styles.productText}>
              <h6>Series</h6>
              <p>3100</p>
            </div>
            <div className={styles.productText}>
              <h6>Price</h6>
              <p>$247.99</p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button>ADD TO CART</button>
            <button>FIND STORE</button>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default ProductTop;
