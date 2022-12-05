import { createSlice } from "@reduxjs/toolkit";
import { ProductsType } from "../../app/type";

interface SearchState {
  value: string;
  valueNotEmpty: boolean;
  searchResult: ProductsType[];
}

const initialState: SearchState = {
  value: "",
  valueNotEmpty: false,
  searchResult: [],
};

const searchSlice = createSlice({
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
  searchSlice.actions;

export default searchSlice.reducer;
