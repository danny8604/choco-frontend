import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import {
  resetShoppingCart,
  updateTotalPriceAndQuantity,
} from "../../features/cart/cartItem/cartSlice";
import { logout } from "../../features/login/loginSlice";

const NavbarLogin = () => {
  const { isLogin } = useAppSelector((state) => state.login);
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
