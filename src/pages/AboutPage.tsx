import { ScrollRestoration } from "react-router-dom";
import AboutTop from "../components/about/AboutTop";

const AboutPage = () => {
  return (
    <main>
      <ScrollRestoration />
      <AboutTop />
    </main>
  );
};

export default AboutPage;
