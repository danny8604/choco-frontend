import { Link } from "react-router-dom";
import styles from "./FooterSection.module.scss";
import github from "../../assets/mainSectionIMG/github.png";

const FooterSection = () => {
  return (
    <footer className={styles.footerSection}>
      <section className={styles.container}>
        <div className={styles.brandNews}>
          <Link to="/" reloadDocument>
            <h3>CHOCO</h3>
          </Link>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            consectetur ad nesciunt modi. Est aliquid, facere recusandae
            consequuntur nobis voluptas sunt suscipit quidem repudiandae,
            dolorum iure minima perferendis itaque incidunt?
          </p>
        </div>
        <ul className={styles.linkContainer}>
          <li>
            <Link to="/" reloadDocument>
              CUSTOMER SERVICE
            </Link>
          </li>
          <li>
            <Link to="/about" reloadDocument>
              COMPANY
            </Link>
          </li>
          <li>
            <Link to="/shop" reloadDocument>
              SHOP NOW
            </Link>
          </li>
        </ul>
        <ul className={styles.linkContainer}>
          <li>
            <Link to="/login" reloadDocument>
              LOGIN
            </Link>
          </li>
          <li>
            <Link to="/about" reloadDocument>
              FOLLOW US
            </Link>
          </li>
        </ul>
      </section>
      <section className={styles.footerNav}>
        <div>
          <a href="https://github.com/u0454/react-ecom">
            <img src={github} alt="github" />
          </a>
        </div>

        <div>
          <p>©2022 CHOCO.</p>
        </div>
      </section>
    </footer>
  );
};

export default FooterSection;
