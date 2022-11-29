import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import scrollReducer from "../components/mainSection/ScrollSection/scrollSectionSlice";
import navbarReducer from "../components/navigation/NavbarSlice";
import LoginFormReducer from "../components/ui/form/LoginFormSlice";
import searchInputReducer from "../components/ui/modal/SearchModalSlice";
import { productsApi } from "./apiSlice";

const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    navbar: navbarReducer,
    searchInput: searchInputReducer,
    loginForm: LoginFormReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
