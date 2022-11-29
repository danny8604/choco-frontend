import { createSlice } from "@reduxjs/toolkit";

interface LoginFormState {
  emailValue: string;
  passwordValue: string;
  emailIsValid: boolean;
  passwordIsValid: boolean;
}

const initialState: LoginFormState = {
  emailValue: "",
  passwordValue: "",
  emailIsValid: false,
  passwordIsValid: false,
};

const LoginFormSlice = createSlice({
  name: "LoginForm",
  initialState,
  reducers: {
    getEmail(state, action) {
      state.emailValue = action.payload;
    },
    getPassword(state, action) {
      state.passwordValue = action.payload;
    },
    emailValid(state, action) {
      state.emailIsValid = action.payload;
    },
    passwordValid(state, action) {
      state.passwordIsValid = action.payload;
    },
  },
});

export const { getEmail, getPassword, emailValid, passwordValid } =
  LoginFormSlice.actions;

export default LoginFormSlice.reducer;
