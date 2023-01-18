import { Link } from "react-router-dom";
import styles from "./UserFeatures.module.scss";

const UserFeatures = () => {
  const test = () => {
    console.log("test");
  };

  return (
    <div className={styles.featureContainer}>
      <Link to="/changePassword">
        <div className={styles.feature}>
          <p>CHANGE PASSWORD</p>
        </div>
      </Link>
      <Link to="/userOrder" onClick={() => test()}>
        <div className={styles.feature}>
          <p>ORDER</p>
        </div>
      </Link>
    </div>
  );
};

export default UserFeatures;
