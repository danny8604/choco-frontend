import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { navModalToggle } from "../../features/navModal/navModalSlice";

const NavbarOrder = () => {
  const dispatch = useAppDispatch();
  const { navModalIsOpen } = useAppSelector((state) => state.navModal);
  return (
    <li>
      <Link
        to="/order"
        onClick={() => navModalIsOpen && dispatch(navModalToggle())}
      >
        ORDER
      </Link>
    </li>
  );
};

export default NavbarOrder;
