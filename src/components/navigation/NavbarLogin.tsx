import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { resetShoppingCart } from "../cart/cartItem/CartSlice";
import { logout } from "../login/loginForm/LoginFormSlice";

const NavbarLogin = () => {
  const { isLogin, signInToken } = useAppSelector((state) => state.loginForm);

  const dispatch = useAppDispatch();

  const LogoutHandler = () => {
    if (signInToken) {
      alert("You have been logged out. 🐄🐄");
      dispatch(logout());
      dispatch(resetShoppingCart());
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
