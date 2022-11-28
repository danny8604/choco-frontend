import { Link } from "react-router-dom";
import { ProductsType } from "../../../app/type";
import styles from "./Figure.module.scss";

const Figure = ({
  id,
  price,
  src,
  series,
  category,
  descript,
}: ProductsType) => {
  function getImageUrl(name: string) {
    return new URL(`../../../assets/productImg/${name}.jpg`, import.meta.url)
      .href;
  }
  console.log(src);

  return (
    <figure className={styles.figureContainer}>
      <Link to={`/product/${src}`}>
        <div className={styles.imgContainer}>
          <img src={getImageUrl(src)} alt={descript} />
        </div>
        <figcaption className={styles.textContainer}>
          <div className={styles.productDescript}>
            <h4>{id}</h4>
            <p>{series}</p>
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
