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
  const dispatch = useAppDispatch();
  const { login, userEmail } = useAppSelector((state) => state.login);
  const { navModalIsOpen } = useAppSelector((state) => state.navModal);

  const navModalHandler = () => dispatch(navModalToggle());

  return (
    <>
      <div className={`${styles.otherInfo} ${login && styles.login}`}>
        {login ? (
          <p>Hi {userEmail}, wellcome back.</p>
        ) : (
          <p>FOREVER RELEVANT IN TIME</p>
        )}
      </div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <button
            className={`${styles.navBtn} ${
              navModalIsOpen && styles.navBtnActive
            }`}
            onClick={() => navModalHandler()}
          ></button>
          <div
            className={`${styles.logoPageWrapper} flex-alignCenter-justifyCenter`}
          >
            <div className={styles.logoContainer}>
              <NavbarLogoLink />
            </div>

            <ul className={`${styles.pageLink} flex-alignCenter-justifyCenter`}>
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
              <NavbarOrder />
              <NavbarLogin />
              {login && <NavbarUser />}
            </ul>
          </div>
          <ul className={`${styles.shopIcon} flex-alignCenter-justifyCenter`}>
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
