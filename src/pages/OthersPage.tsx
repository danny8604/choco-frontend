import ShopList from "../components/shop/ShopList";
import OthersTop from "../components/others/OthersTop";
import { useProducts } from "../app/hooks";

const OthersPage = () => {
  const { productsData } = useProducts();
  const OthersProducts = productsData.filter(
    (map) => map.category === "others"
  );

  return (
    <main>
      <OthersTop />
      <ShopList props={OthersProducts} />
    </main>
  );
};

export default OthersPage;
