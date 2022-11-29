import ShopList from "../components/ui/shopList/ShopList";
import DiningRoomTop from "../components/shop/diningRoom/DiningRoomTop";
import { useProducts } from "../app/hooks";

const DiningRoomPage = () => {
  const { productsData } = useProducts("products.json");
  const DiningProducts = productsData.filter(
    (map) => map.category === "diningRoom"
  );
  return (
    <main>
      <DiningRoomTop />
      <ShopList props={DiningProducts} />
    </main>
  );
};

export default DiningRoomPage;
