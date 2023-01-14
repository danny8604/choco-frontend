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

type ProductAddToCartBtnProps = {
  props: ProductsType;
};

const ProductAddToCartBtn = ({ props }: ProductAddToCartBtnProps) => {
  const dispatch = useAppDispatch();

  const { userToken, login } = useAppSelector((state) => state.login);
  const { shoppingCart } = useAppSelector((state) => state.cart);

  const addToCartHandler = async () => {
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
      } catch (err) {
        console.log(err);
      }
    }
    if (!login) {
      const item = {
        productId: props,
        quantity: 1,
      };
      dispatch(addToCart(item));
    }

    dispatch(openBackdrop());
    dispatch(openCartModal());
  };

  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => addToCartHandler()}>ADD TO CART</button>
    </div>
  );
};

export default ProductAddToCartBtn;
