import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks/hooks";
import styles from "./ExploreFigure.module.scss";

interface ExploreFigureProps {
  img: string;
  id: string;
}

const ExploreFigure = ({ img, id }: ExploreFigureProps) => {
  return (
    <figure className={`${styles.scrollFigure}`}>
      <div className={styles.container}>
        <img src={img} />
        <figcaption className={styles.productName}>
          <h5>{id}</h5>
        </figcaption>
        <div className={styles.productLink}>
          <Link to="/">EXPLORE ➝</Link>
        </div>
      </div>
    </figure>
  );
};

export default ExploreFigure;
