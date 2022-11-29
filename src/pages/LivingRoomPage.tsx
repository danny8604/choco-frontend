import { useProducts } from "../app/hooks";
import LivingRoomTop from "../components/shop/livingRoom/LivingRoomTop";
import ShopList from "../components/ui/shopList/ShopList";

const LivingRoomPage = () => {
  const { productsData } = useProducts("products.json");
  const livingProducts = productsData.filter(
    (map) => map.category === "livingRoom"
  );

  return (
    <main>
      <LivingRoomTop />
      <ShopList props={livingProducts} />
    </main>
  );
};

export default LivingRoomPage;
