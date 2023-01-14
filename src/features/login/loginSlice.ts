import { createSlice } from "@reduxjs/toolkit";
import { ShoppingCartItem } from "../../app/type";

interface LoginState {
  userId: null | string;
  userEmail: null | string;
  userToken: null | string;
  userCart: ShoppingCartItem[];
  login: boolean;
  logout: boolean;
  isRememberEmail: boolean;
}

const initialState: LoginState = {
  userId: null,
  userEmail: null,
  userToken: null,
  userCart: [],
  login: false,
  logout: true,
  isRememberEmail: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.userEmail = action.payload.userEmail;
      state.userId = action.payload.userId;
      state.userToken = action.payload.userToken;
      state.login = true;
      state.logout = false;
    },
    userLogout(state) {
      state.userId = null;
      state.userEmail = null;
      state.userToken = null;
      state.login = false;
      state.logout = true;
    },
    rememberEmail(state, action) {
      state.isRememberEmail = action.payload;
    },
  },
});

export const { userLogin, userLogout, rememberEmail } = loginSlice.actions;

export default loginSlice.reducer;
