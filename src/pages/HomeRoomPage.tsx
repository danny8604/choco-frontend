import ProductList from "../components/ui/productList/ProductList";
import Navbar from "../components/navigation/Navbar";
import HomeRoomTop from "../components/shop/homeRoom/HomeRoomTop";

const HomeRoomPage = () => {
  return (
    <main>
      <Navbar />
      <HomeRoomTop />
      <ProductList />
    </main>
  );
};

export default HomeRoomPage;
