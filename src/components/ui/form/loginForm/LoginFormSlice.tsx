import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../../../app/firebase-config";

interface FormData {
  email: string;
  password: string;
  returnSecureToken: boolean;
  errorMessage: string;
}

export const loginFormData = createAsyncThunk(
  "post/postDataStatus",
  async (data: FormData) => {
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
  signInToken: null | string;
  isLogin: boolean;
  isLogout: boolean;
  isLoading: boolean;
}

const initialState: loginFormState = {
  signInToken: null,
  isLogin: false,
  isLogout: false,
  isLoading: false,
};

const LoginFormSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
      state.isLogout = true;
      state.signInToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginFormData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginFormData.fulfilled, (state, action) => {
      state.isLoading = false;
      if (!action.payload) return;
      if (action.payload?.registered) {
        state.signInToken = action.payload.idToken;
      }
    });
    builder.addCase(loginFormData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
