import { Link } from "react-router-dom";
import styles from "./NavbarLogoLink.module.scss";

const NavbarLogoLink = () => {
  return (
    <div className={styles.logoLink}>
      <Link to="/" reloadDocument>
        CHOCO
      </Link>
    </div>
  );
};

export default NavbarLogoLink;
