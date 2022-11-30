import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import scrollReducer from "../components/mainSection/ScrollSection/scrollSectionSlice";
import navbarReducer from "../components/navigation/NavbarSlice";
import formInputReducer from "../components/ui/form/formInput/FormInputSlice";
import postFormReducer from "../components/ui/form/loginForm/PostFormSlice";
import searchInputReducer from "../components/ui/modal/SearchModalSlice";
import { productsApi } from "./apiSlice";

const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    navbar: navbarReducer,
    searchInput: searchInputReducer,
    formInput: formInputReducer,
    postForm: postFormReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
