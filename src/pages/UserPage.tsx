import { ScrollRestoration } from "react-router-dom";
import { useAppSelector } from "../app/hooks/hooks";

import User from "../components/user/User";
import UserFeatures from "../components/user/UserFeatures";

const UserPage = () => {
  const { userEmail } = useAppSelector((state) => state.login);

  return (
    <main>
      <ScrollRestoration />
      <User headerText={`Hi , ${userEmail}`}>
        <UserFeatures />
      </User>
    </main>
  );
};

export default UserPage;
