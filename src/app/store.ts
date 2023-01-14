import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import formAuthReducer from "../features/formAuth/formAuthSlice";
import loginReducer from "../features/login/loginSlice";
import searchReducer from "../features/search/searchSlice";
import { productsApi } from "./apiSlice";
import cartReducer from "../features/cart/cartItem/cartSlice";
import searchModalReducer from "../features/searchModal/searchModalSlice";

import backdropReducer from "../features/backdrop/backdropSlice";
import cartModalReducer from "../features/cartModal/cartModalSlice";
import sliderReducer from "../features/slider/sliderSlice";
import carouselReducer from "../features/carousel/carouselSlice";
import designerModalReducer from "../features/designerModal/designerModalSlicel";
import navModalReducer from "../features/navModal/navModalSlice";
import infoModalReducer from "../features/infoModal/infoModalSlice";
import utilModalReducer from "../features/utilModal/utilModalSlice";

const store = configureStore({
  reducer: {
    backdrop: backdropReducer,
    utilModal: utilModalReducer,
    infoModal: infoModalReducer,
    navModal: navModalReducer,
    designerModal: designerModalReducer,
    searchModal: searchModalReducer,
    cartModal: cartModalReducer,
    carousel: carouselReducer,
    slider: sliderReducer,
    search: searchReducer,
    cart: cartReducer,
    formAuth: formAuthReducer,
    login: loginReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
