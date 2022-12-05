import styles from "./SearchModal.module.scss";
import { useAppSelector } from "../../app/hooks/hooks";
import ProductFigure from "../../components/product/productFigure/ProductFigure";
import Search from "../search/Search";
import SearchNoInputMes from "../search/SearchNoInputMes";
import SearchNoResultMes from "../search/SearchNoResultMes";

const SearchModal = () => {
  const searchInput = useAppSelector((state) => state.searchInput);
  const { searchModalIsOpen } = useAppSelector((state) => state.searchModal);

  return (
    <section
      className={`${styles.contentContainer}  ${
        searchModalIsOpen && styles.active
      }`}
    >
      <Search />
      <div className={styles.searchFigure}>
        {searchInput.valueNotEmpty &&
          searchInput.searchResult.map((map) => (
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
        <SearchNoInputMes />
        <SearchNoResultMes />
      </div>
    </section>
  );
};

export default SearchModal;
