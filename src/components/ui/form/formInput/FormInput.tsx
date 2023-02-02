import { Dispatch, SetStateAction, useState } from "react";
import styles from "./FormInput.module.scss";

export interface FormInputProps {
  props: {
    type: string;
    name: string;
    label: string;
    placeholder: string;
    pattern?: string;
    required: boolean;
    value: string;
  };
  errorMessage: string;
  onChange: Dispatch<SetStateAction<any>>;
}

const FormInput = ({ props, onChange, errorMessage }: FormInputProps) => {
  const [focused, setFocused] = useState(false);
  const { placeholder } = props;

  const blurHandler = () => setFocused(true);

  const defalutValue = (name: string) => {
    switch (name) {
      case "email": {
        return "test@test.com";
      }
      case "password": {
        return "123123123";
      }
      case "name": {
        return "Anya Forger";
      }
      case "address": {
        return "Burlington West No. 108 , Park E. Rd.";
      }
      case "phone": {
        return "0987007007";
      }
    }
    return;
  };

  return (
    <div className={styles.formInput}>
      <label htmlFor={props.name}>{placeholder}</label>
      <input
        id={props.name}
        defaultValue={defalutValue(props.name)}
        onChange={onChange}
        {...props}
        onBlur={blurHandler}
        onFocus={() => props.name === "confirmPassword" && setFocused(true)}
        data-focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
