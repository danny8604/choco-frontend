import { Link } from "react-router-dom";
import styles from "./UserFeatureLink.module.scss";

type UserFeatureLinkProps = {
  to: string;
  message: string;
};

const UserFeatureLink = ({ to, message }: UserFeatureLinkProps) => {
  return (
    <Link to={to}>
      <div className={styles.feature}>
        <p>{message}</p>
      </div>
    </Link>
  );
};

export default UserFeatureLink;
