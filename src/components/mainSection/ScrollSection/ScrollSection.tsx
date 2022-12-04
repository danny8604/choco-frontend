import React from "react";
import ProductFigure from "./ScrollFigure";
import chair08 from "../../../assets/mainSectionIMG/chair-08.jpg";
import chair09 from "../../../assets/mainSectionIMG/chair-09.jpg";
import styles from "./ScrollSection.module.scss";

import { useEffect, useRef } from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks/hooks";
import {
  mouseDown,
  mouseLeave,
  mouseMove,
  mouseUp,
} from "./scrollSectionSlice";
import { ArrowLeft, ArrowRight } from "../../ui/icon/Arrow";

const ScrollSection = () => {
  const mouse = useAppSelector((state) => state.scroll);
  const dispatch = useAppDispatch();
  const mouseRef = useRef<HTMLDivElement>(null);

  const mouseDownHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(mouseDown({ clickX: e.clientX }));
  };
  const mouseLeaveHandler = () => {
    dispatch(mouseLeave());
  };
  const mouseUpHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(mouseUp());
  };
  const mouseMoveHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!mouse.isDown) return;
    dispatch(
      mouseMove({
        startX: e.clientX - mouse.clickX,
      })
    );
  };

  useEffect(() => {
    mouseRef.current!.scrollLeft += mouse.startX / 5;
  }, [mouse.startX]);

  return (
    <section className={styles.scrollSection}>
      <header className={styles.header}>
        <h3>EXPLORE PRODUCTS BY CATEGORY</h3>
        <div className={styles.arrowIconContainer}>
          <button className={styles.leftIcon}>
            <ArrowLeft />
          </button>
          <button className={styles.rightIcon}>
            <ArrowRight />
          </button>
        </div>
      </header>
      <div
        className={styles.wrapper}
        onMouseDown={mouseDownHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseUp={mouseUpHandler}
        onMouseMove={mouseMoveHandler}
        ref={mouseRef}
      >
        <ProductFigure img={chair08} id={"TEDGEJJGETINO"} />
        <ProductFigure img={chair09} id={"TEDGEJJGETINO"} />
        <ProductFigure img={chair08} id={"TEDGEJJGETINO"} />
        <ProductFigure img={chair09} id={"TEDGEJJGETINO"} />
        <ProductFigure img={chair08} id={"TEDGEJJGETINO"} />
        <ProductFigure img={chair09} id={"TEDGEJJGETINO"} />
        <ProductFigure img={chair08} id={"TEDGEJJGETINO"} />
        <ProductFigure img={chair09} id={"TEDGEJJGETINO"} />
        <ProductFigure img={chair08} id={"TEDGEJJGETINO"} />
      </div>
    </section>
  );
};

export default ScrollSection;
