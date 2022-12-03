import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { databaseURL } from "./firebase-config";
import { ShoppingCartItem } from "./type";

interface userData {
  userId: string | null;
  postData: ShoppingCartItem[];
}

// export const PostData = createAsyncThunk(
//   "post/postDataStatus",
//   async (data: userData) => {
//     try {
//       console.log(data);
//       const response = await axios.post(
//         `${databaseURL}/users/${data.userId}.json`,
//         { shoppingCart: data.postData }
//       );

//       console.log(response, "23123");
//       return null;
//     } catch (err) {
//       alert(err);
//     }
//   }
// );

export const PostData = createAsyncThunk(
  "post/postDataStatus",
  async (data: userData) => {
    try {
      console.log(data);
      const response = axios.post(`${databaseURL}/users/${data.userId}.json`, {
        shoppingCart: data.postData,
      });

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
