import { createSlice } from "@reduxjs/toolkit";

export interface checkModalState {
  checkModalIsOpen: boolean;
  checkModalMessage: string;
}

const initialState: checkModalState = {
  checkModalIsOpen: false,
  checkModalMessage: "",
};

const checkModalSlice = createSlice({
  name: "utilModal",
  initialState,
  reducers: {
    openCheckModal(state, action) {
      state.checkModalIsOpen = true;
      state.checkModalMessage = action.payload;
    },
    closeCheckModal(state) {
      state.checkModalIsOpen = false;
    },
  },
});

export const { openCheckModal, closeCheckModal } = checkModalSlice.actions;

export default checkModalSlice.reducer;
