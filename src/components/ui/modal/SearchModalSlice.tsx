import { createSlice } from "@reduxjs/toolkit";
import { ProductsType } from "../../../app/type";

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
    inputValue(state, action) {
      state.value = action.payload;
    },
    valueIsValid(state) {
      state.valueNotEmpty = state.value.length >= 1;
    },
    filterSearchData(state, action) {
      state.searchResult = action.payload;
    },
  },
});

export const { inputValue, filterSearchData, valueIsValid } =
  SearchModalSlice.actions;

export default SearchModalSlice.reducer;
