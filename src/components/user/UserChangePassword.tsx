import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FormAuth from "../../features/formAuth/FormAuth";
import FormInput from "../ui/form/formInput/FormInput";
import PasswordInput from "../ui/form/passwordInput/PasswordInput";
import styles from "./UserChangePassword.module.scss";

const UserChangePassword = () => {
  //   const originPasswordRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(data, "data");
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <FormInput name="originPassword" placeholder="origin passowrd" />
      <FormInput name="newPassword" placeholder="new passowrd" />
      <FormInput name="confirmPassword" placeholder="confirm passowrd" />
      <button>Submit</button>
    </form>
  );
};

export default UserChangePassword;
