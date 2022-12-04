import { createSlice } from "@reduxjs/toolkit";

interface BackdropState {
  backdropIsOpen: boolean;
}

const initialState: BackdropState = {
  backdropIsOpen: false,
};

const backdropSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    openBackdrop(state) {
      state.backdropIsOpen = true;
    },
    closeBackdrop(state) {
      state.backdropIsOpen = false;
    },
  },
});

export const { openBackdrop, closeBackdrop } = backdropSlice.actions;

export default backdropSlice.reducer;
