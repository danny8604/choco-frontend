import { Link } from "react-router-dom";
import styles from "./Figure.module.scss";

type FigureProps = {
  src: string;
  title: string;
  path: string;
};

const Figure = ({ src, title, path }: FigureProps) => {
  return (
    <figure className={styles.figure}>
      <Link to={path}>
        <div className={styles.content}>
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

export default Figure;
