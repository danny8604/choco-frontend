import styles from "./CardSection.module.scss";
import chair14 from "../../../assets/mainSectionIMG/chair-14.jpg";
import chair12 from "../../../assets/mainSectionIMG/chair-12.jpg";
import chair13 from "../../../assets/mainSectionIMG/chair-13.jpg";
import CardFigure from "./CardFigure";

const CardSection = () => {
  return (
    <section className={styles.cardSection}>
      <CardFigure
        src={chair12}
        title={"LIVING ROOM"}
        path={"/shop/Living-Room"}
      />
      <CardFigure src={chair13} title={"HOME ROOM"} path={"/shop/Home-Room"} />
      <CardFigure
        src={chair14}
        title={"DINING ROOM"}
        path={"/shop/Dining-Room"}
      />
    </section>
  );
};

export default CardSection;
