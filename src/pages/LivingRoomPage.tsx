import { useProducts } from "../app/hooks";
import LivingRoomTop from "../components/shop/livingRoom/LivingRoomTop";
import ProductList from "../components/ui/productList/ProductList";

const LivingRoomPage = () => {
  const { productsData: livingProducts } = useProducts(
    "products/livingRoom.json"
  );

  return (
    <main>
      <LivingRoomTop />
      <ProductList props={livingProducts} />
    </main>
  );
};

export default LivingRoomPage;
