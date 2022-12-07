import { ArrowLeft, ArrowRight } from "../../components/ui/icon/Arrow";
import styles from "./Carousel.module.scss";
import testPhoto from "../../assets/mainSectionIMG/chair-16.jpg";
import testPhoto2 from "../../assets/mainSectionIMG/chair-14.jpg";
import testPhoto3 from "../../assets/mainSectionIMG/chair-12.jpg";
import testPhoto4 from "../../assets/mainSectionIMG/chair-11.jpg";
import testPhoto5 from "../../assets/mainSectionIMG/chair-15.jpg";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { carouselNext, carouselPrev } from "./carouselSlice";
import { useEffect } from "react";
import CarouselBtn from "./CarouselBtn";

const Carousel = () => {
  const dispatch = useAppDispatch();
  const { slidesIndexArr } = useAppSelector((state) => state.carousel);

  useEffect(() => {
    const autoCarousel = setInterval(() => dispatch(carouselNext()), 4000);
    return () => clearInterval(autoCarousel);
  }, [slidesIndexArr]);

  const leftHandler = () => {
    dispatch(carouselNext());
  };
  const rightHandler = () => {
    dispatch(carouselPrev());
  };

  return (
    <div className={styles.carousel}>
      <CarouselBtn clickLeft={leftHandler} clickRight={rightHandler} />
      <ul className={styles.slideContainer}>
        <li>
          <img
            className={`${styles[`${slidesIndexArr[0]}`]} ${styles.slide}`}
            src={testPhoto}
          />
        </li>
        <li>
          <img
            className={`${styles[`${slidesIndexArr[1]}`]} ${styles.slide}`}
            src={testPhoto2}
          />
        </li>
        <li>
          <img
            className={`${styles[`${slidesIndexArr[2]}`]} ${styles.slide}`}
            src={testPhoto3}
          />
        </li>
        <li>
          <img
            className={`${styles[`${slidesIndexArr[3]}`]} ${styles.slide}`}
            src={testPhoto4}
          />
        </li>
        <li>
          <img
            className={`${styles[`${slidesIndexArr[4]}`]} ${styles.slide}`}
            src={testPhoto5}
          />
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
