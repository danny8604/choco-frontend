import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import FooterSection from "../components/ui/footer/FooterSection";
import SearchModal from "../components/ui/searchModal/SearchModal";

const Root = () => {
  return (
    <>
      <Navbar />
      <SearchModal />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default Root;
