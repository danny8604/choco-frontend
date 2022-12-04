import { createSlice } from "@reduxjs/toolkit";
import { ProductsType } from "../../../app/type";

interface SearchInputState {
  value: string;
  valueNotEmpty: boolean;
  searchResult: ProductsType[];
}

const initialState: SearchInputState = {
  value: "",
  valueNotEmpty: false,
  searchResult: [],
};

const searchInputSlice = createSlice({
  name: "searchModal",
  initialState,
  reducers: {
    searchInputValue(state, action) {
      state.value = action.payload;
    },
    searchValueIsValid(state) {
      state.valueNotEmpty = state.value.length >= 1;
    },
    filterSearchData(state, action) {
      state.searchResult = action.payload;
    },
  },
});

export const { searchInputValue, filterSearchData, searchValueIsValid } =
  searchInputSlice.actions;

export default searchInputSlice.reducer;
