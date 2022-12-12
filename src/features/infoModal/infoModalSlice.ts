import { createSlice } from "@reduxjs/toolkit";

interface infoModalState {
  infoModalIsOpen: boolean;
}

const initialState: infoModalState = {
  infoModalIsOpen: false,
};

const infoModalSlice = createSlice({
  name: "infoModal",
  initialState,
  reducers: {
    openInfoModal(state) {
      state.infoModalIsOpen = true;
    },
    closeInfoModal(state) {
      state.infoModalIsOpen = false;
    },
  },
});

export const { openInfoModal, closeInfoModal } = infoModalSlice.actions;

export default infoModalSlice.reducer;
