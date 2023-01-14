import OrderSearch from "../components/orderSearch/OrderSearch";
import User from "../components/user/User";
import UserChangePassword from "../components/user/UserChangePassword";

const UserChangePasswordPage = () => {
  return (
    <main>
      <User>
        <UserChangePassword />
      </User>
    </main>
  );
};

export default UserChangePasswordPage;
