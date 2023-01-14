import styles from "./ProductDescript.module.scss";

type ProductDescriptProps = {
  productName: string;
};

const ProductDescript = ({ productName }: ProductDescriptProps) => {
  return (
    <div className={styles.productDescript}>
      <h3>{productName}</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
        adipisci eius architecto unde suscipit itaque ipsam saepe, facere magni
        omnis ab voluptates enim facilis beatae. Expedita, aliquam suscipit?
      </p>
    </div>
  );
};

export default ProductDescript;
