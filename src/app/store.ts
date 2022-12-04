import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import scrollReducer from "../components/mainSection/ScrollSection/scrollSectionSlice";
import navbarReducer from "../components/navigation/NavbarSlice";
import formInputReducer from "../components/ui/form/formInput/FormInputSlice";
import loginFormReducer from "../components/login/loginForm/LoginFormSlice";

import signUpFormReducer from "../components/register/signUpForm/SignUpFormSlice";
import searchInputReducer from "../components/search/searchInput/searchInputSlice";
import postDataReducer from "./PostDataSlice";
import { productsApi } from "./apiSlice";
import cartReducer from "../components/cart/cartItem/CartSlice";
import searchModalReducer from "../components/search/searchModalSlice";
import backdropReducer from "../components/ui/modal/backdrop/backdropSlice";
import cartModalReducer from "../components/cart/cartModalSlice";

const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    navbar: navbarReducer,
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
