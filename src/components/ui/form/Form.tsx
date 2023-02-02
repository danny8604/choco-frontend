import { FormInputs } from "../../../app/type";
import styles from "./Form.module.scss";
import FormInput from "./formInput/FormInput";

type FormProps = {
  submitAction: (e: React.FormEvent<HTMLFormElement>) => void;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputs: FormInputs[];
  footer?: JSX.Element;
};

const Form = ({ submitAction, inputs, changeHandler, footer }: FormProps) => {
  return (
    <form onSubmit={submitAction} className={styles.form}>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          errorMessage={input.errorMessage}
          props={{ ...input.input }}
          onChange={changeHandler}
        />
      ))}
      {footer}
    </form>
  );
};

export default Form;
