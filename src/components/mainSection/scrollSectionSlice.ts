import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface mouseDragState {
  isDown: boolean;
  isDragged: boolean;
  startX: number;
  clickX: number;
}

const initialState: mouseDragState = {
  isDown: false,
  isDragged: false,
  startX: 0,
  clickX: 0,
};

const mouseDragSlice = createSlice({
  name: "mouseDrag",
  initialState,
  reducers: {
    mouseDown(state, action) {
      state.isDown = true;
      state.clickX = action.payload.clickX;
    },
    mouseLeave(state) {
      state.isDown = false;
    },
    mouseUp(state, action) {
      state.isDown = false;
      state.isDragged = false;
    },
    mouseMove(state, action) {
      state.isDragged = true;
      state.startX = action.payload.startX;
    },
  },
});

export const { mouseDown, mouseLeave, mouseUp, mouseMove } =
  mouseDragSlice.actions;

export default mouseDragSlice.reducer;
