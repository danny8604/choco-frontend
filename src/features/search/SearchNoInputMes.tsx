import { useAppSelector } from "../../app/hooks/hooks";
import styles from "./SearchNoInputMes.module.scss";

const SearchNoInputMes = () => {
  const searchInput = useAppSelector((state) => state.searchInput);

  const noInput = searchInput.value.length === 0;

  if (!noInput) return <></>;

  return (
    <div className={styles.messageContaiter}>
      <h4>FINDE SOMTHING ... 🐧🐧🐧🐧</h4>
    </div>
  );
};

export default SearchNoInputMes;
