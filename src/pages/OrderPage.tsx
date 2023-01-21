import { ScrollRestoration } from "react-router-dom";
import OrderSearch from "../components/orderSearch/OrderSearch";

const OrderPage = () => {
  return (
    <main>
      <ScrollRestoration />
      <OrderSearch />
    </main>
  );
};

export default OrderPage;
