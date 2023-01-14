import { Dispatch, SetStateAction } from "react";
import styles from "./FormInput.module.scss";

type FormInputProps = {
  placeholder: string;
  name: string;
};

const FormInput = ({ placeholder, name }: FormInputProps) => {
  return (
    <div className={styles.formInput}>
      <input placeholder={placeholder} name={name} />
    </div>
  );
};

export default FormInput;
