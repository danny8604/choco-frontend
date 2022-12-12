import { Link } from "react-router-dom";
import styles from "./CardFigure.module.scss";

type CardFigureProps = {
  src: string;
  title: string;
  path: string;
};

const CardFigure = ({ src, title, path }: CardFigureProps) => {
  return (
    <figure className={styles.cardFigure}>
      <Link to={path} reloadDocument>
        <div className={styles.cardContainer}>
          <div className={styles.imgContainer}>
            <img src={src} alt="chair" />
          </div>
          <figcaption className={styles.textContainer}>
            <div className={styles.text}>
              <h4>{title}</h4>
              <p>
                Surround your little ones with long-lasting beauty and organic
                shapes.
              </p>
            </div>
            <div className={styles.exploreText}>
              <p>EXPLORE PRODUCTS ➝</p>
            </div>
          </figcaption>
        </div>
      </Link>
    </figure>
  );
};

export default CardFigure;
