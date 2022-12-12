import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../app/firebase-config";

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

interface LoginState {
  userId: null | string;
  userEmail: null | string;
  isLogin: boolean;
  isLogout: boolean;
  loginIsLoading: boolean;
  userCartIsLoading: boolean;
  isRememberEmail: boolean;
}

const initinalAuth = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth") || "")
  : [];
const initinalRememberEmail = localStorage.getItem("rememberEmail")
  ? JSON.parse(localStorage.getItem("rememberEmail") || "")
  : [];

const initialState: LoginState = {
  userId: initinalAuth.userId,
  userEmail: initinalAuth.userEmail,
  isLogin: initinalAuth.isLogin,
  isLogout: initinalAuth.isLogout,
  loginIsLoading: initinalAuth.loginIsLoading,
  userCartIsLoading: false,
  isRememberEmail: initinalRememberEmail.isRememberEmail,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin(state) {
      state.isLogin = true;
      state.isLogout = false;
    },
    userLogout(state) {
      state.loginIsLoading = false;
      state.isLogin = false;
      state.isLogout = true;
      state.userId = null;
    },
    rememberEmail(state, action) {
      state.isRememberEmail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postLoginData.pending, (state) => {
      state.loginIsLoading = true;
    });
    builder.addCase(postLoginData.fulfilled, (state, action) => {
      state.loginIsLoading = false;
      if (!action.payload) return;
      state.userEmail = action.payload.email;
      state.userId = action.payload.localId;
    });
    builder.addCase(postLoginData.rejected, (state) => {
      state.loginIsLoading = false;
    });
  },
});

export const { userLogin, userLogout, rememberEmail } = loginSlice.actions;

export default loginSlice.reducer;
