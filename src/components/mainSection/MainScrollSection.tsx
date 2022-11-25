import ProductFigure from "../ui/ProductFigure";
import chair08 from "../../assets/chair-08.jpg";
import chair09 from "../../assets/chair-09.jpg";
import styles from "./MainScrollSection.module.scss";
import { useEffect, useRef } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  mouseDown,
  mouseLeave,
  mouseMove,
  mouseUp,
} from "./scrollSectionSlice";

const MainScrollSection = () => {
  const mouse = useAppSelector((state) => state.mouseDrag);
  const dispatch = useAppDispatch();
  const mouseRef = useRef<HTMLDivElement>(null);

  const mouseDownHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    console.log("Click once", e.pageX);
    dispatch(mouseDown({ clickX: e.pageX }));
  };
  const mouseLeaveHandler = () => {
    dispatch(mouseLeave());
  };
  const mouseUpHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(mouseUp({ prevX: e.pageX }));
  };
  const mouseMoveHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!mouse.isDown) return;
    // console.log("e.pageX", e.pageX);
    // console.log("mouseClick", mouse.clickX);
    // console.log("mousePrev", mouse.prevX);
    console.log("epageX - prev", e.pageX - mouse.clickX);
    dispatch(
      mouseMove({
        startX: e.pageX - mouse.clickX,
      })
    );
  };

  useEffect(() => {
    mouseRef.current!.scrollLeft += mouse.startX / 5;
  }, [mouse.startX]);

  return (
    <section className={styles.scrollSection}>
      <div
        className={styles.wrapper}
        onMouseDown={mouseDownHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseUp={mouseUpHandler}
        onMouseMove={mouseMoveHandler}
        ref={mouseRef}
      >
        <ProductFigure img={chair08} id={"testes"} />
        <ProductFigure img={chair09} id={"testes"} />
        <ProductFigure img={chair08} id={"testes"} />
        <ProductFigure img={chair09} id={"testes"} />
        <ProductFigure img={chair08} id={"testes"} />
        <ProductFigure img={chair09} id={"testes"} />
        <ProductFigure img={chair08} id={"testes"} />
        <ProductFigure img={chair09} id={"testes"} />
        <ProductFigure img={chair08} id={"testes"} />
      </div>
    </section>
  );
};

export default MainScrollSection;
