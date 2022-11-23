import MainNavbar from "../components/ui/navigation/MainNavbar";
import MainTopSection from "../components/ui/mainSection/MainTopSection";
import MainMiddleSection from "../components/ui/mainSection/MainMiddleSection";
import MainIntroSection from "../components/ui/mainSection/MainIntroSection";

const MainPage = () => {
  return (
    <main>
      <article>
        <MainNavbar />
        <MainTopSection />
        <MainMiddleSection />
        <MainIntroSection />
      </article>
    </main>
  );
};

export default MainPage;
