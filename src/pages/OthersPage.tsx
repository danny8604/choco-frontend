import ShopList from "../components/ui/shopList/ShopList";
import OthersTop from "../components/shop/others/OthersTop";
import { useProducts } from "../app/hooks";

const OthersPage = () => {
  const { productsData } = useProducts("products.json");
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
