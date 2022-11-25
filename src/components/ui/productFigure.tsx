import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import styles from "./ProductFigure.module.scss";

interface ProductFigureProps {
  img: string;
  id: string;
}

const ProductFigure = ({ img, id }: ProductFigureProps) => {
  const mouse = useAppSelector((state) => state.mouseDrag);
  console.log(mouse.isDown);

  return (
    <figure className={`${styles.figure} ${!mouse.isDown && styles.test}`}>
      <div>
        <img src={img} />
        <figcaption>{id}</figcaption>
        <div className={styles.productLink}>
          <Link to="/">EXPLORE</Link>
        </div>
      </div>
    </figure>
  );
};

export default ProductFigure;
