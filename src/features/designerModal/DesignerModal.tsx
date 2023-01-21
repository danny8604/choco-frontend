import { useAppSelector } from "../../app/hooks/hooks";
import DesignerFigure from "./DesignerFigure";
import styles from "./DesignerModal.module.scss";

const DesignerModal = () => {
  const { designerModalIsOpen } = useAppSelector(
    (state) => state.designerModal
  );

  return (
    <section
      className={`${styles.designerModalContainer} ${
        designerModalIsOpen && styles.active
      }`}
    >
      <div className={styles.designerFigureContainer}>
        <DesignerFigure
          filter={"designer__Frank-Gehry"}
          btnStyles={"designerBtn1"}
          designer={"Frank Gehry"}
        />
        <DesignerFigure
          filter={"designer__Zaha-Hadid"}
          btnStyles={"designerBtn2"}
          designer={"Zaha Hadid"}
        />
        <DesignerFigure
          filter={"designer__Mies-van-der-Rohe"}
          btnStyles={"designerBtn3"}
          designer={"Mies van der Rohe"}
        />
      </div>
    </section>
  );
};

export default DesignerModal;
