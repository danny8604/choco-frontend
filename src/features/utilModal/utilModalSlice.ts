import { createSlice } from "@reduxjs/toolkit";

export interface UtilModalState {
  utilModalIsOpen: boolean;
}

const initialState: UtilModalState = {
  utilModalIsOpen: false,
};

const utilModalSlice = createSlice({
  name: "utilModal",
  initialState,
  reducers: {
    openUtilModal(state) {
      state.utilModalIsOpen = true;
    },
    closeUtilModal(state) {
      state.utilModalIsOpen = false;
    },
  },
});

export const { openUtilModal, closeUtilModal } = utilModalSlice.actions;

export default utilModalSlice.reducer;
