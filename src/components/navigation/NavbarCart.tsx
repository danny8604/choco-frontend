import styles from "./NavbarCart.module.scss";
import cartSvgIcon from "../../assets/svg/cart-outline.svg";

import { useAppDispatch } from "../../app/hooks/hooks";
import { openCartModal } from "../../features/cartModal/cartModalSlice";
import { openBackdrop } from "../../features/backdrop/backdropSlice";

const NavbarCart = () => {
  const dispatch = useAppDispatch();

  const cartClickHandler = () => {
    dispatch(openCartModal());
    dispatch(openBackdrop());
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
