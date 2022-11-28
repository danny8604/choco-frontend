import ProductList from "../components/ui/productList/ProductList";
import OthersTop from "../components/shop/others/OthersTop";
import { useProducts } from "../app/hooks";

const OthersPage = () => {
  const { productsData: OthersProducts } = useProducts("products/Others.json");
  return (
    <main>
      <OthersTop />
      <ProductList props={OthersProducts} />
    </main>
  );
};

export default OthersPage;
