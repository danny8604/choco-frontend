import CheckoutForm from "./CheckoutForm";
import CheckoutFormCart from "./CheckoutFormCart";
import styles from "./Checkout.module.scss";

const Checkout = () => {
  return (
    <section className={`${styles.checkoutContainer} `}>
      <CheckoutForm />
      <CheckoutFormCart />
    </section>
  );
};

export default Checkout;
