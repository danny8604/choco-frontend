import { ScrollRestoration } from "react-router-dom";
import OrderSearch from "../components/orderSearch/OrderSearch";
import User from "../components/user/User";
import UserChangePassword from "../components/user/UserChangePassword";

const UserChangePasswordPage = () => {
  return (
    <main>
      <ScrollRestoration />
      <User headerText="CHANGE PASSWORD">
        <UserChangePassword />
      </User>
    </main>
  );
};

export default UserChangePasswordPage;
