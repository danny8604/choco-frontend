import LivingRoomTop from "../components/shop/livingRoom/LivingRoomTop";
import ProductList from "../components/ui/productList/ProductList";
import Navbar from "../components/navigation/Navbar";

const LivingRoomPage = () => {
  return (
    <main>
      <Navbar />
      <LivingRoomTop />
      <ProductList />
    </main>
  );
};

export default LivingRoomPage;
