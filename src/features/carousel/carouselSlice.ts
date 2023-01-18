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
        let page = +item.slice(-1);
        if (page === 5) {
          page = 1;
          return "slideImg" + page;
        }
        if (!(page === 5)) {
          page++;
          return "slideImg" + page;
        }
        return item;
      });
    },
    carouselPrev(state) {
      state.slidesIndexArr = state.slidesIndexArr.map((item) => {
        let page = +item.slice(-1);
        if (page === 1) {
          page = 5;
          return "slideImg" + page;
        }
        if (!(page === 1)) {
          page--;
          return "slideImg" + page;
        }
        return item;
      });
    },
  },
});

export const { carouselNext, carouselPrev } = carouselSlice.actions;

export default carouselSlice.reducer;
