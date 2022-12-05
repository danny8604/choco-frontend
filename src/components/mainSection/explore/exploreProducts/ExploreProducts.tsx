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

const ExploreProducts = () => {
  const { sliderDown, sliderDragged, sliderStartX, sliderClickX } =
    useAppSelector((state) => state.slider);
  const dispatch = useAppDispatch();
  const mouseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mouseRef.current!.style.left = `${sliderStartX - sliderClickX}px`;
  }, [sliderStartX, sliderClickX]);

  const mouseDownHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    dispatch(
      sliderMouseDown(e.nativeEvent.offsetX - mouseRef.current!.offsetLeft)
    );
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
    dispatch(sliderMouseDrag(e.pageX));
  };

  return (
    <section className={styles.scrollSection}>
      <ExploroProductHeader />
      <div className={styles.wrapper}>
        <div
          onMouseDown={mouseDownHandler}
          onMouseLeave={mouseLeaveHandler}
          onMouseUp={mouseUpHandler}
          onMouseMove={mouseMoveHandler}
          className={styles.figureContainer}
          ref={mouseRef}
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
      </div>
    </section>
  );
};

export default ExploreProducts;
