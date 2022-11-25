import styles from "./CardSection.module.scss";
import chair14 from "../../../assets/mainSectionIMG/chair-14.jpg";
import chair12 from "../../../assets/mainSectionIMG/chair-12.jpg";
import chair13 from "../../../assets/mainSectionIMG/chair-13.jpg";
import { Link } from "react-router-dom";

const CardSection = () => {
  return (
    <section className={styles.cardSection}>
      <figure>
        <div className={styles.container}>
          <div>
            <img src={chair12} />
          </div>
          <figcaption className={styles.textContainer}>
            <div className={styles.text}>
              <h4>LIVING ROOM</h4>
              <p>
                Surround your little ones with long-lasting beauty and organic
                shapes.
              </p>
            </div>
            <Link to="/shop">EXPLORE PRODUCTS ➝</Link>
          </figcaption>
        </div>
      </figure>
      <figure>
        <div className={styles.container}>
          <div>
            <img src={chair13} />
          </div>
          <figcaption className={styles.textContainer}>
            <div className={styles.text}>
              <h4>HOME OFFICE</h4>
              <p>
                Surround your little ones with long-lasting beauty and organic
                shapes.
              </p>
            </div>
            <Link to="/shop">EXPLORE PRODUCTS ➝</Link>
          </figcaption>
        </div>
      </figure>
      <figure>
        <div className={styles.container}>
          <div>
            <img src={chair14} />
          </div>
          <figcaption className={styles.textContainer}>
            <div className={styles.text}>
              <h4>DINING ROOM</h4>
              <p>
                Surround your little ones with long-lasting beauty and organic
                shapes.
              </p>
            </div>
            <Link to="/shop">EXPLORE PRODUCTS ➝</Link>
          </figcaption>
        </div>
      </figure>
    </section>
  );
};

export default CardSection;
