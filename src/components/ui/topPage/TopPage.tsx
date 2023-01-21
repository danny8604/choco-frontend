import Button from "../button/Button";
import styles from "./TopPage.module.scss";

type TopPageProps = {
  title: string;
  category?: string;
  footer?: JSX.Element;
};

const TopPage = ({ title, category, footer }: TopPageProps) => {
  return (
    <section
      className={`${styles.topSection} ${category && styles[category]}  `}
    >
      <div className={styles.leadText}>
        <h1>{title}</h1>
        <p>FOREVER RELEVANT IN TIME</p>
        {footer}
      </div>
    </section>
  );
};

export default TopPage;
