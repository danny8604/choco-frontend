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
      <div className={styles.container}>
        <div>
          <img src={src} />
        </div>
        <figcaption className={styles.textContainer}>
          <div className={styles.text}>
            <h4>{title}</h4>
            <p>
              Surround your little ones with long-lasting beauty and organic
              shapes.
            </p>
          </div>
          <Link to={path}>EXPLORE PRODUCTS ➝</Link>
        </figcaption>
      </div>
    </figure>
  );
};

export default CardFigure;
