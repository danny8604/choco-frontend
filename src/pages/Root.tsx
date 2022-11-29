import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import FooterSection from "../components/ui/footer/FooterSection";
import Modal from "../components/ui/modal/Modal";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Modal />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default Root;
