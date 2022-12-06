import ProductDetails from "../components/product/productDetails/ProductDetails";
import ProductInfo from "../components/product/productInfo/ProductInfo";
import Carousel from "../features/carousel/Carousel";

const ProductPage = () => {
  return (
    <main>
      <ProductInfo />
      <ProductDetails />
      <Carousel />
    </main>
  );
};

export default ProductPage;
