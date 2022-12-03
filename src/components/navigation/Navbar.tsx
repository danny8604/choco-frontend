import styles from "./Navbar.module.scss";

import { Link } from "react-router-dom";
import NavbarLogoLink from "./NavbarLogoLink";
import NavbarSearch from "./NavbarSearch";
import NavbarCart from "./NavbarCart";
import NavbarLogin from "./NavbarLogin";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavbarLogoLink />
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
          <NavbarLogin />
        </ul>
        <ul className={styles.shopIcon}>
          <NavbarSearch />
          <NavbarCart />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
