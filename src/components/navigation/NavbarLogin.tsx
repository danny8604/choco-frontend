import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import useUser from "../../app/hooks/useUser";
import { navModalToggle } from "../../features/navModal/navModalSlice";

const NavbarLogin = () => {
  const { login } = useAppSelector((state) => state.login);
  const { navModalIsOpen } = useAppSelector((state) => state.navModal);
  const { authUserLogout } = useUser();
  const dispatch = useAppDispatch();

  const LogoutHandler = () => {
    if (navModalIsOpen) dispatch(navModalToggle());
    authUserLogout();
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
