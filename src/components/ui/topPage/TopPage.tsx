import Button from "../button/Button";
import styles from "./TopPage.module.scss";
import productVideo from "../../../assets/video/production.mp4";

type TopPageProps = {
  title: string;
  category?: string;
  footer?: JSX.Element;
  showVideo?: boolean;
};

const TopPage = ({ title, category, footer, showVideo }: TopPageProps) => {
  return (
    <section
      className={`${styles.topSection} ${category && styles[category]} ${
        showVideo && styles.showVideo
      } `}
    >
      {showVideo && (
        <video autoPlay loop muted playsInline className={styles.backVideo}>
          <source src={productVideo} type="video/mp4" />
        </video>
      )}
      <div className={`${styles.leadText} flex-alignCenter-justifyCenter`}>
        <h1>{title}</h1>
        <p>FOREVER RELEVANT IN TIME</p>
        {footer}
      </div>
    </section>
  );
};

export default TopPage;
