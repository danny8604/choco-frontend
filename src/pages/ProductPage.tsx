import { useParams } from "react-router-dom";
import ProductDetails from "../components/product/productDetails/ProductDetails";
import ProductTop from "../components/product/ProductTop";

const ProductPage = () => {
  const params = useParams();
  console.log("params", params);
  return (
    <main>
      <ProductTop />
      <ProductDetails />
    </main>
  );
};

export default ProductPage;
