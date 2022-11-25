import Navbar from "../components/navigation/Navbar";
import TopSection from "../components/mainSection/TopSection/TopSection";
import MiddleSection from "../components/mainSection/MiddleSection/MiddleSection";
import IntroSection from "../components/mainSection/IntroSection/IntroSection";
import AddToCartSection from "../components/mainSection/AddToCartSection/AddToCartSection";
import ScrollSection from "../components/mainSection/ScrollSection/ScrollSection";
import FindStoreSection from "../components/mainSection/FindStoreSection/FindStoreSection";
import CardSection from "../components/mainSection/CardSection/CardSection";
import FooterSection from "../components/mainSection/footerSection/FooterSection";

const MainPage = () => {
  return (
    <main>
      <article>
        <Navbar />
        <TopSection />
        <MiddleSection />
        <IntroSection />
        <AddToCartSection />
        <ScrollSection />
        <FindStoreSection />
        <CardSection />
        <FooterSection />
      </article>
    </main>
  );
};

export default MainPage;
