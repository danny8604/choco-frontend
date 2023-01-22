import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  patchCartInputQuantity,
  patchCartSelectQuantity,
  postAddToCart,
  postCartCheckout,
  postCartRemoveItem,
} from "../../api/usersApi";
import getErrorMessage from "../../components/util/getErrorMessage";
import { openBackdrop } from "../../features/backdrop/backdropSlice";
import {
  checkoutCart,
  resetShoppingCart,
  userShoppingCart,
} from "../../features/cart/cartItem/cartSlice";
import { openCartModal } from "../../features/cartModal/cartModalSlice";

import { openInfoModal } from "../../features/infoModal/infoModalSlice";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

const useCart = (productId?: string, productName?: string) => {
  const { login, userToken } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { shoppingCart } = useAppSelector((state) => state.cart);
  const [disabledBtn, setDisabledBtn] = useState(false);

  useEffect(() => {
    if (!productId) return;

    const product = shoppingCart.find(
      (item) => item.productId._id.toString() === productId.toString()
    );

    product && product.quantity >= 20
      ? setDisabledBtn(true)
      : setDisabledBtn(false);
  }, [shoppingCart, productId]);

  const cartRemoveItem = async () => {
    if (!(login && productId && userToken)) {
      dispatch(openUtilModal({ message: "Please log in first." }));
      return navigate("/login");
    }

    postCartRemoveItem({ productId, userToken })
      .then((data) => {
        dispatch(userShoppingCart(data));
        dispatch(
          openUtilModal({
            message: `Delete ${productName} success.`,
            isSucceed: true,
          })
        );
      })
      .catch((err) =>
        dispatch(
          openUtilModal({
            message: getErrorMessage(err),
          })
        )
      );
  };

  const cartAddToCart = async (productId: string) => {
    if (!(login && userToken)) {
      dispatch(openUtilModal({ message: "Please log in first." }));
      return navigate("/login");
    }

    postAddToCart({ userToken, productId })
      .then((data) => {
        dispatch(userShoppingCart(data));
        dispatch(openBackdrop());
        dispatch(openCartModal());
      })
      .catch((err) =>
        dispatch(openUtilModal({ message: getErrorMessage(err) }))
      );
  };

  const cartCheckout = async ({
    name,
    address,
    phone,
  }: {
    name: string;
    address: string;
    phone: string;
  }) => {
    if (!(login && userToken)) return;

    postCartCheckout({ name, address, phone, userToken })
      .then((data) => {
        dispatch(
          checkoutCart({
            orderNumber: data.orderNumber,
            orderName: name,
            orderAddress: address,
            orderPhone: phone,
            orderDate: data.orderDate,
          })
        );
        dispatch(openInfoModal());
        dispatch(openBackdrop());
        dispatch(userShoppingCart([]));
        navigate("/");
      })
      .catch((err) => {
        dispatch(openUtilModal({ message: getErrorMessage(err) }));
      });
  };

  const cartSelectQuantity = async (selectValue: string, productId: string) => {
    if (!selectValue)
      return dispatch(openUtilModal({ message: "input error." }));

    if (!(login && userToken)) {
      dispatch(openUtilModal({ message: "Please log in first." }));
      return navigate("/login");
    }

    patchCartSelectQuantity({ productId, selectValue, userToken })
      .then((data) => dispatch(userShoppingCart(data)))
      .catch((err) =>
        dispatch(openUtilModal({ message: getErrorMessage(err) }))
      );
  };

  const cartInputQuantity = async (inputValue: string, productId: string) => {
    if (!inputValue || +inputValue > 20 || +inputValue < 0) {
      return dispatch(openUtilModal({ message: "Input error." }));
    }

    if (!(login && userToken)) {
      dispatch(openUtilModal({ message: "Please log in first." }));
      return navigate("/login");
    }

    patchCartInputQuantity({ productId, inputValue, userToken })
      .then((data) => dispatch(userShoppingCart(data)))
      .catch((err) =>
        dispatch(openUtilModal({ message: getErrorMessage(err) }))
      );
  };

  return {
    cartRemoveItem,
    cartAddToCart,
    cartCheckout,
    cartSelectQuantity,
    cartInputQuantity,
    disabledBtn,
  };
};

export default useCart;
