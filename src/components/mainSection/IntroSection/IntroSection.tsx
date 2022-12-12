import { useNavigate } from "react-router-dom";
import styles from "./IntroSection.module.scss";

const IntroSection = () => {
  const navigate = useNavigate();
  const aboutHandler = () => {
    navigate("/about");
  };
  return (
    <section className={styles.introSection}>
      <div className={styles.introSectionText}>
        <h2>CHOCO</h2>
        <p>
          Made to elevate the everyday, our furniture, lighting and accessories
          of the finest quality and unmatched design reflect the way we live
          now.
        </p>
        <button className={styles.aboutbutton} onClick={() => aboutHandler()}>
          ABOUT US ➝
        </button>
      </div>
    </section>
  );
};

export default IntroSection;
