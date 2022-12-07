import Carousel from "../../../features/carousel/Carousel";
import styles from "./ProductCarousel.module.scss";

const ProductCarousel = () => {
  return (
    <section className={styles.productCarouselContainer}>
      <header className={styles.productCarouselHeader}>
        <h3>EXPLORE OTHERS PRODUCTS BY CATEGORY</h3>
      </header>
      <Carousel />
    </section>
  );
};
export default ProductCarousel;
