import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks/hooks";
import { closeBackdrop } from "../backdrop/backdropSlice";
import styles from "./CartLeadCheckout.module.scss";
import { closeCartModal } from "./cartModalSlice";

const CartLeadCheckout = () => {
  const dispatch = useAppDispatch();
  const closeModalHandler = () => {
    dispatch(closeBackdrop());
    dispatch(closeCartModal());
  };

  return (
    <div className={styles.checkoutBtnContainer}>
      <Link to={"/checkout"}>
        <button onClick={() => closeModalHandler()}>Checkout Here</button>
      </Link>
    </div>
  );
};

export default CartLeadCheckout;
