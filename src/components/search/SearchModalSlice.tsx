import { createSlice } from "@reduxjs/toolkit";
import { ProductsType } from "../../app/type";

interface SearchModalState {
  value: string;
  valueNotEmpty: boolean;
  searchResult: ProductsType[];
}

const initialState: SearchModalState = {
  value: "",
  valueNotEmpty: false,
  searchResult: [],
};

const SearchModalSlice = createSlice({
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
  SearchModalSlice.actions;

export default SearchModalSlice.reducer;
