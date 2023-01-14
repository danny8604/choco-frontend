import OrderSearch from "../components/orderSearch/OrderSearch";
import User from "../components/user/User";
import UserFeatures from "../components/user/UserFeatures";

const UserPage = () => {
  return (
    <main>
      <User>
        <UserFeatures />
      </User>
    </main>
  );
};

export default UserPage;
