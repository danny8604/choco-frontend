import { Link } from "react-router-dom";
import { ProductsType } from "../../../app/type";
import styles from "./ProductFigure.module.scss";
import ProductFigureImg from "./ProductFigureImg";
import ProductFigureText from "./ProductFigureText";

const ProductFigure = ({ id, path, series, descript, img }: ProductsType) => {
  return (
    <figure className={styles.figureContainer}>
      <Link to={`/product/${path}`} reloadDocument>
        <ProductFigureImg imgA={img.imgA} descript={descript} />
        <ProductFigureText id={id} series={series} />
      </Link>
    </figure>
  );
};

export default ProductFigure;
