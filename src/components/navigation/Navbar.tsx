import styles from "./Navbar.module.scss";

import { Link } from "react-router-dom";
import NavbarLogoLink from "./NavbarLogoLink";
import NavbarSearch from "./NavbarSearch";
import NavbarCart from "./NavbarCart";
import NavbarLogin from "./NavbarLogin";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import NavModal from "../../features/navModal/NavModal";
import { navModalToggle } from "../../features/navModal/navModalSlice";
import NavbarOrder from "./NavbarOrder";
import NavbarUser from "./NavbarUser";

const Navbar = () => {
  const { login, userEmail } = useAppSelector((state) => state.login);
  const { navModalIsOpen } = useAppSelector((state) => state.navModal);
  const dispatch = useAppDispatch();

  const navInfo = () => {
    if (login) {
      return <p>Hi {userEmail}, wellcome back.</p>;
    }
    return <p>FOREVER RELEVANT IN TIME</p>;
  };

  const navModalHandler = () => {
    dispatch(navModalToggle());
  };

  return (
    <>
      <div className={`${styles.otherInfo} ${login && styles.login}`}>
        {navInfo()}
      </div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <button
            className={`${styles.navBtn} ${
              navModalIsOpen && styles.navBtnActive
            }`}
            onClick={() => navModalHandler()}
          ></button>
          <div className={styles.logoPageWrapper}>
            <div className={styles.logoContainer}>
              <NavbarLogoLink />
            </div>

            <ul className={styles.pageLink}>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li className={styles.shopLink}>
                <Link to="/shop">SHOP</Link>
                <ul className={styles.shopDropdown}>
                  <li>
                    <Link to="/shop/Living-Room" reloadDocument>
                      LIVING ROOM CHAIR
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop/Home-Room" reloadDocument>
                      HOME ROOM CHAIR
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop/Dining-Room" reloadDocument>
                      DINING ROOM CHAIR
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop/Others" reloadDocument>
                      OTHERS CHAIR
                    </Link>
                  </li>
                </ul>
                <div className={styles.dropdownBackdrop}></div>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <NavbarOrder />
              <NavbarLogin />
              {login && <NavbarUser />}
            </ul>
          </div>
          <ul className={styles.shopIcon}>
            <NavbarSearch />
            <NavbarCart />
          </ul>
        </nav>
      </header>
      <NavModal />
    </>
  );
};

export default Navbar;
