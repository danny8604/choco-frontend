import Error from "../components/error/Error";
import Navbar from "../components/navigation/Navbar";
import FooterSection from "../components/ui/footer/FooterSection";

const ErrorPage = () => {
  return (
    <main>
      <Navbar />
      <Error />
      <FooterSection />
    </main>
  );
};

export default ErrorPage;
