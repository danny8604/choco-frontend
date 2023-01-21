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
import { Link } from "react-router-dom";

const Carousel = () => {
  const dispatch = useAppDispatch();
  const { slidesIndexArr } = useAppSelector((state) => state.carousel);

  useEffect(() => {
    const autoCarousel = setInterval(() => dispatch(carouselNext()), 3000);
    return () => clearInterval(autoCarousel);
  }, [slidesIndexArr]);

  const leftHandler = () => dispatch(carouselNext());
  const rightHandler = () => dispatch(carouselPrev());

  return (
    <div className={styles.carousel}>
      <CarouselBtn clickLeft={leftHandler} clickRight={rightHandler} />
      <ul className={styles.slideContainer}>
        <li>
          <Link to={"/shop/Dining-Room"}>
            <img
              className={`${styles[`${slidesIndexArr[0]}`]} ${styles.slide}`}
              src={testPhoto}
            />
            <div className={styles.carouselTextContainer}>
              <h4>DINING ROOM</h4>
            </div>{" "}
          </Link>
        </li>
        <li>
          <Link to={"/shop/Home-Room"}>
            <img
              className={`${styles[`${slidesIndexArr[1]}`]} ${styles.slide}`}
              src={testPhoto2}
            />
            <div className={styles.carouselTextContainer}>
              <h4>HOOM ROOM</h4>
            </div>
          </Link>
        </li>
        <li>
          <Link to={"/shop/Living-Room"}>
            <img
              className={`${styles[`${slidesIndexArr[2]}`]} ${styles.slide}`}
              src={testPhoto3}
            />
            <div className={styles.carouselTextContainer}>
              <h4>LIVING ROOM</h4>
            </div>
          </Link>
        </li>
        <li>
          <Link to={"/shop/Dining-Room"}>
            <img
              className={`${styles[`${slidesIndexArr[3]}`]} ${styles.slide}`}
              src={testPhoto4}
            />
            <div className={styles.carouselTextContainer}>
              <h4>DINING ROOM</h4>
            </div>
          </Link>
        </li>
        <li>
          <Link to={"/shop/Others"}>
            <img
              className={`${styles[`${slidesIndexArr[4]}`]} ${styles.slide}`}
              src={testPhoto5}
            />
            <div className={styles.carouselTextContainer}>
              <h4>OTHERS ROOM</h4>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
