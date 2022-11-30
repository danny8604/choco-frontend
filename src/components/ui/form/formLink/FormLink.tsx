import { Link } from "react-router-dom";
import styles from "./FormLink.module.scss";

interface FormLinkProps {
  link: string;
  content: string;
}

const FormLink = ({ link, content }: FormLinkProps) => {
  return (
    <div className={styles.linkContainer}>
      <Link to={`/${link}`}>{content}</Link>
    </div>
  );
};
export default FormLink;
