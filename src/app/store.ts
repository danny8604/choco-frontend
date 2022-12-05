import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import scrollReducer from "../components/mainSection/ScrollSection/scrollSectionSlice";
import formInputReducer from "../features/formAuth/formAuthSlice";
import loginReducer from "../features/login/loginSlice";
import registerReducer from "../features/register/registerSlice";
import searchReducer from "../features/search/searchSlice";
import postDataReducer from "./PostDataSlice";
import { productsApi } from "./apiSlice";
import cartReducer from "../features/cart/cartItem/cartSlice";
import searchModalReducer from "../features/searchModal/searchModalSlice";
import backdropReducer from "../features/backdrop/backdropSlice";
import cartModalReducer from "../features/cartModal/cartModalSlice";

const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    searchInput: searchReducer,
    formInput: formInputReducer,
    loginForm: loginReducer,
    registerForm: registerReducer,
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
