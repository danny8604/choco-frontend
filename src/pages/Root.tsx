import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import FooterSection from "../components/footer/FooterSection";
import Modal from "../components/modal/Modal";

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
