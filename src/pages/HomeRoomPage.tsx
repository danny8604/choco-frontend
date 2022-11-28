import ProductList from "../components/ui/productList/ProductList";
import HomeRoomTop from "../components/shop/homeRoom/HomeRoomTop";
import { useProducts } from "../app/hooks";

const HomeRoomPage = () => {
  const { productsData: homeProducts } = useProducts("products/homeRoom.json");
  return (
    <main>
      <HomeRoomTop />
      <ProductList props={homeProducts} />
    </main>
  );
};

export default HomeRoomPage;
