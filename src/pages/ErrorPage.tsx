import Navbar from "../components/navigation/Navbar";
import FooterSection from "../components/ui/footer/FooterSection";
import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
  return (
    <main>
      <Navbar />
      <section className={styles.errorPage}>
        <div className={styles.errorText}>
          <h1>Opps</h1>
          <p>Sorry, an unexpected error has occurred...</p>
        </div>
      </section>
      <FooterSection />
    </main>
  );
};

export default ErrorPage;
