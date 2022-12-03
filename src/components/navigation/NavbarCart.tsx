import styles from "./NavbarCart.module.scss";

import cartSvgIcon from "../../assets/svg/cart-outline.svg";

import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { cartClick, showModalToggle } from "./NavbarSlice";

const NavbarCart = () => {
  const navbar = useAppSelector((state) => state.navbar);
  const dispatch = useAppDispatch();

  const cartClickHandler = () => {
    dispatch(showModalToggle());
    if (navbar.showModalToggle) {
      dispatch(showModalToggle());
    }
    dispatch(cartClick());
  };

  return (
    <li className={styles.cartIcon}>
      <button onClick={() => cartClickHandler()}>
        <img src={cartSvgIcon} className={styles.Icon} alt="rwar" />
      </button>
    </li>
  );
};

export default NavbarCart;
