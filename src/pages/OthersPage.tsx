import ProductList from "../components/ui/productList/ProductList";
import Navbar from "../components/navigation/Navbar";
import OthersTop from "../components/shop/others/OthersTop";

const OthersPage = () => {
  return (
    <main>
      <Navbar />
      <OthersTop />
      <ProductList />
    </main>
  );
};

export default OthersPage;
