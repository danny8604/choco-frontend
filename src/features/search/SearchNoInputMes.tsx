import { useAppSelector } from "../../app/hooks/hooks";
import styles from "./SearchNoInputMes.module.scss";

const SearchNoInputMes = () => {
  const search = useAppSelector((state) => state.search);

  const noInput = search.value.length === 0;

  if (!noInput) return <></>;

  return (
    <div className={styles.messageContaiter}>
      <h4>FINDE SOMTHING ... 🐧🐧🐧🐧</h4>
    </div>
  );
};

export default SearchNoInputMes;
