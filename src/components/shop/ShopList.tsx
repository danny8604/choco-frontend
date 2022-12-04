import styles from "./ShopList.module.scss";
import ProductFigure from "../product/productFigure/ProductFigure";
import { ProductsType } from "../../app/type";
import { useSearchParams } from "react-router-dom";

type ShopListProps = {
  props: ProductsType[];
};

const ShopList = ({ props }: ShopListProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showReverse = searchParams.get("filter") === "reverse";
  const showDesigner = searchParams.get("filter") === "designer";

  const productsArr = () => {
    if (showReverse) return [...props.map((map) => map).reverse()];
    return props;
  };
  console.log(showDesigner);

  const reverseHandler = () => {
    if (showReverse) {
      return setSearchParams({});
    }
    setSearchParams({ filter: "reverse" });
  };

  const designerHandler = () => {
    setSearchParams({ filter: "designer" });
  };

  return (
    <section className={styles.productSection}>
      <ul className={styles.listContainer}>
        <li>
          <p>Filter by :</p>
        </li>
        <li>
          <button onClick={() => reverseHandler()}>Reverse</button>
        </li>
        <li>
          <button onClick={() => designerHandler()}>Designer</button>
        </li>
      </ul>
      <div className={styles.productContainer}>
        {productsArr().map((map) => (
          <ProductFigure
            key={map.id}
            id={map.id}
            descript={map.descript}
            path={map.path}
            series={map.series}
            price={map.price}
            designer={map.designer}
            img={map.img}
            category={map.category}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopList;
