import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";
import useCart from "../../app/hooks/useCart";
import useStripeCheckout from "../../app/hooks/useStripeCheckout";
import Button from "../ui/button/Button";
import FormInput from "../ui/form/formInput/FormInput";
import styles from "./CheckoutForm.module.scss";

const CheckoutForm = () => {
  const { login } = useAppSelector((state) => state.login);
  const navigate = useNavigate();
  const { stripeCardCheckout } = useStripeCheckout();
  const [values, setValues] = useState({
    name: "Anya Forger",
    address: "Burlington West No. 108 , Park E. Rd.",
    phone: "0987007007",
  });
  const { cartCheckout } = useCart();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      cartCheckout(values);
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
        type: "tel",
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
    console.log("🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧");
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
