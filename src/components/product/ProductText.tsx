import styles from "./ProductText.module.scss";

interface ProductTextProps {
  type: string;
  typeText: string;
}

const ProductText = ({ type, typeText }: ProductTextProps) => {
  return (
    <div className={styles.productText}>
      <h6>{type}</h6>
      <p>{typeText}</p>
    </div>
  );
};

export default ProductText;
