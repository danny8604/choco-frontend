import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import formAuthReducer from "../features/formAuth/formAuthSlice";
import loginReducer from "../features/login/loginSlice";
import registerReducer from "../features/register/registerSlice";
import searchReducer from "../features/search/searchSlice";
import { productsApi } from "./apiSlice";
import cartReducer from "../features/cart/cartItem/cartSlice";
import searchModalReducer from "../features/searchModal/searchModalSlice";

import backdropReducer from "../features/backdrop/backdropSlice";
import cartModalReducer from "../features/cartModal/cartModalSlice";
import sliderReducer from "../features/slider/sliderSlice";
import carouselReducer from "../features/carousel/carouselSlice";

const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    slider: sliderReducer,
    search: searchReducer,
    formAuth: formAuthReducer,
    login: loginReducer,
    register: registerReducer,
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
