import { useAppDispatch, useAppSelector } from "../../../../app/hooks/hooks";
import { backdropClick } from "../../../navigation/NavbarSlice";
import styles from "./Backdrop.module.scss";

const Backdrop = () => {
  const navbar = useAppSelector((state) => state.navbar);
  const dispatch = useAppDispatch();
  const backdropClickHandeler = () => {
    dispatch(backdropClick());
  };

  return (
    <div
      onClick={backdropClickHandeler}
      className={`${styles.backdrop} ${
        navbar.showModalToggle && styles.backdropActive
      }`}
    ></div>
  );
};

export default Backdrop;
