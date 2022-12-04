import { useAppSelector } from "../../app/hooks/hooks";
import styles from "./SearchNoResultMes.module.scss";

const SearchNoResultMes = () => {
  const searchInput = useAppSelector((state) => state.searchInput);

  const noResult =
    searchInput.value.length !== 0 && searchInput.searchResult.length === 0;

  if (!noResult) return <></>;

  return (
    <div className={styles.messageContaiter}>
      <h4>NO RESULT ... 🦔🦔🦔🦔🦔</h4>
    </div>
  );
};

export default SearchNoResultMes;
