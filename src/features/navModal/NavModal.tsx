import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import useUser from "../../app/hooks/useUser";
import NavbarLogin from "../../components/navigation/NavbarLogin";
import NavbarOrder from "../../components/navigation/NavbarOrder";
import NavbarUser from "../../components/navigation/NavbarUser";
import styles from "./NavModal.module.scss";
import { navModalToggle } from "./navModalSlice";

const NavModal = () => {
  const { navModalIsOpen } = useAppSelector((state) => state.navModal);
  const { login } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const navModalHandler = () => dispatch(navModalToggle());

  return (
    <nav
      className={`${styles.navModalContainer} ${
        navModalIsOpen && styles.active
      }`}
    >
      <ul>
        <li>
          <Link onClick={() => navModalHandler()} to={"/"}>
            HOME
          </Link>
        </li>
        <li>
          <Link onClick={() => navModalHandler()} to={"/shop"}>
            SHOP
          </Link>
        </li>
        <li>
          <Link onClick={() => navModalHandler()} to={"/about"}>
            ABOUT
          </Link>
        </li>
        <NavbarOrder />
        <NavbarLogin />
        {login && <NavbarUser />}
      </ul>
    </nav>
  );
};

export default NavModal;
