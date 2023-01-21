import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import FooterSection from "../components/ui/footer/FooterSection";
import Modal from "../components/modal/Modal";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks";
import { userLogin, userLogout } from "../features/login/loginSlice";
import { resetShoppingCart } from "../features/cart/cartItem/cartSlice";

const Root = () => {
  const { userToken, tokenExpirationDate } = useAppSelector(
    (state) => state.login
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!localStorage.getItem("userData")) return;

    const userData = JSON.parse(localStorage.getItem("userData") || "");

    if (userData && new Date(userData.tokenExpirationDate) > new Date()) {
      dispatch(
        userLogin({
          userId: userData.userId,
          userEmail: userData.userEmail,
          userToken: userData.userToken,
          tokenExpirationDate: new Date(
            userData.tokenExpirationDate
          ).toISOString(),
        })
      );
    }
  }, []);

  useEffect(() => {
    let logoutTimer;
    if (userToken && tokenExpirationDate) {
      const remainingTime =
        new Date(tokenExpirationDate).getTime() - new Date().getTime();
      logoutTimer = setTimeout(() => {
        dispatch(resetShoppingCart());
        return dispatch(userLogout());
      }, remainingTime);
      console.log(remainingTime, "remainingTime");
    } else {
      clearTimeout(logoutTimer);
    }
  }, [userToken, tokenExpirationDate]);

  return (
    <div>
      <Modal />
      <Navbar />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default Root;
