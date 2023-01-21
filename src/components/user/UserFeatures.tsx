import { Link } from "react-router-dom";
import styles from "./UserFeatures.module.scss";

const UserFeatures = () => {
  return (
    <div className={styles.featureContainer}>
      <Link to="/changePassword">
        <div className={styles.feature}>
          <p>CHANGE PASSWORD</p>
        </div>
      </Link>
      <Link to="/userOrder">
        <div className={styles.feature}>
          <p>ORDER</p>
        </div>
      </Link>
      <Link to="/favoriteItems">
        <div className={styles.feature}>
          <p>FAVORITE ITEMS</p>
        </div>
      </Link>
    </div>
  );
};

export default UserFeatures;
