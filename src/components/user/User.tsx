import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";
import styles from "./User.module.scss";
import UserFeatures from "./UserFeatures";

type UserProps = {
  children: JSX.Element;
};

const User = (props: UserProps) => {
  const { userEmail } = useAppSelector((state) => state.login);
  return (
    <div className={styles.userContainer}>
      <div className={styles.userHeader}>
        <h4>Hi , {userEmail}</h4>
      </div>
      {props.children}
    </div>
  );
};

export default User;
