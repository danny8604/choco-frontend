import ProductList from "../components/ui/productList/ProductList";
import Navbar from "../components/navigation/Navbar";
import DiningRoomTop from "../components/shop/diningRoom/DiningRoomTop";

const DiningRoomPage = () => {
  return (
    <main>
      <Navbar />
      <DiningRoomTop />
      <ProductList />
    </main>
  );
};

export default DiningRoomPage;
