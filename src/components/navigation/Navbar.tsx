import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import cartIcon from "../../assets/svg/cart-outline.svg";
import searchIcon from "../../assets/svg/search-outline.svg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { cartClick, searchClick, showModalToggle } from "./NavbarSlice";
import { logout } from "../login/loginForm/LoginFormSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navbar = useAppSelector((state) => state.navbar);
  const { isLoading, signInToken, isLogin } = useAppSelector(
    (state) => state.loginForm
  );

  const searchClickHandler = () => {
    dispatch(showModalToggle());
    if (navbar.showModalToggle) {
      dispatch(showModalToggle());
    }
    dispatch(searchClick());
  };

  const cartClickHandler = () => {
    dispatch(showModalToggle());
    if (navbar.showModalToggle) {
      dispatch(showModalToggle());
    }
    dispatch(cartClick());
  };

  const LogoutHandler = () => {
    if (signInToken) {
      alert("You have been logged out. 🐄🐄");
      dispatch(logout());
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoLink}>
          <Link to="/" reloadDocument>
            CHOCO
          </Link>
        </div>
        <ul className={styles.pageLink}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link onClick={() => LogoutHandler()} to="/login">
              {isLogin ? "LOGOUT" : "LOGIN"}
            </Link>
          </li>
        </ul>
        <ul className={styles.shopIcon}>
          <li>
            <button onClick={() => searchClickHandler()}>
              <img src={searchIcon} className={styles.Icon} alt="rwar" />
            </button>
          </li>
          <li>
            <button onClick={() => cartClickHandler()}>
              <img src={cartIcon} className={styles.Icon} alt="rwar" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
