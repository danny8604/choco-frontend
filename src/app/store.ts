import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import scrollReducer from "../components/mainSection/ScrollSection/scrollSectionSlice";
import formInputReducer from "../features/formAuth/formAuthSlice";
import loginFormReducer from "../features/login/loginForm/loginFormSlice";
import signUpFormReducer from "../features/register/signUpForm/signUpFormSlice";
import searchInputReducer from "../features/search/searchInput/searchInputSlice";
import postDataReducer from "./PostDataSlice";
import { productsApi } from "./apiSlice";
import cartReducer from "../features/cart/cartItem/cartSlice";
import searchModalReducer from "../features/searchModal/searchModalSlice";
import backdropReducer from "../features/backdrop/backdropSlice";
import cartModalReducer from "../features/cartModal/cartModalSlice";

const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    searchInput: searchInputReducer,
    formInput: formInputReducer,
    loginForm: loginFormReducer,
    signUpForm: signUpFormReducer,
    postData: postDataReducer,
    searchModal: searchModalReducer,
    cartModal: cartModalReducer,
    backdrop: backdropReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
