import ShopList from "../components/ui/shopList/ShopList";
import HomeRoomTop from "../components/shop/homeRoom/HomeRoomTop";
import { useProducts } from "../app/hooks";

const HomeRoomPage = () => {
  const { productsData } = useProducts("products.json");
  const homeProducts = productsData.filter(
    (map) => map.category === "homeRoom"
  );
  return (
    <main>
      <HomeRoomTop />
      <ShopList props={homeProducts} />
    </main>
  );
};

export default HomeRoomPage;
