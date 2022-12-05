import styles from "./AboutTop.module.scss";
import productVideo from "../../assets/video/production.mp4";

const AboutTop = () => {
  return (
    <section className={styles.topSection}>
      <video autoPlay loop muted playsInline className={styles.backVideo}>
        <source src={productVideo} type="video/mp4" />
      </video>
      <div className={styles.leadText}>
        <h1>ANYTHING BUT ORDINARY</h1>
        <p>FOREVER RELEVANT IN TIME</p>
      </div>
    </section>
  );
};

export default AboutTop;
