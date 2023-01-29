import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";
import UserFeatureLink from "./UserFeatureLink";
import styles from "./UserFeatures.module.scss";

const UserFeatures = () => {
  const { showChangePassword } = useAppSelector((state) => state.login);

  console.log(showChangePassword, "showChangePassword");
  return (
    <div className={styles.featureContainer}>
      {showChangePassword && (
        <UserFeatureLink to={"/changePassword"} message={"CHANGE PASSWORD"} />
      )}
      <UserFeatureLink to={"/userOrder"} message={"ORDER"} />
      <UserFeatureLink to={"/favoriteItems"} message={"FAVORITE ITEMS"} />
    </div>
  );
};

export default UserFeatures;
