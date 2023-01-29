import React, { useState } from "react";
import useUser from "../../app/hooks/useUser";
import FormInput from "../ui/form/formInput/FormInput";
import styles from "./UserChangePassword.module.scss";

const UserChangePassword = () => {
  const { authUserChangePassword } = useUser();
  const [values, setValues] = useState({
    originPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      errorMessage: "Password must be at least 8 characters.",
      input: {
        type: "password",
        name: "originPassword",
        label: "originPassword",
        placeholder: "ORIGIN PASSWORD",
        pattern: "^[A-Za-z0-9]{8,20}$",
        required: true,
      },
    },
    {
      id: 2,
      errorMessage: "Password must be at least 8 characters.",
      input: {
        type: "password",
        name: "newPassword",
        label: "newPassword",
        placeholder: "NEW PASSWORD",
        pattern: "^[A-Za-z0-9]{8,20}$",
        required: true,
      },
    },
    {
      id: 3,
      errorMessage: "The password does not match your new password.",
      input: {
        type: "password",
        name: "confirmPassword",
        label: "confirmPassword",
        placeholder: "CONFIRM PASSWORD",
        pattern: values.newPassword,
        required: true,
      },
    },
  ];

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    authUserChangePassword(values);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          onChange={changeHandler}
          errorMessage={input.errorMessage}
          props={{ ...input.input }}
        />
      ))}
      <button>SUBMIT</button>
    </form>
  );
};

export default UserChangePassword;
