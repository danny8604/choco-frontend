import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks/hooks";
import { ProductsType } from "../../../app/type";
import { closeBackdrop } from "../../../features/backdrop/backdropSlice";
import { closeSearchModal } from "../../../features/searchModal/searchModalSlice";
import styles from "./ProductFigure.module.scss";
import ProductFigureImg from "./ProductFigureImg";
import ProductFigureText from "./ProductFigureText";
import FavoriteBtn from "../../ui/button/FavoriteBtn";

const ProductFigure = ({
  productName,
  path,
  series,
  descript,
  img,
  _id,
}: ProductsType) => {
  const dispatch = useAppDispatch();

  const linkHandler = () => {
    dispatch(closeSearchModal());
    dispatch(closeBackdrop());
  };

  return (
    <figure className={styles.figureContainer}>
      <FavoriteBtn productId={_id} />
      <Link to={`/product/${path}`} onClick={() => linkHandler()}>
        <ProductFigureImg imgA={img.imgA} descript={descript} />
        <ProductFigureText productName={productName} series={series} />
      </Link>
    </figure>
  );
};

export default ProductFigure;
