import ShopList from "../components/shop/ShopList";
import HomeRoomTop from "../components/homeRoom/HomeRoomTop";
import { useProducts } from "../app/hooks";

const HomeRoomPage = () => {
  const { productsData } = useProducts();
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
