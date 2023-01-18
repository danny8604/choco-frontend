import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import {
  resetShoppingCart,
  updateTotalPriceAndQuantity,
} from "../../features/cart/cartItem/cartSlice";
import { getEmail } from "../../features/formAuth/formAuthSlice";
import { userLogout } from "../../features/login/loginSlice";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";

const NavbarLogin = () => {
  const { login, userEmail } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  const LogoutHandler = () => {
    if (login) {
      dispatch(userLogout());
      dispatch(resetShoppingCart());
      localStorage.removeItem("userData");
      localStorage.removeItem("cart");
      dispatch(
        openUtilModal({
          message: "You have been logged out.",
          isSucceed: true,
        })
      );
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
