import styles from "./Navbar.module.scss";

import { Link } from "react-router-dom";
import NavbarLogoLink from "./NavbarLogoLink";
import NavbarSearch from "./NavbarSearch";
import NavbarCart from "./NavbarCart";
import NavbarLogin from "./NavbarLogin";
import { useAppSelector } from "../../app/hooks/hooks";

const Navbar = () => {
  const { isLogin } = useAppSelector((state) => state.login);

  const text = () => {
    if (isLogin) return <p>Hi, wellcome back.</p>;
    return <p>FOREVER RELEVANT IN TIME</p>;
  };

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.otherInfo} ${isLogin && styles.login}`}>
          {text()}
        </div>
        <nav className={styles.nav}>
          <ul className={styles.pageLink}>
            <NavbarLogoLink />
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li className={styles.shopLink}>
              <Link to="/shop">SHOP</Link>
              <ul className={styles.shopDropdown}>
                <li>
                  <Link to="/shop/Living-Room">LIVING ROOM CHAIR</Link>
                </li>
                <li>
                  <Link to="/shop/Home-Room">HOME ROOM CHAIR</Link>
                </li>
                <li>
                  <Link to="/shop/Dining-Room">DINING ROOM CHAIR</Link>
                </li>
                <li>
                  <Link to="/shop/Others">OTHERS CHAIR</Link>
                </li>
              </ul>
              <div className={styles.dropdownBackdrop}></div>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>

            <NavbarLogin />
          </ul>
          <ul className={styles.shopIcon}>
            <NavbarSearch />
            <NavbarCart />
          </ul>
        </nav>
        {/* <div className={styles.dropdownBackdrop}></div> */}
      </header>
    </>
  );
};

export default Navbar;
