import { createSlice } from "@reduxjs/toolkit";

interface NavModalState {
  navModalIsOpen: boolean;
}

const initialState: NavModalState = {
  navModalIsOpen: false,
};

const navModalSlice = createSlice({
  name: "navModal",
  initialState,
  reducers: {
    navModalToggle(state) {
      state.navModalIsOpen = !state.navModalIsOpen;
    },
  },
});

export const { navModalToggle } = navModalSlice.actions;

export default navModalSlice.reducer;
