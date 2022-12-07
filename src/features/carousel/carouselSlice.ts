import { createSlice } from "@reduxjs/toolkit";

interface CarouselState {
  slidesIndexArr: string[];
}
const initialState: CarouselState = {
  slidesIndexArr: [
    "slideImg1",
    "slideImg2",
    "slideImg3",
    "slideImg4",
    "slideImg5",
  ],
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    carouselNext(state) {
      state.slidesIndexArr = state.slidesIndexArr.map((item) => {
        let test = +item.slice(-1);
        if (test === 5) {
          test = 1;
          return "slideImg" + test;
        }
        if (!(test === 5)) {
          test++;
          return "slideImg" + test;
        }
        return item;
      });
    },
    carouselPrev(state) {
      state.slidesIndexArr = state.slidesIndexArr.map((item) => {
        let test = +item.slice(-1);
        if (test === 1) {
          test = 5;
          return "slideImg" + test;
        }
        if (!(test === 1)) {
          test--;
          return "slideImg" + test;
        }
        return item;
      });
    },
  },
});

export const { carouselNext, carouselPrev } = carouselSlice.actions;

export default carouselSlice.reducer;
