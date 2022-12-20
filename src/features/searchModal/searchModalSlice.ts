import { createSlice } from "@reduxjs/toolkit";

export interface SearchModalState {
  searchModalIsOpen: boolean;
}

const initialState: SearchModalState = {
  searchModalIsOpen: false,
};

const searchModalSlice = createSlice({
  name: "searchModal",
  initialState,
  reducers: {
    openSearchModal(state) {
      state.searchModalIsOpen = true;
    },
    closeSearchModal(state) {
      state.searchModalIsOpen = false;
    },
  },
});

export const { openSearchModal, closeSearchModal } = searchModalSlice.actions;

export default searchModalSlice.reducer;
