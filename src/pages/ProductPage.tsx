import ProductCarousel from "../components/product/productCarousel/productCarousel";
import ProductDetails from "../components/product/productDetails/ProductDetails";
import ProductInfo from "../components/product/productInfo/ProductInfo";
import Carousel from "../features/carousel/Carousel";

const ProductPage = () => {
  return (
    <main>
      <ProductInfo />
      <ProductDetails />
      <ProductCarousel />
    </main>
  );
};

export default ProductPage;
