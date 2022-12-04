import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks/hooks";
import styles from "./ScrollFigure.module.scss";

interface ProductFigureProps {
  img: string;
  id: string;
}

const ProductFigure = ({ img, id }: ProductFigureProps) => {
  const mouse = useAppSelector((state) => state.scroll);

  return (
    <figure
      className={`${styles.scrollFigure} ${!mouse.isDown && styles.test}`}
    >
      <div className={styles.container}>
        <img src={img} />
        <figcaption className={styles.productName}>{id}</figcaption>
        <div className={styles.productLink}>
          <Link to="/">EXPLORE</Link>
        </div>
      </div>
    </figure>
  );
};

export default ProductFigure;
