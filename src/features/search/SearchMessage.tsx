import { useAppSelector } from "../../app/hooks/hooks";
import styles from "./SearchMessage.module.scss";

const SearchMessage = () => {
  const search = useAppSelector((state) => state.search);
  const noInput = search.value.length === 0;
  const noResult =
    search.value.length !== 0 && search.searchResult.length === 0;

  return (
    <div className={styles.messageContaiter}>
      {noInput && <h4>FINDE SOMTHING ... ( chair name ) </h4>}
      {noResult && <h4>NO RESULT ... ( Try Model or Choco ) </h4>}
    </div>
  );
};

export default SearchMessage;
