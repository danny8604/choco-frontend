import { useParams } from "react-router-dom";
import ProductDetails from "../components/product/ProductDetails";
import ProductTop from "../components/product/productTop";

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
