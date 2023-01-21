import { ScrollRestoration } from "react-router-dom";
import Checkout from "../components/checkoutForm/Checkout";

const CheckoutPage = () => {
  return (
    <main>
      <ScrollRestoration />
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
