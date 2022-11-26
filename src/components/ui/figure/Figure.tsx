import { Link } from "react-router-dom";
import product01 from "../../../assets/productImg/product01.jpg";
import styles from "./Figure.module.scss";

const Figure = () => {
  return (
    <figure className={styles.figureContainer}>
      <Link to="/">
        <div>
          <img src={product01} alt="a white chair" />
        </div>
        <figcaption className={styles.textContainer}>
          <div className={styles.productDescript}>
            <h4>MODLE 4</h4>
            <p>3100</p>
          </div>
          <div>
            <p className={styles.moreLink}>More variants</p>
          </div>
        </figcaption>
      </Link>
    </figure>
  );
};

export default Figure;
