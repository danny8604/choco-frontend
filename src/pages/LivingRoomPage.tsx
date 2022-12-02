import { useProducts } from "../app/hooks/hooks";
import LivingRoomTop from "../components/livingRoom/LivingRoomTop";
import ShopList from "../components/shop/ShopList";

const LivingRoomPage = () => {
  const { productsData } = useProducts();
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
