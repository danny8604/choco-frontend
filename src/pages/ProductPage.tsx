import { ScrollRestoration, useParams } from "react-router-dom";
import useChairsData from "../app/hooks/useChairsData";
import Loading from "../components/loading/Loading";
import ProductCarousel from "../components/product/productCarousel/ProductCarousel";
import ProductDetails from "../components/product/productDetails/ProductDetails";
import ProductInfo from "../components/product/productInfo/ProductInfo";

const ProductPage = () => {
  const { productPath } = useParams();
  const { pathChairsData } = useChairsData(productPath);

  return (
    <main>
      {!pathChairsData && <Loading />}
      {pathChairsData && (
        <>
          <ScrollRestoration />
          <ProductInfo chairData={pathChairsData.product} />
          <ProductDetails chairData={pathChairsData.product} />
          <ProductCarousel />
        </>
      )}
    </main>
  );
};

export default ProductPage;
