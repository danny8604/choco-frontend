import CheckoutForm from "./CheckoutForm";
import CheckoutFormCart from "./CheckoutFormCart";
import styles from "./Checkout.module.scss";
import axios from "axios";

const Checkout = () => {
  const testHandler = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/stripe",
        {
          items: [
            { id: 1, quantity: 3 },
            { id: 2, quantity: 4 },
          ],
        }
      );
      window.location = response.data.url;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className={`${styles.checkoutContainer} `}>
      <button onClick={() => testHandler()}>tsetsetset</button>
      <CheckoutForm />
      <CheckoutFormCart />
    </section>
  );
};

export default Checkout;
