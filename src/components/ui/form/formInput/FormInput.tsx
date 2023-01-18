import { Dispatch, SetStateAction, useState } from "react";
import styles from "./FormInput.module.scss";

type FormInputProps = {
  props: {
    type: string;
    name: string;
    label: string;
    placeholder: string;
    pattern: string;
    required: boolean;
  };
  errorMessage: string;
  onChange: Dispatch<SetStateAction<any>>;
};

const FormInput = ({ props, onChange, errorMessage }: FormInputProps) => {
  const [focused, setFocused] = useState(false);

  const { placeholder } = props;
  const blurHandler = () => {
    setFocused(true);
  };

  const defalutValue = () => {
    if (props.type === "email") {
      return "test@test.com";
    }

    if (props.type === "password") {
      return "123123123";
    }

    return;
  };

  return (
    <div className={styles.formInput}>
      <label>{placeholder}</label>
      <input
        defaultValue={defalutValue()}
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
