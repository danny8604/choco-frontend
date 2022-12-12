import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetFormState } from "../../../../features/formAuth/formAuthSlice";
import styles from "./FormLink.module.scss";

interface FormLinkProps {
  link: string;
  content: string;
}

const FormLink = ({ link, content }: FormLinkProps) => {
  const dispatch = useDispatch();
  const resetFormHandler = () => {
    dispatch(resetFormState());
  };

  return (
    <div onClick={() => resetFormHandler()} className={styles.linkContainer}>
      <Link to={`/${link}`}>{content}</Link>
    </div>
  );
};
export default FormLink;
