import ShopList from "../components/shop/ShopList";
import DiningRoomTop from "../components/diningRoom/DiningRoomTop";
import { useProducts } from "../app/hooks/hooks";

const DiningRoomPage = () => {
  const { productsData } = useProducts();
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
