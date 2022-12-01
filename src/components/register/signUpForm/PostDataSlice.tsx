import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { databaseURL } from "../../../app/firebase-config";

interface userIdData {
  userId: string | null;
  postData: {};
}

export const PostData = createAsyncThunk(
  "post/postData",
  async (data: userIdData) => {
    try {
      const response = axios.post(
        `${databaseURL}/users/${data.userId}.json`,
        data.postData
      );

      const responseData = await response;

      return null;
    } catch (err) {
      alert(err);
    }
  }
);

interface postSignUpDataState {
  isLoading: boolean;
}

const initialState: postSignUpDataState = {
  isLoading: false,
};

const postDataSlice = createSlice({
  name: "postSignUP",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(PostData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(PostData.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(PostData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default postDataSlice.reducer;
