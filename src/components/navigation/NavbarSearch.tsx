import styles from "./NavbarSearch.module.scss";
import searchSvgIcon from "../../assets/svg/search-outline.svg";

import { useAppDispatch } from "../../app/hooks/hooks";
import { openSearchModal } from "../../features/searchModal/searchModalSlice";
import { openBackdrop } from "../../features/backdrop/backdropSlice";

const NavbarSearch = () => {
  const dispatch = useAppDispatch();

  const searchClickHandler = () => {
    dispatch(openSearchModal());
    dispatch(openBackdrop());
  };

  return (
    <li className={styles.searchIcon}>
      <button onClick={() => searchClickHandler()}>
        <img src={searchSvgIcon} className={styles.Icon} alt="rwar" />
      </button>
    </li>
  );
};

export default NavbarSearch;
