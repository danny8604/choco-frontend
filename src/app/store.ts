import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import scrollReducer from "../components/mainSection/ScrollSection/scrollSectionSlice";
import navbarReducer from "../components/navigation/NavbarSlice";
import { pokemonApi } from "./api";

const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    navbar: navbarReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

console.log(pokemonApi.reducerPath);
console.log(pokemonApi.reducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
