import styles from "./FigureContainer.module.scss";
import chair14 from "../../../assets/mainSectionIMG/chair-14.jpg";
import chair12 from "../../../assets/mainSectionIMG/chair-12.jpg";
import chair13 from "../../../assets/mainSectionIMG/chair-13.jpg";
import Figure from "../../ui/figure/Figure";

const FigureContainer = () => {
  return (
    <section className={styles.figureContainer}>
      <Figure src={chair12} title={"LIVING ROOM"} path={"/shop/Living-Room"} />
      <Figure src={chair13} title={"HOME ROOM"} path={"/shop/Home-Room"} />
      <Figure src={chair14} title={"DINING ROOM"} path={"/shop/Dining-Room"} />
    </section>
  );
};

export default FigureContainer;
