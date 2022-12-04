import styles from "./ProductFigureText.module.scss";

interface ProductFigureTextProps {
  id: string;
  series: number;
}

const ProductFigureText = ({ id, series }: ProductFigureTextProps) => {
  return (
    <figcaption className={styles.textContainer}>
      <div className={styles.productDescript}>
        <h4>{id}</h4>
        <p>{series}</p>
      </div>
      <div>
        <p className={styles.moreLink}>More Infor</p>
      </div>
    </figcaption>
  );
};

export default ProductFigureText;
