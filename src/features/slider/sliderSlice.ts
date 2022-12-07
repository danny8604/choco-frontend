import { createSlice } from "@reduxjs/toolkit";

interface SliderState {
  sliderDown: boolean;
  sliderDragged: boolean;
  mouseDownX: number;
  mouseMoveX: number;
}

const initialState: SliderState = {
  sliderDown: false,
  sliderDragged: false,
  mouseDownX: 0,
  mouseMoveX: 0,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    sliderMouseDown(state, action) {
      state.sliderDown = true;
      state.mouseDownX = action.payload;
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
      state.mouseMoveX = action.payload;
    },
    sliderClickLeft(state, action) {
      if (state.mouseMoveX < -2400) {
        return;
      }
      state.mouseMoveX += action.payload;
    },
    sliderClickRight(state, action) {
      if (state.mouseMoveX > 0) {
        return;
      }
      state.mouseMoveX += action.payload;
    },
  },
});

export const {
  sliderMouseDown,
  sliderMouseLeave,
  sliderMouseUp,
  sliderMouseDrag,
  sliderClickLeft,
  sliderClickRight,
} = sliderSlice.actions;

export default sliderSlice.reducer;
