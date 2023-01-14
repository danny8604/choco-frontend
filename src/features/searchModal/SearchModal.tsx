import styles from "./SearchModal.module.scss";
import { useAppSelector } from "../../app/hooks/hooks";
import ProductFigure from "../../components/product/productFigure/ProductFigure";
import Search from "../search/Search";
import SearchNoInputMes from "../search/SearchNoInputMes";
import SearchNoResultMes from "../search/SearchNoResultMes";

const SearchModal = () => {
  const search = useAppSelector((state) => state.search);
  const { searchModalIsOpen } = useAppSelector((state) => state.searchModal);

  return (
    <section
      className={`${styles.contentContainer}  ${
        searchModalIsOpen && styles.active
      }`}
    >
      <Search />
      <div className={styles.searchFigure}>
        {search.valueNotEmpty &&
          search.searchResult.map((map) => (
            <ProductFigure
              key={map.productName}
              productName={map.productName}
              descript={map.descript}
              path={map.path}
              series={map.series}
              price={map.price}
              designer={map.designer}
              img={map.img}
              category={map.category}
              _id={map._id}
            />
          ))}
        <SearchNoInputMes />
        <SearchNoResultMes />
      </div>
    </section>
  );
};

export default SearchModal;
