import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import {
  resetShoppingCart,
  updateTotalPriceAndQuantity,
} from "../cart/cartItem/CartSlice";
import { logout } from "../login/loginForm/LoginFormSlice";

const NavbarLogin = () => {
  const { isLogin } = useAppSelector((state) => state.loginForm);

  const dispatch = useAppDispatch();

  const LogoutHandler = () => {
    if (isLogin) {
      alert("You have been logged out. 🐄🐄");
      dispatch(logout());
      dispatch(resetShoppingCart());
      dispatch(updateTotalPriceAndQuantity());
      localStorage.clear();
    }
  };

  return (
    <li>
      <Link onClick={() => LogoutHandler()} to="/login">
        {isLogin ? "LOGOUT" : "LOGIN"}
      </Link>
    </li>
  );
};

export default NavbarLogin;
