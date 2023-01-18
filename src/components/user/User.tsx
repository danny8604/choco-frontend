import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";
import styles from "./User.module.scss";
import UserFeatures from "./UserFeatures";

type UserProps = {
  headerText: string;
  children: JSX.Element;
};

const User = ({ headerText, children }: UserProps) => {
  return (
    <div className={styles.userContainer}>
      <div className={styles.userHeader}>
        <h4>{headerText}</h4>
      </div>
      {children}
    </div>
  );
};

export default User;
