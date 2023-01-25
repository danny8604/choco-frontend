import { useNavigate } from "react-router-dom";
import Button from "../../ui/button/Button";
import styles from "./IntroSection.module.scss";

type IntroSectionProps = {
  noBackGroundColor?: boolean;
  paddingTop?: boolean;
  footer?: JSX.Element;
};

const IntroSection = ({
  noBackGroundColor,
  paddingTop,
  footer,
}: IntroSectionProps) => {
  return (
    <section
      className={`${styles.introSection} ${
        noBackGroundColor && styles.noBackGroundColor
      }  ${paddingTop && styles.paddingTop}`}
    >
      <div className={styles.introSectionText}>
        <h2>CHOCO</h2>
        <p>
          Made to elevate the everyday, our furniture, lighting and accessories
          of the finest quality and unmatched design reflect the way we live
          now.
        </p>
        {footer}
      </div>
    </section>
  );
};

export default IntroSection;
