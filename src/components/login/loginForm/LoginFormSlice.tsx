import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../../app/firebase-config";

interface LoginForm {
  email: string;
  password: string;
  returnSecureToken: boolean;
  errorMessage: string;
}

export const loginFormData = createAsyncThunk(
  "login/loginFormStatus",
  async (data: LoginForm) => {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }
      );

      return response.data;
    } catch (err) {
      alert(data.errorMessage);
    }
  }
);

interface loginFormState {
  userId: null | string;
  signInToken: null | string;
  isLogin: boolean;
  isLogout: boolean;
  isLoading: boolean;
}

const initinalAuth = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth") || "")
  : [];

const initialState: loginFormState = {
  userId: initinalAuth.userId,
  signInToken: initinalAuth.signInToken,
  isLogin: initinalAuth.isLogin,
  isLogout: initinalAuth.isLogout,
  isLoading: initinalAuth.isLoading,
};
// const initialState: loginFormState = {
//   userId: null,
//   signInToken: null,
//   isLogin: false,
//   isLogout: false,
//   isLoading: false,
// };

const loginFormSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
      state.isLogout = false;
    },
    logout(state) {
      state.isLoading = false;
      state.isLogin = false;
      state.isLogout = true;
      state.signInToken = null;
      state.userId = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginFormData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginFormData.fulfilled, (state, action) => {
      state.isLoading = false;
      if (!action.payload) return;
      console.log("login message", action.payload);
      state.signInToken = action.payload.idToken;
      state.userId = action.payload.localId;
    });
    builder.addCase(loginFormData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { login, logout } = loginFormSlice.actions;

export default loginFormSlice.reducer;
