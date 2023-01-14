import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import {
  resetShoppingCart,
  updateTotalPriceAndQuantity,
} from "../../features/cart/cartItem/cartSlice";
import { getEmail } from "../../features/formAuth/formAuthSlice";
import { userLogout } from "../../features/login/loginSlice";

const NavbarLogin = () => {
  const { login, logout } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  const LogoutHandler = () => {
    if (login) {
      alert("You have been logged out...");
      dispatch(userLogout());
      dispatch(resetShoppingCart());
      dispatch(updateTotalPriceAndQuantity());
      localStorage.removeItem("userData");
      localStorage.removeItem("cart");
    }
  };

  return (
    <li>
      <Link onClick={() => LogoutHandler()} to={`${login ? "/" : "/login"}`}>
        {login ? "LOGOUT" : "LOGIN"}
      </Link>
    </li>
  );
};

export default NavbarLogin;
