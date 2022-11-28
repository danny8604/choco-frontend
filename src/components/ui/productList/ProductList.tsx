import styles from "./ProductList.module.scss";
import Figure from "../../ui/figure/Figure";
import { ProductsType } from "../../../app/type";

type ProductListProps = {
  props: ProductsType[];
};

const ProductList = ({ props }: ProductListProps) => {
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
        {props.map((map) => (
          <Figure
            key={map.id}
            id={map.id}
            descript={map.descript}
            src={map.src}
            series={map.series}
            price={map.price}
            category={map.category}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
