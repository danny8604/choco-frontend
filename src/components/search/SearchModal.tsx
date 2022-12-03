import styles from "./SearchModal.module.scss";
import { useAppSelector } from "../../app/hooks/hooks";
import ProductFigure from "../ui/figure/productFigure/ProductFigure";
import SearchInput from "./SearchInput";
import SearchNoInputMes from "./SearchNoInputMes";
import SearchNoResultMes from "./SearchNoResultMes";

const SearchModal = () => {
  const navbar = useAppSelector((state) => state.navbar);
  const searchInput = useAppSelector((state) => state.searchInput);

  return (
    <section
      className={`${styles.contentContainer}  ${
        navbar.showModalToggle && navbar.searchIsClick && styles.active
      }`}
    >
      <SearchInput />
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
