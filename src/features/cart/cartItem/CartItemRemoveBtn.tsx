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
import { closeUtilModal, openUtilModal } from "../../utilModal/utilModalSlice";
import { openCartModal } from "../../cartModal/cartModalSlice";
import {
  closeCheckModal,
  openCheckModal,
} from "../../checkModal/checkModalSlice";
import CheckModal from "../../checkModal/CheckModal";

type CartItemRemoveBtnProps = {
  productName: string;
  productId: string;
};

const CartItemRemoveBtn = ({
  productName,
  productId,
}: CartItemRemoveBtnProps) => {
  const dispatch = useAppDispatch();
  const { userToken, login } = useAppSelector((state) => state.login);

  const confirmRemoveItem = async () => {
    if (!login) {
      return dispatch(openUtilModal({ message: "Please log in first." }));
    }

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
      return dispatch(
        openUtilModal({
          message: "Something went wrong, can't delete this item.",
        })
      );
    }

    dispatch(closeCheckModal());
  };

  const removeItemHandler = () => {
    dispatch(openCheckModal("Are you sure you want to delete this item?"));
  };

  return (
    <>
      <CheckModal okAction={confirmRemoveItem} />
      <div className={styles.removeItemButton}>
        <RemoveIconBtn onClick={removeItemHandler} />
      </div>
    </>
  );
};

export default CartItemRemoveBtn;
