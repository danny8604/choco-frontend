import Loading from "../components/loading/Loading";
import Navbar from "../components/navigation/Navbar";
import FooterSection from "../components/footer/FooterSection";

const ErrorPage = () => {
  return (
    <main>
      <Navbar />
      <Loading />
      <FooterSection />
    </main>
  );
};

export default ErrorPage;
