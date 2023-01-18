import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import { ProductsType } from "../../../app/type";
import {
  addToCart,
  updateTotalPriceAndQuantity,
  userShoppingCart,
} from "../../../features/cart/cartItem/cartSlice";
import { openCartModal } from "../../../features/cartModal/cartModalSlice";
import { openBackdrop } from "../../../features/backdrop/backdropSlice";
import styles from "./ProductAddToCartBtn.module.scss";
import axios from "axios";
import { openUtilModal } from "../../../features/utilModal/utilModalSlice";
import { useNavigate } from "react-router-dom";

type ProductAddToCartBtnProps = {
  props: ProductsType;
};

const ProductAddToCartBtn = ({ props }: ProductAddToCartBtnProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userToken, login } = useAppSelector((state) => state.login);

  const addToCartHandler = async () => {
    if (!login) {
      dispatch(openUtilModal({ message: "Please log in first." }));
      return navigate("/login");
    }

    if (login) {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/users/addToCart/`,
          {
            productId: props._id,
          },
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );
        dispatch(userShoppingCart(response.data.cart));
        dispatch(openBackdrop());
        dispatch(openCartModal());
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => addToCartHandler()}>ADD TO CART</button>
    </div>
  );
};

export default ProductAddToCartBtn;
