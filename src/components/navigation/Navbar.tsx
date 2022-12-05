import styles from "./Navbar.module.scss";

import { Link } from "react-router-dom";
import NavbarLogoLink from "./NavbarLogoLink";
import NavbarSearch from "./NavbarSearch";
import NavbarCart from "./NavbarCart";
import NavbarLogin from "./NavbarLogin";
import { useAppSelector } from "../../app/hooks/hooks";

const Navbar = () => {
  const { isLogin } = useAppSelector((state) => state.loginForm);

  const text = () => {
    if (isLogin) return <p>Hi, wellcome back.</p>;
    return <p>FOREVER RELEVANT IN TIME</p>;
  };

  return (
    <>
      <div className={`${styles.otherInfo} ${isLogin && styles.login}`}>
        {text()}
      </div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.logoLink}>
            <NavbarLogoLink />
          </ul>
          <ul className={styles.pageLink}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li className={styles.shopLink}>
              <Link to="/shop">SHOP</Link>
              <ul className={styles.shopDropdown}>
                <li>livegre</li>
                <li>livegre</li>
                <li>livegre</li>
                <li>livegre</li>
              </ul>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <NavbarLogin />
          </ul>
          <ul className={styles.shopIcon}>
            <NavbarSearch />
            <NavbarCart />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
