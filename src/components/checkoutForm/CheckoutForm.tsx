import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import useStripeCheckout from "../../app/hooks/useStripeCheckout";
import { openBackdrop } from "../../features/backdrop/backdropSlice";
import {
  checkoutCart,
  resetShoppingCart,
} from "../../features/cart/cartItem/cartSlice";
import { openInfoModal } from "../../features/infoModal/infoModalSlice";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import Button from "../ui/button/Button";
import FormInput from "../ui/form/formInput/FormInput";
import styles from "./CheckoutForm.module.scss";

const CheckoutForm = () => {
  const dispatch = useAppDispatch();
  const { login, userToken } = useAppSelector((state) => state.login);
  const navigate = useNavigate();
  const { shoppingCart } = useAppSelector((state) => state.cart);
  const { stripeCardCheckout } = useStripeCheckout();
  const [values, setValues] = useState({
    name: "Anya Forger",
    address: "Burlington West No. 108 , Park E. Rd.",
    phone: "0987007007",
  });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      const checkout = async () => {
        if (login) {
          try {
            const response = await axios.post(
              "http://localhost:5000/api/users/userCheckout/",
              {
                name: values.name,
                address: values.address,
                phone: +values.phone,
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
                orderName: values.name,
                orderAddress: values.address,
                orderPhone: values.phone,
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
      checkout();
    }
    if (query.get("canceled")) {
      navigate("/checkout");
    }
  }, [login]);

  const inputs = [
    {
      id: 1,
      errorMessage: "A name is required.",
      input: {
        type: "text",
        name: "name",
        label: "name",
        placeholder: "NAME",
        pattern: "^(?!s*$).+",
        required: true,
      },
    },
    {
      id: 2,
      errorMessage: "An address is required.",
      input: {
        type: "text",
        name: "address",
        label: "address",
        placeholder: "ADDRESS",
        pattern: "^(?!s*$).+",
        required: true,
      },
    },
    {
      id: 3,
      errorMessage: "Phone number should be 10-20 characters.",
      input: {
        type: "number",
        name: "phone",
        label: "phone",
        placeholder: "PHONE",
        pattern: "^[0-9]{10,20}$",
        required: true,
      },
    },
  ];

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const checkoutHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    stripeCardCheckout();
  };

  return (
    <>
      <form
        onSubmit={checkoutHandler}
        className={`${styles.checkoutFormContainer}`}
      >
        <div className={`${styles.inputContainer} `}>
          <h3>CHECKOUT</h3>
          {inputs.map((input) => {
            return (
              <FormInput
                key={input.id}
                errorMessage={input.errorMessage}
                props={{ ...input.input }}
                onChange={changeHandler}
              />
            );
          })}
        </div>
        <Button
          btnMessage={"CONTINUE TO PAYMENT"}
          className=""
          clickAciton={() => "2"}
        />
      </form>
    </>
  );
};

export default CheckoutForm;
