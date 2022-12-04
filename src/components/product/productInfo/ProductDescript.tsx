import styles from "./ProductDescript.module.scss";

type ProductDescriptProps = {
  id: string;
};

const ProductDescript = ({ id }: ProductDescriptProps) => {
  return (
    <div className={styles.productDescript}>
      <h3>{id}</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
        adipisci eius architecto unde suscipit itaque ipsam saepe, facere magni
        omnis ab voluptates enim facilis beatae. Expedita, aliquam suscipit?
      </p>
    </div>
  );
};

export default ProductDescript;
