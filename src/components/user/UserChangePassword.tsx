import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { resetShoppingCart } from "../../features/cart/cartItem/cartSlice";
import { userLogout } from "../../features/login/loginSlice";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import FormInput from "../ui/form/formInput/FormInput";
import styles from "./UserChangePassword.module.scss";

const UserChangePassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { login } = useAppSelector((state) => state.login);
  const { userToken } = useAppSelector((state) => state.login);
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
        type: "text",
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
        type: "text",
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
        type: "text",
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

    if (!login) {
      dispatch(openUtilModal({ message: "Please log in first." }));
      return navigate("/login");
    }

    try {
      await axios.post(
        "http://localhost:5000/api/users/changePassword",
        values,
        {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        }
      );
      dispatch(userLogout());
      dispatch(resetShoppingCart());
      localStorage.removeItem("userData");
      localStorage.removeItem("cart");
      dispatch(
        openUtilModal({ message: "Change password success.", isSucceed: true })
      );
      navigate("/login");
    } catch (err) {
      dispatch(
        openUtilModal({
          message: "Change password failed. please check your origin password.",
        })
      );
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {inputs.map((input) => {
        return (
          <FormInput
            key={input.id}
            onChange={changeHandler}
            errorMessage={input.errorMessage}
            props={{ ...input.input }}
          />
        );
      })}
      <button>SUBMIT</button>
    </form>
  );
};

export default UserChangePassword;
