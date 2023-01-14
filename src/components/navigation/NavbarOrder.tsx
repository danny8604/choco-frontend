import { Link } from "react-router-dom";
import styles from "./NavbarOrder.module.scss";

const NavbarOrder = () => {
  return (
    <li>
      <Link to="/order">ORDER</Link>
    </li>
  );
};

export default NavbarOrder;
