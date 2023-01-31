import styles from "./MiddleSection.module.scss";
import chart05 from "../../../assets/mainSectionIMG/chair-05.jpg";
import chart06 from "../../../assets/mainSectionIMG/chair-06.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/button/Button";

const MiddleSection = () => {
  const navigate = useNavigate();
  const shopHandler = () => {
    navigate("/shop");
  };
  return (
    <>
      <section className={styles.middleSection}>
        <div
          className={`${styles.middleSectionText} flex-alignCenter-justifyCenter-column`}
        >
          <h2>ANYTHING BUT ORDINARY</h2>
          <p>FOREVER RELEVANT IN TIME</p>
          <Button clickAciton={shopHandler} btnMessage={"SHOP NOW ➝"} small />
        </div>
        <div className={styles.imgSide}>
          <img
            className={styles.imgRight}
            loading="lazy"
            src={chart06}
            alt="a green chair"
          />
        </div>
      </section>
      <section className={styles.middleSection}>
        <div className={styles.imgSide}>
          <img
            className={styles.imgLeft}
            loading="lazy"
            src={chart05}
            alt="a wooden chair"
          />
        </div>
        <div
          className={`${styles.middleSectionText} flex-alignCenter-justifyCenter-column`}
        >
          <h2>ANYTHING BUT ORDINARY</h2>
          <p>FOREVER RELEVANT IN TIME</p>
          <Button clickAciton={shopHandler} btnMessage={"SHOP NOW ➝"} small />
        </div>
      </section>
    </>
  );
};

export default MiddleSection;
