import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import searchReducer from "../features/search/searchSlice";
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
    login: loginReducer,
  },
});

const rootReducer = combineReducers({
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
  login: loginReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export default store;
