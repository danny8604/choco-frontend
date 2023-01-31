import { ScrollRestoration, useNavigate } from "react-router-dom";
import StoreMap from "../components/storeMap/StoreMap";
import IntroSection from "../components/mainSection/IntroSection/IntroSection";
import Button from "../components/ui/button/Button";
import TopPage from "../components/ui/topPage/TopPage";

const AboutPage = () => {
  const navigate = useNavigate();
  const shopHandler = () => {
    navigate("/shop");
  };
  return (
    <main>
      <ScrollRestoration />
      <TopPage title={"ANYTHING BUT ORDINARY"} showVideo />
      <IntroSection
        noBackGroundColor
        paddingTop
        footer={
          <Button small btnMessage={"BUY NOW ➝"} clickAciton={shopHandler} />
        }
      />
      <StoreMap />
    </main>
  );
};

export default AboutPage;
