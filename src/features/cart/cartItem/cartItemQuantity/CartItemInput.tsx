import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks/hooks";
import { ItemQuantity } from "../../../../app/type";
import { openUtilModal } from "../../../utilModal/utilModalSlice";
import {
  updateItemQuantity,
  updateTotalPriceAndQuantity,
  userShoppingCart,
} from "../cartSlice";
import styles from "./CartItemInput.module.scss";

const CartItemInput = ({ _id, productName, quantity }: ItemQuantity) => {
  const dispatch = useAppDispatch();
  const { userToken, login } = useAppSelector((state) => state.login);
  const navigate = useNavigate();

  const inputChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!inputValue) {
      return dispatch(openUtilModal({ message: "input error." }));
    }

    if (!login) {
      dispatch(openUtilModal({ message: "Please log in first." }));
      return navigate("/login");
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
