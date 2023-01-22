import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";
import useAuth from "../../app/hooks/useAuth";
import useUser from "../../app/hooks/useUser";

const NavbarLogin = () => {
  const { login } = useAppSelector((state) => state.login);
  const { authUserLogout } = useUser();

  const LogoutHandler = () => authUserLogout();

  return (
    <li>
      <Link onClick={() => LogoutHandler()} to={`${login ? "/" : "/login"}`}>
        {login ? "LOGOUT" : "LOGIN"}
      </Link>
    </li>
  );
};

export default NavbarLogin;
