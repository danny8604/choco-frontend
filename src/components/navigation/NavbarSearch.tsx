import styles from "./NavbarSearch.module.scss";

import searchSvgIcon from "../../assets/svg/search-outline.svg";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { searchClick, showModalToggle } from "./NavbarSlice";

const NavbarSearch = () => {
  const navbar = useAppSelector((state) => state.navbar);
  const dispatch = useAppDispatch();

  const searchClickHandler = () => {
    dispatch(showModalToggle());
    if (navbar.showModalToggle) {
      dispatch(showModalToggle());
    }
    dispatch(searchClick());
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
