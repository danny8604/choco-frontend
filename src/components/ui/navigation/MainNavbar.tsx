import { Link } from "react-router-dom";
import styles from "./MainNavbar.module.scss";
import carIcon from "../../../assets/cart-outline.svg";
import searchIcon from "../../../assets/search-outline.svg";

const MainNavbar = () => {
  return (
    <header className={styles.header}>
      {/* <div className={styles.navInfor}></div> */}
      <nav className={styles.nav}>
        <div className={styles.logoLink}>
          <Link to="/" reloadDocument>
            CHOCO
          </Link>
        </div>
        <ul className={styles.pageLink}>
          <li>
            <Link to="/" reloadDocument>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <Link to="/">ABOUT</Link>
          </li>
          <li>
            <Link to="/">CONTACT</Link>
          </li>
          <li>
            <Link to="/">LOGIN</Link>
          </li>
        </ul>
        <ul className={styles.shopIcon}>
          <li>
            <Link to="/">
              <img src={searchIcon} className={styles.Icon} alt="rwar" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={carIcon} className={styles.Icon} alt="rwar" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavbar;
