import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import FooterSection from "../components/ui/footer/FooterSection";
import Modal from "../components/modal/Modal";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks";
import { userLogin, userLogout } from "../features/login/loginSlice";
import { resetShoppingCart } from "../features/cart/cartItem/cartSlice";

const Root = () => {
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
