import { configureStore } from "@reduxjs/toolkit";
import mouseReducer from "../components/mainSection/scrollSectionSlice";

const store = configureStore({
  reducer: { mouseDrag: mouseReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
