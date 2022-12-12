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
  const { isLogin, isLogout } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLogin) {
      localStorage.removeItem("auth");
    }
  }, [isLogout]);

  const LogoutHandler = () => {
    if (isLogin) {
      alert("You have been logged out...");
      dispatch(userLogout());
      dispatch(resetShoppingCart());
      dispatch(updateTotalPriceAndQuantity());
    }
  };

  return (
    <li>
      <Link onClick={() => LogoutHandler()} to={`${isLogin ? "/" : "/login"}`}>
        {isLogin ? "LOGOUT" : "LOGIN"}
      </Link>
    </li>
  );
};

export default NavbarLogin;
