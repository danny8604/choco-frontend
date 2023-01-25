import { Link } from "react-router-dom";
import UserFeatureLink from "./UserFeatureLink";
import styles from "./UserFeatures.module.scss";

const UserFeatures = () => {
  return (
    <div className={styles.featureContainer}>
      <UserFeatureLink to={"/changePassword"} message={"CHANGE PASSWORD"} />
      <UserFeatureLink to={"/userOrder"} message={"ORDER"} />
      <UserFeatureLink to={"/favoriteItems"} message={"FAVORITE ITEMS"} />
    </div>
  );
};

export default UserFeatures;
