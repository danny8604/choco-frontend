import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { navModalToggle } from "../../features/navModal/navModalSlice";

const NavbarUser = () => {
  const dispatch = useAppDispatch();
  const { navModalIsOpen } = useAppSelector((state) => state.navModal);

  return (
    <li>
      <Link
        to="/user"
        onClick={() => navModalIsOpen && dispatch(navModalToggle())}
      >
        USER
      </Link>
    </li>
  );
};

export default NavbarUser;
