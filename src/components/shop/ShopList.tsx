import styles from "./ShopList.module.scss";
import ProductFigure from "../product/productFigure/ProductFigure";
import { ProductsType } from "../../app/type";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks/hooks";
import { openDesignerModal } from "../../features/designerModal/designerModalSlicel";
import { openBackdrop } from "../../features/backdrop/backdropSlice";

type ShopListProps = {
  props: ProductsType[];
};

const ShopList = ({ props }: ShopListProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const showReverse = searchParams.get("filter") === "reverse";
  const showDesignerFrank =
    searchParams.get("filter") === "designer__Frank-Gehry";
  const showDesignerZaha =
    searchParams.get("filter") === "designer__Zaha-Hadid";
  const showDesignerMies =
    searchParams.get("filter") === "designer__Mies-van-der-Rohe";

  const productsArr = () => {
    if (showReverse) return props.map((item) => item).reverse();
    if (showDesignerFrank)
      return props
        .map((item) => item)
        .filter((item) => item.designer === "Frank Gehry");
    if (showDesignerZaha)
      return props
        .map((item) => item)
        .filter(
          (item) => item.designer === "Dame Zaha Mohammad HadproductName"
        );
    if (showDesignerMies)
      return props
        .map((item) => item)
        .filter((item) => item.designer === "Ludwig Mies van der Rohe");

    return props;
  };

  const reverseHandler = () => {
    if (showReverse) {
      return setSearchParams({});
    }
    setSearchParams({ filter: "reverse" });
  };

  const designerHandler = () => {
    dispatch(openDesignerModal());
    dispatch(openBackdrop());
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
            key={map.productName}
            _id={map._id}
            productName={map.productName}
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
