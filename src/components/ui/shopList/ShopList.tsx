import styles from "./ShopList.module.scss";
import Figure from "../figure/Figure";
import { ProductsType } from "../../../app/type";

type ShopListProps = {
  props: ProductsType[];
};

const ShopList = ({ props }: ShopListProps) => {
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

export default ShopList;
