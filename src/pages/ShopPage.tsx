import { ScrollRestoration } from "react-router-dom";
import ShopTop from "../components/shop/ShopTop";

const ShopPage = () => {
  return (
    <main>
      <ScrollRestoration />
      <ShopTop />
    </main>
  );
};

export default ShopPage;
