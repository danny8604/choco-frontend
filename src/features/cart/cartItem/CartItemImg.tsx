import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks/hooks";
import { closeBackdrop } from "../../backdrop/backdropSlice";
import { closeCartModal } from "../../cartModal/cartModalSlice";
import { closeInfoModal } from "../../infoModal/infoModalSlice";
import styles from "./CartItemImg.module.scss";

type CartItemNameProps = {
  img: string;
  path: string;
};

const CartItemImg = ({ img, path }: CartItemNameProps) => {
  const dispatch = useAppDispatch();
  function getImageUrl(name: string) {
    return new URL(`../../../assets/productImg/${name}.jpg`, import.meta.url)
      .href;
  }
  const closeModalHandler = () => {
    dispatch(closeBackdrop());
    dispatch(closeCartModal());
    dispatch(closeInfoModal());
  };

  return (
    <div className={styles.cartItemImg}>
      <Link to={`/product/${path}`} onClick={() => closeModalHandler()}>
        <img src={getImageUrl(img)} alt="chair photo" loading="lazy" />
      </Link>
    </div>
  );
};

export default CartItemImg;
