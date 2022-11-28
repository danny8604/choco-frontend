import ProductList from "../components/ui/productList/ProductList";
import DiningRoomTop from "../components/shop/diningRoom/DiningRoomTop";
import { useProducts } from "../app/hooks";

const DiningRoomPage = () => {
  const { productsData: DiningProducts } = useProducts(
    "products/DiningRoom.json"
  );
  return (
    <main>
      <DiningRoomTop />
      <ProductList props={DiningProducts} />
    </main>
  );
};

export default DiningRoomPage;
