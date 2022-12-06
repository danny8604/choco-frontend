import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks/hooks";
import styles from "./ExploreFigure.module.scss";

interface ExploreFigureProps {
  img: string;
  id: string;
  path: string;
}

const ExploreFigure = ({ img, id, path }: ExploreFigureProps) => {
  function getImageUrl(name: string) {
    return new URL(`../../../../assets/productImg/${name}.jpg`, import.meta.url)
      .href;
  }

  return (
    <figure className={`${styles.scrollFigure}`}>
      <Link to={`/product/${path}`}>
        <div className={styles.scrollContainer}>
          <div className={styles.imgContainer}>
            <img src={getImageUrl(img)} />
          </div>
          <figcaption className={styles.productName}>
            <h5>{id}</h5>
            <p>More Info ➝</p>
          </figcaption>
        </div>
      </Link>
    </figure>
  );
};

export default ExploreFigure;
