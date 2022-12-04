import { createSlice } from "@reduxjs/toolkit";

interface SearchModalState {
  searchModalOpen: boolean;
}

const initialState: SearchModalState = {
  searchModalOpen: false,
};

const searchModalSlice = createSlice({
  name: "searchModal",
  initialState,
  reducers: {
    openSearchModal(state) {
      state.searchModalOpen = true;
    },
    closeSearchModal(state) {
      state.searchModalOpen = false;
    },
  },
});

export const { openSearchModal, closeSearchModal } = searchModalSlice.actions;

export default searchModalSlice.reducer;
