import styles from "./CartItemRemoveBtn.module.scss";
import removeIcon from "../../../assets/svg/close-outline.svg";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import {
  removeCartItem,
  updateTotalPriceAndQuantity,
  userShoppingCart,
} from "./cartSlice";
import RemoveIconBtn from "../../../components/ui/button/removeIconBtn/RemoveIconBtn";
import axios from "axios";

type CartItemRemoveBtnProps = {
  productName: string;
  productId: string;
};

const CartItemRemoveBtn = ({
  productName,
  productId,
}: CartItemRemoveBtnProps) => {
  const { userToken, login } = useAppSelector((state) => state.login);
  const { shoppingCart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const removeItemHandler = async () => {
    if (login) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/removeFromCart",
          {
            productId: productId,
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
      dispatch(removeCartItem(productName));
    }
    // dispatch(updateTotalPriceAndQuantity());
  };
  return (
    <div className={styles.removeItemButton}>
      <RemoveIconBtn onClick={removeItemHandler} />
    </div>
  );
};

export default CartItemRemoveBtn;
