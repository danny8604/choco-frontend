import ExploreFigure from "../exploreFigure/ExploreFigure";

import styles from "./ExploreProducts.module.scss";

import { useEffect, useRef, useState } from "react";

import {
  useAppSelector,
  useAppDispatch,
  useProducts,
} from "../../../../app/hooks/hooks";
import {
  sliderMouseDown,
  sliderMouseLeave,
  sliderMouseDrag,
  sliderMouseUp,
} from "../../../../features/slider/sliderSlice";
import ExploroProductHeader from "../exploreProductsHeader/ExploreProductsHeader";
import { ProductsType } from "../../../../app/type";

const ExploreProducts = () => {
  const { sliderDown, mouseDownX, mouseMoveX } = useAppSelector(
    (state) => state.slider
  );
  const { productsData } = useProducts();
  const [productArr, setProductArr] = useState<ProductsType[]>([]);

  const dispatch = useAppDispatch();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // only get once
    if (productsData.length === 0 || productArr.length > 0) return;
    setProductArr(
      productsData
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 8)
    );
  }, [productsData]);

  useEffect(() => {
    const sectionRect = sectionRef.current!.getBoundingClientRect();
    const wrapperRect = wrapperRef.current!.getBoundingClientRect();

    console.log(wrapperRect.right, "wrapperRect.right");
    console.log(sectionRect.right, "sectionRect.right");
    console.log(wrapperRect.width, " wrapperRect.width ");
    console.log(sectionRect.width, " sectionRect.width ");

    if (mouseMoveX < -wrapperRect.width) {
      dispatch(sliderMouseDrag(-wrapperRect.width));
    }
    if (mouseMoveX > 0) {
      dispatch(sliderMouseDrag(0));
    }
    wrapperRef.current!.style.left = `${mouseMoveX}px`;

    if (parseInt(wrapperRef.current!.style.left) > 0) {
      wrapperRef.current!.style.left = "0px";
    } else if (wrapperRect.right < sectionRect.right) {
      wrapperRef.current!.style.left = `-${
        wrapperRect.width - sectionRect.width
      }px`;
    }
  }, [mouseMoveX]);

  const mouseDownHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    dispatch(sliderMouseDown(e.pageX - wrapperRef.current!.offsetLeft));
  };
  const mouseLeaveHandler = () => {
    dispatch(sliderMouseLeave());
  };
  const mouseUpHandler = () => {
    dispatch(sliderMouseUp());
  };
  const mouseMoveHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!sliderDown) return;
    dispatch(sliderMouseDrag(e.pageX - mouseDownX));
  };

  return (
    <>
      <ExploroProductHeader />
      <section className={styles.scrollSection} ref={sectionRef}>
        <div
          className={styles.wrapper}
          onMouseDown={mouseDownHandler}
          onMouseLeave={mouseLeaveHandler}
          onMouseUp={mouseUpHandler}
          onMouseMove={mouseMoveHandler}
          ref={wrapperRef}
        >
          {productArr.map((item) => (
            <ExploreFigure
              path={item.path}
              key={item.id}
              img={item.img.imgA}
              id={item.id}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ExploreProducts;
