import TopSection from "../components/mainSection/TopSection/TopSection";
import MiddleSection from "../components/mainSection/MiddleSection/MiddleSection";
import IntroSection from "../components/mainSection/IntroSection/IntroSection";
import AddToCartSection from "../components/mainSection/seeMoreSection/SeeMoreSection";
import ScrollSection from "../components/mainSection/explore/exploreProducts/ExploreProducts";
import FindStoreSection from "../components/mainSection/FindStoreSection/FindStoreSection";
import CardSection from "../components/mainSection/Card/CardSection";

const MainPage = () => {
  return (
    <main>
      <article>
        <TopSection />
        <MiddleSection />
        <IntroSection />
        <AddToCartSection />
        <ScrollSection />
        <FindStoreSection />
        <CardSection />
      </article>
    </main>
  );
};

export default MainPage;
