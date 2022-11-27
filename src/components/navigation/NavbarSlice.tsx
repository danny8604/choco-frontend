import { createSlice } from "@reduxjs/toolkit";

interface navbarState {
  searchIsClick: boolean;
  cartIsClick: boolean;
  showModalToggle: boolean;
}

const initialState: navbarState = {
  searchIsClick: false,
  cartIsClick: false,
  showModalToggle: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    searchClick(state) {
      state.searchIsClick = !state.searchIsClick;
      state.cartIsClick = false;
    },
    cartClick(state) {
      state.cartIsClick = !state.cartIsClick;
      state.searchIsClick = false;
    },
    backdropClick(state) {
      state.cartIsClick = false;
      state.searchIsClick = false;
      state.showModalToggle = false;
    },
    showModalToggle(state) {
      state.showModalToggle = !state.showModalToggle;
      state.cartIsClick = false;
      state.searchIsClick = false;
    },
  },
});

export const { searchClick, cartClick, backdropClick, showModalToggle } =
  navbarSlice.actions;

export default navbarSlice.reducer;
