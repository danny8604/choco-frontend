import styles from "./ProductList.module.scss";
import Figure from "../../ui/figure/Figure";

const ProductList = () => {
  return (
    <section className={styles.productSection}>
      <ul className={styles.listContainer}>
        <li>
          <p>Filter by :</p>
        </li>
        <li>
          <button>Type of Chair</button>
        </li>
        <li>
          <button>Product Series</button>
        </li>
        <li>
          <button>Designers</button>
        </li>
      </ul>
      <div className={styles.productContainer}>
        <Figure />
      </div>
    </section>
  );
};

export default ProductList;
