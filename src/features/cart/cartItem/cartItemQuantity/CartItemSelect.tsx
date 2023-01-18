import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { openUtilModal } from "../../../utilModal/utilModalSlice";

import { ItemQuantity } from "../../../../app/type";
import {
  updateItemQuantity,
  updateTotalPriceAndQuantity,
  userShoppingCart,
} from "../cartSlice";
import styles from "./CartItemSelect.module.scss";

const CartItemSelect = ({ _id, productName, quantity }: ItemQuantity) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userToken, login } = useAppSelector((state) => state.login);

  const selectChangeHandler = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectValue = e.target.value;
    if (!selectValue) {
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
            quantity: selectValue,
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
    <select
      value={quantity}
      onChange={selectChangeHandler}
      className={styles.itemAmount}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10+</option>
    </select>
  );
};

export default CartItemSelect;
