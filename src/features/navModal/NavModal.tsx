import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import {
  resetShoppingCart,
  updateTotalPriceAndQuantity,
} from "../cart/cartItem/cartSlice";
import { userLogout } from "../login/loginSlice";
import styles from "./NavModal.module.scss";
import { navModalToggle } from "./navModalSlice";

const NavModal = () => {
  const { navModalIsOpen } = useAppSelector((state) => state.navModal);
  const { isLogin } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const navModalHandler = () => {
    dispatch(navModalToggle());
  };

  const logoutHandler = () => {
    dispatch(navModalToggle());
    if (isLogin) {
      alert("You have been logged out.");
      dispatch(userLogout());
      dispatch(resetShoppingCart());
      dispatch(updateTotalPriceAndQuantity());
    }
  };

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
        <li>
          <Link
            onClick={() => logoutHandler()}
            to={`${isLogin ? "/" : "/login"}`}
          >
            {isLogin ? "LOGOUT" : "LOGIN"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavModal;
