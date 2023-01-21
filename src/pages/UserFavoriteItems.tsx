import { ScrollRestoration } from "react-router-dom";

import User from "../components/user/User";
import UserFavoriteItems from "../components/user/UserFavoriteItems";

const UserFavoriteItemsPage = () => {
  return (
    <main>
      <ScrollRestoration />
      <User headerText="YOUR FAVORITE ITEMS">
        <UserFavoriteItems />
      </User>
    </main>
  );
};

export default UserFavoriteItemsPage;
