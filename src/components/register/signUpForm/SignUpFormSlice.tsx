import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../../app/firebase-config";

interface SignUpForm {
  email: string;
  password: string;
  returnSecureToken: boolean;
  errorMessage: string;
}

export const SignUpFormData = createAsyncThunk(
  "sign/signUpFormStatus",
  async (data: SignUpForm) => {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
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

interface signUpFormState {
  signUpUserId: null | string;
  signUpToken: null | string;
  isLoading: boolean;
}

const initialState: signUpFormState = {
  signUpUserId: null,
  signUpToken: null,
  isLoading: false,
};

const signUpFormSlice = createSlice({
  name: "signUpForm",
  initialState,
  reducers: {
    resetSignUpToken(state) {
      state.signUpToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SignUpFormData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(SignUpFormData.fulfilled, (state, action) => {
      state.isLoading = false;
      if (!action.payload) return;
      state.signUpToken = action.payload.idToken;
      state.signUpUserId = action.payload.localId;
    });
    builder.addCase(SignUpFormData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { resetSignUpToken } = signUpFormSlice.actions;

export default signUpFormSlice.reducer;
