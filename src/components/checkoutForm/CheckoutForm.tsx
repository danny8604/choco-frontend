import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import useMultistepForm from "../../app/hooks/useMultistpForm";
import { openBackdrop } from "../../features/backdrop/backdropSlice";
import {
  checkoutCart,
  checkoutOrderNumber,
  resetShoppingCart,
  updateTotalPriceAndQuantity,
  userShoppingCart,
} from "../../features/cart/cartItem/cartSlice";
import { openInfoModal } from "../../features/infoModal/infoModalSlice";
import { userLogin } from "../../features/login/loginSlice";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import Button from "../ui/button/Button";
import FormInput from "../ui/form/formInput/FormInput";
import styles from "./CheckoutForm.module.scss";

const cart = JSON.parse(localStorage.getItem("cart") || "");

const CheckoutForm = () => {
  const dispatch = useAppDispatch();
  const { login, userToken } = useAppSelector((state) => state.login);
  const navigate = useNavigate();
  const { steps, currentStepIndex, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<div>One</div>, <div>Two</div>]);
  const [values, setValues] = useState({
    name: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    dispatch(userShoppingCart(cart.userCart));
    dispatch(updateTotalPriceAndQuantity());

    if (!localStorage.getItem("userData")) {
      return;
    }
    const userData = JSON.parse(localStorage.getItem("userData") || "");

    if (userData && new Date(userData.expiration) > new Date()) {
      dispatch(
        userLogin({
          userId: userData.userId,
          userEmail: userData.userEmail,
          userToken: userData.userToken,
          login: userData.login,
        })
      );
    }
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log(query, "success");
    }
    if (query.get("canceled")) {
      console.log(query, "canceled");
    }
  }, []);

  const inputs = [
    {
      id: 1,
      errorMessage: "A name is required.",
      input: {
        type: "text",
        name: "name",
        label: "name",
        placeholder: "NAME",
        pattern: "/.(.*?)}/g",
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
        pattern: "/.(.*?)}/g",
        required: true,
      },
    },
    {
      id: 3,
      errorMessage: "Phone number should be 10-20 characters.",
      input: {
        type: "text",
        name: "phone",
        label: "phone",
        placeholder: "PHONE",
        pattern: "^[0-9]{10,20}$",
        required: true,
      },
    },
  ];

  const checkoutHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
        console.log(response.data, "test");
        dispatch(checkoutOrderNumber(response.data.order));
        // navigate("/");
        dispatch(openInfoModal());
        dispatch(openBackdrop());
        dispatch(checkoutCart());
        dispatch(resetShoppingCart());
      } catch (err) {
        dispatch(openUtilModal({ message: "Form not valid!!" }));
      }
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        onSubmit={checkoutHandler}
        className={`${styles.checkoutFormContainer} center-column`}
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
