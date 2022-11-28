import styles from "./ProductDetails.module.scss";
import dummyImg from "../../assets/productImg/874.jpg";
import dummyImg1 from "../../assets/productImg/872.jpg";
import dummyImg2 from "../../assets/productImg/873.jpg";
import dummyImg3 from "../../assets/productImg/875.jpg";
import dummyImg4 from "../../assets/productImg/874.jpg";

const ProductDetails = () => {
  return (
    <section className={styles.productDetails}>
      <figure className={styles.productFigure}>
        <div className={styles.productImg}>
          <img src={dummyImg} />
          <img src={dummyImg1} />
          <img src={dummyImg2} />
          <img src={dummyImg3} />
        </div>
        <figcaption className={styles.detailsFigcaption}>
          <div className={styles.productTextContainer}>
            <div className={styles.productTextTitle}>
              <h5>PRODUCT DETAILS</h5>
              <button>fewf</button>
            </div>
            <div className={styles.productMoreDescript}>
              <h6>LOREM</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium sed veritatis qui cumque illum minus quos corporis
                aspernatur. Eum vel nulla cumque sunt tempore officia totam sint
                pariatur aspernatur nobis.
              </p>
            </div>
          </div>

          <div className={styles.productTextContainer}>
            <div className={styles.productTextTitle}>
              <h5>DIMENSIONS</h5>
              <button>fewf</button>
            </div>
            <div className={styles.productMoreDescript}>
              <h6>LOREM</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium sed veritatis qui cumque illum minus quos corporis
                aspernatur. Eum vel nulla cumque sunt tempore officia totam sint
                pariatur aspernatur nobis.
              </p>
            </div>
          </div>

          <div className={styles.productTextContainer}>
            <div className={styles.productTextTitle}>
              <h5>GENERAL</h5>
              <button>fewf</button>
            </div>
            <div className={styles.productMoreDescript}>
              <h6>LOREM</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium sed veritatis qui cumque illum minus quos corporis
                aspernatur. Eum vel nulla cumque sunt tempore officia totam sint
                pariatur aspernatur nobis.
              </p>
            </div>
          </div>

          <div className={styles.productTextContainer}>
            <div className={styles.productTextTitle}>
              <h5>DESIGNER</h5>
              <button>fewf</button>
            </div>
            <div className={styles.productMoreDescript}>
              <h6>LOREM</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium sed veritatis qui cumque illum minus quos corporis
                aspernatur. Eum vel nulla cumque sunt tempore officia totam sint
                pariatur aspernatur nobis.
              </p>
            </div>
          </div>
          <div className={styles.productTextContainer}>
            <div className={styles.productTextTitle}>
              <h5>DOWNLOADS</h5>
              <button>fewf</button>
            </div>
            <div className={styles.productMoreDescript}>
              <h6>LOREM</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium sed veritatis qui cumque illum minus quos corporis
                aspernatur. Eum vel nulla cumque sunt tempore officia totam sint
                pariatur aspernatur nobis.
              </p>
            </div>
          </div>
          <div className={styles.productTextContainer}>
            <div className={styles.productTextTitle}>
              <h5>DOWNLOADS</h5>
              <button>fewf</button>
            </div>
            <div className={styles.productMoreDescript}>
              <h6>LOREM</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium sed veritatis qui cumque illum minus quos corporis
                aspernatur. Eum vel nulla cumque sunt tempore officia totam sint
                pariatur aspernatur nobis.
              </p>
            </div>
          </div>
          <div className={styles.productTextContainer}>
            <div className={styles.productTextTitle}>
              <h5>DOWNLOADS</h5>
              <button>fewf</button>
            </div>
            <div className={styles.productMoreDescript}>
              <h6>LOREM</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium sed veritatis qui cumque illum minus quos corporis
                aspernatur. Eum vel nulla cumque sunt tempore officia totam sint
                pariatur aspernatur nobis.
              </p>
            </div>
          </div>
          <div className={styles.productTextContainer}>
            <div className={styles.productTextTitle}>
              <h5>CARE AND MAINTENANCE</h5>
              <button>fewf</button>
            </div>
            <div className={styles.productMoreDescript}>
              <h6>LOREM</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium sed veritatis qui cumque illum minus quos corporis
                aspernatur. Eum vel nulla cumque sunt tempore officia totam sint
                pariatur aspernatur nobis.
              </p>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default ProductDetails;
