import styles from "./SearchModal.module.scss";
import {
  useAppDispatch,
  useAppSelector,
  useProducts,
} from "../../../app/hooks";
import Figure from "../figure/Figure";
import { filterSearchData, inputValue, valueIsValid } from "./SearchModalSlice";
import { useEffect } from "react";

const SearchModal = () => {
  const navbar = useAppSelector((state) => state.navbar);
  const searchInput = useAppSelector((state) => state.searchInput);
  const dispatch = useAppDispatch();
  const { productsData } = useProducts("products.json");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputValue(e.target.value));
  };

  // use useEffect get new input value.
  useEffect(() => {
    dispatch(valueIsValid());
    if (searchInput.value.length < 1) return;
    dispatch(
      filterSearchData(
        productsData.filter((map) =>
          map.id
            .trim()
            .toLowerCase()
            .includes(searchInput.value.toLowerCase().trim())
        )
      )
    );
  }, [searchInput.value]);

  const noInputMessage = searchInput.value.length === 0 && (
    <div className={styles.messageContaiter}>
      <h4>FINDE SOMTHING ... 🐧🐧🐧🐧</h4>
    </div>
  );

  const noResultMessage = searchInput.value.length !== 0 &&
    searchInput.searchResult.length === 0 && (
      <div className={styles.messageContaiter}>
        <h4>NO RESULT ... 🦔🦔🦔🦔🦔</h4>
      </div>
    );

  return (
    <section
      className={`${styles.contentContainer}  ${
        navbar.showModalToggle && navbar.searchIsClick && styles.active
      }`}
    >
      <div className={styles.searchInput}>
        <input
          onChange={inputHandler}
          type="text"
          id="text"
          placeholder="SEARCH HERE"
        />
      </div>
      <div className={styles.searchFigure}>
        {searchInput.valueNotEmpty &&
          searchInput.searchResult.map((map) => (
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
        {noInputMessage}
        {noResultMessage}
      </div>
    </section>
  );
};

export default SearchModal;
