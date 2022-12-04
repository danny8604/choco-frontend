import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
  useProducts,
} from "../../../app/hooks/hooks";
import styles from "./SearchInput.module.scss";
import {
  filterSearchData,
  searchInputValue,
  searchValueIsValid,
} from "./searchInputSlice";

const SearchInput = () => {
  const searchInput = useAppSelector((state) => state.searchInput);
  const dispatch = useAppDispatch();
  const { productsData } = useProducts();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchInputValue(e.target.value));
  };

  useEffect(() => {
    dispatch(searchValueIsValid());
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

  return (
    <div className={styles.searchInput}>
      <input
        onChange={inputHandler}
        type="text"
        id="text"
        placeholder="SEARCH HERE"
      />
    </div>
  );
};

export default SearchInput;
