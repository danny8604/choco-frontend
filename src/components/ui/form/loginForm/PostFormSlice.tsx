import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../../../app/firebase-config";

interface FormData {
  url: string;
  email: string;
  password: string;
  returnSecureToken: boolean;
  errorMessage: string;
}

export const postFormData = createAsyncThunk(
  "post/postDataStatus",
  async (data: FormData) => {
    try {
      const response = await axios.post(`${data.url}${apiKey}`, {
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      });

      return response.data;
    } catch (err) {
      alert(data.errorMessage);
    }
  }
);

interface FormState {
  entities: [];
  signInToken: null | string;
  signUpToken: null | string;
  isLoging: boolean;
  isLogout: boolean;
  isLoading: boolean;
  isRegister: boolean;
}

const initialState: FormState = {
  entities: [],
  signInToken: null,
  signUpToken: null,
  isLoging: false,
  isLogout: true,
  isLoading: false,
  isRegister: false,
};

const PostFormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    login(state) {
      state.isLoging = true;
      state.isLogout = false;
    },
    logout(state) {
      state.isLoging = false;
      state.isLogout = true;
      state.signInToken = null;
    },
    resetSignUpToken(state) {
      state.signUpToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postFormData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postFormData.fulfilled, (state, action) => {
      state.isLoading = false;
      // Only access SignIn token
      if (!action.payload) return;
      state.entities = action.payload;
      if (action.payload?.registered) {
        state.signInToken = action.payload.idToken;
      }
      if (!action.payload?.registered) {
        state.signUpToken = action.payload.idToken;
      }
    });
    builder.addCase(postFormData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { login, logout, resetSignUpToken } = PostFormSlice.actions;

export default PostFormSlice.reducer;
