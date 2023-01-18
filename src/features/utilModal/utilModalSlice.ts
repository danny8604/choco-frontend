import { createSlice } from "@reduxjs/toolkit";

export interface UtilModalState {
  utilModalIsOpen: boolean;
  utilModalMessage: string;
  isSucceed: boolean;
}

const initialState: UtilModalState = {
  utilModalIsOpen: false,
  utilModalMessage: "",
  isSucceed: false,
};

const utilModalSlice = createSlice({
  name: "utilModal",
  initialState,
  reducers: {
    openUtilModal(state, action) {
      state.utilModalIsOpen = true;
      state.utilModalMessage = action.payload.message;
      state.isSucceed = action.payload.isSucceed || false;
    },
    closeUtilModal(state) {
      state.utilModalIsOpen = false;
    },
  },
});

export const { openUtilModal, closeUtilModal } = utilModalSlice.actions;

export default utilModalSlice.reducer;
