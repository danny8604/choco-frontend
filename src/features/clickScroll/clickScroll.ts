import { createSlice } from "@reduxjs/toolkit";

interface ClickScrollState {
  clickLeft: boolean;
  clickRight: boolean;
  test: number;
}

const initialState: ClickScrollState = {
  clickLeft: false,
  clickRight: false,
  test: 0,
};

const clickScroll = createSlice({
  name: "clickScroll",
  initialState,
  reducers: {
    scrollLeft(state) {
      state.clickLeft = !state.clickLeft;
    },
    scrollRight(state) {
      state.clickRight = true;
    },
  },
});

export const { scrollLeft, scrollRight } = clickScroll.actions;

export default clickScroll.reducer;
