import { Link } from "react-router-dom";
import styles from "./FooterSection.module.scss";

const FooterSection = () => {
  return (
    <footer className={styles.footerSection}>
      <section className={styles.container}>
        <div className={styles.brandNews}>
          <h3>CHOCO</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            consectetur ad nesciunt modi. Est aliquid, facere recusandae
            consequuntur nobis voluptas sunt suscipit quidem repudiandae,
            dolorum iure minima perferendis itaque incidunt?
          </p>
        </div>
        <ul className={styles.linkContainer}>
          <li>
            <Link to="/">CUSTOMER SERVICE</Link>
          </li>
          <li>
            <Link to="/">COMPANY</Link>
          </li>
          <li>
            <Link to="/">FIND STORE</Link>
          </li>
        </ul>
        <ul className={styles.linkContainer}>
          <li>
            <Link to="/">CONTACT US</Link>
          </li>
          <li>
            <Link to="/">FOLLOW US</Link>
          </li>
        </ul>
      </section>
      <section className={styles.footerNav}>
        <p>gege</p>
      </section>
    </footer>
  );
};

export default FooterSection;
