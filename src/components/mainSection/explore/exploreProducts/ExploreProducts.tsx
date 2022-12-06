import ExploreFigure from "../exploreFigure/ExploreFigure";
import chair08 from "../../../../assets/mainSectionIMG/chair-08.jpg";
import chair09 from "../../../../assets/mainSectionIMG/chair-09.jpg";
import styles from "./ExploreProducts.module.scss";

import { useEffect, useRef } from "react";

import { useAppSelector, useAppDispatch } from "../../../../app/hooks/hooks";
import {
  sliderMouseDown,
  sliderMouseLeave,
  sliderMouseDrag,
  sliderMouseUp,
} from "../../../../features/slider/sliderSlice";
import ExploroProductHeader from "../exploreProductsHeader/ExploreProductsHeader";
import {
  scrollLeft,
  scrollRight,
} from "../../../../features/clickScroll/clickScroll";

const ExploreProducts = () => {
  const { sliderDown, mouseDownX, mouseMoveX } = useAppSelector(
    (state) => state.slider
  );

  const { clickLeft, clickRight, test } = useAppSelector(
    (state) => state.clickScroll
  );

  const dispatch = useAppDispatch();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    wrapperRef.current!.style.left = `${mouseMoveX}px`;

    const sectionRect = sectionRef.current!.getBoundingClientRect();
    const wrapperRect = wrapperRef.current!.getBoundingClientRect();

    if (parseInt(wrapperRef.current!.style.left) > 0) {
      wrapperRef.current!.style.left = "0px";
    } else if (wrapperRect.right < sectionRect.right) {
      wrapperRef.current!.style.left = `-${
        wrapperRect.width - sectionRect.width
      }px`;
    }
  }, [mouseMoveX, clickLeft, clickRight]);

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

  const leftHandler = () => {};
  const rightHandler = () => {};

  return (
    <>
      <ExploroProductHeader />
      <button onClick={leftHandler}>LEFT</button>
      <button onClick={rightHandler}>RIGHT</button>
      <section className={styles.scrollSection} ref={sectionRef}>
        <div
          className={styles.wrapper}
          onMouseDown={mouseDownHandler}
          onMouseLeave={mouseLeaveHandler}
          onMouseUp={mouseUpHandler}
          onMouseMove={mouseMoveHandler}
          ref={wrapperRef}
        >
          <ExploreFigure img={chair08} id={"LIVING ROOM"} />
          <ExploreFigure img={chair09} id={"LIVING ROOM"} />
          <ExploreFigure img={chair08} id={"LIVING ROOM"} />
          <ExploreFigure img={chair09} id={"LIVING ROOM"} />
          <ExploreFigure img={chair08} id={"LIVING ROOM"} />
          <ExploreFigure img={chair09} id={"LIVING ROOM"} />
          <ExploreFigure img={chair08} id={"LIVING ROOM"} />
          <ExploreFigure img={chair09} id={"LIVING ROOM"} />
          <ExploreFigure img={chair08} id={"LIVING ROOM"} />
        </div>
      </section>
    </>
  );
};

export default ExploreProducts;
