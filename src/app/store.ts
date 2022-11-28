import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import scrollReducer from "../components/mainSection/ScrollSection/scrollSectionSlice";
import navbarReducer from "../components/navigation/NavbarSlice";
import { pokemonApi, productsApi } from "./apiSlice";

const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    navbar: navbarReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
