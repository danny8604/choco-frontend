import MainNavbar from "../components/ui/navigation/MainNavbar";
import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
  return (
    <section className={styles.errorPage}>
      <MainNavbar />
      <div className={styles.errorText}>
        <h1>Opps</h1>
        <p>Sorry, an unexpected error has occurred...</p>
      </div>
    </section>
  );
};

export default ErrorPage;
