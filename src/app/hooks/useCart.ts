import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const useCart = (productIdd?: string) => {
  const { login, userToken } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { shoppingCart } = useAppSelector((state) => state.cart);
  const [disabledBtn, setDisabledBtn] = useState(false);

  // useEffect(() => {
  //   if (login) {
  //     const fetchUserCart = async () => {
  //       const response = await axios.get(
  //         `http://localhost:5000/api/users/getUserCart/`,
  //         {
  //           headers: {
  //             Authorization: "Bearer " + userToken,
  //           },
  //         }
  //       );

  //       dispatch(userShoppingCart(response.data.userCart));
  //     };
  //     fetchUserCart();
  //   }
  // }, [login, userToken]);

  useEffect(() => {
    if (productIdd) {
      const product = shoppingCart.find(
        (item) => item.productId._id.toString() === productIdd.toString()
      );

      product && product.quantity >= 20
        ? setDisabledBtn(true)
        : setDisabledBtn(false);
    }
  }, [shoppingCart, productIdd]);

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

  const cartCheckout = async ({
    name,
    address,
    phone,
  }: {
    name: string;
    address: string;
    phone: string;
  }) => {
    if (login) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/userCheckout/",
          {
            name: name,
            address: address,
            phone: +phone,
          },
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );
        dispatch(
          checkoutCart({
            orderNumber: response.data.orderNumber,
            orderName: name,
            orderAddress: address,
            orderPhone: phone,
            orderDate: response.data.orderDate,
          })
        );
        dispatch(openInfoModal());
        dispatch(openBackdrop());
        dispatch(resetShoppingCart());
        navigate("/");
      } catch (err) {
        dispatch(openUtilModal({ message: "Form not valid!!" }));
      }
    }
  };

  const cartSelectQuantity = async (selectValue: string, productId: string) => {
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
            productId: productId,
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
        dispatch(openUtilModal({ message: "Select product quantity valid!!" }));
      }
    }
  };

  const cartInputQuantity = async (inputValue: string, productId: string) => {
    if (!inputValue || +inputValue > 20 || +inputValue < 0) {
      return dispatch(openUtilModal({ message: "Input error." }));
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
            productId: productId,
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
        dispatch(openUtilModal({ message: "Select product quantity valid!!" }));
      }
    }
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
