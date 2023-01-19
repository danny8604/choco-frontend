import axios from "axios";
import { useNavigate } from "react-router-dom";
import { openBackdrop } from "../../features/backdrop/backdropSlice";
import { userShoppingCart } from "../../features/cart/cartItem/cartSlice";
import { openCartModal } from "../../features/cartModal/cartModalSlice";
import { closeCheckModal } from "../../features/checkModal/checkModalSlice";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

const useCart = () => {
  const { login, userToken } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cartRemoveItem = async (productId: string) => {
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

  const cartAddToCart = async (productId: string) => {
    if (!login) {
      dispatch(openUtilModal({ message: "Please log in first." }));
      return navigate("/login");
    }

    if (login) {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/users/addToCart/`,
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
        dispatch(openBackdrop());
        dispatch(openCartModal());
      } catch (err) {
        dispatch(openUtilModal({ message: "add to cart failed." }));
      }
    }
  };

  return { cartRemoveItem, cartAddToCart };
};

export default useCart;
