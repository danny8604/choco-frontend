import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../../app/firebase-config";

interface LoginForm {
  email: string;
  password: string;
  returnSecureToken: boolean;
  errorMessage: string;
}

export const postLoginData = createAsyncThunk(
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

interface LoginFormState {
  userId: null | string;
  isLogin: boolean;
  isLogout: boolean;
  isLoading: boolean;
}

const initinalAuth = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth") || "")
  : [];

const initialState: LoginFormState = {
  userId: initinalAuth.userId,
  isLogin: initinalAuth.isLogin,
  isLogout: initinalAuth.isLogout,
  isLoading: initinalAuth.isLoading,
};

const loginFormSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
      state.isLogout = !state.isLogin;
    },
    logout(state) {
      state.isLoading = false;
      state.isLogin = false;
      state.isLogout = !state.isLogin;
      state.userId = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postLoginData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postLoginData.fulfilled, (state, action) => {
      state.isLoading = false;
      if (!action.payload) return;
      state.userId = action.payload.localId;
    });
    builder.addCase(postLoginData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { login, logout } = loginFormSlice.actions;

export default loginFormSlice.reducer;
