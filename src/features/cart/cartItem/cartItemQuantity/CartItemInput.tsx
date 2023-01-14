import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks/hooks";
import { ItemQuantity } from "../../../../app/type";
import {
  updateItemQuantity,
  updateTotalPriceAndQuantity,
  userShoppingCart,
} from "../cartSlice";
import styles from "./CartItemInput.module.scss";

const CartItemInput = ({ _id, productName, quantity }: ItemQuantity) => {
  const dispatch = useAppDispatch();
  const { userToken, login } = useAppSelector((state) => state.login);

  const inputChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!inputValue) {
      return;
    }
    if (login) {
      try {
        const response = await axios.patch(
          `http://localhost:5000/api/users/editItemQuantity/`,
          {
            productId: _id,
            quantity: inputValue,
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
      dispatch(
        updateItemQuantity({ productName: productName, quantity: +inputValue })
      );
    }
  };

  return (
    <input
      className={styles.quantityInput}
      onChange={inputChangeHandler}
      id={productName}
      type="number"
      name={productName}
      value={quantity}
      min="1"
      max="20"
    />
  );
};

export default CartItemInput;
