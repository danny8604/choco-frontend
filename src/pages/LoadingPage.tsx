import Loading from "../components/ui/loading/Loading";
import Navbar from "../components/navigation/Navbar";
import FooterSection from "../components/ui/footer/FooterSection";

const LoadingPage = () => {
  return (
    <main>
      <Navbar />
      <Loading />
      <FooterSection />
    </main>
  );
};

export default LoadingPage;
