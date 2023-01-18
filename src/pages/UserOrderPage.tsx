import { useAppSelector } from "../app/hooks/hooks";
import OrderSearch from "../components/orderSearch/OrderSearch";
import User from "../components/user/User";
import UserOrder from "../components/user/UserOrder";

const UserOrderPage = () => {
  const { userEmail } = useAppSelector((state) => state.login);

  return (
    <main>
      <User headerText={`${userEmail}'s order list`}>
        <UserOrder />
      </User>
    </main>
  );
};

export default UserOrderPage;
