import { createSlice } from "@reduxjs/toolkit";

interface CartModalState {
  cartModalOpen: boolean;
}

const initialState: CartModalState = {
  cartModalOpen: false,
};

const cartModalSlice = createSlice({
  name: "cartModal",
  initialState,
  reducers: {
    openCartModal(state) {
      state.cartModalOpen = true;
    },
    closeCartModal(state) {
      state.cartModalOpen = false;
    },
  },
});

export const { openCartModal, closeCartModal } = cartModalSlice.actions;

export default cartModalSlice.reducer;
