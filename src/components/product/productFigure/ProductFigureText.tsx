import styles from "./ProductFigureText.module.scss";

interface ProductFigureTextProps {
  productName: string;
  series: string;
}

const ProductFigureText = ({ productName, series }: ProductFigureTextProps) => {
  return (
    <figcaption className={styles.textContainer}>
      <div className={styles.productDescript}>
        <h4>{productName}</h4>
        <p>{series}</p>
      </div>
      <div>
        <p className={styles.moreLink}>More Infor</p>
      </div>
    </figcaption>
  );
};

export default ProductFigureText;
