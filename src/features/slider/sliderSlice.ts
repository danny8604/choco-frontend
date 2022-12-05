import { createSlice } from "@reduxjs/toolkit";

interface SliderState {
  sliderDown: boolean;
  sliderDragged: boolean;
  sliderStartX: number;
  sliderClickX: number;
}

const initialState: SliderState = {
  sliderDown: false,
  sliderDragged: false,
  sliderStartX: 0,
  sliderClickX: 0,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    sliderMouseDown(state, action) {
      state.sliderDown = true;
      state.sliderClickX = action.payload;
    },
    // sliderMouseDown(state, action) {
    //   state.sliderDown = true;
    //   state.sliderClickX = action.payload;
    // },
    sliderMouseLeave(state) {
      state.sliderDown = false;
      state.sliderDragged = false;
    },
    sliderMouseUp(state) {
      state.sliderDown = false;
      state.sliderDragged = false;
    },
    sliderMouseDrag(state, action) {
      state.sliderDragged = true;
      state.sliderStartX = action.payload;
    },
  },
});

export const {
  sliderMouseDown,
  sliderMouseLeave,
  sliderMouseUp,
  sliderMouseDrag,
} = sliderSlice.actions;

export default sliderSlice.reducer;
