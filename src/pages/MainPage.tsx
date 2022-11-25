import MainNavbar from "../components/navigation/MainNavbar";
import MainTopSection from "../components/mainSection/MainTopSection";
import MainMiddleSection from "../components/mainSection/MainMiddleSection";
import MainIntroSection from "../components/mainSection/MainIntroSection";
import MainSofaSection from "../components/mainSection/MainAddToCartSection";
import MainScrollSection from "../components/mainSection/MainScrollSection";

const MainPage = () => {
  return (
    <main>
      <article>
        <MainNavbar />
        <MainTopSection />
        <MainMiddleSection />
        <MainIntroSection />
        <MainSofaSection />
        <MainScrollSection />
      </article>
    </main>
  );
};

export default MainPage;
