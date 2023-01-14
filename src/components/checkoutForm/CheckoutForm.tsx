import axios from "axios";
import { getDatabase, ref, set } from "firebase/database";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { openBackdrop } from "../../features/backdrop/backdropSlice";
import {
  checkoutCart,
  resetShoppingCart,
  updateItemQuantity,
  updateTotalPriceAndQuantity,
  userShoppingCart,
} from "../../features/cart/cartItem/cartSlice";
import {
  formCleaner,
  resetFormState,
} from "../../features/formAuth/formAuthSlice";
import { openInfoModal } from "../../features/infoModal/infoModalSlice";
import AddressInput from "../ui/form/addressInput/AddressInput";
import EmailInput from "../ui/form/emailInput/EmailInput";
import NameInput from "../ui/form/nameInput/NameInput";
import PhoneInput from "../ui/form/phoneInput/PhoneInput";
import styles from "./CheckoutForm.module.scss";
import CheckoutFormCart from "./CheckoutFormCart";

const CheckoutForm = () => {
  const dispatch = useAppDispatch();
  const { login, userToken } = useAppSelector((state) => state.login);
  const { shoppingCart, orderItems } = useAppSelector((state) => state.cart);

  const navigate = useNavigate();
  const {
    phoneIsValid,
    nameIsValid,
    emailIsValid,
    addressIsValid,
    phoneValue,
    nameValue,
    emailValue,
    addressValue,
  } = useAppSelector((state) => state.formAuth);

  const checkoutHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (login) {
      try {
        await axios.post(
          "http://localhost:5000/api/users/checkout/",
          {
            emailValue: emailValue,
            nameValue: nameValue,
            addressValue: addressValue,
            phoneValue: +phoneValue,
          },
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    }

    if (phoneIsValid && nameIsValid && emailIsValid && addressIsValid) {
      alert("order succeed!");
      navigate("/");
      dispatch(openInfoModal());
      dispatch(openBackdrop());
      dispatch(checkoutCart());
      dispatch(resetFormState());
      dispatch(resetShoppingCart());
      dispatch(formCleaner());
    }

    if (!(phoneIsValid && nameIsValid && emailIsValid && addressIsValid)) {
      alert("Form not valid!!");
    }
  };

  return (
    <section className={styles.checkoutContainer}>
      <form onSubmit={checkoutHandler} className={styles.checkoutFormContainer}>
        <div className={styles.nameContainer}>
          <h3>Checkout</h3>
          <EmailInput />
          <NameInput />
        </div>
        <div className={styles.addressContainer}>
          <h5>Address</h5>
          <AddressInput />
          <PhoneInput />
        </div>
        <button className={styles.checkoutBtn}>CHECKOUT</button>
      </form>
      <CheckoutFormCart />
    </section>
  );
};

export default CheckoutForm;
