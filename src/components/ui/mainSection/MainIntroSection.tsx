import styles from "./MainIntroSection.module.scss";

const MainIntroSection = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.introSectionText}>
        <h2>CHOCO</h2>
        <p>
          Made to elevate the everyday, our furniture, lighting and accessories
          of the finest quality and unmatched design reflect the way we live
          now.
        </p>
        <button className={styles.aboutbutton}>ABOUT US ➝</button>
      </div>
    </section>
  );
};

export default MainIntroSection;
