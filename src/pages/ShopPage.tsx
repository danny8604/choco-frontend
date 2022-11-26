import { Outlet } from "react-router-dom";
import FooterSection from "../components/mainSection/footerSection/FooterSection";
import MainNavbar from "../components/navigation/Navbar";
import ShopTop from "../components/shop/ShopTop";

const ShopPage = () => {
  return (
    <main>
      <article>
        <MainNavbar />
        <ShopTop />
        <FooterSection />
      </article>
    </main>
  );
};

export default ShopPage;
