import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks/hooks";
import { closeBackdrop } from "../backdrop/backdropSlice";
import styles from "./DesignerFigure.module.scss";
import { closeDesignerModal } from "./designerModalSlicel";

type DesignerFigureProps = {
  filter: string;
  btnStyles: string;
  designer: string;
};

const DesignerFigure = ({
  filter,
  btnStyles,
  designer,
}: DesignerFigureProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const designerHandler = () => {
    setSearchParams({ filter: filter });
    dispatch(closeBackdrop());
    dispatch(closeDesignerModal());
  };

  return (
    <figure className={styles.designerFigure}>
      <button
        className={`${styles[btnStyles]} ${styles.btnPop}`}
        onClick={() => designerHandler()}
      ></button>
      <figcaption className={styles.designerFigcaption}>
        <h6>{designer}</h6>
      </figcaption>
    </figure>
  );
};

export default DesignerFigure;
