import { createSlice } from "@reduxjs/toolkit";
import { FavoriteItem, ShoppingCartItem } from "../../app/type";

interface LoginState {
  userId: null | string;
  userEmail: null | string;
  userToken: null | string;
  tokenExpirationDate: null | Date;
  userCart: ShoppingCartItem[];
  favoriteItems: ShoppingCartItem[];
  showChangePassword: boolean;
  login: boolean;
  logout: boolean;
}

const initialState: LoginState = {
  userId: null,
  userEmail: null,
  userToken: null,
  tokenExpirationDate: null,
  userCart: [],
  favoriteItems: [],
  showChangePassword: true,
  login: false,
  logout: true,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.userEmail = action.payload.userEmail;
      state.userId = action.payload.userId;
      state.userToken = action.payload.userToken;
      state.tokenExpirationDate = action.payload.tokenExpirationDate;
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
    userFavoriteItems(state, action) {
      state.favoriteItems = action.payload;
    },
    changePasswordBtn(state, action) {
      state.showChangePassword = action.payload;
    },
  },
});

export const { userLogin, userLogout, userFavoriteItems, changePasswordBtn } =
  loginSlice.actions;

export default loginSlice.reducer;
