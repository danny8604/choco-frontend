import { createSlice } from "@reduxjs/toolkit";

interface BackdropState {
  backdropOpen: boolean;
}

const initialState: BackdropState = {
  backdropOpen: false,
};

const backdropSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    openBackdrop(state) {
      state.backdropOpen = true;
    },
    closeBackdrop(state) {
      state.backdropOpen = false;
    },
  },
});

export const { openBackdrop, closeBackdrop } = backdropSlice.actions;

export default backdropSlice.reducer;
