import MiddleSection from "../components/mainSection/MiddleSection/MiddleSection";
import IntroSection from "../components/mainSection/IntroSection/IntroSection";
import AddToCartSection from "../components/mainSection/seeMoreSection/SeeMoreSection";
import ScrollSection from "../components/mainSection/explore/exploreProducts/ExploreProducts";
import FindStoreSection from "../components/mainSection/FindStoreSection/FindStoreSection";
import CardSection from "../components/mainSection/Card/CardSection";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import TopPage from "../components/ui/topPage/TopPage";
import Button from "../components/ui/button/Button";

const MainPage = () => {
  const navigate = useNavigate();

  const shopHandler = () => {
    navigate("/shop");
  };
  return (
    <main>
      <article>
        <ScrollRestoration />
        <TopPage
          title={"DESIGNER CHAIR"}
          category={"mainPage"}
          footer={
            <Button
              btnMessage={" SHOP NOW ➝"}
              clickAciton={shopHandler}
              small
            />
          }
        />
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
