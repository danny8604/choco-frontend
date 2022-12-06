import { ArrowLeft, ArrowRight } from "../../components/ui/icon/Arrow";
import styles from "./Carousel.module.scss";
import testPhoto from "../../assets/shopImg/shop01.jpg";
import testPhoto2 from "../../assets/mainSectionIMG/chair-14.jpg";
import testPhoto3 from "../../assets/mainSectionIMG/chair-12.jpg";
import testPhoto4 from "../../assets/mainSectionIMG/chair-11.jpg";
import testPhoto5 from "../../assets/mainSectionIMG/chair-15.jpg";

const Carousel = () => {
  return (
    <section className={styles.carouselContainer}>
      <header className={styles.carouselHeader}>
        <h3>EXPLORE OTHERS PRODUCTS BY CATEGORY</h3>
      </header>
      <div className={styles.carousel}>
        <button className={`${styles.carouselButton}  ${styles.prev}`}>
          <ArrowLeft />
        </button>
        <button className={`${styles.carouselButton}  ${styles.next}`}>
          <ArrowRight />
        </button>
        <ul className={styles.slideContainer}>
          <li className={styles.slide}>
            <img className={styles.slideImg1} src={testPhoto} />
          </li>
          <li className={styles.slide}>
            <img className={styles.slideImg2} src={testPhoto2} />
          </li>
          <li className={styles.slide}>
            <img className={styles.slideImg3} src={testPhoto3} />
          </li>
          <li className={styles.slide}>
            <img className={styles.slideImg4} src={testPhoto4} />
          </li>
          <li className={styles.slide}>
            <img className={styles.slideImg5} src={testPhoto5} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Carousel;
